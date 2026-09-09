const KEYWORDS = [
  "AI & MACHINE LEARNING",
  "FULL STACK ENGINEER",
  "PYTORCH & TENSORFLOW",
  "REACT & NODE.JS",
  "GENERATIVE AI",
  "COMPUTER VISION",
  "PYTHON & FASTAPI",
  "GSAP ANIMATIONS",
];

function Track({ reverse = false }: { reverse?: boolean }) {
  const items = [...KEYWORDS, ...KEYWORDS];
  return (
    <div
      className={`marquee-track flex w-max shrink-0 items-center gap-6 ${
        reverse ? "animate-marquee-right" : "animate-marquee-left"
      }`}
    >
      {items.map((word, i) => (
        <span key={`${word}-${i}`} className="flex items-center gap-6">
          <span className="text-sm font-bold uppercase tracking-widest text-white">
            {word}
          </span>
          <span className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export default function MarqueeStrip() {
  return (
    <div className="relative z-10 -mt-6 flex flex-col gap-2 overflow-hidden">
      <div className="flex -skew-y-2 overflow-hidden bg-primary py-3">
        <Track />
      </div>
      <div className="flex skew-y-2 overflow-hidden bg-ink py-3">
        <Track reverse />
      </div>
    </div>
  );
}
