import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import TopBanner from "@/components/layout/TopBanner";
import { CartProvider } from "@/context/CartContext"; // <--- 1. NUEVO IMPORT

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
  title: "Artesanía Canina | Collares a Medida",
  description: "Collares de cuero y materiales nobles hechos a mano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${libreBaskerville.variable} ${inter.variable} font-sans bg-background text-foreground antialiased`}>
        
        {/* 2. ENVOLVEMOS TODO CON EL CART PROVIDER */}
        {/* Así el Navbar puede ver el número de items y las páginas pueden añadir productos */}
        <CartProvider>
          
          {/* Estructura del Encabezado */}
          <div className="relative z-50 flex flex-col">
            <TopBanner />
            <Navbar />
          </div>

          {/* Contenido Principal */}
          <main className="min-h-screen">
            {children}
          </main>

        </CartProvider>
        
      </body>
    </html>
  );
}