"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollScrub, TRACK_ID } from "@/lib/gsap";

export default function HeroCharacter() {
  const figureRef = useRef<HTMLDivElement>(null);

  useScrollScrub(
    figureRef,
    ({ gsap, scrollVars }) => {
      gsap.fromTo(
        figureRef.current,
        { yPercent: 0, rotate: -4 },
        scrollVars({ yPercent: 92, rotate: 4 })
      );
    },
    { triggerId: TRACK_ID }
  );

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
