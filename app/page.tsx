'use client';
import PerfumeCard from './components/PerfumeCard';
import SectionWrapper from './components/SectionWrapper';
import WhatsappBtn from './components/WhatsappBtn';
import { perfumesArcangeles } from './constants/perfumes';

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent font-sans">
      
      {/* 1. SECCIÓN HERO (Degradé celeste sutil a tono con la acuarela) */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-blue-50/40 to-transparent">
        <h1 className="text-3xl md:text-5xl font-serif text-[#0F2337] tracking-wide mb-4 max-w-2xl leading-tight">
          Cosmética Alquímica Artesanal
        </h1>
        <div className="w-16 h-0.5 bg-amber-400/60 mb-6"></div>
        <p className="text-lg md:text-xl italic text-stone-600 max-w-xl font-light leading-relaxed">
          "Alineá tu energía y conectá con la guía de los arcángeles a través de aromas sagrados creados para tu bienestar."
        </p>
      </section>

      {/* LÍNEA DIVISORIA SUTIL */}
      <div className="max-w-4xl mx-auto px-6">
        <hr className="border-t border-stone-400/60" />
      </div>

      {/* 2. SECCIÓN DE PRODUCTOS */}
      <section id="fragancias" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-36">
        <h2 className="text-3xl font-serif text-center text-[#0F2337] mb-2 tracking-wide">
          Fragancias Sagradas
        </h2>
        <p className="text-center text-stone-500 font-light mb-12 text-sm md:text-base">
          Descubrí el perfume alquímico creado para sintonizar con la energía de cada Arcángel.
        </p>

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

      {/* 3. SECCIÓN SOBRE NOSOTROS (Fondo celeste/violeta pastel sutil) */}
      <SectionWrapper id="nosotros" title="Nuestra Historia" idBackground={true}>
        <p className="mb-4">
          Naturaleza Divina nace del deseo de fusionar la sabiduría de la tierra con la vibración energética de los arcángeles. Cada fragancia se elabora de forma alquímica y artesanal, seleccionando aceites esenciales puros y elixires cargados de intención.
        </p>
        <p className="text-[#0F2337] italic text-sm font-medium">
          Creamos puentes aromáticos hacia el bienestar, la protección y la armonía diaria.
        </p>
      </SectionWrapper>

      {/* 4. SECCIÓN CONTACTO */}
      <SectionWrapper id="contacto" title="Conectá con Nosotros">
        <p className="text-stone-500 max-w-md mx-auto mb-10 text-sm md:text-base">
          ¿Tenés dudas sobre qué aroma sintoniza con tu energía actual o querés hacer un pedido personalizado?
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-semibold">
          <a 
            href="mailto:contacto@naturalezadina.com" 
            className="px-6 py-3 border border-stone-300 text-[#0F2337] rounded-sm hover:bg-blue-50/30 transition-all tracking-widest uppercase text-xs hover:scale-105"
          >
            Enviar un Correo
          </a>
        </div>
      </SectionWrapper>

      {/* 5. BOTÓN FLOTANTE */}
      <WhatsappBtn />

    </main>
  );
}