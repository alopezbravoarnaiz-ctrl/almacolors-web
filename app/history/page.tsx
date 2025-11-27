export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* 1. CABECERA CON IMAGEN (Hero Section) */}
      <div className="relative w-full h-[50vh] md:h-[65vh] bg-stone-100 overflow-hidden">
        <img
          src="/ABOUT_mama2.jpg" // Mantenemos la foto de cabecera
          alt="Orígenes de AlmaColors"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* 2. CONTENIDO DE TEXTO (Estilo Editorial) */}
      <div className="max-w-2xl mx-auto px-6 -mt-12 relative z-10">
        <div className="bg-white p-8 md:p-16 shadow-sm border border-stone-50 text-center space-y-10">
          
          {/* Título */}
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase">
              ALMA COLORS
            </span>
            <h1 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight">
              NUESTRO TALLER
            </h1>
            <div className="w-12 h-[1px] bg-stone-800 mx-auto mt-4" />
          </div>

          {/* Cuerpo del texto */}
          <div className="prose prose-stone mx-auto text-stone-600 font-light leading-relaxed text-sm md:text-base space-y-6">
            <p>
              La historia de este collar nació en mis viajes por exposiciones internacionales. Allí descubrí un diseño artesanal creado por criadores rusos y, desde el primer momento, me enamoré del sistema. Llevo toda la vida conviviendo con perros y usando todo tipo de artículos para ellos, pero este collar tenía algo distinto: era práctico, seguro y respetuoso con el cuello.
            </p>
            <p>
              Con el tiempo empecé a trabajar sobre aquel modelo original, importado de Rusia, y llevo ya varios años mejorándolo pieza a pieza. He añadido materiales de mayor calidad, reforzado zonas clave y creado un relleno suave para que el collar sea más cómodo, blando y amable con la piel del perro.
            </p>
          </div>

          {/* Cita destacada (Conclusión) */}
          <div className="pt-4">
            <blockquote className="font-serif text-lg md:text-xl italic text-stone-800 leading-relaxed">
              "Así nació nuestro taller: un espacio donde cada collar evoluciona, se perfecciona y se transforma en una pieza única, hecha con intención, conocimiento y experiencia."
            </blockquote>
          </div>
          
        </div>
      </div>

    </div>
  );
}