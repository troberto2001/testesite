import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="home" className="relative w-full h-[60vh] md:h-[80vh] min-h-[400px] md:min-h-[500px] flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-shadow-lg">
          Telhado Limpo e Renovado com Sofisticação
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-neutral-200">
          Oferecemos limpeza profissional que protege, embeleza e valoriza o seu imóvel.
        </p>
        <Button size="lg" asChild className="text-lg font-semibold">
          <a href="tel:+351966919593">Contactar já</a>
        </Button>
      </div>
    </section>
  );
}
