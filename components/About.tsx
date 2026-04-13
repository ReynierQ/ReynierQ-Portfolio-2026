"use client";
import { useReveal } from "@/hooks/useReveal";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "3", label: "Companies" },
  { value: "10+", label: "Tech Stack" },
  { value: "BSIT - MWA", label: "Degree" },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`reveal ${visible ? "visible" : ""} grid md:grid-cols-2 gap-16 items-center`}
        >
          {/* Left: text */}
          <div>
            <p className="font-mono text-[var(--accent)] text-sm mb-3">
              02. about me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-700 mb-6 leading-tight">
              Crafting digital{" "}
              <span className="gradient-text">experiences</span> that matter
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              I&apos;m a full-stack web developer from the Philippines, with a
              Bachelor&apos;s in Information Technology (Mobile & Web
              Applications) from National University. I love turning complex
              problems into clean, elegant solutions.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mb-8">
              From building real-time streaming platforms with WebSocket, to
              revamping e-commerce storefronts on Shopify, to architecting
              database-synced failover systems — I thrive across the full stack.
              Currently at{" "}
              <span className="text-[var(--accent)]">Beyond Innovations Inc.</span>{" "}
              working on JBL Store Philippines.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/reynier-querijero"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-mono text-[var(--muted)] hover:text-[var(--accent)] border-b border-transparent hover:border-[var(--accent)] transition-all pb-0.5"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/ReynierQ"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-mono text-[var(--muted)] hover:text-[var(--accent)] border-b border-transparent hover:border-[var(--accent)] transition-all pb-0.5"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] transition-colors group"
              >
                <p className="font-display text-4xl font-800 gradient-text mb-1 group-hover:glow-text">
                  {s.value}
                </p>
                <p className="text-[var(--muted)] text-sm font-mono">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
