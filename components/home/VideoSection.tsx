export default function VideoSection() {
  return (
    <section className="w-full py-1 bg-white">
      <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden relative">
        {/* Placeholder de video (usando una imagen con movimiento simulado por ahora o un video real si tuvieras URL) */}
        {/* Para la demo usaremos un video stock de pexels o similar si es posible, si no, simulamos con div */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90"
        >
          <source src="/HP_videotest3.mp4" type="video/mp4" />
          Tu navegador no soporta video.
        </video>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h3 className="text-white/80 text-xs tracking-[0.4em] font-light uppercase">
            The Art of Making
          </h3>
        </div>
      </div>
    </section>
  );
}