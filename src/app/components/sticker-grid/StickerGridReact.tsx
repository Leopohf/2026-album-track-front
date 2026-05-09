import React, { useMemo } from 'react';
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
  const groupedStickers = useMemo(() => {
    const groups = new Map<string, Sticker[]>();
    stickers.forEach((sticker) => {
      const group = groups.get(sticker.seccion) || [];
      group.push(sticker);
      groups.set(sticker.seccion, group);
    });

    // Sort stickers within each group: #1 first, #13 second, others numerical
    const entries = Array.from(groups.entries());
    entries.forEach(([_, sectionStickers]) => {
      sectionStickers.sort((a, b) => {
        if (a.numero === 1) return -1;
        if (b.numero === 1) return 1;
        if (a.numero === 13) return -1;
        if (b.numero === 13) return 1;
        return a.numero - b.numero;
      });
    });

    return entries;
  }, [stickers]);

  if (stickers.length === 0) {
    return (
      <div className="py-20 text-center font-mono text-muted uppercase text-sm border border-dashed border-border">
        No se encontraron láminas
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-20">
      {groupedStickers.map(([seccion, sectionStickers]) => (
        <div key={seccion} className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted whitespace-nowrap">
              {seccion}
            </h2>
            <div className="h-[1px] w-full bg-border/30"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {sectionStickers.map((sticker) => (
              <StickerCardReact 
                key={sticker.id}
                sticker={sticker}
                onToggle={onToggled}
                onUpdateRepetidas={(id, delta) => {
                  const nuevaCantidad = Math.max(0, sticker.repetidas + delta);
                  onRepeatChanged(id, nuevaCantidad);
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
