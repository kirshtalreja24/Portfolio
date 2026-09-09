import Image from "next/image";

/** Shared default size — keep every WebCorner call site in sync rather than each inventing its own. */
export const WEB_CORNER_SIZE = "h-48 w-48 md:h-64 md:w-64";

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
