import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Link 
        href="/envios" 
        className="fixed top-6 left-6 z-50 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-stone-500 hover:text-black transition-colors bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Volver
      </Link>

      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <h1 className="font-serif text-3xl md:text-4xl text-stone-900 mb-12">
          Envíos y Devoluciones
        </h1>

        <div className="prose prose-stone prose-sm max-w-none text-stone-600 space-y-8 font-light leading-relaxed">
          
          <section>
            <h2 className="font-serif text-xl text-stone-800 mb-4">Plazos de Entrega</h2>
            <p>
              Cada collar se confecciona a mano bajo pedido en nuestro taller. Debido a este proceso artesanal y personalizado, nuestro tiempo de confección es de <strong>3 a 5 días laborables</strong>.
            </p>
            <p>
              Una vez que tu pedido sale del taller, el tiempo de tránsito en España Peninsular es de <strong>24/48 horas</strong>. Recibirás un email con el seguimiento en cuanto lo enviemos.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-800 mb-4">Costes de Envío</h2>
            <p>
              Queremos ponértelo fácil: ofrecemos <strong>envío gratuito</strong> en todos los pedidos a España Peninsular.
            </p>
            <p>
              Para Baleares, Canarias y envíos internacionales, el coste se calculará automáticamente al finalizar la compra antes del pago.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-800 mb-4">Política de Devoluciones</h2>
            <p>
              En <strong>ALMA COLORS</strong> no trabajamos con stock. Cada collar se corta, cose y borda específicamente para tu perro, siguiendo las medidas y personalización (nombre) que nos indicas al hacer el pedido.
            </p>
            
            <div className="bg-stone-50 p-6 border-l-2 border-stone-800 my-6">
              <p className="font-medium text-stone-900 mb-2">Productos a medida y personalizados</p>
              <p className="italic">
                Al tratarse de artículos confeccionados bajo pedido y a medida (conforme al art. 103 de la Ley de Consumidores), <strong>no admitimos cambios ni devoluciones</strong> por errores en la talla o cambio de opinión.
              </p>
            </div>

            <p>
              Por favor, asegúrate de seguir nuestra <strong className="text-stone-900">Guía de Medición</strong> antes de realizar tu pedido. Si tienes cualquier duda sobre cómo medir el cuello de tu perro, escríbenos antes y estaremos encantados de ayudarte.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-800 mb-4">Garantía de Calidad</h2>
            <p>
              Revisamos cada pieza minuciosamente antes de enviarla. No obstante, si recibieras un producto con algún <strong>defecto de fabricación</strong> o un error por nuestra parte, por favor contáctanos en las primeras 48 horas tras recibirlo.
            </p>
            <p>
              Nos encargaremos de recogerlo y enviarte uno nuevo sin ningún coste para ti. Queremos que tu experiencia sea perfecta.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}