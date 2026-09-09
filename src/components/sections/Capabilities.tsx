import { Reveal } from "../ui/Reveal";

const capabilities = [
  {
    index: "01",
    title: "Hybrid Pipeline",
    description:
      "Zero-copy WebGPU pipeline with automatic graceful WebGL2 fallback across all mobile and desktop viewports.",
    metric: "latency: 0.12ms",
  },
  {
    index: "02",
    title: "Zero-Allocation Scene Graph",
    description:
      "Static memory pooling prevents garbage collection spikes during continuous camera transformations and physics loops.",
    metric: "memory: 4.8MB flat",
  },
  {
    index: "03",
    title: "Shader Graph Compiler",
    description:
      "Author custom node shaders or write WGSL directly. Inlines math kernels at build time with tree-shaking support.",
    metric: "bundle: 42KB gzip",
  },
  {
    index: "04",
    title: "Spatial Audio & Physics",
    description:
      "WebAssembly-accelerated rigid-body simulation with listener-relative spatial audio attenuation out of the box.",
    metric: "engine: wasm SIMD",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="relative">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember">
            // Architectural Capabilities
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h2
            id="capabilities-title"
            className="mt-5 max-w-3xl font-headline text-4xl font-bold leading-[1.05] tracking-tight text-bone sm:text-5xl"
          >
            Engineered for deterministic frame budgets.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-16 border-t border-line sm:mt-20">
            {capabilities.map(({ index, title, description, metric }) => (
              <div key={index} className="group border-b border-line">
                <div className="grid grid-cols-1 gap-x-10 gap-y-4 py-9 transition-colors duration-200 sm:grid-cols-[minmax(0,5rem)_minmax(0,1fr)_minmax(0,auto)] sm:items-baseline sm:gap-x-8 lg:grid-cols-[minmax(0,7rem)_minmax(0,1fr)_minmax(0,auto)] lg:gap-x-16 lg:py-12">
                  <span className="tabular font-mono text-xs tracking-[0.15em] text-faint transition-colors duration-200 group-hover:text-ember">
                    {index}
                  </span>
                  <div>
                    <h3 className="font-headline text-2xl font-semibold tracking-tight text-bone sm:text-3xl">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-smoke sm:text-base">
                      {description}
                    </p>
                  </div>
                  <p className="tabular font-mono text-xs tracking-[0.05em] text-dim transition-colors duration-200 group-hover:text-ember sm:justify-self-end">
                    {metric}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
