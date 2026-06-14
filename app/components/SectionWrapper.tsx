import { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  idBackground?: boolean;
  children: ReactNode;
}

export default function SectionWrapper({ id, title, idBackground = false, children }: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={`w-full py-20 scroll-mt-20 border-t border-stone-200/30 transition-colors ${
        idBackground ? 'bg-[#F4F6FB]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Título con el azul místico del logo */}
        <h2 className="text-3xl font-serif text-[#0F2337] mb-4 tracking-wide">
          {title}
        </h2>
        
        {/* Separador dorado */}
        <div className="w-12 h-0.5 bg-amber-400/60 mx-auto mb-8"></div>
        
        <div className="text-stone-600 font-light leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}