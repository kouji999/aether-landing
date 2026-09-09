import { Reveal } from "../ui/Reveal";

const stats = [
  { value: "<42", unit: "KB", label: "Core Bundle Gzipped" },
  { value: "60", unit: "FPS", label: "Deterministic Frame Rate" },
  { value: "0.12", unit: "MS", label: "Average Frame Compute" },
  { value: "14.2k", unit: "", label: "GitHub Stars" },
];

export default function Benchmarks() {
  return (
    <section id="benchmarks" aria-labelledby="benchmarks-title" className="relative">
      <div className="mx-auto w-full max-w-7xl px-6 pb-24 sm:pb-32 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember">
            // Benchmarks
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h2 id="benchmarks-title" className="sr-only">
            Benchmarks
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ value, unit, label }) => (
              <div key={label} className="bg-surface/50 px-6 py-8 lg:px-8 lg:py-10">
                <p className="tabular font-headline text-4xl font-bold tracking-tight text-bone lg:text-5xl">
                  {value}
                  {unit ? (
                    <span className="ml-1.5 align-baseline text-lg font-semibold text-ember lg:text-xl">
                      {unit}
                    </span>
                  ) : null}
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.15em] text-dim">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
