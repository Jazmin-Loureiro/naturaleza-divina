'use client';
import { useRef } from 'react';
import { Perfume } from '../constants/perfumes';
import PerfumeCard from './PerfumeCard';

interface PerfumeCarouselProps {
  perfumes: Perfume[];
}

export default function PerfumeCarousel({ perfumes }: PerfumeCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      
      // Controlamos el avance: en escritorio se mueve el ancho justo de una tarjeta (un tercio del espacio)
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const offset = direction === 'left' 
        ? -(isMobile ? clientWidth / 1.2 : clientWidth / 3) 
        : (isMobile ? clientWidth / 1.2 : clientWidth / 3);

      carouselRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    // CAMBIO CLAVE: Achicamos el bloque entero a max-w-4xl para que sea visiblemente más angosto en la pantalla
    <div className="relative group max-w-4xl mx-auto px-10">
      
      {/* Flecha Izquierda */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#FFFDF6]/90 border border-stone-200 text-[#0F2337] w-10 h-10 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-stone-50"
        aria-label="Anterior"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Contenedor del Carrusel */}
      <div
        ref={carouselRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {perfumes.map((perfume) => (
          <div 
            key={perfume.id} 
            // Usamos porcentajes (w-full / md:w-[31%]) para que las tarjetas se adapten al tamaño angosto del contenedor padre
            className="snap-center shrink-0 w-[85vw] sm:w-[45%] md:w-[31%]"
          >
            <PerfumeCard
              id={perfume.id}
              nombre={perfume.nombre}
              aroma={perfume.aroma}
              descripcion={perfume.descripcion}
              precio={perfume.precio}
            />
          </div>
        ))}
      </div>

      {/* Flecha Derecha */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#FFFDF6]/90 border border-stone-200 text-[#0F2337] w-10 h-10 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-stone-50"
        aria-label="Siguiente"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}