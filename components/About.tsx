import WebCorner, { WEB_CORNER_SIZE } from "./WebCorner";
import WebStrand from "./WebStrand";
import { skills } from "@/data/skills";

const featuredSkills = skills.filter((skill) => skill.featured).map((skill) => skill.name);

export default function About() {
  return (
    <section id="about" className="web-watermark relative bg-surface-soft py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <WebCorner
            className={`pointer-events-none absolute -left-10 -top-10 z-10 opacity-60 ${WEB_CORNER_SIZE}`}
          />

          <p className="eyebrow mb-4">🕸 Behind the Mask</p>
          <h2 className="section-heading">
            KIRSH 
            <br />
            TALREJA.
          </h2>

          {/* TODO(content): replace with real bio copy. */}

          <div className="mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-ink/60">
              Primary Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {featuredSkills.map((tech) => (
                <span
                  key={tech}
                  className="cursor-default rounded-full border border-ink/10 bg-surface px-4 py-1.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md"
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
