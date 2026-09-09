import Image from "next/image";

export const STICKERS = {
  exclaim: "/stickers/download__1_-removebg-preview.png",
  camera: "/stickers/download__2_-removebg-preview.png",
  headphones: "/stickers/download__3_-removebg-preview.png",
  star: "/stickers/download__5_-removebg-preview.png",
} as const;

type StickerProps = {
  src: (typeof STICKERS)[keyof typeof STICKERS];
  className: string;
  rotate?: number;
  size?: number;
};

/**
 * Purely decorative — pointer-events-none and hidden below md so it never
 * competes with interactive content or crowds the already-tight mobile layout.
 */
export default function Sticker({ src, className, rotate = 0, size = 80 }: StickerProps) {
  return (
    <div
      className={`pointer-events-none absolute hidden opacity-90 drop-shadow-md md:block ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, width: size }}
      aria-hidden="true"
    >
      <Image src={src} alt="" width={size} height={size} className="h-auto w-full" />
    </div>
  );
}
