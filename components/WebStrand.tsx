"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollTimeline } from "@/lib/gsap";

export default function WebStrand() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useScrollTimeline(containerRef, (tl, { duration, ease }) => {
    tl.fromTo(
      lineRef.current,
      { scaleY: 0 },
      { scaleY: 1, duration: duration.lineDraw, ease: ease.lineDraw, transformOrigin: "top" }
    )
      .fromTo(
        photoRef.current,
        { y: -180, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: duration.photoPop, ease: ease.photoPop },
        "-=0.1"
      )
      .call(() => {
        // Hand off to the ambient CSS sway loop once the entrance settles — pivoting
        // from the top so it reads as swinging from the string, not spinning in place.
        photoRef.current?.classList.add("origin-top", "animate-sway");
      });
  });

  return (
    <div ref={containerRef} className="flex flex-col items-center">
      <div
        ref={lineRef}
        className="h-40 w-0.5 origin-top bg-primary motion-reduce:scale-y-100"
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
          className="object-cover object-top grayscale transition-[filter] duration-500 hover:grayscale-0"
        />
      </div>
    </div>
  );
}
