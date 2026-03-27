"use client";
import { useEffect, useState } from "react";

const ROLES = [
  "Full-Stack Developer",
  "React & Next.js Engineer",
  "Shopify Developer",
  "UI/UX Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          30
        );
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--accent)] opacity-[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[var(--accent-2)] opacity-[0.05] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] text-xs font-mono mb-8"
          style={{ animation: "fadeUp 0.5s ease 0.1s forwards", opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent-2)] animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-800 tracking-tight mb-4 leading-none"
          style={{ animation: "fadeUp 0.6s ease 0.2s forwards", opacity: 0 }}
        >
          <span className="text-[var(--text)]">Reynier</span>
          <br />
          <span className="gradient-text glow-text">Querijero</span>
        </h1>

        {/* Typewriter role */}
        <div
          className="h-10 flex items-center justify-center mb-6"
          style={{ animation: "fadeUp 0.6s ease 0.35s forwards", opacity: 0 }}
        >
          <p className="font-mono text-lg md:text-xl text-[var(--accent)]">
            {displayed}
            <span className="animate-blink">|</span>
          </p>
        </div>

        {/* Tagline */}
        <p
          className="text-[var(--muted)] text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
          style={{ animation: "fadeUp 0.6s ease 0.5s forwards", opacity: 0 }}
        >
          Building performant web experiences from backend APIs to pixel-perfect
          frontends. Based in{" "}
          <span className="text-[var(--text)]">Rodriguez, Rizal 🇵🇭</span>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 justify-center"
          style={{ animation: "fadeUp 0.6s ease 0.65s forwards", opacity: 0 }}
        >
          <a
            href="#experience"
            className="px-8 py-3 rounded bg-[var(--accent)] text-white font-mono text-sm hover:opacity-90 transition-opacity glow"
          >
            View my work
          </a>
          <a
            href="https://github.com/ReynierQ"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded border border-[var(--border)] text-[var(--muted)] font-mono text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            GitHub ↗
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animation: "fadeIn 1s ease 1.2s forwards", opacity: 0 }}
        >
          <span className="text-[var(--muted)] text-xs font-mono">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[var(--accent)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
