import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sticker } from '../../models/sticker.model';
import { StickerCardComponent } from '../sticker-card/sticker-card.component';

@Component({
  selector: 'app-sticker-grid',
  standalone: true,
  imports: [CommonModule, StickerCardComponent],
  template: `
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
      @for (sticker of stickers; track sticker.id) {
        <app-sticker-card 
          [sticker]="sticker"
          (toggled)="stickerToggled.emit($event)"
          (repeatChanged)="stickerRepeatChanged.emit($event)"
        ></app-sticker-card>
      } @empty {
        <div class="col-span-full py-20 text-center font-mono text-muted uppercase text-sm border border-dashed border-border">
          No se encontraron láminas
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StickerGridComponent {
  @Input({ required: true }) stickers: Sticker[] = [];
  @Output() stickerToggled = new EventEmitter<string>();
  @Output() stickerRepeatChanged = new EventEmitter<{ id: string; cantidad: number }>();
}
