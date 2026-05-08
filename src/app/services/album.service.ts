import { Injectable, signal, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Sticker, AlbumStats, FilterState, UserAlbum } from '../models/sticker.model';
import { STICKERS_DATA } from '../data/stickers.data';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private platformId = inject(PLATFORM_ID);
  private stickers = signal<Sticker[]>([]);
  private username = signal<string>('');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadFromLocalStorage();
    } else {
      this.stickers.set(STICKERS_DATA.map(s => ({ ...s })));
    }
  }

  loadUser(username: string): void {
    this.username.set(username);
    if (isPlatformBrowser(this.platformId)) {
      this.loadFromLocalStorage();
    }
  }

  getUsername(): string {
    return this.username();
  }

  getStats = computed<AlbumStats>(() => {
    const allStickers = this.stickers();
    const total = allStickers.length;
    const tengo = allStickers.filter(s => s.tengo).length;
    const faltan = total - tengo;
    const repetidas = allStickers.reduce((acc, s) => acc + s.repetidas, 0);
    const progreso = total > 0 ? (tengo / total) * 100 : 0;

    return { total, tengo, faltan, repetidas, progreso };
  });

  toggleSticker(id: string): void {
    this.stickers.update(stickers =>
      stickers.map(s => s.id === id ? { ...s, tengo: !s.tengo, repetidas: !s.tengo ? 0 : s.repetidas } : s)
    );
    this.saveToLocalStorage();
  }

  updateRepetidas(id: string, cantidad: number): void {
    this.stickers.update(stickers =>
      stickers.map(s => s.id === id ? { ...s, repetidas: Math.max(0, cantidad) } : s)
    );
    this.saveToLocalStorage();
  }

  getFiltered(filters: FilterState): Sticker[] {
    return this.stickers().filter(s => {
      const matchBusqueda = s.nombre.toLowerCase().includes(filters.busqueda.toLowerCase()) ||
                            s.numero.toString().includes(filters.busqueda);
      const matchStatus = filters.status === 'todas' ? true :
                          filters.status === 'tengo' ? s.tengo :
                          filters.status === 'faltan' ? !s.tengo :
                          filters.status === 'repetidas' ? s.repetidas > 0 : true;
      const matchSeccion = filters.seccion === '' ? true : s.seccion === filters.seccion;

      return matchBusqueda && matchStatus && matchSeccion;
    });
  }

  getSecciones(): string[] {
    return Array.from(new Set(this.stickers().map(s => s.seccion)));
  }

  exportAlbum(): string {
    const album: UserAlbum = {
      username: this.username(),
      stickers: this.stickers().reduce((acc, s) => {
        acc[s.id] = { tengo: s.tengo, repetidas: s.repetidas };
        return acc;
      }, {} as Record<string, any>)
    };
    return JSON.stringify(album);
  }

  importAlbum(json: string): void {
    try {
      const album: UserAlbum = JSON.parse(json);
      if (album.username) {
        this.username.set(album.username);
      }
      this.stickers.update(current =>
        current.map(s => {
          const imported = album.stickers[s.id];
          return imported ? { ...s, tengo: imported.tengo, repetidas: imported.repetidas } : s;
        })
      );
      this.saveToLocalStorage();
    } catch (e) {
      console.error('Error importing album', e);
    }
  }

  saveToLocalStorage(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!this.username()) return;
    const album: UserAlbum = {
      username: this.username(),
      stickers: this.stickers().reduce((acc, s) => {
        acc[s.id] = { tengo: s.tengo, repetidas: s.repetidas };
        return acc;
      }, {} as Record<string, any>)
    };
    localStorage.setItem(`panini_2026_${this.username()}`, JSON.stringify(album));
    localStorage.setItem('panini_2026_last_user', this.username());
  }

  loadFromLocalStorage(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    let user = this.username();
    if (!user) {
      user = localStorage.getItem('panini_2026_last_user') || '';
      this.username.set(user);
    }

    if (!user) {
      this.stickers.set(STICKERS_DATA.map(s => ({ ...s })));
      return;
    }

    const saved = localStorage.getItem(`panini_2026_${user}`);
    if (saved) {
      const album: UserAlbum = JSON.parse(saved);
      this.stickers.set(STICKERS_DATA.map(s => {
        const imported = album.stickers[s.id];
        return imported ? { ...s, tengo: imported.tengo, repetidas: imported.repetidas } : { ...s };
      }));
    } else {
      this.stickers.set(STICKERS_DATA.map(s => ({ ...s })));
    }
  }

  logout(): void {
    this.username.set('');
    this.stickers.set(STICKERS_DATA.map(s => ({ ...s })));
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('panini_2026_last_user');
    }
  }
}
