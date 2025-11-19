import type { SVGProps } from "react";

const Logo = ({ width = 150, ...props }: SVGProps<SVGSVGElement> & { width?: number }) => {
  const aspectRatio = 200 / 150;
  const height = width / aspectRatio;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M42.3333 113.833C37.4167 110.5 35.5 105.833 35.5 101.5C35.5 95.5 38.5 90.5 43.5 87.5C41.5 83.5 41.1667 78.8333 42.5 75.5C43.8333 72.1667 46.5 69.8333 49.5 68.5C52.5 67.1667 55.8333 67.1667 58.5 68.5C57.1667 63.8333 57.5 59.1667 59.5 55.5C61.5 51.8333 65.1667 49.5 69.5 49.5C73.8333 49.5 77.5 51.8333 79.5 55.5C81.5 59.1667 81.8333 63.8333 80.5 68.5C83.5 67.1667 86.8333 67.1667 89.5 68.5C92.5 69.8333 95.1667 72.1667 96.5 75.5C97.8333 78.8333 97.5 83.5 95.5 87.5C100.5 90.5 103.5 95.5 103.5 101.5C103.5 105.833 101.583 110.5 96.6667 113.833" fill="#87CEEB" />

      <path d="M110 50L75 20L40 50V95H110V50Z" fill="#003B6D"/>
      <path d="M75 20L117 46V95H140L140 70L75 20Z" fill="#005297"/>
      
      <rect x="55" y="65" width="15" height="15" fill="#FFFFFF"/>
      <rect x="80" y="65" width="15" height="15" fill="#FFFFFF"/>

      <path d="M30 135L60 105L160 120L180 100L165 95L90 80L80 90L30 135Z" fill="#003B6D"/>
      <path d="M80 90L90 80L175 98L160 120L80 90Z" fill="#005297" />
      
      <text
        x="80"
        y="108"
        fill="#87CEEB"
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
          fontWeight: "bold",
        }}
        transform="rotate(-8 80 108)"
      >
        Limpatelhados
      </text>
    </svg>
  );
};

export default Logo;
