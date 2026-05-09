import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumComponent } from './album.component';
import { AlbumService } from '../../services/album.service';
import { FilterState } from '../../models/sticker.model';
import { signal } from '@angular/core';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;
  let albumService: any;

  beforeEach(async () => {
    albumService = {
      getUsername: vi.fn().mockReturnValue('Leo'),
      getStats: vi.fn().mockReturnValue({ total: 100, owned: 10, missing: 90, duplicates: 0, progress: 10 }),
      getSections: vi.fn().mockReturnValue(['Argentina']),
      getFiltered: vi.fn().mockReturnValue([]),
      toggleSticker: vi.fn(),
      updateDuplicates: vi.fn(),
      getCollapsedSections: vi.fn().mockReturnValue(new Set()),
      getCollapsedGroups: vi.fn().mockReturnValue(new Set())
    };

    await TestBed.configureTestingModule({
      imports: [AlbumComponent],
      providers: [
        { provide: AlbumService, useValue: albumService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update filters when onFiltersChanged is called', () => {
    const newFilters: FilterState = { search: 'Messi', status: 'all', section: '' };
    component.onFiltersChanged(newFilters);
    fixture.detectChanges(); // Trigger re-evaluation of computed signal
    expect(component.filters()).toEqual(newFilters);
    expect(albumService.getFiltered).toHaveBeenCalledWith(newFilters);
  });

  it('should call albumService.toggleSticker when a sticker is toggled', () => {
    component.albumService.toggleSticker('ARG1');
    expect(albumService.toggleSticker).toHaveBeenCalledWith('ARG1');
  });
});
