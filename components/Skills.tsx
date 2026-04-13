"use client";
import { useReveal } from "@/hooks/useReveal";

const categories = [
  {
    title: "Frontend",
    icon: "◈",
    skills: ["React", "React Native", "Next.js", "Angular", "HTML", "CSS / Tailwind", "Vite", "Flutter"],
  },
  {
    title: "Backend",
    icon: "◉",
    skills: ["Node.js", "Express", "RESTful API", "WebSocket", "PostgreSQL", "MongoDB", "MySQL", "SQLite"],
  },
  {
    title: "Shopify",
    icon: "◆",
    skills: ["Shopify Liquid", "Shopify API", "Shopify Apps", "Metafields", "Shopify Flow", "Dotdigital"],
  },
  {
    title: "Languages",
    icon: "◇",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "JSON"],
  },
  {
    title: "Tooling",
    icon: "◐",
    skills: ["Git", "Figma", "AI Tools", "Adobe XD", "Adobe Photoshop", "Power Automate", "Power Apps"],
  },
  {
    title: "Soft Skills",
    icon: "◑",
    skills: ["Leadership", "Fast Learner", "Critical Thinking", "Problem Solving", "Commitment"],
  },
];

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <p className="font-mono text-[var(--accent)] text-sm mb-3">
            06. skills
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-700 mb-12">
            What I <span className="gradient-text">work with</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[var(--accent)] text-xl">{cat.icon}</span>
                  <h3 className="font-display font-700 text-lg">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-[var(--bg)] text-[var(--muted)] border border-[var(--border)] group-hover:border-[var(--accent)]/20 group-hover:text-[var(--text)] transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
