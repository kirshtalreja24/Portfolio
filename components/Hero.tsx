import WebCorner from "./WebCorner";
import MaskReveal from "./MaskReveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-surface pt-24"
    >
      <MaskReveal />

      <WebCorner className="pointer-events-none absolute -left-10 -top-10 z-10 h-48 w-48 opacity-60 md:h-64 md:w-64" />
      <WebCorner
        flip
        className="pointer-events-none absolute -bottom-16 -right-10 z-10 h-48 w-48 opacity-60 md:h-64 md:w-64"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="max-w-xl">
          <p className="eyebrow mb-4">Your friendly neighborhood engineer</p>
          <h1 className="font-headline font-bold text-5xl italic uppercase leading-none tracking-tight text-ink headline-shadow md:text-7xl">
            Kirsh
            <br />
            Talreja.
          </h1>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Explore Projects
            </a>
            {/* TODO(content): point at the real resume file once it's added to public/assets/resume.pdf */}
            <a
              href="/assets/resume.pdf"
              download
              className="rounded-lg bg-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5 hover:bg-ink/80"
            >
              ↓ SDE_Resume.pdf
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
