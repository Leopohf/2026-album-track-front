import React, { useState, useEffect } from 'react';
import { FilterState } from '../../models/sticker.model';

interface FilterBarProps {
  secciones: string[];
  initialFilters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const TABS: { label: string; value: FilterState['status'] }[] = [
  { label: 'TODAS', value: 'todas' },
  { label: 'TENGO', value: 'tengo' },
  { label: 'FALTAN', value: 'faltan' },
  { label: 'REPETIDAS', value: 'repetidas' }
];

export const FilterBarReact: React.FC<FilterBarProps> = ({ 
  secciones, 
  initialFilters, 
  onFilterChange 
}) => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const setStatus = (status: FilterState['status']) => {
    const newFilters = { ...filters, status };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="flex flex-col gap-4 mb-8 font-mono">
      {/* Search & Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <input 
          type="text" 
          name="busqueda"
          value={filters.busqueda}
          onChange={handleInputChange}
          placeholder="BUSCAR POR NOMBRE O NÚMERO..."
          className="flex-1 bg-transparent border border-border p-3 text-sm focus:outline-none focus:border-ink uppercase placeholder:text-muted/50"
        />
        <select 
          name="seccion"
          value={filters.seccion}
          onChange={handleInputChange}
          className="bg-transparent border border-border p-3 text-sm focus:outline-none focus:border-ink uppercase"
        >
          <option value="">TODAS LAS SECCIONES</option>
          {secciones.map(seccion => (
            <option key={seccion} value={seccion}>{seccion.toUpperCase()}</option>
          ))}
        </select>
      </div>

      {/* Status Tabs */}
      <div className="flex border-b border-border">
        {TABS.map(tab => (
          <button 
            key={tab.value}
            onClick={() => setStatus(tab.value)}
            className={`px-4 py-2 text-[10px] uppercase font-bold tracking-widest border-b-2 transition-all duration-150 hover:text-ink ${
              filters.status === tab.value 
                ? 'border-ink text-ink' 
                : 'border-transparent text-muted'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
