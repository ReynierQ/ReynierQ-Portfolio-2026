"use client";
import { useReveal } from "@/hooks/useReveal";

const highlights = [
  { icon: "⚡", label: "Full-Stack Dev", desc: "End-to-end web apps from DB to UI" },
  { icon: "🛍️", label: "Shopify Expert", desc: "Custom themes, apps & flows" },
  { icon: "🔗", label: "API Architect", desc: "REST, WebSocket, real-time systems" },
  { icon: "🎨", label: "UI Craftsman", desc: "Pixel-perfect, performant interfaces" },
];

export default function Introduction() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="introduction"
      className="py-24 px-6 bg-[var(--surface)] relative overflow-hidden"
    >
      {/* decorative accent bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-40" />

      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          {/* Label */}
          <p className="font-mono text-[var(--accent)] text-sm mb-3">
            01. introduction
          </p>

          {/* Headline */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight mb-5">
                Hi, I&apos;m{" "}
                <span className="gradient-text">Reynier</span> 👋
              </h2>
              <p className="text-[var(--text)] text-lg leading-relaxed mb-4">
                A passionate full-stack web developer from{" "}
                <span className="text-[var(--accent)]">Rodriguez, Rizal, Philippines</span>,
                dedicated to building web applications that are fast, scalable,
                and delightful to use.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                I graduated with a{" "}
                <span className="text-[var(--text)]">
                  Bachelor of Science in Information Technology
                </span>{" "}
                majoring in Mobile and Web Application from National University.
                Since then, I&apos;ve worked across startups and product companies,
                growing from an R&D intern to a developer owning complete
                features end-to-end.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                When I&apos;m not coding, I&apos;m exploring new technologies,
                contributing to conference research, and leveling up my craft.
                I believe great software is built at the intersection of technical
                skill and genuine curiosity — and I bring both.
              </p>
            </div>

            {/* Right: quick-facts card */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 space-y-4">
              <p className="font-mono text-xs text-[var(--muted)] uppercase tracking-widest mb-4">
                Quick facts
              </p>
              {[
                { label: "📍 Location", value: "Rodriguez, Rizal, PH" },
                { label: "📧 Email", value: "reynierquerijero@gmail.com" },
                { label: "🔗 LinkedIn", value: "reynier-querijero" },
                { label: "💻 GitHub", value: "ReynierQ" },
                { label: "🎓 Degree", value: "BS IT — National University" },
                { label: "📱 Phone", value: "+63 977 237 4694" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 py-2 border-b border-[var(--border)] last:border-0"
                >
                  <span className="text-sm text-[var(--muted)] font-mono w-36 shrink-0">
                    {item.label}
                  </span>
                  <span className="text-sm text-[var(--text)]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What I do — 4 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent)]/60 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-2xl mb-3">{h.icon}</div>
                <h3 className="font-display font-700 text-base mb-1 group-hover:text-[var(--accent)] transition-colors">
                  {h.label}
                </h3>
                <p className="text-[var(--muted)] text-xs leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
