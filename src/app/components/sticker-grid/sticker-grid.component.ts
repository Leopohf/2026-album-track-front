import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sticker } from '../../models/sticker.model';
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
  @Input({ required: true }) stickers: Sticker[] = [];
  @Output() stickerToggled = new EventEmitter<string>();
  @Output() stickerRepeatChanged = new EventEmitter<{ id: string; cantidad: number }>();

  readonly StickerGridReact = StickerGridReact;

  get reactProps() {
    return {
      stickers: this.stickers,
      onToggled: (id: string) => this.stickerToggled.emit(id),
      onRepeatChanged: (id: string, cantidad: number) => 
        this.stickerRepeatChanged.emit({ id, cantidad })
    };
  }
}
