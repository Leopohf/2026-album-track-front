import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumStats } from '../../models/sticker.model';

@Component({
  selector: 'app-stats-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-8 font-mono">
      <!-- Progress Bar -->
      <div class="w-full h-1 bg-border mb-4">
        <div 
          class="h-1 bg-ink transition-all duration-500 ease-out" 
          [style.width.%]="stats.progreso"
        ></div>
      </div>

      <!-- Metrics -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="border border-border p-4">
          <p class="text-[10px] text-muted uppercase tracking-widest mb-1">Total</p>
          <p class="text-2xl font-bold leading-none">{{ stats.total }}</p>
        </div>
        <div class="border border-border p-4">
          <p class="text-[10px] text-muted uppercase tracking-widest mb-1">Tengo</p>
          <p class="text-2xl font-bold leading-none text-success">{{ stats.tengo }}</p>
        </div>
        <div class="border border-border p-4">
          <p class="text-[10px] text-muted uppercase tracking-widest mb-1">Faltan</p>
          <p class="text-2xl font-bold leading-none">{{ stats.faltan }}</p>
        </div>
        <div class="border border-border p-4">
          <p class="text-[10px] text-muted uppercase tracking-widest mb-1">Repetidas</p>
          <p class="text-2xl font-bold leading-none">{{ stats.repetidas }}</p>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsPanelComponent {
  @Input({ required: true }) stats!: AlbumStats;
}
