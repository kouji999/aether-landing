import { Reveal } from "../ui/Reveal";
import Hero3DBackdrop from "./Hero3DBackdrop";
import { CopyCommand } from "../ui/CopyCommand";
import { ArrowRight } from "../ui/icons";

const telemetryChips = [
  { label: "60.0 FPS LOCKED", state: true },
  { label: "WEBGPU READY", state: true },
  { label: "ZERO ALLOCATION GC", state: false },
];

const telemetryRows = [
  { k: "BACKEND", v: "WebGPU 1.0" },
  { k: "FRAME LATENCY", v: "0.12 ms" },
  { k: "DRAW CALLS", v: "3 PASSES / FR" },
  { k: "VRAM RESIDENT", v: "4.8 MB" },
];

export default function Hero() {
  return (
    <section id="showcase" aria-labelledby="showcase-title" className="relative isolate overflow-hidden">
      {/* Layer 0 — WebGL backdrop, positioned right so left text column stays clean */}
      <div className="absolute inset-y-0 right-0 w-full md:left-1/4">
        <Hero3DBackdrop />
      </div>

      {/* Layer 1 — dark scrims: solid ground under text, radial ember glow at core */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ground via-ground/75 to-transparent md:via-ground/55"
      />
      <div aria-hidden="true" className="absolute inset-0 radial-vignette" />

      <div className="relative mx-auto flex min-h-svh w-full max-w-7xl flex-col justify-center px-6 pb-24 pt-36 lg:px-12">        <div className="max-w-2xl">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember">
              // Specification v2.4.0 — Production Realtime Core
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1
              id="showcase-title"
              className="mt-6 font-headline text-5xl font-bold leading-[1.02] tracking-tight text-bone sm:text-6xl lg:text-7xl"
            >
              The real-time 3D engine built for the modern web.
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 max-w-xl font-body text-base leading-relaxed text-smoke sm:text-lg">
              Compile lightweight WebGL and WebGPU scenes directly into your DOM. Sub-millisecond
              render passes, zero runtime overhead, instant pipeline reload.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#get-started"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-ember px-6 py-3 font-headline text-sm font-semibold uppercase tracking-tight text-ground transition-colors duration-200 hover:bg-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ground"
              >
                Start Building Free
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <CopyCommand
                command="npm i @aether/core"
                prefix="$"
                idleLabel="Copy"
                ariaLabel="Copy install command npm i @aether/core"
              />
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
              {telemetryChips.map(({ label, state }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-dim"
                >
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full ${state ? "bg-emerald-400" : "bg-ember"}`}
                  />
                  <span className="tabular">{label}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Viewport telemetry — glass panel (approved glass surface) */}
        <Reveal delay={420} className="mt-14 max-w-xs lg:absolute lg:bottom-24 lg:right-12 lg:mt-0">
          <div className="rounded-lg border border-line bg-surface/40 p-5 backdrop-blur-md">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
              <span aria-hidden="true" className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
              Viewport Telemetry — Live
            </p>
            <dl className="mt-4 space-y-2.5">
              {telemetryRows.map(({ k, v }) => (
                <div key={k} className="flex items-baseline justify-between gap-6">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-dim">{k}</dt>
                  <dd className="tabular font-mono text-xs text-bone">{v}</dd>
                </div>
              ))}
            </dl></div>
        </Reveal>
      </div>
    </section>
  );
}
