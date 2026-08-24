import Image from "next/image";

interface WebCornerProps {
  className?: string;
  flip?: boolean;
}

export default function WebCorner({ className = "", flip = false }: WebCornerProps) {
  return (
    <div
      className={`${className} animate-spin-slow`}
      style={{ animationDuration: "90s" }}
      aria-hidden="true"
    >
      <Image
        src="/assets/web.png"
        alt=""
        width={420}
        height={594}
        className={`h-full w-full object-contain ${flip ? "rotate-180" : ""}`}
      />
    </div>
  );
}
