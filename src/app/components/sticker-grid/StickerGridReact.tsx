import React from 'react';
import { Sticker } from '../../models/sticker.model';
import { StickerCardReact } from '../sticker-card/StickerCardReact';

interface StickerGridProps {
  stickers: Sticker[];
  onToggled: (id: string) => void;
  onRepeatChanged: (id: string, delta: number) => void;
}

export const StickerGridReact: React.FC<StickerGridProps> = ({ 
  stickers, 
  onToggled, 
  onRepeatChanged 
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
      {stickers.length > 0 ? (
        stickers.map((sticker) => (
          <StickerCardReact 
            key={sticker.id}
            sticker={sticker}
            onToggle={onToggled}
            onUpdateRepetidas={(id, delta) => {
              const nuevaCantidad = Math.max(0, sticker.repetidas + delta);
              onRepeatChanged(id, nuevaCantidad);
            }}
          />
        ))
      ) : (
        <div className="col-span-full py-20 text-center font-mono text-muted uppercase text-sm border border-dashed border-border">
          No se encontraron láminas
        </div>
      )}
    </div>
  );
};
