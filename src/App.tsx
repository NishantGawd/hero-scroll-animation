import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Navbar from './components/Navbar';
import HeroHeadline from './components/HeroHeadline';
import MetricsBar from './components/MetricsBar';
import ScrollCarStage from './components/ScrollCarStage';
import NextContent from './components/NextContent';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const metricsRef = useRef(null);
  const carRef = useRef(null);

  useGSAP(
    () => {
      // 1. Initial Load Animation (Staggered Intro)
      const introTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      introTl
        .fromTo(
          '.headline-char',
          { y: 40, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.03 }
        )
        .fromTo(
          '.metric-card',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
          '-=0.4'
        )
        .fromTo(
          carRef.current,
          { scale: 0.9, opacity: 0, y: 50 },
          { scale: 1, opacity: 1, y: 0, duration: 1 },
          '-=0.6'
        );

      // 2. Scroll-Driven Scrub Animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: '+=150%',
          scrub: 1.2, // Smooth easing/interpolation
          pin: true,  // Pins the hero during the transition
          anticipatePin: 1,
        },
      });

      scrollTl
        // Scale and translate the car across the screen
        .to(carRef.current, {
          scale: 1.25,
          xPercent: 18,
          yPercent: -10,
          rotation: -2,
          ease: 'none',
        })
        // Fade out metrics to give full focus to the visual motion
        .to(
          metricsRef.current,
          {
            opacity: 0,
            y: -40,
            ease: 'power1.out',
          },
          0
        )
        // Subtly track-out headline
        .to(
          headlineRef.current,
          {
            scale: 0.92,
            opacity: 0.3,
            letterSpacing: '0.6em',
            ease: 'none',
          },
          0
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative bg-[#0b0c10] min-h-screen text-white">
      <Navbar />

      {/* Hero Section Container */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-between items-center px-4 overflow-hidden pt-16 pb-8"
      >
        <HeroHeadline headlineRef={headlineRef} />
        <ScrollCarStage carRef={carRef} />
        <MetricsBar metricsRef={metricsRef} />
      </section>

      {/* Downstream Content Section */}
      <NextContent />
    </div>
  );
}