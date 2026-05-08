import React from 'react';
import { Sticker } from '../../models/sticker.model';

interface StickerCardProps {
  sticker: Sticker;
  onToggle: (id: string) => void;
  onUpdateRepetidas: (id: string, delta: number) => void;
}

export const StickerCardReact: React.FC<StickerCardProps> = ({ 
  sticker, 
  onToggle, 
  onUpdateRepetidas 
}) => {
  const isTengo = sticker.tengo;
  const hasRepetidas = sticker.repetidas > 0;

  const statusLabel = !isTengo 
    ? 'Faltante' 
    : (hasRepetidas ? 'Repetida' : 'Adquirida');

  return (
    <div 
      className={`group border rounded p-3 font-mono transition-all duration-150 relative bg-surface hover:border-ink ${
        !isTengo ? 'opacity-40 border-border' : 'border-ink'
      }`}
    >
      {/* ID & Number */}
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs text-muted">{sticker.id}</span>
        <span className="text-lg font-bold">#{sticker.numero}</span>
      </div>

      {/* Name & Section */}
      <div className="mb-4 cursor-pointer" onClick={() => onToggle(sticker.id)}>
        <h3 className="text-sm font-bold truncate leading-tight">{sticker.nombre}</h3>
        <p className="text-[10px] uppercase text-muted tracking-widest">{sticker.seccion}</p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-border/50">
        <button 
          onClick={() => onToggle(sticker.id)}
          className="text-[10px] uppercase font-bold tracking-tighter px-2 py-1 border border-ink hover:underline"
        >
          {statusLabel}
        </button>

        {isTengo && (
          <div className="flex items-center gap-2">
            <button 
              onClick={() => onUpdateRepetidas(sticker.id, -1)}
              className="w-5 h-5 flex items-center justify-center border border-ink text-xs hover:bg-ink hover:text-surface"
            >
              -
            </button>
            <span className="text-xs font-bold">{sticker.repetidas}</span>
            <button 
              onClick={() => onUpdateRepetidas(sticker.id, 1)}
              className="w-5 h-5 flex items-center justify-center border border-ink text-xs hover:bg-ink hover:text-surface"
            >
              +
            </button>
          </div>
        )}
      </div>

      {/* Badge Repetidas */}
      {hasRepetidas && (
        <span className="absolute -top-1 -right-1 bg-ink text-bg text-[10px] w-5 h-5 flex items-center justify-center font-bold">
          ×{sticker.repetidas}
        </span>
      )}
    </div>
  );
};
