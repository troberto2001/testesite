import type { SVGProps } from "react";

const Logo = ({ width = 150, ...props }: SVGProps<SVGSVGElement> & { width?: number }) => {
  const aspectRatio = 150 / 40;
  const height = width / aspectRatio;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 150 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="hsl(var(--primary))"
          style={{
              fontFamily: "var(--font-headline), serif",
              fontSize: "24px",
              fontWeight: "bold",
          }}
      >
          LimpaTelhados
      </text>
    </svg>
  );
};

export default Logo;
