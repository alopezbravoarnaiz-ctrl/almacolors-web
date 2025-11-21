"use client";

import Link from "next/link";
import { products } from "@/data/products";

interface RelatedProductsProps {
  currentSlug: string;
}

export default function RelatedProducts({ currentSlug }: RelatedProductsProps) {
  // Filtramos para no mostrar el producto que ya estamos viendo
  const related = products.filter((p) => p.slug !== currentSlug);

  return (
    <section className="py-16 border-t border-stone-100">
      <h3 className="px-6 md:px-12 mb-8 font-serif text-xl uppercase tracking-widest text-stone-900">
        Recomendaciones para ti
      </h3>

      <div className="flex overflow-x-auto pl-6 md:pl-12 pb-8 gap-1 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-1 pr-6">
          {related.map((product) => (
            <Link 
              key={product.id} 
              href={`/product/${product.slug}`}
              className="flex flex-col group snap-start flex-shrink-0 cursor-pointer w-[60vw] md:w-[20vw]"
            >
              {/* IMAGEN */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-50 mb-3">
                {product.images[0] ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                   <div className="w-full h-full bg-stone-200" />
                )}
              </div>
              
              {/* INFO */}
              <div className="flex flex-col items-start gap-1">
                <span className="font-serif text-sm text-stone-900 uppercase">
                  {product.name}
                </span>
                <span className="font-sans text-xs text-stone-500">
                  {product.basePrice}€
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}