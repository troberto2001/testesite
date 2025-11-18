import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    id: "client-1",
    name: "João da Silva",
    quote: "O serviço da LimpaTelhados superou minhas expectativas. Meu telhado parece novo em folha! Profissionalismo e qualidade incríveis.",
  },
  {
    id: "client-2",
    name: "Maria Oliveira",
    quote: "Fiquei impressionada com o cuidado e a atenção aos detalhes. A equipe foi muito educada e o resultado final é espetacular. Recomendo a todos.",
  },
  {
    id: "client-3",
    name: "Carlos Pereira",
    quote: "Contratei a manutenção preventiva e foi a melhor decisão. Identificaram um problema que eu nem sabia que existia. Serviço honesto e eficiente.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">O que Nossos Clientes Dizem</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação de quem confia em nosso trabalho é a nossa maior recompensa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find((p) => p.id === testimonial.id);
            return (
              <Card key={testimonial.id} className="flex flex-col justify-between">
                <CardContent className="p-6 text-center flex-grow flex flex-col items-center">
                  {image && (
                     <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                        <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} width={100} height={100} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <blockquote className="italic text-muted-foreground flex-grow">
                    “{testimonial.quote}”
                  </blockquote>
                </CardContent>
                <div className="p-6 pt-0 text-center">
                    <cite className="font-headline font-semibold not-italic">{testimonial.name}</cite>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
