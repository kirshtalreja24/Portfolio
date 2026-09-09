import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="absolute inset-0 h-full w-full md:left-1/2 md:w-1/2">
      <Image
        src="/assets/spiderman-mask.png"
        alt="Spider-Man mask"
        fill
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />

      {/* keeps hero copy legible over the full-bleed image on mobile, where this panel spans the whole section */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent md:bg-gradient-to-r md:from-surface md:via-transparent md:to-transparent" />
    </div>
  );
}
