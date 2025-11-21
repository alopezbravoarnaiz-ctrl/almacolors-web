"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { submitContactForm } from "@/app/actions";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    
    // Llamamos a la Server Action
    const result = await submitContactForm(null, formData);

    if (result.success) {
      setIsSuccess(true);
      // Opcional: Resetear formulario aquí si quieres
    } else {
      setErrorMessage(result.error || "Algo salió mal.");
    }
    setIsSubmitting(false);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* COLUMNA IZQUIERDA: Información */}
          <div className="space-y-12">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase block mb-4">
                Hablemos
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary leading-none mb-8">
                CONTACTO
              </h1>
              <p className="text-stone-600 font-light text-lg leading-relaxed max-w-md">
                ¿Tienes una idea especial para tu perro? ¿Dudas sobre las tallas? 
                Estamos en el taller de lunes a viernes, creando piezas únicas para ellos.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-stone-100">
              <div>
                <h3 className="font-serif text-xl mb-2">El Taller</h3>
                <p className="text-stone-500 font-light">San Vicente del Raspeig</p>
                <p className="text-stone-500 font-light">03690, Alicante (España)</p>
                  <p className="text-stone-500 font-light">+34 674048880</p>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-2">Horario</h3>
                <p className="text-stone-500 font-light">Lunes — Viernes</p>
                <p className="text-stone-500 font-light">09:00 — 18:00</p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Formulario */}
          <div className="lg:pt-24">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 p-12 bg-stone-50 border border-stone-100 animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="w-16 h-16 text-stone-800 stroke-[1]" />
                <div>
                  <h3 className="font-serif text-3xl mb-2">Mensaje enviado</h3>
                  <p className="text-stone-500 font-light">
                    Gracias por contactar. Te responderemos lo antes posible (generalmente en 24h).
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="group">
                  <label htmlFor="name" className="block text-xs tracking-widest uppercase text-stone-400 mb-2 group-focus-within:text-primary transition-colors">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-stone-200 py-3 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-stone-300"
                    placeholder="Ej. María García"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-xs tracking-widest uppercase text-stone-400 mb-2 group-focus-within:text-primary transition-colors">
                    Email de contacto
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-stone-200 py-3 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-stone-300"
                    placeholder="ejemplo@correo.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-xs tracking-widest uppercase text-stone-400 mb-2 group-focus-within:text-primary transition-colors">
                    ¿En qué podemos ayudarte?
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-stone-200 py-3 text-lg focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-stone-300"
                    placeholder="Cuéntanos sobre tu perro o tu pedido..."
                  />
                </div>

                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto min-w-[200px]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "ENVIAR MENSAJE"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}