"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useGsapScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export default function WebStrand() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = useGsapScrollTrigger();
    if (prefersReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        lineRef.current,
        { scaleY: 0 },
        { scaleY: 1, duration: 0.6, ease: "power2.out", transformOrigin: "top" }
      ).fromTo(
        photoRef.current,
        { y: -180, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1.1, ease: "elastic.out(1, 0.55)" },
        "-=0.1"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center">
      <div
        ref={lineRef}
        className="h-24 w-0.5 origin-top bg-primary motion-reduce:scale-y-100"
      />
      <div
        ref={photoRef}
        className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-primary shadow-lg motion-reduce:opacity-100 sm:h-64 sm:w-64"
      >
        <Image
          src="/assets/portrait.jpg"
          alt="Kirsh Talreja"
          fill
          sizes="256px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
