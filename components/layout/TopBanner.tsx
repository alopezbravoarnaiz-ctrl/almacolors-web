import React from "react";

const TopBanner = () => {
  return (
    <div className="bg-black text-white py-2.5 overflow-hidden relative z-50">
      
      {/* --- VERSIÓN MÓVIL (Se mueve) --- */}
      {/* AÑADIDO: 'flex' y 'whitespace-nowrap' aquí directamente */}
      <div className="lg:hidden animate-marquee w-max flex whitespace-nowrap gap-8">
        <span className="text-xs tracking-[0.2em] font-medium">
          ENVÍOS GRATIS A ESPAÑA PENINSULAR — HECHO A MANO EN NUESTRO TALLER — ARTESANÍA CANINA
        </span>
        <span className="text-xs tracking-[0.2em] font-medium">
          ENVÍOS GRATIS A ESPAÑA PENINSULAR — HECHO A MANO EN NUESTRO TALLER — ARTESANÍA CANINA
        </span>
        <span className="text-xs tracking-[0.2em] font-medium">
          ENVÍOS GRATIS A ESPAÑA PENINSULAR — HECHO A MANO EN NUESTRO TALLER — ARTESANÍA CANINA
        </span>
      </div>

      {/* --- VERSIÓN ORDENADOR (Estática y Centrada) --- */}
      <div className="hidden lg:flex justify-center items-center w-full">
        <span className="text-xs tracking-[0.2em] font-medium text-center">
          ENVÍOS GRATIS A ESPAÑA PENINSULAR — HECHO A MANO EN NUESTRO TALLER — ARTESANÍA CANINA
        </span>
      </div>

    </div>
  );
};

export default TopBanner;