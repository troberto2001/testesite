import type { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <div className="flex items-center gap-2" >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary"
      {...props}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
      <path d="m18 15-3-3-3 3" />
      <path d="m19 12-2-2" />
      <path d="m13 18-1-1" />
    </svg>
    <span className="font-headline text-xl font-bold">LimpaTelhados</span>
  </div>
);

export default Logo;
