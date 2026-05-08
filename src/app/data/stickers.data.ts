import { Sticker } from '../models/sticker.model';

export const STICKERS_DATA: Sticker[] = [
  // Intro & Estadios
  { id: 'INTRO-00', numero: 0, nombre: 'Escudo FIFA', seccion: 'Introducción', grupo: 'Intro', tipo: 'intro', tengo: false, repetidas: 0 },
  { id: 'EST-01', numero: 1, nombre: 'Azteca (CDMX)', seccion: 'Estadios', grupo: 'Sedes', tipo: 'estadio', tengo: false, repetidas: 0 },
  { id: 'EST-02', numero: 2, nombre: 'MetLife (NJ)', seccion: 'Estadios', grupo: 'Sedes', tipo: 'estadio', tengo: false, repetidas: 0 },
  { id: 'EST-03', numero: 3, nombre: 'BC Place (Vancouver)', seccion: 'Estadios', grupo: 'Sedes', tipo: 'estadio', tengo: false, repetidas: 0 },
  { id: 'EST-04', numero: 4, nombre: 'Akron (Guadalajara)', seccion: 'Estadios', grupo: 'Sedes', tipo: 'estadio', tengo: false, repetidas: 0 },
  { id: 'EST-05', numero: 5, nombre: 'Hard Rock (Miami)', seccion: 'Estadios', grupo: 'Sedes', tipo: 'estadio', tengo: false, repetidas: 0 },
  { id: 'EST-06', numero: 6, nombre: 'BMO Field (Toronto)', seccion: 'Estadios', grupo: 'Sedes', tipo: 'estadio', tengo: false, repetidas: 0 },
  { id: 'EST-07', numero: 7, nombre: 'SoFi (LA)', seccion: 'Estadios', grupo: 'Sedes', tipo: 'estadio', tengo: false, repetidas: 0 },
  { id: 'EST-08', numero: 8, nombre: 'Mercedes-Benz (Atlanta)', seccion: 'Estadios', grupo: 'Sedes', tipo: 'estadio', tengo: false, repetidas: 0 },

  // Argentina
  { id: 'ARG-ESC', numero: 9, nombre: 'Escudo Argentina', seccion: 'Argentina', grupo: 'A', tipo: 'escudo', tengo: false, repetidas: 0 },
  { id: 'ARG-01', numero: 10, nombre: 'Emiliano Martínez', seccion: 'Argentina', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'ARG-02', numero: 11, nombre: 'Cristian Romero', seccion: 'Argentina', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'ARG-03', numero: 12, nombre: 'Lisandro Martínez', seccion: 'Argentina', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'ARG-04', numero: 13, nombre: 'Rodrigo De Paul', seccion: 'Argentina', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'ARG-05', numero: 14, nombre: 'Alexis Mac Allister', seccion: 'Argentina', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'ARG-06', numero: 15, nombre: 'Enzo Fernández', seccion: 'Argentina', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'ARG-07', numero: 16, nombre: 'Lionel Messi', seccion: 'Argentina', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'ARG-08', numero: 17, nombre: 'Julián Álvarez', seccion: 'Argentina', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'ARG-09', numero: 18, nombre: 'Lautaro Martínez', seccion: 'Argentina', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },

  // México
  { id: 'MEX-ESC', numero: 19, nombre: 'Escudo México', seccion: 'México', grupo: 'A', tipo: 'escudo', tengo: false, repetidas: 0 },
  { id: 'MEX-01', numero: 20, nombre: 'Guillermo Ochoa', seccion: 'México', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'MEX-02', numero: 21, nombre: 'César Montes', seccion: 'México', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'MEX-03', numero: 22, nombre: 'Johan Vásquez', seccion: 'México', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'MEX-04', numero: 23, nombre: 'Edson Álvarez', seccion: 'México', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'MEX-05', numero: 24, nombre: 'Luis Chávez', seccion: 'México', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'MEX-06', numero: 25, nombre: 'Santiago Giménez', seccion: 'México', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'MEX-07', numero: 26, nombre: 'Hirving Lozano', seccion: 'México', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },

  // USA
  { id: 'USA-ESC', numero: 27, nombre: 'Escudo USA', seccion: 'USA', grupo: 'B', tipo: 'escudo', tengo: false, repetidas: 0 },
  { id: 'USA-01', numero: 28, nombre: 'Matt Turner', seccion: 'USA', grupo: 'B', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'USA-02', numero: 29, nombre: 'Antonee Robinson', seccion: 'USA', grupo: 'B', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'USA-03', numero: 30, nombre: 'Weston McKennie', seccion: 'USA', grupo: 'B', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'USA-04', numero: 31, nombre: 'Tyler Adams', seccion: 'USA', grupo: 'B', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'USA-05', numero: 32, nombre: 'Christian Pulisic', seccion: 'USA', grupo: 'B', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'USA-06', numero: 33, nombre: 'Timothy Weah', seccion: 'USA', grupo: 'B', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'USA-07', numero: 34, nombre: 'Folarin Balogun', seccion: 'USA', grupo: 'B', tipo: 'jugador', tengo: false, repetidas: 0 },

  // Brasil
  { id: 'BRA-ESC', numero: 35, nombre: 'Escudo Brasil', seccion: 'Brasil', grupo: 'D', tipo: 'escudo', tengo: false, repetidas: 0 },
  { id: 'BRA-01', numero: 36, nombre: 'Alisson Becker', seccion: 'Brasil', grupo: 'D', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'BRA-02', numero: 37, nombre: 'Marquinhos', seccion: 'Brasil', grupo: 'D', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'BRA-03', numero: 38, nombre: 'Eder Militao', seccion: 'Brasil', grupo: 'D', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'BRA-04', numero: 39, nombre: 'Bruno Guimaraes', seccion: 'Brasil', grupo: 'D', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'BRA-05', numero: 40, nombre: 'Lucas Paquetá', seccion: 'Brasil', grupo: 'D', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'BRA-06', numero: 41, nombre: 'Vinícius Júnior', seccion: 'Brasil', grupo: 'D', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'BRA-07', numero: 42, nombre: 'Rodrygo', seccion: 'Brasil', grupo: 'D', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'BRA-08', numero: 43, nombre: 'Endrick', seccion: 'Brasil', grupo: 'D', tipo: 'jugador', tengo: false, repetidas: 0 },

  // Francia
  { id: 'FRA-ESC', numero: 44, nombre: 'Escudo Francia', seccion: 'Francia', grupo: 'C', tipo: 'escudo', tengo: false, repetidas: 0 },
  { id: 'FRA-01', numero: 45, nombre: 'Mike Maignan', seccion: 'Francia', grupo: 'C', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'FRA-02', numero: 46, nombre: 'William Saliba', seccion: 'Francia', grupo: 'C', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'FRA-03', numero: 47, nombre: 'Theo Hernández', seccion: 'Francia', grupo: 'C', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'FRA-04', numero: 48, nombre: 'Aurelien Tchouameni', seccion: 'Francia', grupo: 'C', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'FRA-05', numero: 49, nombre: 'Antoine Griezmann', seccion: 'Francia', grupo: 'C', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'FRA-06', numero: 50, nombre: 'Kylian Mbappé', seccion: 'Francia', grupo: 'C', tipo: 'jugador', tengo: false, repetidas: 0 },

  // España
  { id: 'ESP-ESC', numero: 51, nombre: 'Escudo España', seccion: 'España', grupo: 'B', tipo: 'escudo', tengo: false, repetidas: 0 },
  { id: 'ESP-01', numero: 52, nombre: 'Unai Simón', seccion: 'España', grupo: 'B', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'ESP-02', numero: 53, nombre: 'Dani Carvajal', seccion: 'España', grupo: 'B', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'ESP-03', numero: 54, nombre: 'Rodri', seccion: 'España', grupo: 'B', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'ESP-04', numero: 55, nombre: 'Pedri', seccion: 'España', grupo: 'B', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'ESP-05', numero: 56, nombre: 'Lamine Yamal', seccion: 'España', grupo: 'B', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'ESP-06', numero: 57, nombre: 'Nico Williams', seccion: 'España', grupo: 'B', tipo: 'jugador', tengo: false, repetidas: 0 },

  // Estrellas
  { id: 'STAR-01', numero: 58, nombre: 'Kevin De Bruyne', seccion: 'Estrellas', grupo: 'E', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'STAR-02', numero: 59, nombre: 'Erling Haaland', seccion: 'Estrellas', grupo: 'E', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'STAR-03', numero: 60, nombre: 'Mohamed Salah', seccion: 'Estrellas', grupo: 'E', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'STAR-04', numero: 61, nombre: 'Harry Kane', seccion: 'Estrellas', grupo: 'C', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'STAR-05', numero: 62, nombre: 'Robert Lewandowski', seccion: 'Estrellas', grupo: 'E', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'STAR-06', numero: 63, nombre: 'Luka Modric', seccion: 'Estrellas', grupo: 'F', tipo: 'jugador', tengo: false, repetidas: 0 },

  // Canadá
  { id: 'CAN-ESC', numero: 64, nombre: 'Escudo Canadá', seccion: 'Canadá', grupo: 'A', tipo: 'escudo', tengo: false, repetidas: 0 },
  { id: 'CAN-01', numero: 65, nombre: 'Alphonso Davies', seccion: 'Canadá', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'CAN-02', numero: 66, nombre: 'Jonathan David', seccion: 'Canadá', grupo: 'A', tipo: 'jugador', tengo: false, repetidas: 0 },

  // Alemania
  { id: 'GER-ESC', numero: 67, nombre: 'Escudo Alemania', seccion: 'Alemania', grupo: 'C', tipo: 'escudo', tengo: false, repetidas: 0 },
  { id: 'GER-01', numero: 68, nombre: 'Jamal Musiala', seccion: 'Alemania', grupo: 'C', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'GER-02', numero: 69, nombre: 'Florian Wirtz', seccion: 'Alemania', grupo: 'C', tipo: 'jugador', tengo: false, repetidas: 0 },

  // Portugal
  { id: 'POR-ESC', numero: 70, nombre: 'Escudo Portugal', seccion: 'Portugal', grupo: 'F', tipo: 'escudo', tengo: false, repetidas: 0 },
  { id: 'POR-01', numero: 71, nombre: 'Cristiano Ronaldo', seccion: 'Portugal', grupo: 'F', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'POR-02', numero: 72, nombre: 'Bruno Fernandes', seccion: 'Portugal', grupo: 'F', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'POR-03', numero: 73, nombre: 'Rafael Leao', seccion: 'Portugal', grupo: 'F', tipo: 'jugador', tengo: false, repetidas: 0 },

  // Más Estrellas
  { id: 'STAR-07', numero: 74, nombre: 'Son Heung-min', seccion: 'Estrellas', grupo: 'G', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'STAR-08', numero: 75, nombre: 'Federico Valverde', seccion: 'Estrellas', grupo: 'H', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'STAR-09', numero: 76, nombre: 'Luis Díaz', seccion: 'Estrellas', grupo: 'H', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'STAR-10', numero: 77, nombre: 'Achraf Hakimi', seccion: 'Estrellas', grupo: 'F', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'STAR-11', numero: 78, nombre: 'Victor Osimhen', seccion: 'Estrellas', grupo: 'I', tipo: 'jugador', tengo: false, repetidas: 0 },
  { id: 'STAR-12', numero: 79, nombre: 'Khvicha Kvaratskhelia', seccion: 'Estrellas', grupo: 'I', tipo: 'jugador', tengo: false, repetidas: 0 },
];
