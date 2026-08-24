"use client";

import { useEffect, useRef } from "react";
import { User } from "lucide-react";
import { useGsapScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

// TODO(content): swap the placeholder avatar circle for a real profile photo.
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
        { y: -40, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.6)" },
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
        className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-primary bg-surface-soft shadow-lg motion-reduce:opacity-100"
      >
        <User className="h-16 w-16 text-primary" strokeWidth={1.5} />
      </div>
    </div>
  );
}
