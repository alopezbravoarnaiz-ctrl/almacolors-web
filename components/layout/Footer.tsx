"use client"; // Necesario para la interactividad del formulario

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Instagram, Loader2, Check } from "lucide-react";
import { subscribeToNewsletter } from "@/app/actions"; // Importamos la Server Action

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Estados para el formulario
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData();
    formData.append("email", email);

    // Llamamos a la Server Action
    const result = await subscribeToNewsletter(null, formData);

    if (result.success) {
      setStatus("success");
      setEmail("");
      setMessage("¡Bienvenido a la manada!");
    } else {
      setStatus("error");
      setMessage(result.error || "Algo salió mal.");
    }
  };

  return (
    <footer className="bg-stone-50 border-t border-stone-200 mt-auto">
      
      {/* --- SECCIÓN NEWSLETTER (Con Foto de Fondo) --- */}
      <div className="relative py-24 px-6 md:px-12 overflow-hidden bg-stone-900">
        
        {/* 1. IMAGEN DE FONDO */}
        {/* Asegúrate de que 'image_a53efa.png' esté en tu carpeta public */}
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/NS_collartela.jpg')" }} 
        />
        
        {/* 2. OVERLAY NEGRO (Opacidad para leer texto) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* 3. CONTENIDO (Encima del overlay) */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center text-white">
            <h3 className="font-serif text-3xl md:text-4xl mb-2">ALMACOLORS</h3>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-12 text-stone-300">Artesanía Canina</p>

            <div className="w-full max-w-md space-y-8">
                <div className="space-y-2">
                    <p className="text-sm font-medium tracking-widest uppercase">
                        Únete a la manada
                    </p>
                    <p className="text-sm font-light text-stone-300">
                        Recibe historias de nuestro taller, cuidados para el cuero y novedades exclusivas.
                    </p>
                </div>

                {/* FORMULARIO */}
                {status === "success" ? (
                    <div className="p-6 border border-white/20 bg-white/10 backdrop-blur-sm text-center animate-in fade-in slide-in-from-bottom-2">
                        <Check className="w-8 h-8 mx-auto mb-2 text-green-400" />
                        <p className="text-sm font-medium tracking-wider uppercase text-white">¡Gracias por suscribirte!</p>
                        <p className="text-xs text-stone-300 mt-1">Revisa tu bandeja de entrada pronto.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubscribe} className="space-y-4 text-left relative">
                        {/* El input de nombre es visual por ahora, Resend Audience suele pedir solo email, 
                            pero lo dejamos por estética si quieres guardarlo después */}
                        <input 
                            type="text" 
                            placeholder="NOMBRE (OPCIONAL)" 
                            className="w-full bg-transparent border border-white/50 p-4 text-xs tracking-widest placeholder:text-stone-400 text-white focus:outline-none focus:border-white focus:bg-white/5 transition-all uppercase"
                        />
                        
                        <div className="relative">
                            <input 
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="TU CORREO ELECTRÓNICO" 
                                className="w-full bg-transparent border border-white/50 p-4 text-xs tracking-widest placeholder:text-stone-400 text-white focus:outline-none focus:border-white focus:bg-white/5 transition-all uppercase pr-12"
                            />
                            <button 
                                type="submit" 
                                disabled={status === "loading"}
                                className="absolute right-4 top-1/2 -translate-y-1/2 group disabled:opacity-50"
                            >
                                {status === "loading" ? (
                                    <Loader2 className="w-5 h-5 text-white animate-spin" />
                                ) : (
                                    <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" />
                                )}
                            </button>
                        </div>

                        {status === "error" && (
                            <p className="text-xs text-red-400 absolute -bottom-6 left-0">{message}</p>
                        )}
                        
                        {/* Checkbox legal */}
                        <div className="flex items-start gap-3 pt-2 justify-center md:justify-start">
                            <input type="checkbox" required id="privacy" className="mt-0.5 accent-white cursor-pointer" />
                            <label htmlFor="privacy" className="text-[10px] text-stone-400 uppercase tracking-wide cursor-pointer select-none">
                                He leído y acepto la <Link href="/politica-privacidad" className="underline decoration-stone-500 underline-offset-4 hover:text-white">Política de Privacidad</Link>
                            </label>
                        </div>
                    </form>
                )}
            </div>
        </div>
      </div>

      {/* --- SECCIÓN INFERIOR: LINKS --- */}
      <div className="py-16 px-6 md:px-12 bg-stone-50 text-stone-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            
            {/* COLUMNA 1 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-1 flex items-center gap-2">
                    Síguenos <span className="text-stone-300 font-light">↓</span>
                </h4>
                <a href="https://instagram.com/almacolors_studio" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-stone-400 group-hover:text-black transition-colors" />
                    <span className="text-xs tracking-widest text-stone-600 group-hover:text-black border-b border-transparent group-hover:border-black pb-0.5 transition-all">
                        @ALMACOLORS_STUDIO
                    </span>
                </a>
            </div>

            {/* COLUMNA 2 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-1 flex items-center gap-2">
                    Contacto <span className="text-stone-300 font-light">↓</span>
                </h4>
                <div className="space-y-4">
                    <div className="space-y-1">
                        <p className="text-[10px] uppercase text-stone-400 tracking-widest">Whatsapp</p>
                        <a href="https://wa.me/34674048880" target="_blank" className="text-xs tracking-widest text-stone-600 hover:text-black transition-colors">
                            +34 674 048 880
                        </a>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] uppercase text-stone-400 tracking-widest">Email</p>
                        <a href="mailto:almacolorscollares@gmail.com" className="text-xs tracking-widest text-stone-600 hover:text-black transition-colors break-all">
                            info@almacolors.es
                        </a>
                    </div>
                </div>
            </div>

            {/* COLUMNA 3 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-1 flex items-center gap-2">
                    Información <span className="text-stone-300 font-light">↓</span>
                </h4>
                <nav className="flex flex-col space-y-3">
                    <Link href="/history" className="text-xs tracking-widest text-stone-600 hover:text-black transition-colors w-fit mx-auto md:mx-0 hover:translate-x-1 duration-300">EL TALLER</Link>
                    <Link href="/about" className="text-xs tracking-widest text-stone-600 hover:text-black transition-colors w-fit mx-auto md:mx-0 hover:translate-x-1 duration-300">NUESTRA HISTORIA</Link>
                    <Link href="/envios" className="text-xs tracking-widest text-stone-600 hover:text-black transition-colors w-fit mx-auto md:mx-0 hover:translate-x-1 duration-300">ENVÍOS Y DEVOLUCIONES</Link>
                    <Link href="/politica-privacidad" className="text-xs tracking-widest text-stone-600 hover:text-black transition-colors w-fit mx-auto md:mx-0 hover:translate-x-1 duration-300">POLÍTICA DE PRIVACIDAD</Link>
                    <Link href="/contacto" className="text-xs tracking-widest text-stone-600 hover:text-black transition-colors w-fit mx-auto md:mx-0 hover:translate-x-1 duration-300">CONTACTAR</Link>
                </nav>
            </div>
        </div>

        <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-stone-200 text-center flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-[10px] text-stone-400 tracking-widest uppercase">
                © {currentYear} AlmaColors. Hecho a mano en España.
             </p>
             <div className="flex gap-4 opacity-50 grayscale">
                 <div className="h-5 w-8 bg-stone-200 rounded-sm"></div>
                 <div className="h-5 w-8 bg-stone-200 rounded-sm"></div>
             </div>
        </div>
      </div>
    </footer>
  );
}