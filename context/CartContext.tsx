"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

// 1. Definimos qué forma tiene un artículo DENTRO del carrito
// (Es diferente al producto normal, porque ya tiene talla y nombre elegido)
export interface CartItem {
  product: Product;
  id: string; // Un ID único para esta combinación específica (ej: collar-cuero-t35-bruno)
  quantity: number;
  selectedSize: string; // Los CM
  engravingText: string | null; // El nombre bordado (o null si no tiene)
  unitPrice: number; // El precio final de esa unidad (base + extra si lleva bordado)
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, size: string, engraving: string | null) => void;
  removeFromCart: (cartItemId: string) => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Cargar el carrito del localStorage al iniciar
  useEffect(() => {
    setIsClient(true);
    const savedCart = localStorage.getItem("shopping-cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Guardar en localStorage cada vez que cambia el carrito
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isClient]);

  // --- FUNCIONES PRINCIPALES ---

  const addToCart = (product: Product, size: string, engraving: string | null) => {
    const engravingPrice = engraving ? 5 : 0;
    const finalUnitPrice = product.basePrice + engravingPrice;
    
    // Creamos un ID único para esta combinación de producto + talla + nombre
    const uniqueId = `${product.id}-${size}-${engraving || "no"}`;

    setCartItems((prevItems) => {
      // ¿Ya existe este artículo exacto en el carrito?
      const existingItem = prevItems.find((item) => item.id === uniqueId);

      if (existingItem) {
        // Si existe, sumamos 1 a la cantidad
        return prevItems.map((item) =>
          item.id === uniqueId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // Si no existe, lo añadimos nuevo
      return [
        ...prevItems,
        {
          product,
          id: uniqueId,
          quantity: 1,
          selectedSize: size,
          engravingText: engraving || null, // Guardamos null si está vacío
          unitPrice: finalUnitPrice,
        },
      ];
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== cartItemId));
  };

  // Calcular el precio total
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0
  );

  // Calcular número de items para el icono del carrito
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, cartTotal, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para usar el carrito fácilmente en cualquier componente
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
}