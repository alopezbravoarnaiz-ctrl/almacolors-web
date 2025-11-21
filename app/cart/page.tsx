"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus } from "lucide-react";

export default function CartPage() {
  const { cartItems, removeFromCart, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif text-3xl mb-4">Tu cesta está vacía</h1>
        <p className="text-stone-500 mb-8">¿Por qué no echas un vistazo a nuestras novedades?</p>
        <Link
          href="/"
          className="bg-black text-white px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-stone-800 transition-colors"
        >
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-12 md:py-24">
      {/* CABECERA */}
      <div className="flex justify-between items-center mb-12 pb-4 border-b border-stone-100">
        <h1 className="font-serif text-3xl uppercase tracking-wide">Mi Cesta</h1>
        {/* El botón X en una página completa suele volver atrás o al inicio */}
        <Link href="/" className="text-stone-400 hover:text-black transition-colors">
           <X className="w-6 h-6" />
        </Link>
      </div>

      {/* LISTA DE PRODUCTOS */}
      <div className="space-y-10 mb-16">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-6 pb-8 border-b border-stone-100">
            {/* IMAGEN */}
            <div className="w-28 h-36 flex-shrink-0 bg-stone-50 relative overflow-hidden">
              <img
                src={item.product.images[0]}
                alt={item.product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* DETALLES */}
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif text-lg uppercase">{item.product.name}</h3>
                <p className="font-serif text-lg">{item.unitPrice}€</p>
              </div>

              {/* TALLA Y BORDADO (Tus requisitos específicos) */}
              <div className="text-sm text-stone-600 space-y-1 mb-4 flex-grow">
                 {/* Mostramos el color si lo tuviera el producto base */}
                 {item.product.colors && item.product.colors.length > 0 && (
                    <p><span className="text-stone-400">Color:</span> {item.product.colors[0]}</p>
                 )}
                
                {/* TALLA EN CM */}
                <p>
                  <span className="text-stone-400">Perímetro:</span> {item.selectedSize} CM
                </p>
                
                {/* NOMBRE BORDADO */}
                <p>
                   <span className="text-stone-400">Bordado:</span>{" "}
                   {item.engravingText ? (
                     <span className="uppercase font-medium text-stone-800">{item.engravingText}</span>
                   ) : (
                     "SIN NOMBRE BORDADO"
                   )}
                </p>
              </div>

              {/* CANTIDAD Y ELIMINAR */}
              <div className="flex justify-between items-end">
                 <div className="flex items-center gap-3 border border-stone-200 px-3 py-1">
                    <button className="text-stone-400 hover:text-black disabled:opacity-50" disabled={item.quantity <= 1}>
                       <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                     {/* Por ahora no he puesto la lógica de sumar en el contexto para simplificar, pero el botón está */}
                    <button className="text-stone-400 hover:text-black">
                       <Plus className="w-3 h-3" />
                    </button>
                 </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs text-stone-400 hover:text-red-600 transition-colors underline underline-offset-4"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER DEL CARRITO (Código descuento y Totales) */}
      <div className="space-y-6">
        <div>
           <label className="text-sm font-bold uppercase tracking-widest mb-2 block">¿Tienes un código de descuento?</label>
           <div className="flex gap-2">
              <input type="text" className="flex-1 border-b border-stone-300 py-2 font-serif focus:outline-none focus:border-black" placeholder="Código" />
              <button className="text-xs font-bold uppercase tracking-widest border-b border-black px-4 hover:text-stone-500 hover:border-stone-500 transition-colors">OK</button>
           </div>
        </div>

        <div className="flex justify-between items-center py-6 border-t border-stone-100">
          <span className="text-lg font-bold uppercase tracking-widest">TOTAL</span>
          <span className="font-serif text-2xl">{cartTotal}€</span>
        </div>

        <div className="space-y-3">
          <button className="w-full bg-black text-white h-14 text-xs font-bold tracking-[0.2em] uppercase hover:bg-stone-800 transition-colors">
            FINALIZAR COMPRA
          </button>
          <Link href="/" className="flex items-center justify-center w-full bg-white text-black border border-black h-14 text-xs font-bold tracking-[0.2em] uppercase hover:bg-stone-50 transition-colors">
            CONTINUAR COMPRA
          </Link>
        </div>
      </div>
    </div>
  );
}