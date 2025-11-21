"use client";

import Link from "next/link";
import { X, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "COLLARES", href: "/category/collares" },
  { label: "CORREAS", href: "/category/correas" },
  { label: "EL TALLER", href: "/about" },
  { label: "HISTORIA", href: "/history" },
 { label: "CONTACTO", href: "/contacto" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Bloquear el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* OVERLAY (Fondo oscuro) */}
      {/* Usamos opacity y pointer-events para una transición suave de desvanecimiento */}
      <div
        className={cn(
          "fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] transition-opacity duration-300 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* DRAWER (Panel deslizante) */}
      <div
        className={cn(
          "fixed top-0 left-0 bottom-0 w-[85%] max-w-[300px] z-[100] bg-background shadow-xl transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          
          {/* HEADER DEL MENÚ */}
          <div className="h-20 flex items-center px-6 border-b border-border/40">
            <button 
              onClick={onClose}
              className="p-2 -ml-2 hover:bg-secondary transition-colors rounded-full"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* LISTA DE ENLACES */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="px-6">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-5 border-b border-stone-100 group"
                  >
                    <span className="text-xs tracking-[0.15em] font-medium text-foreground group-hover:text-stone-600 transition-colors">
                      {item.label}
                    </span>
                    <Plus className="w-4 h-4 stroke-[1.5] text-stone-400 group-hover:text-foreground transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* FOOTER (Opcional: Login/Idioma) */}
          <div className="p-6 border-t border-stone-100 bg-stone-50/50">
             <button className="text-xs tracking-widest font-medium text-stone-500 uppercase">
                Mi Cuenta
             </button>
          </div>
        </div>
      </div>
    </>
  );
}