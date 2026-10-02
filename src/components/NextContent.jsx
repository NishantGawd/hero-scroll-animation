import React from 'react';

export default function NextContent() {
  return (
    <section id="specs" className="min-h-screen bg-[#07080a] text-white px-8 py-28 relative z-30">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="border-t border-neutral-800 pt-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Engineered for Ground Effect.
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
            Smooth transitions driven by hardware-accelerated transforms. As the pinned stage releases, downforce parameters dynamically shift through continuous scroll scrub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <h3 className="text-xl font-semibold mb-2">Kinetic Telemetry</h3>
            <p className="text-neutral-400 text-sm">
              Interpolated tick-rate matches the display refresh rate via GSAP requestAnimationFrame hooks.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <h3 className="text-xl font-semibold mb-2">Zero Layout Reflow</h3>
            <p className="text-neutral-400 text-sm">
              All properties utilize `transform: translate3d()` and `scale()`, avoiding costly browser recalculations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}