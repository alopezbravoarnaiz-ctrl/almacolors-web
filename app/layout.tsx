import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CookieBanner from "@/components/ui/CookieBanner";
import LayoutWrapper from "@/components/layout/LayoutWrapper"; // <--- La única importación visual necesaria

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
        
        <CartProvider>
          
          {/* AQUÍ ESTÁ EL CAMBIO: Todo el diseño visual lo maneja ahora LayoutWrapper */}
          <LayoutWrapper>
            {children}
          </LayoutWrapper>

          <CookieBanner />

        </CartProvider>
      </body>
    </html>
  );
}