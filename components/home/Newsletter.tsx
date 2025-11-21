"use client";

import { useState } from "react";
import { ArrowRight, Loader2, Check } from "lucide-react";
import { subscribeToNewsletter } from "@/app/actions"; // Importamos la lógica del servidor

export default function Newsletter() {
  // Estados para controlar qué está pasando
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Función que se ejecuta al enviar
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue
    setStatus("loading");

    const formData = new FormData();
    formData.append("email", email);

    // Llamamos a la acción del servidor (Resend)
    const result = await subscribeToNewsletter(null, formData);

    if (result.success) {
      setStatus("success");
      setEmail(""); // Limpiamos el campo
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Algo salió mal");
      // Quitamos el error a los 3 segundos para que puedan reintentar
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="py-24 px-6 bg-white flex flex-col items-center justify-center text-center">
      <div className="max-w-xl w-full space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl text-primary">
          Únete a la manada
        </h2>
        <p className="text-stone-500 text-sm md:text-base font-light">
          Recibe historias de nuestro taller, cuidados para el cuero y novedades exclusivas. Sin spam, palabra de perro.
        </p>

        <form 
          onSubmit={handleSubmit}
          className="flex w-full max-w-md mx-auto pt-8 items-center gap-2 border-b border-primary pb-2 transition-all focus-within:border-b-2"
        >
          <input 
            type="email" 
            placeholder="TU CORREO ELECTRÓNICO"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading" || status === "success"}
            className="flex-1 bg-transparent outline-none text-primary placeholder:text-stone-400 text-sm py-2 uppercase disabled:opacity-50"
            required
          />
          
          <button 
            type="submit" 
            disabled={status === "loading" || status === "success"}
            className="text-primary hover:text-stone-600 transition-colors disabled:opacity-50"
          >
            {/* Cambiamos el icono según el estado */}
            {status === "loading" ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : status === "success" ? (
              <Check className="w-5 h-5 text-green-600" />
            ) : (
              <ArrowRight className="w-5 h-5" />
            )}
          </button>
        </form>

        {/* Mensajes de Feedback (Debajo de la línea) */}
        <div className="h-6">
          {status === "success" && (
            <p className="text-[10px] text-green-600 uppercase tracking-wider animate-in fade-in slide-in-from-bottom-1">
              ¡Gracias! Ya eres parte de la familia.
            </p>
          )}
          {status === "error" && (
            <p className="text-[10px] text-red-500 uppercase tracking-wider animate-in fade-in slide-in-from-bottom-1">
              {errorMessage}
            </p>
          )}
          {status === "idle" || status === "loading" ? (
            <p className="text-[10px] text-stone-400 uppercase tracking-wider pt-2">
              Al suscribirte aceptas nuestra política de privacidad.
            </p>
          ) : null}
        </div>

      </div>
    </section>
  );
}