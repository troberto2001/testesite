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
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 110" fill="none"><path d="M40.3333 80.8333C35.4167 77.5 33.5 72.8333 33.5 68.5C33.5 62.5 36.5 57.5 41.5 54.5C39.5 50.5 39.1667 45.8333 40.5 42.5C41.8333 39.1667 44.5 36.8333 47.5 35.5C50.5 34.1667 53.8333 34.1667 56.5 35.5C55.1667 30.8333 55.5 26.1667 57.5 22.5C59.5 18.8333 63.1667 16.5 67.5 16.5C71.8333 16.5 75.5 18.8333 77.5 22.5C79.5 26.1667 79.8333 30.8333 78.5 35.5C81.5 34.1667 84.8333 34.1667 87.5 35.5C90.5 36.8333 93.1667 39.1667 94.5 42.5C95.8333 45.8333 95.5 50.5 93.5 54.5C98.5 57.5 101.5 62.5 101.5 68.5C101.5 72.8333 99.5833 77.5 94.6667 80.8333" fill="white"/><path d="M25 105L55 75L155 90L175 70L160 65L85 50L75 60L25 105Z" fill="white"/><path d="M75 60L85 50L170 68L155 90L75 60Z" fill="%23D4D4D8"/><text x="75" y="85" fill="hsl(45 93% 61%)" text-anchor="middle" style="font-family:Cormorant Garamond, serif;font-size:18px;font-weight:bold;">LimpaTelhados</text></svg>'
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