import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  // 1. Obtenemos el "slug" de la URL (ej: "collares")
  const { slug } = await params;

  // 2. Título bonito para la cabecera
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  // 3. Filtrar productos (Opcional)
  // Por ahora mostramos TODOS. Si en el futuro añades correas, haríamos:
  // const categoryProducts = products.filter(p => p.category === slug);
  const categoryProducts = products; 

  return (
    <div className="min-h-screen bg-white pt-12 pb-24 px-6 md:px-12">
      
      {/* CABECERA DE CATEGORÍA */}
      <div className="flex flex-col items-center justify-center text-center py-16 space-y-6 max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase">
          Colección
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary">
          {categoryName}
        </h1>
        <p className="text-stone-500 font-light max-w-md mx-auto">
          Piezas hechas a mano con materiales nobles, pensadas para durar toda una vida de paseos.
        </p>
      </div>

      {/* GRILLA DE PRODUCTOS */}
      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        // Estado vacío
        <div className="text-center py-24 border-t border-stone-100">
          <p className="text-stone-400 mb-6">Aún no hay productos en esta categoría.</p>
          <Link href="/" className="text-sm underline underline-offset-4 hover:text-stone-600">
            Volver al inicio
          </Link>
        </div>
      )}
    </div>
  );
}