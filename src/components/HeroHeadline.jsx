import React from 'react';

export default function HeroHeadline({ headlineRef }) {
  const phrase = "WELCOME ITZ FIZZ";

  return (
    <div ref={headlineRef} className="flex flex-wrap justify-center items-center select-none pt-24 pb-4">
      {phrase.split("").map((char, index) => (
        <span
          key={index}
          className="headline-char text-3xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 tracking-[0.35em] inline-block opacity-0"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}