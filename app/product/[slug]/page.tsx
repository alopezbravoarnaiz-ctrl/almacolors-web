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
    // IMPORTANTE: pb-32 asegura que el contenido final no quede tapado por el botón fijo en móvil
    <div className="min-h-screen bg-white pb-32 lg:pb-0">
      
      {/* BOTÓN VOLVER */}
      <Link 
        href="/" 
        className="fixed top-4 left-4 z-50 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-stone-800 bg-white/90 backdrop-blur px-3 py-2 rounded-full shadow-sm hover:bg-black hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
      </Link>

      {/* --- PARTE SUPERIOR: PRODUCTO --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[90vh]">
        {/* Imagen */}
        <div className="relative h-[65vh] lg:h-auto lg:col-span-7 bg-stone-100">
           {product.images && product.images.length > 0 ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover sticky top-0"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-stone-300">Sin imagen</div>
          )}
        </div>

        {/* Formulario */}
        {/* AQUÍ ESTÁ EL CAMBIO: 
            He cambiado 'z-10' por 'z-30'. 
            Como el bloque de abajo tiene z-20, ahora el formulario (y su botón fijo) estarán SIEMPRE por encima.
        */}
        <div className="relative z-30 -mt-10 lg:mt-0 lg:col-span-5 bg-white rounded-t-3xl lg:rounded-none px-6 py-10 lg:px-16 lg:py-24 shadow-xl lg:shadow-none flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <ProductForm product={product} />
          </div>
        </div>
      </div>

      {/* --- PARTE INFERIOR: EXTENSIÓN --- */}
      {/* Este bloque tiene z-20. Como el formulario ahora es z-30, el botón flotará por encima de esto correctamente. */}
      <div className="bg-white relative z-20">
        
        {/* 1. RECOMENDACIONES */}
        <RelatedProducts currentSlug={product.slug} />

       {/* 2. LOGO SECUNDARIO GIGANTE */}
        <div className="py-12 flex justify-center items-center border-t border-stone-100 overflow-hidden px-6">
           <img
             src="/logo-secundario.png" // <--- ¡IMPORTANTE: Pon aquí el nombre real de tu archivo en la carpeta public!
             alt="Logo Artesano"
             className="w-[60%] md:w-[35%] h-auto object-contain opacity-90 select-none"
           />
        </div>

        {/* 3. NEWSLETTER */}
        <div className="border-t border-stone-100">
          <Newsletter />
        </div>

        {/* 4. FOOTER LINKS */}
        <div className="py-12 flex justify-center gap-8 text-[10px] uppercase tracking-widest text-stone-500 font-bold">
          <Link href="#" className="hover:text-black transition-colors">Contacto</Link>
          <Link href="#" className="hover:text-black transition-colors">Envíos</Link>
          <Link href="#" className="hover:text-black transition-colors">Instagram</Link>
        </div>
        
        {/* Espacio extra de seguridad */}
        <div className="h-12 lg:h-0"></div>
      </div>

    </div>
  );
}