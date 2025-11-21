import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-120px)] overflow-hidden bg-stone-100">
      {/* Imagen de fondo con overlay sutil */}
      <div className="absolute inset-0">
         {/* Placeholder de alta calidad estilo fashion */}
        <img 
          src="/HP_portada.jpg"
          alt="Colección Minimalista"
          className="w-full h-full object-cover object-center opacity-95"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <span className="text-white text-xs md:text-sm tracking-[0.3em] uppercase mb-4 drop-shadow-md">
          Colección Otoño / Invierno
        </span>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-8 drop-shadow-lg">
          VÍNCULO NATURAL
        </h1>
        <Link href="/category/collares">
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-black transition-all duration-500 min-w-[200px]"
          >
            VER COLECCIÓN
          </Button>
        </Link>
      </div>
    </section>
  );
}