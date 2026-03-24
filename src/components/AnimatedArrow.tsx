interface AnimatedArrowProps {
  label: string;
}

const AnimatedArrow = ({ label }: AnimatedArrowProps) => (
  <div className="flex justify-center animated-arrow-container">
    <svg
      className="w-[160px] h-[120px] sm:w-[200px] sm:h-[140px] md:w-[240px] md:h-[160px] pointer-events-none"
      viewBox="0 0 240 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Badge */}
      <rect
        x="55"
        y="0"
        rx="14"
        ry="14"
        width="130"
        height="44"
        fill="hsl(25, 95%, 53%)"
        className="animated-arrow-badge-bg"
      />
      <text
        x="120"
        y="30"
        fill="white"
        fontSize="22"
        fontWeight="900"
        fontFamily="Inter, sans-serif"
        textAnchor="middle"
        className="animated-arrow-badge-text"
      >
        {label}
      </text>
      {/* Curvy arrow shaft */}
      <path
        d="M120 46C125 65 135 80 130 95C125 110 115 120 120 140"
        stroke="hsl(25, 95%, 53%)"
        strokeWidth="6"
        strokeLinecap="round"
        className="animated-arrow-shaft"
      />
      {/* Arrow tip */}
      <path
        d="M108 130L120 148L132 130"
        stroke="hsl(25, 95%, 53%)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animated-arrow-tip"
      />
    </svg>
  </div>
);

export default AnimatedArrow;
