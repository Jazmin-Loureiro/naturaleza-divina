'use client';

// Definimos qué datos necesita recibir la tarjeta (TypeScript)
interface PerfumeProps {
  nombre: string;
  aroma: string;
  descripcion: string;
  precio: string;
  id: string;
}

export default function PerfumeCard({ nombre, aroma, descripcion, precio, id }: PerfumeProps) {
  return (
    <div className="bg-white border border-stone-200/80 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
      <div>
        {/* Contenedor simulado para la foto */}
        <div className="w-full h-48 bg-stone-100 rounded-lg mb-4 flex items-center justify-center border border-stone-100">
          <span className="text-stone-400 text-xs italic">[ Espacio para Foto de {id} ]</span>
        </div>
        
        <h3 className="text-xl font-serif text-emerald-950 mb-1">
          {nombre}
        </h3>
        <p className="text-xs font-medium text-amber-600 uppercase tracking-wider mb-3">
          {aroma}
        </p>
        <p className="text-sm text-stone-600 font-light leading-relaxed">
          {descripcion}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
        <span className="text-lg font-semibold text-stone-900">{precio}</span>
        <button className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs px-4 py-2 rounded-lg font-medium transition-colors">
          Saber más
        </button>
      </div>
    </div>
  );
}