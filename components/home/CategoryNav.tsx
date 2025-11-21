"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

const categories = [
  {
    title: "COLLARES",
    image: "/HP_telas.jpg",
    href: "/category/collares"
  },
  {
    title: "EL TALLER",
    image: "/HP_taller.jpg",
    href: "/about"
  },
  {
    title: "HISTORIA", // He acortado el título para que sea más limpio visualmente
    image: "/HP_teckel.jpg",
    href: "/about"
  },
  
];

export default function CategoryNav() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Animación sutil para enseñar que se puede hacer scroll
    const performNudge = () => {
      setTimeout(() => {
        container.scrollTo({ left: 20, behavior: "smooth" });
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }, 600);
      }, 1000);
    };

    performNudge();
  }, []);

  return (
    <section className="py-12 bg-white">
      
      {/* CONTENEDOR PRINCIPAL */}
      {/* pl-6: Margen izquierdo FIJO (24px). La primera foto empieza aquí. */}
      {/* pr-0: Sin margen derecho, para que las fotos se corten al borde de la pantalla. */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto pl-6 md:pl-12 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {/* CONTENEDOR INTERNO FLEX */}
        {/* gap-1: Espacio MINIMALISTA (4px) entre fotos. Igual que la referencia. */}
        <div className="flex gap-1 pr-6"> 
          {categories.map((cat, index) => (
            <Link 
              key={index} 
              href={cat.href}
              className="flex flex-col group snap-start flex-shrink-0 cursor-pointer"
            >
              {/* IMAGEN */}
              {/* w-[75vw]: Ancho generoso en móvil. */}
              <div className="relative w-[75vw] md:w-[25vw] aspect-[3/4] overflow-hidden bg-stone-50">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* TEXTO (Estilo Zara) */}
              <div className="mt-2 flex flex-col items-start">
                <span className="font-sans font-bold text-[10px] md:text-xs tracking-widest uppercase border-b border-black pb-0.5">
                  {cat.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}