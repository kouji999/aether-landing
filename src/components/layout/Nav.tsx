import { useEffect, useState } from "react";
import { MenuIcon, StarIcon, XIcon } from "../ui/icons";

const links = [
  { href: "#showcase", label: "Showcase" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#benchmarks", label: "Benchmarks" },
  { href: "#get-started", label: "Pricing" },
  { href: "https://github.com/", label: "Docs" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-16 border-b transition-colors duration-200 ${
        scrolled || open ? "border-line bg-ground/80 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 px-6 lg:px-12">
        {/* Brand + core badge */}
        <div className="flex min-w-0 items-center gap-3">
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2.5 font-headline text-base font-bold uppercase tracking-tight text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ground"
          >
            <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-ember" />
            AETHER
          </a>
          <span className="hidden shrink-0 rounded border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-faint md:inline-block">
            Core v2.4.0
          </span>
        </div>

        {/* Desktop links */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 font-label text-xs font-medium uppercase tracking-[0.14em] text-dim lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-200 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex shrink-0 items-center gap-2.5">
          <a
            href="https://github.com/"
            className="hidden items-center gap-2 rounded-lg border border-line px-3 py-1.5 font-mono text-[11px] tracking-[0.05em] text-smoke transition-colors duration-200 hover:border-faint hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ember sm:flex"
            aria-label="AETHER on GitHub, 14.2 thousand stars"
          >
            <StarIcon className="h-3.5 w-3.5" />
            GitHub
            <span className="tabular text-bone">14.2k</span>
          </a>
          <a
            href="#get-started"
            className="rounded-lg bg-ember px-3.5 py-1.5 font-headline text-xs font-semibold uppercase tracking-tight text-ground transition-colors duration-200 hover:bg-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ground"
          >
            Initialize Runtime
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="nav-mobile"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-line text-bone transition-colors duration-200 hover:bg-surface focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ember lg:hidden"
          >
            {open ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="nav-mobile"
        hidden={!open}
        className="border-t border-line bg-ground/95 backdrop-blur-md lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col px-6 py-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3.5 font-label text-sm font-medium uppercase tracking-[0.14em] text-smoke transition-colors duration-200 last:border-b-0 hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ember"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/"
            className="mt-4 inline-flex w-fit items-center gap-2 font-mono text-[11px] tracking-[0.05em] text-smoke hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ember"
          >
            <StarIcon className="h-3.5 w-3.5" />
            GitHub <span className="tabular">14.2k</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
