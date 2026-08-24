import WebStrand from "./WebStrand";

const STACK = ["React", "Node.js", "Express", "PostgreSQL", "MongoDB", "Docker"];

export default function About() {
  return (
    <section id="about" className="web-watermark relative bg-surface-soft py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-4">🕸 Behind the Mask</p>
          <h2 className="section-heading">
            Sri
            <br />
            Sushmita.
          </h2>

          {/* TODO(content): replace with real bio copy. */}

          <div className="mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-ink/60">
              Primary Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-ink/10 bg-surface px-4 py-1.5 text-sm font-semibold text-ink"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <WebStrand />
      </div>
    </section>
  );
}
