"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const jobs = [
  {
    company: "Beyond Innovations Inc.",
    role: "Web Developer / Administrator",
    period: "March 2025 – Present",
    tag: "Current",
    bullets: [
      "Revamped the frontend of JBL Store Philippines Shopify website and created new landing pages for events and product features.",
      "Customized Shopify flows with metafields for customer/purchase data, integrating them into invoices, status pages, timelines, and Dotdigital sync.",
      "Developed a JBL Warranty Registration microsite using Next.js, NodeJS, and PostgreSQL with serial number duplicate validation.",
      "Remodeled JBL Store Philippines product pages and updated all product information.",
      "Built custom Shopify Apps using NodeJS tailored to store needs, and integrated & customized third-party Shopify apps.",
      "Created a Power Automate workflow that merges columns from Power Apps tables into Excel files.",
    ],
  },
  {
    company: "3B Technology Solutions",
    role: "Junior Application Developer",
    period: "August 2024 – January 2025",
    tag: null,
    bullets: [
      "Developed and implemented backend functionality for a client website including article and gallery management systems.",
      "Built the frontend of a web-based online gaming platform with Vite and React, focusing on high performance and UX.",
      "Designed and implemented a real-time streaming web module using WebSocket and RESTful APIs.",
    ],
  },
  {
    company: "Filmetrics Corp.",
    role: "Research & Development Intern",
    period: "January 2024 – June 2024",
    tag: null,
    bullets: [
      "Developed a notification module supporting both recurrent and single notification modes.",
      "Built a prototype failover web module using React, NodeJS, and SQLite — automatically switching to a backup server on failure and syncing data when the primary server recovers.",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useReveal();

  return (
    <section id="experience" className="py-28 px-6 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <p className="font-mono text-[var(--accent)] text-sm mb-3">
            03. experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-700 mb-12">
            Where I&apos;ve <span className="gradient-text">worked</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Company tabs */}
            <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible min-w-[200px]">
              {jobs.map((job, i) => (
                <button
                  key={job.company}
                  onClick={() => setActive(i)}
                  className={`text-left px-4 py-3 rounded-lg font-mono text-sm whitespace-nowrap transition-all duration-200 ${
                    active === i
                      ? "bg-[var(--accent)]/10 text-[var(--accent)] border-l-2 border-[var(--accent)]"
                      : "text-[var(--muted)] hover:text-[var(--text)] border-l-2 border-[var(--border)]"
                  }`}
                >
                  {job.company.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* Job details */}
            <div className="flex-1">
              {jobs.map((job, i) => (
                <div
                  key={job.company}
                  className={`transition-all duration-300 ${
                    active === i ? "block" : "hidden"
                  }`}
                >
                  <div className="flex flex-wrap items-start gap-3 mb-1">
                    <h3 className="font-display text-2xl font-700">
                      {job.role}
                    </h3>
                    {job.tag && (
                      <span className="px-2 py-0.5 rounded text-xs font-mono bg-[var(--accent-2)]/10 text-[var(--accent-2)] border border-[var(--accent-2)]/20 mt-1">
                        {job.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-[var(--accent)] font-mono text-sm mb-1">
                    @ {job.company}
                  </p>
                  <p className="text-[var(--muted)] font-mono text-xs mb-6">
                    {job.period}
                  </p>
                  <ul className="space-y-3">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-[var(--muted)]">
                        <span className="text-[var(--accent)] mt-1.5 shrink-0">▹</span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
