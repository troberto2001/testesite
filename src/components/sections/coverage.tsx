import { MapPin } from "lucide-react";

export default function CoverageSection() {
  return (
    <section id="atuacao" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full p-3 mb-4">
            <MapPin className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            A Nossa Área de Atuação
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Atuamos em toda a Grande Lisboa e na Península de Setúbal, levando os nossos serviços de elevada qualidade até si. Se estiver localizado nestas regiões, não hesite em contactar-nos para solicitar um orçamento gratuito.
          </p>
        </div>
      </div>
    </section>
  );
}
