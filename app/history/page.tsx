export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-24 px-6">
      <div className="max-w-3xl mx-auto space-y-12 text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase">
          Desde 2015
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-primary">
          Nuestra Historia
        </h1>
        <div className="prose prose-stone mx-auto text-stone-600 font-light leading-relaxed">
          <p>
            Todo comenzó con Alma, nuestra Teckel. Buscar un collar que fuera resistente pero suave para su piel sensible se convirtió en una odisea.
          </p>
          <p>
            Decidimos aprender el oficio de la marroquinería tradicional y combinarlo con materiales modernos. Lo que empezó en la mesa de nuestra cocina, hoy es un pequeño taller familiar donde cada pieza se corta, cose y remata a mano.
          </p>
        </div>
        <div className="aspect-video bg-stone-200 w-full mt-12 grayscale opacity-50">
          {/* Aquí iría una foto antigua del taller o de la perra fundadora */}
          <div className="w-full h-full flex items-center justify-center text-stone-400">
            [Foto de Origen]
          </div>
        </div>
      </div>
    </div>
  );
}