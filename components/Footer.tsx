import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

// TODO(content): point these at your real GitHub/LinkedIn/email.
const SOCIALS = [
  { icon: Github, href: "https://github.com/kirshtalreja24", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/kirshtalreja", label: "LinkedIn" },
  { icon: Mail, href: "mailto:khansalaar23@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Kirsh Talreja. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="text-white/70 transition-colors hover:text-primary"
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </a>
          ))}
        </div>

        <a
          href="#top"
          aria-label="Back to top"
          className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
        >
          <ArrowUp className="h-4 w-4" strokeWidth={2} />
          Back to top
        </a>
      </div>
    </footer>
  );
}
