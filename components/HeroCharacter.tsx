"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useGsapScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

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
      className="pointer-events-none absolute right-6 top-0 hidden h-52 w-32 lg:block"
      aria-hidden="true"
    >
      <Image
        src="/assets/spiderman-hanging.jpg"
        alt=""
        fill
        sizes="128px"
        className="object-contain object-top mix-blend-multiply"
      />
    </div>
  );
}
