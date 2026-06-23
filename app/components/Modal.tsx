'use client';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4">
      {/* Caja del Modal */}
      <div className="bg-[#FFFDF6] max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-stone-200/50 flex flex-col md:flex-row relative animate-fadeIn">
        
        {/* Botón de Cerrar (X) */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white text-stone-700 w-8 h-8 rounded-full flex items-center justify-center border border-stone-200 shadow-sm transition-colors text-sm font-semibold"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}