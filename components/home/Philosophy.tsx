import React from 'react';

export default function Philosophy() {
  return (
    <section className="relative py-32 px-6 bg-white flex items-center justify-center overflow-hidden">
      
      {/* IMAGEN DE FONDO */}
      {/* CAMBIO 1: Subimos opacity-40 a opacity-70. Ahora la foto manda. */}
      <div className="absolute inset-0 opacity-70">
        <img 
          src="/HP_texto.jpg"
          alt="Textura natural"
          // Mantenemos los filtros porque el tono es bonito, pero al 70% de opacidad se verán mucho mejor.
          className="w-full h-full object-cover saturate-50 sepia-50"
        />
        
        {/* CAPA DEGRADADA (OVERLAY) */}
        {/* CAMBIO 2: Hacemos el degradado mucho menos invasivo.
            from-white/80: Blanco abajo.
            via-white/20: Casi transparente en medio.
            to-transparent: Totalmente transparente arriba. 
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
      </div>

      {/* CONTENIDO */}
      <div className="relative max-w-3xl text-center space-y-8 z-10">
        <span className="text-xs font-bold tracking-[0.2em] text-stone-600 uppercase">
          Nuestra Promesa
        </span>
        
        {/* Añado una sombra suave al texto para asegurar que se lea aunque la foto de fondo tenga zonas oscuras */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-primary drop-shadow-md">
          "Cada pieza que sale de nuestro taller refleja un compromiso inquebrantable con la calidad, el tiempo y el respeto por los animales."
        </h2>
        
        <div className="w-12 h-[1px] bg-primary mx-auto mt-8" />
      </div>
    </section>
  );
}