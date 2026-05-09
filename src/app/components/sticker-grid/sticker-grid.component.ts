import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sticker } from '../../models/sticker.model';
import { AlbumService } from '../../services/album.service';
import { ReactWrapperComponent } from '../react-wrapper/react-wrapper.component';
import { StickerGridReact } from './StickerGridReact';

@Component({
  selector: 'app-sticker-grid',
  standalone: true,
  imports: [CommonModule, ReactWrapperComponent],
  template: `
    <app-react-wrapper 
      [component]="StickerGridReact" 
      [props]="reactProps"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StickerGridComponent {
  albumService = inject(AlbumService);
  @Input({ required: true }) stickers: Sticker[] = [];
  @Output() stickerToggled = new EventEmitter<string>();
  @Output() stickerRepeatChanged = new EventEmitter<{ id: string; cantidad: number }>();

  readonly StickerGridReact = StickerGridReact;

  get reactProps() {
    return {
      stickers: this.stickers,
      collapsedSections: this.albumService.getCollapsedSections(),
      collapsedGroups: this.albumService.getCollapsedGroups(),
      onToggleSection: (seccion: string) => this.albumService.toggleSection(seccion),
      onToggleGroup: (grupo: string) => this.albumService.toggleGroup(grupo),
      onToggled: (id: string) => this.stickerToggled.emit(id),
      onRepeatChanged: (id: string, cantidad: number) => 
        this.stickerRepeatChanged.emit({ id, cantidad })
    };
  }
}
