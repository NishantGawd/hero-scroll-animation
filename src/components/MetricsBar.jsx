import React from 'react';

const stats = [
  { id: 1, value: "99.4%", label: "Aerodynamic Efficiency" },
  { id: 2, value: "1.9s", label: "0-100 km/h Acceleration" },
  { id: 3, value: "620mi", label: "Hyper-Range Autonomy" },
];

export default function MetricsBar({ metricsRef }) {
  return (
    <div
      ref={metricsRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full px-6 mt-4 z-20 relative"
    >
      {stats.map((item) => (
        <div
          key={item.id}
          className="metric-card opacity-0 bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm shadow-xl"
        >
          <div className="text-3xl md:text-4xl font-black text-cyan-400 font-mono tracking-tight">
            {item.value}
          </div>
          <div className="text-xs uppercase tracking-wider text-neutral-400 mt-2 font-medium">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}