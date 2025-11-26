import Link from "next/link";
// CORRECCIÓN AQUÍ: Importamos desde data/products donde definimos la interfaz
import { Product } from "@/data/products"; 

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      {/* IMAGEN */}
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-4">
        <img
          // Usamos la primera imagen si existe
          src={product.images?.[0] || ""}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay sutil al hacer hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      {/* TEXTOS */}
      <div className="space-y-1">
        <h3 className="font-serif text-lg text-primary leading-tight group-hover:underline underline-offset-4">
          {product.name}
        </h3>
        <p className="text-xs tracking-widest text-stone-500 uppercase">
          {product.basePrice} €
        </p>
      </div>
    </Link>
  );
}