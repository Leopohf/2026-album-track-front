import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterState } from '../../models/sticker.model';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex flex-col gap-4 mb-8 font-mono">
      <!-- Search & Section -->
      <div class="flex flex-col md:flex-row gap-4">
        <input 
          type="text" 
          [(ngModel)]="filters.busqueda"
          (ngModelChange)="onFilterChange()"
          placeholder="BUSCAR POR NOMBRE O NÚMERO..."
          class="flex-1 bg-transparent border border-border p-3 text-sm focus:outline-none focus:border-ink uppercase placeholder:text-muted/50"
        >
        <select 
          [(ngModel)]="filters.seccion"
          (ngModelChange)="onFilterChange()"
          class="bg-transparent border border-border p-3 text-sm focus:outline-none focus:border-ink uppercase"
        >
          <option value="">TODAS LAS SECCIONES</option>
          @for (seccion of secciones; track seccion) {
            <option [value]="seccion">{{ seccion | uppercase }}</option>
          }
        </select>
      </div>

      <!-- Status Tabs -->
      <div class="flex border-b border-border">
        @for (tab of tabs; track tab.value) {
          <button 
            (click)="setStatus(tab.value)"
            [class.border-ink]="filters.status === tab.value"
            [class.text-ink]="filters.status === tab.value"
            [class.border-transparent]="filters.status !== tab.value"
            [class.text-muted]="filters.status !== tab.value"
            class="px-4 py-2 text-[10px] uppercase font-bold tracking-widest border-b-2 transition-all duration-150 hover:text-ink"
          >
            {{ tab.label }}
          </button>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterBarComponent {
  @Input() secciones: string[] = [];
  @Output() filtersChanged = new EventEmitter<FilterState>();

  filters: FilterState = {
    busqueda: '',
    status: 'todas',
    seccion: ''
  };

  tabs: { label: string, value: FilterState['status'] }[] = [
    { label: 'TODAS', value: 'todas' },
    { label: 'TENGO', value: 'tengo' },
    { label: 'FALTAN', value: 'faltan' },
    { label: 'REPETIDAS', value: 'repetidas' }
  ];

  onFilterChange(): void {
    this.filtersChanged.emit({ ...this.filters });
  }

  setStatus(status: FilterState['status']): void {
    this.filters.status = status;
    this.onFilterChange();
  }
}
