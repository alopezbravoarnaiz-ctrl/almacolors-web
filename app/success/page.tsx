import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      
      {/* Círculo animado */}
      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-8 animate-in zoom-in duration-500">
        <Check className="w-10 h-10 text-green-600 stroke-[3]" />
      </div>

      <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
        ¡Gracias por tu pedido!
      </h1>

      <p className="text-stone-500 font-light text-lg max-w-md leading-relaxed mb-12">
        Hemos recibido tu orden correctamente. En breve recibirás un email de confirmación con los detalles.
        <br /><br />
        Nos ponemos manos a la obra en el taller.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link 
          href="/"
          className="bg-black text-white h-14 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] uppercase hover:bg-stone-800 transition-colors"
        >
          Volver a la tienda
        </Link>
        
        {/* Opcional: Link a Instagram */}
        <a 
          href="https://instagram.com/almacolors_studio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-stone-400 hover:text-black transition-colors flex items-center justify-center gap-2 mt-4"
        >
          Síguenos en Instagram <ArrowRight className="w-3 h-3" />
        </a>
      </div>

    </div>
  );
}