"use client";

import { useState } from "react";
import { ArrowRight, Loader2, Instagram } from "lucide-react";
import { subscribeToNewsletter } from "@/app/actions";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData();
    formData.append("email", email);
    
    const result = await subscribeToNewsletter(null, formData);
    
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans overflow-hidden relative">
      
      {/* --- COLLAGE DE FONDO --- */}
      {/* Eliminado 'hidden'. Ahora usamos clases responsive para ajustar tamaños y posiciones */}
      <div className="absolute inset-0 z-0 opacity-30 md:opacity-40 pointer-events-none overflow-hidden">
         
         {/* Foto 1: Izquierda Arriba (Visible en móvil y PC) */}
         <div className="absolute top-[-2%] left-[-15%] md:top-[-5%] md:left-[-5%] w-48 h-64 md:w-72 md:h-96 bg-stone-200 rotate-[-6deg] shadow-2xl overflow-hidden border-4 md:border-8 border-white">
            <img src="/HP_portada.jpg" className="w-full h-full object-cover grayscale opacity-80" alt="Textura" />
         </div>
         
         {/* Foto 2: Derecha Arriba (Solo PC para no saturar móvil) */}
         <div className="hidden md:block absolute top-[5%] right-[-2%] w-80 h-80 bg-stone-200 rotate-[3deg] shadow-2xl overflow-hidden border-8 border-white rounded-full">
            <img src="/ABOUT_alma.jpg" className="w-full h-full object-cover sepia-[.3]" alt="Taller" />
         </div>

         {/* Foto 3: Izquierda Abajo (Solo PC) */}
         <div className="hidden md:block absolute bottom-[10%] left-[5%] w-64 h-80 bg-stone-200 rotate-[4deg] shadow-2xl overflow-hidden border-8 border-white">
            <img src="/HP-texto2.jpeg" className="w-full h-full object-cover" alt="Lifestyle" />
         </div>

         {/* Foto 4: Derecha Abajo (Visible en móvil más pequeña) */}
         <div className="absolute bottom-[-5%] right-[-10%] md:bottom-[-10%] md:right-[10%] w-40 h-40 md:w-96 md:h-96 bg-stone-200 rotate-[-3deg] shadow-2xl overflow-hidden border-4 md:border-8 border-white">
             <img src="/NS_collartela.jpg" className="w-full h-full object-cover grayscale" alt="Producto" />
         </div>
         
         {/* Mancha de fondo (Visible siempre) */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-stone-200 rounded-full blur-[80px] md:blur-[100px] opacity-20 z-[-1]" />
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-12 text-center">
        
        <h1 className="font-serif text-4xl md:text-6xl mb-4 tracking-tighter">
          ALMACOLORS
        </h1>
        <p className="text-[10px] tracking-[0.4em] uppercase text-stone-500 mb-12 md:mb-16">
          Artesanía Canina
        </p>

        <div className="w-full max-w-xl bg-white/90 backdrop-blur-md p-8 md:p-12 shadow-sm border border-white/50 space-y-8 rounded-sm">
           <h2 className="font-serif text-xl md:text-3xl text-stone-800 leading-tight">
             "Las cosas buenas se cocinan a fuego lento."
           </h2>
           
           <div className="prose prose-stone text-sm font-light leading-relaxed text-stone-600 mx-auto">
             <p>
               Estamos en el taller dando las últimas puntadas a nuestra nueva colección. 
               Una selección nacida de la experiencia y el amor por los perros.
             </p>
             <p className="hidden md:block">
               Queremos que todo sea perfecto. Déjanos tu email y serás la primera persona en entrar.
             </p>
             <p className="md:hidden">
               Déjanos tu email y te avisaremos en cuanto abramos.
             </p>
           </div>

           <div className="pt-4">
             {status === "success" ? (
               <div className="py-4 px-6 bg-stone-100 border border-stone-200 text-stone-600 text-sm tracking-wide animate-in fade-in">
                 ¡Gracias! Te avisaremos muy pronto. 🐾
               </div>
             ) : (
               <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                 <div className="relative group">
                   <input 
                     type="email" 
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="TU CORREO ELECTRÓNICO"
                     className="w-full bg-transparent border-b border-stone-300 py-3 text-center text-sm tracking-widest placeholder:text-stone-400 focus:outline-none focus:border-black transition-colors"
                   />
                   <button 
                     type="submit" 
                     disabled={status === "loading"}
                     className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-black transition-colors disabled:opacity-50 p-2"
                   >
                     {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
                   </button>
                 </div>
                 <p className="text-[9px] text-stone-400 uppercase tracking-widest mt-2">
                   Sin spam. Palabra de perro.
                 </p>
               </form>
             )}
           </div>
        </div>

      </div>

      {/* --- FOOTER --- */}
      <div className="relative z-10 py-8 text-center space-y-4 bg-gradient-to-t from-stone-50 via-stone-50 to-transparent">
         <div className="flex justify-center gap-6">
            <a href="https://instagram.com/almacolors_studio" target="_blank" className="text-stone-400 hover:text-stone-900 transition-colors">
               <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:almacolorscollares@gmail.com" className="text-xs tracking-widest text-stone-400 hover:text-stone-900 uppercase transition-colors pt-0.5">
               Contacto
            </a>
         </div>
         <p className="text-[9px] text-stone-300 uppercase tracking-widest">
            © {new Date().getFullYear()} AlmaColors Studio
         </p>
      </div>

    </div>
  );
}