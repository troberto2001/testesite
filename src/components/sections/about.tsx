import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
    const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  return (
    <section id="sobre" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              A Excelência que seu Telhado Merece
            </h2>
            <p className="text-lg text-muted-foreground">
              A LimpaTelhados nasceu da paixão por cuidar e valorizar cada detalhe de um lar. Com anos de experiência, nossa equipa utiliza técnicas avançadas e produtos de ponta para garantir um serviço de limpeza que não apenas embeleza, mas também protege seu patrimônio.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Equipa qualificada e segurada</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Equipamentos modernos e seguros</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Compromisso com a satisfação do cliente</span>
              </li>
            </ul>
            <Button asChild size="lg">
              <a href="tel:+351966919593">Contacte já</a>
            </Button>
          </div>
           <div className="order-first md:order-last">
             {aboutImage && (
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={800}
                    height={600}
                    className="rounded-lg shadow-xl"
                    data-ai-hint={aboutImage.imageHint}
                />
            )}
           </div>
        </div>
      </div>
    </section>
  );
}
