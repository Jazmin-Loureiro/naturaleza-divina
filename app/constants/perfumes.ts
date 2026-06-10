// Definimos la estructura que debe tener cada perfume
export interface Perfume {
  id: string;
  nombre: string;
  aroma: string;
  descripcion: string;
  precio: string;
}

export const perfumesArcangeles: Perfume[] = [
  {
    id: 'miguel',
    nombre: 'Perfume Alquímico Arcángel Miguel',
    aroma: 'Protección y Fuerza (Notas de Sándalo e Incienso)',
    descripcion: 'Diseñado para brindar protección energética, cortar lazos negativos y potenciar tu fuerza de voluntad.',
    precio: '$12.000',
  },
  {
    id: 'rafael',
    nombre: 'Perfume Alquímico Arcángel Rafael',
    aroma: 'Sanación y Armonía (Notas de Menta y Pino)',
    descripcion: 'Ideal para momentos donde buscás sanación física, mental o emocional, promoviendo un estado de paz.',
    precio: '$12.000',
  },
  {
    id: 'gabriel',
    nombre: 'Perfume Alquímico Arcángel Gabriel',
    aroma: 'Guía y Comunicación (Notas de Jazmín y Azahar)',
    descripcion: 'Te conecta con la intuición, la claridad mental y la capacidad de expresar tus verdades con amor.',
    precio: '$12.000',
  },
  // Acá abajo podés seguir agregando todos los que falten de forma súper cómoda...
];