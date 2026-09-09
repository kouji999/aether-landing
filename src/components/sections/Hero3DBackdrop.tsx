import { lazy, Suspense, useEffect, useState } from "react";

const HeroScene = lazy(() => import("../../scenes/HeroScene"));

function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function webglAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function Hero3DBackdrop() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion() || !webglAvailable()) return;

    const wide = window.matchMedia("(min-width: 768px)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    if (wide && !coarse) {
      setEnabled(true);
      return;
    }

    const idle = window.requestIdleCallback(() => setEnabled(true), { timeout: 2500 });
    return () => window.cancelIdleCallback(idle);
  }, []);

  if (!enabled) {
    return <div className="absolute inset-0 radial-vignette" aria-hidden="true" />;
  }

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Suspense fallback={<div className="absolute inset-0 radial-vignette" />}>
        <HeroScene />
      </Suspense>
    </div>
  );
}
