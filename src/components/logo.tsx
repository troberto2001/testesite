import type { SVGProps } from "react";
import Image from "next/image";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <div className="flex items-center gap-2" >
    <Image
        src="https://images.unsplash.com/photo-1718972839959-19c9ba144b6c?w=40"
        alt="LimpaTelhados Logo"
        width={32}
        height={32}
        className="text-primary"
      />
    <span className="font-headline text-xl font-bold">LimpaTelhados</span>
  </div>
);

export default Logo;