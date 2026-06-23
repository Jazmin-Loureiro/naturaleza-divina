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
      
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const isLarge = typeof window !== 'undefined' && window.innerWidth >= 1024;

      // Si es pantalla grande divide por 4 (porque entran 4), si es tablet por 3, si es móvil por 1.2
      const divisor = isMobile ? 1.2 : isLarge ? 4 : 3;
      const offset = direction === 'left' ? -clientWidth / divisor : clientWidth / divisor;

      carouselRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    // Mantenemos el max-w-4xl para que las tarjetas tengan un excelente margen de apertura
    <div className="relative group max-w-5xl mx-auto px-4 md:px-12">
      
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
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {perfumes.map((perfume) => (
          <div 
            key={perfume.id} 
            className="snap-center shrink-0 w-[75vw] sm:w-[45%] md:w-[25%] lg:w-[25%] h-full"
          >
            <PerfumeCard
              id={perfume.id}
              nombre={perfume.nombre}
              aroma={perfume.aroma}
              descripcion={perfume.descripcion}
              precio={perfume.precio}
              imagen={perfume.imagen}
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