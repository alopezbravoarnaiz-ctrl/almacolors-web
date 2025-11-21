import Hero from "@/components/home/Hero";
import VideoSection from "@/components/home/VideoSection";
import CategoryNav from "@/components/home/CategoryNav";
import Philosophy from "@/components/home/Philosophy";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Estructura vertical simple.
        El espaciado y el layout se manejan internamente en cada componente
        para asegurar la independencia visual.
      */}
      
      <Hero />
      
      <div className="space-y-0"> {/* space-y-0 para control total dentro de los componentes */}
        <CategoryNav />
        <VideoSection />
        <Philosophy />
        <Newsletter />
      </div>
    </div>
  );
}