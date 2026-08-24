import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-surface py-32">
      <div className="mx-auto max-w-2xl px-6">
        <p className="eyebrow mb-4 text-center">Get in Touch</p>
        <h2 className="section-heading mb-12 text-center">Contact.</h2>

        <div className="rounded-2xl border border-ink/10 bg-surface-soft p-8 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
