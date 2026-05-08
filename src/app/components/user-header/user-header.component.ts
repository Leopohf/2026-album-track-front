import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumStats } from '../../models/sticker.model';

@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="flex flex-col md:flex-row md:items-baseline justify-between mb-8 font-mono border-b border-border pb-4">
      <h1 class="text-4xl font-bold text-ink uppercase tracking-tighter">
        {{ username || 'Invitado' }}
      </h1>
      <div class="text-sm text-muted uppercase">
        Progreso: <span class="text-ink font-bold">{{ stats.tengo }}</span> de {{ stats.total }} láminas
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserHeaderComponent {
  @Input({ required: true }) username!: string;
  @Input({ required: true }) stats!: AlbumStats;
}
