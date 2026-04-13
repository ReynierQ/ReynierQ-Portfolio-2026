"use client";
import { useReveal } from "@/hooks/useReveal";

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    major: "Major in Mobile and Web Application",
    institution: "National University",
    level: "College",
    period: "2019 – 2024",
    icon: "🎓",
    color: "var(--accent)",
    achievements: [
      "3rd International Conference on Information and Computing Research (iCORE) 2024",
      "TUGON: A Webinar Series Harnessing CCIT Skills",
      "Internet of Things: Bridging the Physical and Digital Worlds",
    ],
    description:
      "Completed a four-year program focused on designing and developing mobile and web applications. Gained hands-on experience with modern frameworks, databases, software engineering principles, and research.",
  },
  {
    degree: "TVL Information in Communication Technology",
    major: "Technical-Vocational-Livelihood Track",
    institution: "Polytechnic University of the Philippines",
    level: "Senior High School",
    period: "2017 – 2019",
    icon: "📚",
    color: "var(--accent-2)",
    achievements: ["ICT Technology Conference"],
    description:
      "Pursued a technology-focused senior high school curriculum, building foundational knowledge in ICT, networking, and computer systems that paved the way for college studies.",
  },
];

export default function Education() {
  const { ref, visible } = useReveal();

  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <p className="font-mono text-[var(--accent)] text-sm mb-3">
            05. education
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-700 mb-12">
            Academic <span className="gradient-text">background</span>
          </h2>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent hidden sm:block" />

            <div className="space-y-10">
              {education.map((edu, i) => (
                <div key={i} className="relative sm:pl-20">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 md:left-5 top-6 w-5 h-5 rounded-full border-2 hidden sm:flex items-center justify-center text-xs"
                    style={{
                      borderColor: edu.color,
                      backgroundColor: "var(--bg)",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: edu.color }}
                    />
                  </div>

                  {/* Card */}
                  <div className="p-6 md:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/40 transition-all duration-300 group">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{edu.icon}</span>
                        <div>
                          <h3 className="font-display text-xl md:text-2xl font-700 leading-tight">
                            {edu.degree}
                          </h3>
                          <p
                            className="font-mono text-sm mt-0.5"
                            style={{ color: edu.color }}
                          >
                            {edu.major}
                          </p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="px-3 py-1 rounded-full text-xs font-mono border border-[var(--border)] text-[var(--muted)]">
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 rounded text-xs font-mono bg-[var(--bg)] border border-[var(--border)] text-[var(--text)]">
                        🏫 {edu.institution}
                      </span>
                      <span className="px-3 py-1 rounded text-xs font-mono bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)]">
                        {edu.level}
                      </span>
                    </div>

                    <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <p className="font-mono text-xs text-[var(--muted)] uppercase tracking-widest mb-3">
                        Notable events & activities
                      </p>
                      <ul className="space-y-2">
                        {edu.achievements.map((a, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                            <span style={{ color: edu.color }} className="mt-1 shrink-0">▹</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
