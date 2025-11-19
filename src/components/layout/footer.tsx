import Logo from "@/components/logo";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-semibold font-headline">Contacte-nos</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+351966919593" className="hover:text-primary">+351 966 919 593</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4" />
                <span>Lisboa, Portugal</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center gap-4">
             <Logo />
             <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} LimpaTelhados. Todos os direitos reservados.
             </p>
          </div>
          <div className="flex-1" />
        </div>
      </div>
    </footer>
  );
}
