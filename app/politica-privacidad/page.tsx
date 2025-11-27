import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Botón Volver */}
      <Link 
        href="/" 
        className="fixed top-6 left-6 z-50 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-stone-500 hover:text-black transition-colors bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Volver
      </Link>

      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <h1 className="font-serif text-3xl md:text-4xl text-stone-900 mb-12">
          Política de Privacidad
        </h1>

        <div className="prose prose-stone prose-sm max-w-none text-stone-600 space-y-8 font-light leading-relaxed">
          
          <section>
            <h2 className="font-serif text-xl text-stone-800 mb-4">1. Responsable del Tratamiento</h2>
            <p>
              El responsable del tratamiento de sus datos personales es <strong>[XPLORE AND GROWTH SL]</strong> (en adelante, "ALMA COLORS"), con NIF/CIF <strong>[B70887203]</strong> y domicilio social en <strong>[PARTIDA DE CANASTELL, 03690, ALICANTE]</strong>. 
              Puede contactar con nosotros a través del correo electrónico: <strong>[ALMACOLORSCOLLARES@GMAIL.COM]</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-800 mb-4">2. Finalidad del Tratamiento</h2>
            <p>Tratamos la información que nos facilita con las siguientes finalidades:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Gestión de pedidos:</strong> Tramitar su compra, envío y facturación de los productos adquiridos.</li>
              <li><strong>Atención al cliente:</strong> Resolver dudas o incidencias a través de nuestro formulario de contacto o email.</li>
              <li><strong>Comunicaciones comerciales (Newsletter):</strong> Si nos ha dado su consentimiento expreso, le enviaremos novedades y promociones sobre nuestros productos.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-800 mb-4">3. Legitimación</h2>
            <p>La base legal para el tratamiento de sus datos es:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Ejecución de un contrato:</strong> Para la gestión de la compra de productos.</li>
              <li><strong>Consentimiento:</strong> Para el envío de la newsletter y el uso de cookies no necesarias.</li>
              <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y garantizar la seguridad de la web.</li>
              <li><strong>Obligación legal:</strong> Para cumplir con normas fiscales y administrativas.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-800 mb-4">4. Destinatarios de los datos</h2>
            <p>Sus datos no se cederán a terceros, salvo obligación legal o cuando sea necesario para la prestación del servicio, como:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Empresas de transporte y logística (para entregar su pedido).</li>
              <li>Plataformas de pago (Stripe) para procesar el cobro de forma segura.</li>
              <li>Proveedores de servicios tecnológicos (hosting, email marketing) que actúan como encargados del tratamiento.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-800 mb-4">5. Derechos del Usuario</h2>
            <p>Usted tiene derecho a acceder, rectificar y suprimir sus datos, así como a limitar u oponerse a su tratamiento. Puede ejercer estos derechos enviando un email a <strong>[ALMACOLORSCOLLARES@GMAIL.COM]</strong> adjuntando copia de su DNI.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-800 mb-4">6. Cookies</h2>
            <p>
              Utilizamos cookies propias y de terceros para mejorar su experiencia de navegación. Puede configurar o rechazar las cookies en cualquier momento a través de nuestro banner de configuración o las opciones de su navegador.
            </p>
          </section>

          <div className="pt-8 border-t border-stone-200 text-xs text-stone-400">
            <p>Última actualización: Noviembre 2025</p>
          </div>

        </div>
      </div>
    </div>
  );
}