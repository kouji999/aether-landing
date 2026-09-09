const footerLinks = [
  { label: "Documentation", href: "#capabilities" },
  { label: "Architecture Spec", href: "#get-started" },
  { label: "Telemetry", href: "#showcase" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Discord", href: "https://discord.com/" },
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-smoke">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              />
              All Systems Nominal
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-dim">
              © 2025 AETHER Systems Corp. Architectural CAD Viewport Specification. All runtimes
              verified.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-3.5 lg:justify-end">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-label text-xs font-medium uppercase tracking-[0.14em] text-dim transition-colors duration-200 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
