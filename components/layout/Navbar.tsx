"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Search, User, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { useCart } from "@/context/CartContext"; // <--- 1. Importamos el contexto

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 2. Lógica del Carrito
  const { cartCount } = useCart();
  const [mounted, setMounted] = useState(false);

  // Evitamos errores de hidratación (Server vs Client)
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 transition-all">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
            {/* IZQUIERDA: Botón Menú y Links */}
            <div className="flex items-center">
              <button 
                onClick={() => setIsMenuOpen(true)} 
                className="p-2 -ml-2 sm:hidden text-neutral-800 hover:text-black"
              >
                <Menu className="h-6 w-6 stroke-[1.5]" />
              </button>

              <div className="hidden sm:flex space-x-8">
                <Link href="/collares" className="text-xs tracking-widest uppercase text-neutral-600 hover:text-black transition-colors">
                  Collares
                </Link>
                <Link href="/taller" className="text-xs tracking-widest uppercase text-neutral-600 hover:text-black transition-colors">
                  El Taller
                </Link>
              </div>
            </div>

            {/* CENTRO: Logo */}
            <div className="flex-shrink-0 flex justify-center absolute left-1/2 transform -translate-x-1/2">
              <Link href="/">
                <h1 className="font-serif text-2xl font-bold tracking-tighter text-black">
                  ALMACOLORS
                </h1>
              </Link>
            </div>

            {/* DERECHA: Iconos */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="p-2 text-neutral-600 hover:text-black transition-colors">
                <Search className="h-5 w-5 stroke-[1.5]" />
              </button>
              
              <button className="p-2 text-neutral-600 hover:text-black transition-colors hidden sm:block">
                <User className="h-5 w-5 stroke-[1.5]" />
              </button>

              {/* --- AQUÍ ESTÁ EL CAMBIO: BOLSA VINCULADA --- */}
              <Link 
                href="/cart" 
                className="p-2 text-neutral-600 hover:text-black transition-colors relative group"
              >
                <ShoppingBag className="h-5 w-5 stroke-[1.5]" />
                
                {/* Badge (Bolita con número) */}
                {mounted && cartCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 h-4 w-4 rounded-full bg-black text-white text-[9px] font-bold flex items-center justify-center animate-in zoom-in duration-300">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;