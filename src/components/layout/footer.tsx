import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LimpaTelhados. Todos os direitos reservados.
          </p>
          <Logo />
        </div>
      </div>
    </footer>
  );
}
