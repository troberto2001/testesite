import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Entre em Contato</h2>
          <p className="text-lg text-muted-foreground">
            Pronto para transformar seu telhado? Envie-nos uma mensagem e solicite um orçamento sem compromisso.
          </p>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Seu nome completo" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="seu@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea id="message" placeholder="Conte-nos um pouco sobre o que você precisa..." rows={5} />
          </div>
          <div className="text-center">
             <Button type="submit" size="lg" className="w-full md:w-auto">Enviar Mensagem</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
