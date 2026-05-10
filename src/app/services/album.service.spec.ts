import { TestBed } from '@angular/core/testing';
import { AlbumService } from './album.service';
import { STICKERS_DATA } from '../data/stickers.data';

describe('AlbumService', () => {
  let service: AlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumService);
    // Clear localStorage to avoid interference
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate stats correctly', () => {
    const stats = service.getStats();
    expect(stats.total).toBe(STICKERS_DATA.length);
    expect(stats.owned).toBe(0);
    expect(stats.duplicates).toBe(0);
  });

  it('should handle NaN duplicates in stats calculation', () => {
    // Force a NaN value into the internal state (via private access for testing)
    (service as any).stickers.set([
      { id: '1', name: 'S1', owned: true, duplicates: NaN },
      { id: '2', name: 'S2', owned: true, duplicates: 2 }
    ]);

    const stats = service.getStats();
    expect(stats.duplicates).toBe(2); // NaN should be treated as 0
  });

  it('should sanitize NaN in updateDuplicates', () => {
    const stickerId = STICKERS_DATA[0].id;
    service.updateDuplicates(stickerId, NaN);
    
    const stats = service.getStats();
    expect(stats.duplicates).toBe(0);
  });

  it('should handle negative quantities in updateDuplicates', () => {
    const stickerId = STICKERS_DATA[0].id;
    service.updateDuplicates(stickerId, -5);
    
    const stats = service.getStats();
    expect(stats.duplicates).toBe(0);
  });

  it('should import album and sanitize data', () => {
    const albumJson = JSON.stringify({
      username: 'testuser',
      stickers: {
        [STICKERS_DATA[0].id]: { owned: true, duplicates: NaN },
        [STICKERS_DATA[1].id]: { owned: true, duplicates: 5 }
      }
    });

    service.importAlbum(albumJson);
    const stats = service.getStats();
    expect(stats.owned).toBe(2);
    expect(stats.duplicates).toBe(5);
  });

  it('should perform accent-insensitive search', () => {
    (service as any).stickers.set([
      { id: '1', name: 'DÁVINSON SÁNCHEZ', number: 4, section: 'Colombia', owned: false, duplicates: 0 },
      { id: '2', name: 'JAMES RODRÍGUEZ', number: 14, section: 'Colombia', owned: false, duplicates: 0 },
      { id: '3', name: 'RICHARD RÍOS', number: 12, section: 'Colombia', owned: false, duplicates: 0 }
    ]);

    const filters = { search: 'davinson', status: 'all', section: '' } as any;
    let filtered = service.getFiltered(filters);
    expect(filtered.length).toBe(1);
    expect(filtered[0].id).toBe('1');

    filters.search = 'rodriguez';
    filtered = service.getFiltered(filters);
    expect(filtered.length).toBe(1);
    expect(filtered[0].id).toBe('2');

    filters.search = 'rios';
    filtered = service.getFiltered(filters);
    expect(filtered.length).toBe(1);
    expect(filtered[0].id).toBe('3');

    filters.search = 'RIOS';
    filtered = service.getFiltered(filters);
    expect(filtered.length).toBe(1);
    expect(filtered[0].id).toBe('3');
  });
});
