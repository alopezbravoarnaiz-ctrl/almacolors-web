import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import TopBanner from "@/components/layout/TopBanner";
import Footer from "@/components/layout/Footer"; // <--- 1. Importamos el Footer
import { CartProvider } from "@/context/CartContext";
import CookieBanner from "@/components/ui/CookieBanner";

// Configuración de fuentes
const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alma Colors | Collares a Medida",
  description: "Collares de pana acolchada y materiales nobles hechos a mano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${libreBaskerville.variable} ${inter.variable} font-sans bg-white text-stone-900 antialiased`}>
        
        {/* ENVOLVEMOS TODO CON EL CART PROVIDER */}
        <CartProvider>
          
          {/* Estructura Flex Vertical para Footer Sticky */}
          <div className="flex flex-col min-h-screen">
            
            {/* Header (Banner + Nav) */}
            <div className="relative z-50 flex flex-col">
              <TopBanner />
              <Navbar />
            </div>

            {/* Contenido Principal */}
            {/* 'flex-grow' hace que este bloque ocupe todo el espacio disponible, empujando el footer abajo */}
            <main className="flex-grow pt-4"> 
              {children}
            </main>

            {/* FOOTER AÑADIDO AL FINAL DEL FLUJO */}
            <Footer />
            
          </div>

          {/* BANNER DE COOKIES (Flotante, fuera del flujo visual) */}
          <CookieBanner />

        </CartProvider>
      </body>
    </html>
  );
}