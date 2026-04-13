"use client";
import { useReveal } from "@/hooks/useReveal";

type Project = {
  title: string;
  description: string;
  tags: string[];
  links?: { live?: string; repo?: string };
  note?: string;
  noteLink?: { label: string; url: string };
};

const projects: Project[] = [
  {
    title: "JBL Store Philippines",
    description:
      "Shopify storefront work including Liquid themes, landing pages, metafields for customer and order data, custom apps, and integrations with Dotdigital and internal tooling.",
    tags: ["Shopify", "Liquid", "Node.js", "Metafields", "json", "Google Analytics"],
    note: "Live client storefront —",
    noteLink: { label: "JBL Store PH", url: "https://jblstore.com.ph/" },
  },
  {
    title: "Onward PH",
    description:
      "Prototype that monitors primary server health, fails over to a backup automatically, and syncs SQLite data when the primary returns.",
    tags: ["Shopify", "Liquid", "Metafields", "Google Analytics"],
    note: "Live client storefront —",
    noteLink: { label: "Onward PH", url: "https://onward.ph/" },
  },
  {
    title: "Real-time Gaming Platform",
    description:
      "Frontend for a web-based gaming experience built with Vite and React, with real-time features powered by WebSocket and REST APIs.",
    tags: ["React", "Vite", "WebSocket", "REST"],
    note: "",
  },
  {
    title: "Warranty Registration",
    description:
      "Microsite for product registration with serial number validation, built on Next.js and Node.js with PostgreSQL for duplicate checks and reliable data storage.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    note: "Not yet deployed —",
    noteLink: { label: "Github Repository", url: "https://github.com/ReynierQ/NextJS-Warranty-Registration" },
  },
];

export default function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <p className="font-mono text-[var(--accent)] text-sm mb-3">
            04. projects
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-700 mb-4">
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mb-12 leading-relaxed">
            Highlights from e-commerce, internal tools, and full-stack
            prototypes.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => {
              const { live, repo } = project.links ?? {};
              const hasLinks = Boolean(live || repo);

              return (
                <article
                  key={project.title}
                  className="group flex flex-col p-6 md:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/40 transition-all duration-300"
                >
                  <h3 className="font-display text-xl font-700 mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-[var(--bg)] text-[var(--muted)] border border-[var(--border)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 pt-2 border-t border-[var(--border)]">
                    {live && (
                      <a
                        href={live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-mono text-[var(--accent)] hover:underline"
                      >
                        Live demo →
                      </a>
                    )}
                    {repo && (
                      <a
                        href={repo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-mono text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {!hasLinks && (project.note || project.noteLink) && (
                      <span className="text-xs font-mono text-[var(--muted)] leading-relaxed">
                        {project.note}{" "}
                        {project.noteLink && (
                          <a
                            href={project.noteLink.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[var(--accent)] hover:underline"
                          >
                            {project.noteLink.label} ↗
                          </a>
                        )}
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
