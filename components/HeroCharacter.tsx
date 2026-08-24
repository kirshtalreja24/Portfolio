"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useGsapScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

// TODO(content): swap this for a real full-body standing/hanging illustration —
// the mask crop is a stand-in so the scroll-linked motion can be built and tested now.
export default function HeroCharacter() {
  const figureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = useGsapScrollTrigger();
    const track = document.getElementById("character-track");
    if (prefersReducedMotion() || !track || !figureRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        figureRef.current,
        { yPercent: 0, rotate: -4 },
        {
          yPercent: 92,
          rotate: 4,
          ease: "none",
          scrollTrigger: {
            trigger: track,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={figureRef}
      className="pointer-events-none absolute right-4 top-0 hidden h-28 w-28 overflow-hidden rounded-full border-4 border-primary/70 shadow-xl lg:block"
      aria-hidden="true"
    >
      <Image
        src="/assets/spiderman-mask.png"
        alt=""
        fill
        sizes="112px"
        className="object-cover"
      />
    </div>
  );
}
