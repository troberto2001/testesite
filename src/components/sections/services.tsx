import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    id: "service-cleaning",
    title: "Limpeza Profunda",
    description: "Removemos sujeira, musgo e fungos com equipamentos de alta tecnologia, restaurando a cor original do seu telhado.",
  },
  {
    id: "service-resin",
    title: "Aplicação de Resina",
    description: "Aplicamos uma camada protetora de resina que impermeabiliza, dá brilho e aumenta a vida útil das telhas.",
  },
  {
    id: "service-maintenance",
    title: "Manutenção Preventiva",
    description: "Inspeção e reparos de pequenas avarias para garantir a integridade do seu telhado e evitar problemas futuros.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para um telhado impecável e protegido.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const image = PlaceHolderImages.find((p) => p.id === service.id);
            return (
              <Card key={service.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                <CardHeader className="p-0">
                  {image && (
                    <div className="aspect-w-16 aspect-h-9">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
