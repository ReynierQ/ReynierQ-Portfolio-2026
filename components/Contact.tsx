"use client";
import { useReveal } from "@/hooks/useReveal";

export default function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="py-28 px-6 bg-[var(--surface)]">
      <div className="max-w-3xl mx-auto text-center">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <p className="font-mono text-[var(--accent)] text-sm mb-3">
            07. contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-700 mb-5">
            Get in <span className="gradient-text">touch</span>
          </h2>
          <p className="text-[var(--muted)] text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            I&apos;m currently open to new opportunities. Whether you have a project in
            mind or just want to say hi — my inbox is always open.
          </p>

          <a
            href="mailto:reynierquerijero@gmail.com"
            className="inline-block px-10 py-4 rounded border border-[var(--accent)] text-[var(--accent)] font-mono text-sm hover:bg-[var(--accent)] hover:text-white transition-all duration-300 glow mb-12"
          >
            Say Hello →
          </a>

          {/* Social links */}
          <div className="flex justify-center gap-8">
            {[
              { label: "Email", href: "mailto:reynierquerijero@gmail.com" },
              { label: "LinkedIn", href: "https://linkedin.com/in/reynier-querijero" },
              { label: "GitHub", href: "https://github.com/ReynierQ" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="text-sm font-mono text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
