import { Reveal } from "../ui/Reveal";
import { CopyCommand } from "../ui/CopyCommand";

export default function FinalCta() {
  return (
    <section
      id="get-started"
      aria-labelledby="get-started-title"
      className="relative isolate overflow-hidden border-t border-line"
    >
      <div aria-hidden="true" className="absolute inset-0 radial-vignette" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-28 sm:py-36 lg:px-12">
        <div className="max-w-3xl">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember">
              // Deployment Ready
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h2
              id="get-started-title"
              className="mt-6 font-headline text-4xl font-bold leading-[1.05] tracking-tight text-bone sm:text-5xl lg:text-6xl"
            >
              Deploy your first spatial runtime in seconds.
            </h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-smoke sm:text-lg">
              Integrate with React, Svelte, Vue, or native vanilla TypeScript. Run production
              benchmarks straight from the CLI toolchain.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-10">
              <CopyCommand
                command="npx create-aether-app@latest my-scene"
                idleLabel="Copy CMD"
                copiedLabel="Copied"
                ariaLabel="Copy scaffold command npx create-aether-app@latest my-scene"
                className="w-full sm:w-auto"
              />
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 font-headline text-sm font-semibold uppercase tracking-tight text-smoke transition-colors duration-200 hover:border-faint hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ground"
              >
                Read Architecture Spec
              </a>
              <a
                href="#showcase"
                className="inline-flex items-center justify-center rounded-lg bg-ember px-6 py-3 font-headline text-sm font-semibold uppercase tracking-tight text-ground transition-colors duration-200 hover:bg-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ground"
              >
                Browse Showcase
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
