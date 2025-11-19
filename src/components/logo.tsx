import type { SVGProps } from "react";

const Logo = ({ width = 150, ...props }: SVGProps<SVGSVGElement> & { width?: number }) => {
  const aspectRatio = 150 / 110;
  const height = width / aspectRatio;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 150 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M86.3217 55.4371L46.3379 75.6455L50.158 43.2555L24.3379 23.0471L55.4484 22.2824L65.5118 0.437119L84.814 26.5471L114.422 17.5471L104.358 45.419L129.422 60.4371L98.3113 63.4824L86.3217 92.591L72.4913 65.6455L86.3217 55.4371Z"
        fill="hsl(var(--primary))"
      />
      <text
        x="50%"
        y="95%"
        dominantBaseline="text-after-edge"
        textAnchor="middle"
        style={{
          fill: "hsl(var(--foreground))",
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        LimpaTelhados
      </text>
    </svg>
  );
};

export default Logo;
