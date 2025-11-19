import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import WhatsAppBalloon from '@/components/whatsapp-balloon';

export const metadata: Metadata = {
  title: 'LimpaTelhados - Limpeza Profissional de Telhados',
  description: 'Especialistas em limpeza e manutenção de telhados. Deixe seu telhado como novo com a LimpaTelhados.',
};

const Favicon = () => {
    const faviconUrl = `data:image/svg+xml,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="white"/></svg>'
    )}`;
  
    return <link rel="icon" href={faviconUrl} sizes="any" />;
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <head>
        <Favicon />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <WhatsAppBalloon />
        <Toaster />
      </body>
    </html>
  );
}
