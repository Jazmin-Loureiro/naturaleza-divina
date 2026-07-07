// Definimos la estructura que debe tener cada perfume (Agregamos imagen)
export interface Perfume {
  id: string;
  nombre: string;
  aroma: string;
  descripcion: string;
  precio: string;
  imagen: string; 
}

export const perfumesArcangeles: Perfume[] = [
  {
    id: 'miguel',
    nombre: 'Perfume Alquímico Arcángel Miguel',
    aroma: 'Protección y Fuerza (Notas de Sándalo e Incienso)',
    descripcion: 'Diseñado para brindar protección energética, cortar lazos negativos y potenciar tu fuerza de voluntad.',
    precio: '$12.000',
    imagen: '/perfumes/miguel.jpeg', // <-- Cambiá esto por el nombre real de tu archivo
  },
  {
    id: 'gabriel',
    nombre: 'Perfume Alquímico Arcángel Gabriel',
    aroma: 'Guía y Comunicación (Notas de Jazmín y Azahar)',
    descripcion: 'Te conecta con la intuición, la claridad mental y la capacidad de expresar tus verdades con amor.',
    precio: '$12.000',
    imagen: '/perfumes/gabriel.jpeg',
  },
  {
    id: 'uriel',
    nombre: 'Perfume Alquímico Arcángel Uriel',
    aroma: 'Iluminación y Sabiduría (Notas de Sándalo y Vainilla)',
    descripcion: 'Ayuda a despertar la sabiduría interior, facilita la comprensión espiritual y promueve la iluminación.',
    precio: '$12.000',
    imagen: '/perfumes/uriel.jpeg',
  },
  {
    id: 'zadkiel',
    nombre: 'Perfume Alquímico Arcángel Zadkiel',
    aroma: 'Compasión y Perdón (Notas de Rosa y Maderas)',
    descripcion: 'Promueve la compasión, el perdón y la sanación emocional, ayudándote a liberar el dolor del pasado.',
    precio: '$12.000',
    imagen: '/perfumes/zadkiel.jpeg',
  },
  {
    id: 'chamuel',
    nombre: 'Perfume Alquímico Arcángel Chamuel',
    aroma: 'Amor y Compasión (Notas de Rosa y Maderas)',
    descripcion: 'Promueve el amor incondicional, la compasión y la conexión emocional profunda.',
    precio: '$12.000',
    imagen: '/perfumes/chamuel.jpeg',
  },
  {
    id: 'jofiel',
    nombre: 'Perfume Alquímico Arcángel Jofiel',
    aroma: 'Sabiduría y Justicia (Notas de Sándalo y Maderas)',
    descripcion: 'Promueve la sabiduría, la justicia y la capacidad de tomar decisiones equilibradas.',
    precio: '$12.000',
    imagen: '/perfumes/jofiel.jpeg',
  },
  {
    id: 'angel-guarda',
    nombre: 'Perfume Alquímico Angél de la Guarda',
    aroma: 'Paz y serenidad (Notas de Tilo)',
    descripcion: 'Te conecta con la intuición, la claridad mental y la capacidad de expresar tus verdades con amor.',
    precio: '$12.000',
    imagen: '/perfumes/angel-guarda.jpeg',
  },
  {
    id: 'rafael',
    nombre: 'Perfume Alquímico Arcángel Rafael',
    aroma: 'Sanación y Armonía (Notas de Menta y Pino)',
    descripcion: 'Ideal para momentos donde buscás sanación física, mental o emocional, promoviendo un estado de paz.',
    precio: '$12.000',
    imagen: '/perfumes/rafael.jpeg',
  },
];