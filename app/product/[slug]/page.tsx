import { notFound } from "next/navigation";
import { products } from "@/data/products";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProductForm from "@/components/shop/ProductForm";
import RelatedProducts from "@/components/shop/RelatedProducts";
import Newsletter from "@/components/home/Newsletter";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    // pb-32 en móvil evita que el botón flotante tape el footer
    <div className="min-h-screen bg-white pb-32 lg:pb-0">
      
      {/* BOTÓN VOLVER FLOTANTE */}
      <Link 
        href="/" 
        className="fixed top-24 left-4 z-50 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-stone-800 bg-white/80 backdrop-blur px-3 py-2 rounded-none shadow-sm hover:bg-black hover:text-white transition-colors border border-stone-100"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="hidden md:inline">Volver</span>
      </Link>

      {/* --- GRID PRINCIPAL (PANTALLA DIVIDIDA) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        
        {/* COLUMNA IZQUIERDA: GALERÍA DE IMÁGENES */}
        <div className="lg:col-span-7 bg-stone-50">
          {/* LÓGICA HÍBRIDA DE GALERÍA:
             1. Mobile: flex-row + overflow-x-auto (Carrusel horizontal)
             2. Desktop: lg:flex-col (Lista vertical infinita)
          */}
          <div className="flex flex-row overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:flex-col lg:snap-none lg:overflow-visible">
            {product.images && product.images.length > 0 ? (
              product.images.map((img, index) => (
                <div 
                  key={index} 
                  className="relative w-full flex-shrink-0 snap-center h-[65vh] lg:h-auto"
                >
                  <img
                    src={img}
                    alt={`${product.name} - Vista ${index + 1}`}
                    className="w-full h-full object-cover lg:object-center"
                    // En desktop, dejamos que la imagen tome su altura natural o llenamos pantalla
                  />
                </div>
              ))
            ) : (
              // Fallback si no hay imágenes
              <div className="h-[65vh] w-full flex items-center justify-center text-stone-300">
                Sin imagen disponible
              </div>
            )}
          </div>
        </div>

        {/* COLUMNA DERECHA: INFORMACIÓN Y FORMULARIO */}
        {/* z-30: Para que al hacer scroll en móvil, la hoja blanca tape las fotos.
            lg:sticky: En escritorio, este panel se queda fijo mientras las fotos scrolean.
        */}
        <div className="relative z-30 lg:col-span-5 pointer-events-none lg:pointer-events-auto">
           {/* Wrapper para el comportamiento Sticky en Desktop */}
           <div className="lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:flex lg:flex-col lg:justify-center pointer-events-auto">
              
              {/* Tarjeta Blanca (Sheet en móvil / Panel limpio en Desktop) */}
              <div className="-mt-10 lg:mt-0 bg-white rounded-t-3xl lg:rounded-none px-6 py-10 lg:px-16 lg:py-12 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] lg:shadow-none h-full flex flex-col justify-center">
                <div className="max-w-md mx-auto w-full">
                  <ProductForm product={product} />
                </div>
              </div>

           </div>
        </div>
      </div>

      {/* --- SECCIÓN INFERIOR: CONTENIDO EXTRA --- */}
      <div className="bg-white relative z-20">
        
        {/* 1. RECOMENDACIONES */}
        <RelatedProducts currentSlug={product.slug} />

        {/* 2. LOGO SECUNDARIO GIGANTE (Branding Editorial) */}
        <div className="py-16 lg:py-24 flex justify-center items-center border-t border-stone-100 overflow-hidden px-6">
          {/* Asegúrate de subir este archivo a /public/logo-secundario.png */}
           <img
             src="/logo-secundario.png" 
             alt="Artesano Original"
             className="w-[70%] md:w-[40%] lg:w-[25%] h-auto object-contain opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
           />
        </div>

        {/* 3. NEWSLETTER */}
        <div className="border-t border-stone-100">
          <Newsletter />
        </div>

        {/* 4. FOOTER LINKS */}
        <footer className="py-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold bg-stone-50 border-t border-stone-100">
          <Link href="/contacto" className="hover:text-black transition-colors">Contacto</Link>
          <Link href="/envios" className="hover:text-black transition-colors">Envíos y Devoluciones</Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-black transition-colors">Instagram</Link>
          <span className="text-stone-300 hidden md:inline">|</span>
          <span className="text-stone-300 font-normal">© 2024 Artesano Family</span>
        </footer>
        
      </div>

    </div>
  );
}