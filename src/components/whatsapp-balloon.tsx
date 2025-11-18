import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.454.882 3.16.E13 4.965.E13 5.42 0 9.817-4.398 9.817-9.817 0-5.42-4.397-9.818-9.817-9.818-5.42 0-9.817 4.398-9.817 9.818 0 1.838.495 3.553 1.359 4.999l-1.397 5.125 5.253-1.37z" />
      <path d="M15.232 12.57c-.201-.1-.956-.472-1.105-.526s-.258-.083-.367.083c-.108.166-.417.526-.512.633s-.188.124-.347.041c-.16-.083-.672-.247-1.282-.792s-.893-1.182-1-1.383c-.108-.201-.012-.307.07-.407s.201-.225.302-.338c.1-.112.133-.188.201-.314s.033-.225-.017-.307c-.05-.083-.367-.882-.501-1.207s-.262-.275-.367-.28c-.105-.005-.225-.005-.347-.005s-.307.041-.466.209c-.16.166-.617.599-.617 1.464s.633 1.698.717 1.824c.083.125 1.232 1.88 3.003 2.65.418.179.74.285 1.001.365.375.116.704.1.965-.041s.956-.39.1085-.758c.13-.15.13-.285.083-.383z" />
    </svg>
  );


export default function WhatsAppBalloon() {
  const phoneNumber = "351966919593";
  const message = "Olá! Gostaria de fazer um orçamento.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <Link 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Entre em contato pelo WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </Link>
  );
}
