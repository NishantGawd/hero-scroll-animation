import React from 'react';

export default function ScrollCarStage({ carRef }) {
  return (
    <div className="relative w-full flex justify-center items-center my-6 z-10 pointer-events-none">
      {/* Background ambient glow */}
      <div className="absolute w-[500px] h-[250px] bg-cyan-500/15 rounded-full blur-[120px] -z-10" />

      {/* Main visual object */}
      <div ref={carRef} className="w-[85%] max-w-[850px] will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1400&q=80"
          alt="Sports Car Visual"
          className="w-full h-auto object-contain rounded-2xl drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] border border-white/5"
        />
      </div>
    </div>
  );
}