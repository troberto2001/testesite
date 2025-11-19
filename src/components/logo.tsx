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
        <path d="M11.6948 5.38505L10.0637 6.4357L11.1143 4.80458L9.48318 3.75393L11.1143 2.70328L12.7454 3.75393L11.6948 5.38505Z" fill="white" stroke="white" strokeWidth="0.5"/>
        <path d="M19.6948 5.38505L18.0637 6.4357L19.1143 4.80458L17.4832 3.75393L19.1143 2.70328L20.7454 3.75393L19.6948 5.38505Z" fill="white" stroke="white" strokeWidth="0.5"/>
        <path d="M15.6948 9.38505L14.0637 10.4357L15.1143 8.80458L13.4832 7.75393L15.1143 6.70328L16.7454 7.75393L15.6948 9.38505Z" fill="white" stroke="white" strokeWidth="0.5"/>
        <path d="M23.6948 9.38505L22.0637 10.4357L23.1143 8.80458L21.4832 7.75393L23.1143 6.70328L24.7454 7.75393L23.6948 9.38505Z" fill="white" stroke="white" strokeWidth="0.5"/>
        <path d="M7.6948 9.38505L6.0637 10.4357L7.1143 8.80458L5.48318 7.75393L7.1143 6.70328L8.74542 7.75393L7.6948 9.38505Z" fill="white" stroke="white" strokeWidth="0.5"/>
        <path d="M3.6948 13.3851L2.0637 14.4357L3.1143 12.8046L1.48318 11.7539L3.1143 10.7033L4.74542 11.7539L3.6948 13.3851Z" fill="white" stroke="white" strokeWidth="0.5"/>
        <path d="M11.6948 13.3851L10.0637 14.4357L11.1143 12.8046L9.48318 11.7539L11.1143 10.7033L12.7454 11.7539L11.6948 13.3851Z" fill="white" stroke="white" strokeWidth="0.5"/>
        <path d="M1.3335 19.5L25.3335 11.5" stroke="white" strokeWidth="2"/>
        <path d="M1.3335 20.5L25.3335 12.5" stroke="white" strokeWidth="2"/>
        <path d="M7.3335 19.5V30.8333" stroke="white" strokeWidth="2"/>
        <path d="M26.3335 17.5V28.8333" stroke="white" strokeWidth="2"/>
        <path d="M25.3335 18.5H36.6668" stroke="white" strokeWidth="2"/>
        <text
            x="95"
            y="25"
            fill="hsl(var(--primary))"
            textAnchor="middle"
            style={{
            fontFamily: "var(--font-headline), serif",
            fontSize: "18px",
            fontWeight: "bold",
            }}
        >
            LimpaTelhados
        </text>
    </svg>
  );
};

export default Logo;
