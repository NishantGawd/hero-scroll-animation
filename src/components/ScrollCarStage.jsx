import React from 'react';

export default function ScrollCarStage({ carRef }) {
  return (
    <div className="relative w-full flex justify-center items-center my-auto z-10 overflow-hidden py-4">
      {/* Dynamic ambient backdrop aura */}
      <div className="absolute w-[600px] h-[280px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Animated Car Container */}
      <div
        ref={carRef}
        className="w-[92%] max-w-[850px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] bg-neutral-950 will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=85"
          alt="White Roadster Visual"
          className="w-full h-[320px] sm:h-[420px] md:h-[480px] object-cover object-center filter contrast-[1.05]"
        />
      </div>
    </div>
  );
}