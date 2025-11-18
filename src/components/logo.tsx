import type { SVGProps } from "react";
import Image from "next/image";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <div className="flex items-center gap-2" >
    <Image
        src="https://i.imgur.com/gO1Xg9P.png"
        alt="LimpaTelhados Logo"
        width={32}
        height={32}
        className="text-primary"
      />
    <span className="font-headline text-xl font-bold">LimpaTelhados</span>
  </div>
);

export default Logo;