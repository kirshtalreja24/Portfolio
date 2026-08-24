"use client";

import { useState } from "react";
import Image from "next/image";

export default function MaskReveal() {
  const [revealed, setRevealed] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setRevealed((r) => !r)}
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      aria-pressed={revealed}
      aria-label="Hover the face to reveal the real photo"
      className="group absolute inset-0 h-full w-full focus:outline-none md:left-1/2 md:w-1/2"
    >
      <Image
        src="/assets/spiderman-mask.png"
        alt="Masked identity"
        fill
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
        className={`object-cover transition-opacity duration-500 ease-out motion-reduce:transition-none ${
          revealed ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src="/assets/portrait.jpg"
        alt="Kirsh Talreja, unmasked"
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className={`object-cover object-top transition-opacity duration-500 ease-out motion-reduce:transition-none ${
          revealed ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* keeps hero copy legible over the full-bleed image on mobile, where this panel spans the whole section */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent md:bg-gradient-to-r md:from-surface md:via-transparent md:to-transparent" />

      <span className="absolute bottom-6 right-6 hidden rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
        {revealed ? "Hi, it's me" : "Hover to reveal"}
      </span>
    </button>
  );
}
