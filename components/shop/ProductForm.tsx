"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Para redirigir a la cesta
import { Plus, Minus, X, Info, Ruler, Loader2 } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext"; // 1. Importamos el gancho del carrito

interface ProductFormProps {
  product: Product;
}

export default function ProductForm({ product }: ProductFormProps) {
  const router = useRouter();
  const { addToCart } = useCart(); // 2. Sacamos la función mágica

  // Estados
  const [neckSize, setNeckSize] = useState("");
  const [engravingText, setEngravingText] = useState("");
  const [isEngravingActive, setIsEngravingActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(""); // Para mensajes de error (ej: falta talla)
  const [isLoading, setIsLoading] = useState(false); // Para efecto de carga

  const engravingPrice = 8;
  const finalPrice = isEngravingActive ? product.basePrice + engravingPrice : product.basePrice;

  const toggleEngraving = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsEngravingActive(e.target.checked);
    if (!e.target.checked) {
        setEngravingText("");
        setError(""); // Limpiamos error si desactiva
    }
  };

  // 3. LA LÓGICA DE AÑADIR AL CARRITO
  const handleAddToCart = () => {
    // A) Validación: ¿Ha puesto los CM?
    if (!neckSize) {
        setError("Por favor, introduce los CM del cuello.");
        // Hacemos un pequeño scroll para que vea el error
        const input = document.getElementById("size-input");
        input?.scrollIntoView({ behavior: "smooth", block: "center" });
        input?.focus();
        return;
    }

    // B) Validación: ¿Ha marcado bordado pero no ha escrito nombre?
    if (isEngravingActive && engravingText.trim() === "") {
        setError("Por favor, escribe el nombre para bordar.");
        return;
    }

    // Si todo está bien...
    setError("");
    setIsLoading(true);

    // C) Añadimos al carrito
    addToCart(product, neckSize, isEngravingActive ? engravingText : null);

    // D) Pequeña espera visual y redirigimos al carrito
    setTimeout(() => {
        setIsLoading(false);
        router.push("/cart");
    }, 600);
  };

  return (
    <div className="flex flex-col h-full">
      
      {/* --- INFO --- */}
      <div className="mb-8">
        <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-wide text-stone-900 mb-2">
          {product.name}
        </h1>
        <p className="font-sans text-sm text-stone-500 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* --- INPUTS --- */}
      <div className="space-y-8 mb-10">
        
        {/* Input Talla */}
        <div className="relative">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="size" className={`text-xs font-bold uppercase tracking-widest ${error.includes("CM") ? "text-red-600" : "text-stone-800"}`}>
              Perímetro (CM)
            </label>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-[10px] text-stone-400 underline hover:text-black flex items-center gap-1 transition-colors"
            >
              <Ruler className="w-3 h-3" /> Guía de medición
            </button>
          </div>
          <input
            id="size-input"
            type="number"
            value={neckSize}
            onChange={(e) => {
                setNeckSize(e.target.value);
                if(e.target.value) setError(""); // Quitar error al escribir
            }}
            placeholder="Ej: 35"
            className={`w-full border-b py-2 text-lg text-stone-900 focus:outline-none placeholder:text-stone-300 font-serif transition-colors
                ${error.includes("CM") ? "border-red-500 focus:border-red-500" : "border-stone-300 focus:border-black"}
            `}
          />
          {error.includes("CM") && <p className="text-[10px] text-red-600 mt-1 font-medium">{error}</p>}
        </div>

        {/* Input Grabado */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <input
              type="checkbox"
              id="engraving-toggle"
              checked={isEngravingActive}
              onChange={toggleEngraving}
              className="w-4 h-4 accent-black cursor-pointer"
            />
            <label htmlFor="engraving-toggle" className="text-xs font-bold uppercase tracking-widest text-stone-800 cursor-pointer">
              Bordar Nombre (+{engravingPrice}€)
            </label>
          </div>
          
          <div className={`transition-all duration-300 overflow-hidden ${isEngravingActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
            <input
              type="text"
              value={engravingText}
              onChange={(e) => setEngravingText(e.target.value)}
              placeholder="NOMBRE (Ej: BRUNO)"
              className="w-full border-b border-stone-300 py-2 text-lg text-stone-900 focus:outline-none focus:border-black placeholder:text-stone-300 font-serif uppercase"
            />
            <p className="text-[10px] text-stone-400 mt-1 text-right">Máx. 12 caracteres</p>
             {error.includes("nombre") && <p className="text-[10px] text-red-600 mt-1 font-medium">{error}</p>}
          </div>
        </div>
      </div>

      {/* --- BARRA FIJA INFERIOR --- */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-stone-100 p-4 z-40 lg:static lg:border-none lg:p-0 lg:mb-12 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] lg:shadow-none">
        <div className="flex items-center gap-4 max-w-md mx-auto lg:max-w-none">
          
          <div className="flex flex-col min-w-[60px]">
            <span className="text-[10px] uppercase text-stone-400 tracking-widest">Total</span>
            <span className="font-serif text-xl text-stone-900">{finalPrice}€</span>
          </div>

          <button 
            onClick={handleAddToCart}
            disabled={isLoading}
            className="flex-1 bg-black text-white h-12 text-xs font-bold tracking-[0.2em] uppercase hover:bg-stone-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
                <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Añadiendo...
                </>
            ) : (
                "Añadir a la Cesta"
            )}
          </button>
        </div>
      </div>

      {/* --- ACORDEONES --- */}
      <div className="space-y-1 border-t border-stone-200 mt-4 lg:mt-0">
        <AccordionItem title="DETALLES">
          <ul className="list-disc list-inside space-y-1 text-stone-500">
            {product.materials.map((mat, i) => <li key={i}>{mat}</li>)}
          </ul>
        </AccordionItem>
        <AccordionItem title="CUIDADOS">
          <p className="text-stone-500">Limpieza con paño húmedo. Hidratación mensual del cuero.</p>
        </AccordionItem>
        <AccordionItem title="ENVÍO">
          <p className="text-stone-500">Gratis en Península. Fabricación 3-5 días.</p>
        </AccordionItem>
      </div>

      {/* --- MODAL GUÍA --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={() => setIsModalOpen(false)} 
          />
          <div className="relative bg-white w-full max-w-md p-8 animate-in fade-in zoom-in duration-300 rounded-lg shadow-2xl">
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-4 right-4 text-stone-400 hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="font-serif text-2xl mb-6 text-center text-stone-900">Guía de medición</h3>
            <div className="space-y-5 text-sm text-stone-600 leading-relaxed">
              <p>Para asegurar un ajuste perfecto, necesitamos la medida exacta del cuello de tu perro.</p>
              <div className="bg-stone-50 p-5 rounded-md border border-stone-100">
                <ol className="list-decimal list-inside space-y-3 font-medium text-stone-800">
                  <li>Usa una <strong>cinta métrica flexible</strong>.</li>
                  <li>Rodea el cuello justo donde suele caer el collar.</li>
                  <li><span className="block mt-1 text-stone-600 font-normal pl-5">Deja <strong>dos dedos</strong> de holgura.</span></li>
                  <li>Anota esa medida en CM.</li>
                </ol>
              </div>
            </div>
            <button onClick={() => setIsModalOpen(false)} className="w-full mt-8 bg-stone-900 text-white py-3 text-xs font-bold tracking-widest uppercase">Entendido</button>
          </div>
        </div>
      )}
    </div>
  );
}

function AccordionItem({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-200">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-4 flex justify-between items-center group">
        <span className="text-xs font-bold uppercase tracking-widest text-stone-800 group-hover:text-stone-600 transition-colors">{title}</span>
        <span className="text-stone-400">{isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
        <div className="text-sm leading-relaxed text-stone-500">{children}</div>
      </div>
    </div>
  );
}