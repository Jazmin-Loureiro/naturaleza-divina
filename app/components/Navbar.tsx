'use client';
import Image from 'next/image';

export default function Navbar() {
  return (
    // CAMBIO CLAVE: Pasamos el sticky top-0 al header principal.
    // Usamos invisible-b border para que no dibuje líneas raras arriba.
    <header className="sticky top-[-187px] z-50 w-full bg-[#FFFDF6]">
      
      {/* FILA 1: EL LOGO (Mide aprox 188px con paddings. Sube y se oculta) */}
      <div className="max-w-6xl mx-auto px-4 pt-1 pb-1 flex justify-center">
        <a href="#" className="transition-transform hover:scale-105 block bg-transparent">
          <Image 
            src="/Logo.png" 
            alt="Naturaleza Divina" 
            width={180} 
            height={180} 
            className="object-contain mix-blend-multiply" 
            priority
          />
        </a>
      </div>

      {/* FILA 2: LA BARRA DE NAVEGACIÓN (Se clava en el borde exacto al ocultarse el logo) */}
      <div className="w-full bg-[#FFFDF6]/95 backdrop-blur-sm border-b border-stone-200/40 shadow-sm py-3">
        <nav className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-8 text-xs uppercase tracking-widest font-semibold text-stone-600 bg-transparent">
          <a href="#fragancias" className="hover:text-stone-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-stone-800 hover:after:w-full after:transition-all">
            Fragancias
          </a>
          <a href="#nosotros" className="hover:text-stone-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-stone-800 hover:after:w-full after:transition-all">
            Sobre Nosotros
          </a>
          <a href="#contacto" className="hover:text-stone-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-stone-800 hover:after:w-full after:transition-all">
            Contacto
          </a>
        </nav>
      </div>

    </header>
  );
}