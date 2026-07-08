'use client';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    // Cambiamos a z-[100] para que tape por completo el chat y WhatsApp mientras esté abierto
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4">
      
      {/* Caja del Modal */}
      <div className="bg-[#FFFDF6] max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-stone-200/50 flex flex-col md:flex-row relative animate-fadeIn">
        
        {/* Botón de Cerrar (X) - Clavado fijo en la esquina superior derecha general */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-white text-stone-700 w-8 h-8 rounded-full flex items-center justify-center border border-stone-200/80 shadow-md transition-colors text-sm font-semibold"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}