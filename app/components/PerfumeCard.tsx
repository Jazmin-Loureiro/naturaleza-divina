'use client';
import { useState } from 'react';
import Modal from './Modal'; // <-- Impor
import { GLOBAL_CONFIG } from '../constants/global';
interface PerfumeProps {
  nombre: string;
  aroma: string;
  descripcion: string;
  precio: string;
  id: string;
  imagen: string;
}

export default function PerfumeCard({ nombre, aroma, descripcion, precio, id, imagen }: PerfumeProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* TARJETA PRINCIPAL */}
      <div className="bg-white border border-stone-200/80 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
        <div>
          <div className="w-full h-48 md:h-36 bg-stone-100 rounded-lg mb-4 flex items-center justify-center border border-stone-100 overflow-hidden shrink-0">
            {imagen ? (
              <img 
                src={imagen} 
                alt={nombre} 
                className="w-full h-full object-cover object-center scale-105 transition-transform duration-500 hover:scale-110" 
              />
            ) : (
              <span className="text-stone-400 text-xs italic">[ Sin foto ]</span>
            )}
          </div>
          
          <h3 className="text-lg font-serif text-emerald-950 mb-1 leading-snug">
            {nombre}
          </h3>
          <p className="text-[11px] font-medium text-amber-600 uppercase tracking-wider mb-2">
            {aroma}
          </p>
          <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-2">
            {descripcion}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
          <span className="text-base font-semibold text-stone-900">{precio}</span>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-emerald-700 hover:bg-emerald-800 text-white text-[11px] px-3 py-1.5 rounded-lg font-medium transition-colors"
          >
            Saber más
          </button>
        </div>
      </div>

      {/* MODAL REUTILIZABLE */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* Mitad Izquierda: Foto Completa */}
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-stone-100 relative min-h-[300px]">
          <img 
            src={imagen} 
            alt={nombre} 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Mitad Derecha: Toda la Información Limpia */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block mb-1">
              Perfumería Alquímica
            </span>
            <h2 className="text-xl md:text-2xl font-serif text-emerald-950 mb-3 leading-tight">
              {nombre}
            </h2>
            <div className="w-12 h-0.5 bg-amber-400/60 mb-4"></div>
            
            <p className="text-xs font-semibold text-stone-700 uppercase tracking-wider mb-3 bg-stone-100 px-2.5 py-1.5 rounded border border-stone-200/40 inline-block">
              🌱 {aroma}
            </p>
            
            <p className="text-sm text-stone-600 font-light leading-relaxed mb-6">
              {descripcion}
            </p>
          </div>

          {/* Footer del Modal */}
          <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between">
            <div>
              <span className="text-xs text-stone-400 block font-light">Valor</span>
              <span className="text-xl font-bold text-emerald-950">{precio}</span>
            </div>
            <a
              href={`https://wa.me/${GLOBAL_CONFIG.whatsapp.number}?text=${encodeURIComponent(`¡Hola! Me interesa el ${nombre}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 text-white text-xs px-5 py-2.5 rounded-lg"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
}