"use client";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

const links = [
  { label: "Intro", href: "#introduction" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md border-b border-[var(--border)]" : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "color-mix(in srgb, var(--bg) 92%, transparent)" } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display font-800 text-xl tracking-tight">
          <span className="gradient-text">RQ</span>
          <span className="text-[var(--text)] text-sm font-mono ml-2">.dev</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a key={link.href} href={link.href}
              className="text-[var(--text)] hover:text-[var(--accent)] text-sm font-body transition-colors duration-200">
              {link.label}
            </a>
          ))}
          <button onClick={toggle} aria-label="Toggle theme"
            className="p-2 rounded-lg border border-[var(--border)] text-[var(--text)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a href="#contact"
            className="px-4 py-2 text-sm font-mono border border-[var(--accent)] text-[var(--accent)] rounded hover:bg-[var(--accent)] hover:text-white transition-all duration-200">
            Hire me
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggle} aria-label="Toggle theme"
            className="p-2 rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] transition-all">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className="text-[var(--muted)] hover:text-[var(--text)]"
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : (
                <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[var(--surface)] border-b border-[var(--border)] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link.href} href={link.href}
              className="text-[var(--text)] hover:text-[var(--accent)] text-sm font-body transition-colors"
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
