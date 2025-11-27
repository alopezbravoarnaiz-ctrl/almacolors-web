"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Comprobamos si el usuario ya decidió
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Si no hay decisión guardada, mostramos el banner tras un pequeño retraso
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else if (consent === "accepted") {
      // AQUÍ CARGARÍAMOS LOS SCRIPTS DE ANALYTICS (Google Analytics, Pixel, etc.)
      loadAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    loadAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  // Función auxiliar para inyectar scripts solo si aceptan
  const loadAnalytics = () => {
    console.log("Cookies aceptadas: Cargando Analytics...");
    // Aquí iría el código real de Google Analytics si no usas el componente de Next.js
    // window.gtag('config', 'G-XXXXXXXX');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t border-stone-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] animate-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="flex-1 pr-8">
          <p className="font-serif text-lg text-stone-900 mb-1">Tu privacidad</p>
          <p className="text-xs text-stone-500 font-light leading-relaxed max-w-2xl">
            Utilizamos cookies propias y de terceros para mejorar tu experiencia y analizar el tráfico. 
            Las cookies técnicas son necesarias para que la tienda funcione (carrito, pagos). 
            Puedes leer más en nuestra{" "}
            <Link href="/politica-privacidad" className="underline hover:text-black transition-colors">
              Política de Privacidad
            </Link>.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 md:flex-none px-6 py-3 text-xs font-bold uppercase tracking-widest border border-stone-200 text-stone-500 hover:border-stone-900 hover:text-stone-900 transition-colors"
          >
            Solo necesarias
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none px-8 py-3 text-xs font-bold uppercase tracking-widest bg-stone-900 text-white hover:bg-black transition-colors"
          >
            Aceptar todas
          </button>
        </div>

      </div>
    </div>
  );
}