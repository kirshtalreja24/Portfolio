"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollScrub, TRACK_ID } from "@/lib/gsap";

type Size = "sm" | "lg";

const SIZE_CLASSES: Record<Size, string> = {
  sm: "h-52 w-32",
  lg: "h-72 w-40",
};

const IMAGE_SIZES: Record<Size, string> = {
  sm: "128px",
  lg: "160px",
};

function DangleImage({ size }: { size: Size }) {
  return (
    <Image
      src="/assets/spiderman-hanging.jpg"
      alt=""
      fill
      sizes={IMAGE_SIZES[size]}
      className="object-contain object-top mix-blend-multiply"
    />
  );
}

function ScrollDangle({ size }: { size: Size }) {
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
      className={`pointer-events-none absolute right-6 top-0 hidden lg:block ${SIZE_CLASSES[size]}`}
      aria-hidden="true"
    >
      <DangleImage size={size} />
    </div>
  );
}

function SwayDangle({ size }: { size: Size }) {
  return (
    <div
      className="pointer-events-none absolute right-8 top-16 hidden origin-top animate-sway lg:block"
      aria-hidden="true"
    >
      <div className="mx-auto h-16 w-0.5 bg-primary/50" />
      <div className={`relative ${SIZE_CLASSES[size]}`}>
        <DangleImage size={size} />
      </div>
    </div>
  );
}

type SpiderDangleProps = {
  /** "scroll" scrubs against TRACK_ID; "sway" is an ambient CSS loop with a string-line accessory. */
  variant: "scroll" | "sway";
  size: Size;
};

export default function SpiderDangle({ variant, size }: SpiderDangleProps) {
  return variant === "scroll" ? <ScrollDangle size={size} /> : <SwayDangle size={size} />;
}
