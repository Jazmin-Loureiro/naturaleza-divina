import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar"; // Importamos el nuevo header dinámico
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naturaleza Divina | Perfumes Alquímicos",
  description: "Alineá tu energía y conectá con la guía de los arcángeles a través de aromas sagrados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col text-stone-800 bg-[#FFFDF6]">
        
        {/* NUEVO NAVBAR INTERACTIVO */}
        <Navbar />

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-grow">
          {children}
        </main>

        {/* PIE DE PÁGINA (FOOTER ORIGINAL) */}
        <footer className="bg-[#FAF6ED] border-t border-stone-200/60 py-6 text-stone-500 text-xs tracking-wide">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="text-center sm:text-left">
              <p className="font-serif font-semibold text-stone-800 text-sm tracking-wide">
                Naturaleza Divina
              </p>
              <p className="text-stone-400 mt-0.5">
                © {new Date().getFullYear()} Todos los derechos reservados.
              </p>
            </div>

            <div className="text-center sm:text-right font-medium text-stone-400">
              <p>
                Diseñado y desarrollado por{" "}
                <a 
                  href="https://github.com/Jazmin-Loureiro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 hover:underline transition-colors"
                >
                  Jazmín Loureiro
                </a>
              </p>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}