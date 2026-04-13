export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-[var(--muted)] text-xs font-mono">
          Designed & built by{" "}
          <span className="text-[var(--accent)]">Reynier Querijero</span>
        </p>
        {/* <p className="text-[var(--muted)] text-xs font-mono">
          Built with Next.js & Tailwind CSS
        </p> */}
      </div>
    </footer>
  );
}
