import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-[#0b0c10]/40 border-b border-white/5">
      <div className="text-xl font-bold tracking-widest text-white uppercase">
        ITZ<span className="text-cyan-400">FIZZ</span>
      </div>
      <div className="flex gap-8 text-sm font-medium text-gray-300">
        <a href="#hero" className="hover:text-cyan-400 transition-colors">Overview</a>
        <a href="#specs" className="hover:text-cyan-400 transition-colors">Performance</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </div>
    </nav>
  );
}