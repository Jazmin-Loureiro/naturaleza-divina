'use client';
import { useState, useRef, useEffect } from 'react';

// Le permitimos configurar si el botón arranca acoplado a la derecha o a la izquierda
export function useMagnetico(ladoInicial: 'derecha' | 'izquierda' = 'derecha') {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });
  const [estaArrastrando, setEstaArrastrando] = useState(false);
  const [aplicarTransicion, setAplicarTransicion] = useState(false);
  const arrastrandoRef = useRef(false);
  const inicioRef = useRef<{ x: number; y: number } | null>(null);

  const iniciarArrastre = (e: React.MouseEvent | React.TouchEvent) => {
    arrastrandoRef.current = false;
    setAplicarTransicion(false);
    const clienteX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clienteY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    inicioRef.current = {
      x: clienteX - posicion.x,
      y: clienteY - posicion.y
    };
    setEstaArrastrando(true);
  };

  useEffect(() => {
    const alMover = (e: MouseEvent | TouchEvent) => {
      if (!inicioRef.current) return;
      arrastrandoRef.current = true;
      
      const clienteX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clienteY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      setPosicion({
        x: clienteX - inicioRef.current.x,
        y: clienteY - inicioRef.current.y
      });
    };

    const terminarArrastre = () => {
      setEstaArrastrando(false);
      inicioRef.current = null;

      if (arrastrandoRef.current) {
        const anchoPantalla = window.innerWidth;
        const altoPantalla = window.innerHeight;
        
        // El ancho máximo total considerando márgenes y tamaño del botón (56px)
        const xDistanciaTotal = -(anchoPantalla - 104);

        // Ajustamos la matemática según el origen del botón
        let xMaxIzquierda = ladoInicial === 'derecha' ? xDistanciaTotal : 0;
        let xMaxDerecha = ladoInicial === 'derecha' ? 0 : -xDistanciaTotal;
        let puntoMedio = xDistanciaTotal / 2;

        const yMaxArriba = -(altoPantalla - 104); 
        const yMaxAbajo = 0;

        let nuevaX = posicion.x;
        let nuevaY = posicion.y;

        if (nuevaY < yMaxArriba) nuevaY = yMaxArriba;
        if (nuevaY > yMaxAbajo) nuevaY = yMaxAbajo;

        if (ladoInicial === 'derecha') {
          nuevaX = posicion.x < puntoMedio ? xMaxIzquierda : xMaxDerecha;
        } else {
          // Si arranca a la izquierda, el movimiento natural es positivo hacia la derecha
          nuevaX = posicion.x > -puntoMedio ? -xDistanciaTotal : 0;
        }

        setAplicarTransicion(true);
        setPosicion({ x: nuevaX, y: nuevaY });
      }
    };

    if (estaArrastrando) {
      window.addEventListener('mousemove', alMover);
      window.addEventListener('mouseup', terminarArrastre);
      window.addEventListener('touchmove', alMover);
      window.addEventListener('touchend', terminarArrastre);
    }

    return () => {
      window.removeEventListener('mousemove', alMover);
      window.removeEventListener('mouseup', terminarArrastre);
      window.removeEventListener('touchmove', alMover);
      window.removeEventListener('touchend', terminarArrastre);
    };
  }, [estaArrastrando, posicion, ladoInicial]);

  return {
    posicion,
    estaArrastrando,
    aplicarTransicion,
    arrastrandoRef,
    iniciarArrastre
  };
}