"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import TopBanner from "@/components/layout/TopBanner";
import Footer from "@/components/layout/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Detectamos si estamos en la landing de espera
  // (También comprobamos si empieza por /proximamente para cubrir subrutas si las hubiera)
  const isComingSoon = pathname?.startsWith("/proximamente");

  // CASO A: Si es la página de espera -> Solo contenido limpio
  if (isComingSoon) {
    return <main className="min-h-screen bg-stone-50">{children}</main>;
  }

  // CASO B: Tienda normal -> Con Header, Footer y sin espacio blanco (pt-0)
  return (
    <div className="flex flex-col min-h-screen">
      
      <div className="relative z-50 flex flex-col">
        <TopBanner />
        <Navbar />
      </div>

      {/* AQUÍ ESTÁ LA CLAVE: pt-0 para que no haya espacio blanco */}
      <main className="flex-grow pt-0"> 
        {children}
      </main>

      <Footer />
      
    </div>
  );
}