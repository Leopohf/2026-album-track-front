import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sticker } from '../../models/sticker.model';

@Component({
  selector: 'app-sticker-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      [class.opacity-40]="!sticker.tengo"
      [class.border-ink]="sticker.tengo"
      [class.border-border]="!sticker.tengo"
      class="group border rounded p-3 font-mono transition-all duration-150 relative bg-surface hover:border-ink"
    >
      <!-- ID & Number -->
      <div class="flex justify-between items-start mb-2">
        <span class="text-xs text-muted">{{ sticker.id }}</span>
        <span class="text-lg font-bold">#{{ sticker.numero }}</span>
      </div>

      <!-- Name & Section -->
      <div class="mb-4" (click)="onToggle()">
        <h3 class="text-sm font-bold truncate leading-tight">{{ sticker.nombre }}</h3>
        <p class="text-[10px] uppercase text-muted tracking-widest">{{ sticker.seccion }}</p>
      </div>

      <!-- Controls -->
      <div class="flex items-center justify-between mt-auto pt-2 border-t border-border/50">
        <button 
          (click)="onToggle()"
          class="text-[10px] uppercase font-bold tracking-tighter px-2 py-1 border border-ink hover:underline"
        >
          {{ !sticker.tengo ? 'Faltante' : (sticker.repetidas > 0 ? 'Repetida' : 'Adquirida') }}
        </button>

        @if (sticker.tengo) {
          <div class="flex items-center gap-2">
            <button (click)="onUpdateRepetidas(-1)" class="w-5 h-5 flex items-center justify-center border border-ink text-xs hover:bg-ink hover:text-surface">-</button>
            <span class="text-xs font-bold">{{ sticker.repetidas }}</span>
            <button (click)="onUpdateRepetidas(1)" class="w-5 h-5 flex items-center justify-center border border-ink text-xs hover:bg-ink hover:text-surface">+</button>
          </div>
        }
      </div>

      <!-- Badge Repetidas -->
      @if (sticker.repetidas > 0) {
        <span class="absolute -top-1 -right-1 bg-ink text-bg text-[10px] w-5 h-5 flex items-center justify-center font-bold">
          ×{{ sticker.repetidas }}
        </span>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StickerCardComponent {
  @Input({ required: true }) sticker!: Sticker;
  @Output() toggled = new EventEmitter<string>();
  @Output() repeatChanged = new EventEmitter<{ id: string; cantidad: number }>();

  onToggle(): void {
    this.toggled.emit(this.sticker.id);
  }

  onUpdateRepetidas(delta: number): void {
    const nuevaCantidad = Math.max(0, this.sticker.repetidas + delta);
    this.repeatChanged.emit({ id: this.sticker.id, cantidad: nuevaCantidad });
  }
}
