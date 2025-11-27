export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* 1. CABECERA CON IMAGEN (Hero Section) */}
      <div className="relative w-full h-[50vh] md:h-[65vh] bg-stone-100 overflow-hidden">
        <img
          src="/ABOUT_alma.jpg" // <--- Asegúrate de subir esta foto a /public
          alt="El alma de AlmaColors"
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
              SOBRE NOSOTROS
            </h1>
            <div className="w-12 h-[1px] bg-stone-800 mx-auto mt-4" />
          </div>

          {/* Cuerpo del texto */}
          <div className="prose prose-stone mx-auto text-stone-600 font-light leading-relaxed text-sm md:text-base space-y-6">
            <p>
              Detrás de cada collar estoy yo: una persona que vive y trabaja desde la conexión profunda con los perros. Ellos me han enseñado a entender su sensibilidad, su energía y lo que realmente necesitan para sentirse seguros.
            </p>
            <p>
              Cada pieza nace de ese vínculo. Trabajo de forma artesanal, presente y consciente, creando collares que combinan comodidad, estabilidad y una intención energética que acompaña a cada perro en su día a día.
            </p>
          </div>

          {/* Cita destacada (Filosofía) */}
          <div className="pt-4">
            <blockquote className="font-serif text-lg md:text-xl italic text-stone-800 leading-relaxed">
              "Mi filosofía es simple: unir artesanía, sensibilidad y respeto. Collares únicos para perros únicos, hechos uno a uno, con el mismo cuidado con el que trato a los míos."
            </blockquote>
          </div>
          
        </div>
      </div>

    </div>
  );
}