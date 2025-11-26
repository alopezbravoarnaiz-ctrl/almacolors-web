export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-24 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="aspect-square bg-stone-100">
           {/* Placeholder para foto del artesano trabajando */}
           <div className="w-full h-full flex items-center justify-center text-stone-300">
             Foto del Artesano
           </div>
        </div>
        <div className="space-y-8">
          <h1 className="font-serif text-4xl md:text-5xl text-primary">
            El Taller
          </h1>
          <p className="text-stone-600 font-light text-lg">
            Aquí no hay prisas. Utilizamos herramientas manuales y técnicas heredadas para asegurar que cada costura resista tirones y aventuras.
          </p>
          <ul className="space-y-4 text-sm tracking-wide text-stone-500 uppercase">
            <li className="border-b border-stone-100 pb-2">✓ Cuero de curtición vegetal</li>
            <li className="border-b border-stone-100 pb-2">✓ Herrajes de latón macizo</li>
            <li className="border-b border-stone-100 pb-2">✓ Hilos encerados de alta resistencia</li>
          </ul>
        </div>
      </div>
    </div>
  );
}