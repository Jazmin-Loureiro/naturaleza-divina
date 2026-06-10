'use client';
import PerfumeCard from './components/PerfumeCard';
// Importamos la constante con los datos desde su nuevo archivo
import { perfumesArcangeles } from './constants/perfumes';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      
      {/* SECCIÓN HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-emerald-50/50 to-transparent">
        <h1 className="text-4xl md:text-6xl font-serif text-emerald-800 tracking-wide mb-4">
          Naturaleza Divina
        </h1>
        <div className="w-16 h-0.5 bg-amber-400/60 mb-6"></div>
        <p className="text-lg md:text-xl italic text-stone-600 max-w-xl font-light leading-relaxed">
          "Alineá tu energía y conectá con la guía de los arcángeles a través de aromas sagrados creados para tu bienestar."
        </p>
      </section>

      {/* SECCIÓN DE PRODUCTOS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-serif text-center text-emerald-800 mb-2">
          Fragancias Sagradas
        </h2>
        <p className="text-center text-stone-500 font-light mb-10">
          Descubrí el perfume alquímico creado para sintonizar con la energía de cada Arcángel.
        </p>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {perfumesArcangeles.map((perfume) => (
            <PerfumeCard 
              key={perfume.id}
              id={perfume.id}
              nombre={perfume.nombre}
              aroma={perfume.aroma}
              descripcion={perfume.descripcion}
              precio={perfume.precio}
            />
          ))}
        </div>
      </section>

    </main>
  );
}