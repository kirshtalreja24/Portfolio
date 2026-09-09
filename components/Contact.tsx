"use client";

import { useRef } from "react";
import ContactForm from "./ContactForm";
import { useScrollTimeline } from "@/lib/gsap";

export default function Contact() {
  const introRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useScrollTimeline(
    introRef,
    (tl) => {
      tl.from([eyebrowRef.current, headingRef.current], {
        scale: 1.3,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.08,
      }).from(
        cardRef.current,
        { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
    },
    { start: "top 80%" }
  );

  return (
    <section id="contact" className="bg-surface py-32">
      <div ref={introRef} className="mx-auto max-w-2xl px-6">
        <p ref={eyebrowRef} className="eyebrow mb-4 text-center motion-reduce:opacity-100">
          Get in Touch
        </p>
        <h2 ref={headingRef} className="section-heading mb-12 text-center motion-reduce:opacity-100">
          Contact.
        </h2>

        <div
          ref={cardRef}
          className="rounded-2xl border border-ink/10 bg-surface-soft p-8 shadow-sm motion-reduce:opacity-100"
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
