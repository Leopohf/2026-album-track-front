import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { AlbumService } from '../../services/album.service';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let albumService: any;

  beforeEach(async () => {
    albumService = {
      getUsername: vi.fn().mockReturnValue('Leo'),
      getStats: vi.fn().mockReturnValue({ total: 100, owned: 10, missing: 90, duplicates: 0, progress: 10 }),
      exportAlbum: vi.fn().mockReturnValue('{"test": "data"}'),
      getFiltered: vi.fn().mockReturnValue([]),
      importAlbum: vi.fn(),
      toggleSticker: vi.fn(),
      updateDuplicates: vi.fn(),
      getCollapsedSections: vi.fn().mockReturnValue(new Set()),
      getCollapsedGroups: vi.fn().mockReturnValue(new Set())
    };

    await TestBed.configureTestingModule({
      imports: [ProfileComponent, FormsModule],
      providers: [
        { provide: AlbumService, useValue: albumService },
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call albumService.importAlbum when import button is clicked', () => {
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    component.importJson = '{"new": "data"}';
    component.importAlbum();
    
    expect(albumService.importAlbum).toHaveBeenCalledWith('{"new": "data"}');
  });

  it('should display exported data in textarea', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea[readonly]') as HTMLTextAreaElement;
    expect(textarea.value).toBe('{"test": "data"}');
  });
});
