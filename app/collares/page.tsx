import { products } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

export default function CollaresPage() {
  // Filtramos solo los productos que sean collares (si tuvieras categorías en data)
  // Por ahora mostramos todos, ya que tu archivo products.ts tiene 3 collares.
  const collares = products; 

  return (
    <div className="min-h-screen bg-white pt-12 pb-24 px-6 md:px-12">
      
      {/* CABECERA */}
      <div className="flex flex-col items-center justify-center text-center py-16 space-y-6 max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase">
          Colección
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary">
          Nuestros Collares
        </h1>
        <p className="text-stone-500 font-light max-w-md mx-auto">
          Diseños pensados para la comodidad y seguridad de tu perro, sin renunciar a la elegancia.
        </p>
      </div>

      {/* GRID DE PRODUCTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {collares.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}