interface SpiderwebSVGProps {
  className?: string;
  spin?: boolean;
}

export default function SpiderwebSVG({ className = "", spin = true }: SpiderwebSVGProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${className} ${spin ? "animate-spin-slow" : ""}`}
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="#B71C24" strokeWidth="1" fill="none" opacity="0.35">
        {[0, 30, 60, 90, 120, 150].map((angle) => (
          <line
            key={angle}
            x1="100"
            y1="100"
            x2={100 + 95 * Math.cos((angle * Math.PI) / 180)}
            y2={100 + 95 * Math.sin((angle * Math.PI) / 180)}
          />
        ))}
        {[20, 40, 60, 80, 100].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} />
        ))}
      </g>
    </svg>
  );
}
