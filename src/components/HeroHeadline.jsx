import React from 'react';

export default function HeroHeadline({ headlineRef }) {
  const phrase = "WELCOME ITZ FIZZ";

  return (
    <div
      ref={headlineRef}
      className="flex flex-wrap justify-center items-center select-none pt-28 pb-6 will-change-transform z-20"
    >
      {phrase.split("").map((char, index) => (
        <span
          key={index}
          className="headline-char text-3xl sm:text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#d1d5db] to-[#6b7280] tracking-[0.32em] inline-block opacity-0 drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
        >
          {char === " " ? "\u00A0\u00A0" : char}
        </span>
      ))}
    </div>
  );
}