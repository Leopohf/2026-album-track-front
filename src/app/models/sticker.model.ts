export type StickerType = 'jugador' | 'estadio' | 'escudo' | 'intro';
export type StickerStatus = 'falta' | 'tengo' | 'repetida';

export interface Sticker {
  id: string;           // Ej: 'ARG-01'
  numero: number;
  nombre: string;
  seccion: string;      // Ej: 'Argentina', 'Estadios'
  grupo: string;        // Ej: 'A', 'B', 'Estrellas'
  tipo: StickerType;
  tengo: boolean;
  repetidas: number;    // 0 si no está repetida
}

export interface UserAlbum {
  username: string;
  stickers: Record<string, Pick<Sticker, 'tengo' | 'repetidas'>>;
}

export interface AlbumStats {
  total: number;
  tengo: number;
  faltan: number;
  repetidas: number;
  progreso: number;     // porcentaje 0–100
}

export interface FilterState {
  busqueda: string;
  status: 'todas' | 'tengo' | 'faltan' | 'repetidas';
  seccion: string;
}
