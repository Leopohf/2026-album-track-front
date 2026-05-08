import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterState } from '../../models/sticker.model';
import { ReactWrapperComponent } from '../react-wrapper/react-wrapper.component';
import { FilterBarReact } from './FilterBarReact';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule, ReactWrapperComponent],
  template: `
    <app-react-wrapper 
      [component]="FilterBarReact" 
      [props]="reactProps"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterBarComponent {
  @Input() secciones: string[] = [];
  @Output() filtersChanged = new EventEmitter<FilterState>();

  readonly FilterBarReact = FilterBarReact;

  get reactProps() {
    return {
      secciones: this.secciones,
      initialFilters: {
        busqueda: '',
        status: 'todas',
        seccion: ''
      },
      onFilterChange: (filters: FilterState) => this.filtersChanged.emit(filters)
    };
  }
}
