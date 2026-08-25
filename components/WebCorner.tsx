import Image from "next/image";

interface WebCornerProps {
  className?: string;
  flip?: boolean;
}

export default function WebCorner({ className = "", flip = false }: WebCornerProps) {
  return (
    <div className={`${className} animate-web-pulse`} aria-hidden="true">
      <Image
        src="/assets/web.png"
        alt=""  
        width={320}
        height={320}
        className={`h-full w-full object-contain ${flip ? "rotate-180" : ""}`}
      />
    </div>
  );
}
