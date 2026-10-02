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
      // 1. Initial State Definitions
      gsap.set('.headline-char', { opacity: 0, y: 30, scale: 0.9 });
      gsap.set(carRef.current, { x: '-120vw', opacity: 0, rotate: -3 });
      gsap.set('.metric-card', { opacity: 0, y: 25 });

      // 2. Master Scroll-Driven Choreography
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: '+=250%', // Gives ample scroll runway for sequential pacing
          scrub: 1.2,    // Smooth inertia interpolation
          pin: true,     // Hero section remains locked in view
          anticipatePin: 1,
        },
      });

      // Step 1: Text reveal on first scroll down
      scrollTl
        .to('.headline-char', {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.04,
          duration: 1.5,
          ease: 'power2.out',
        })

      // Step 2: Car glides in from off-screen left to dead center
        .to(
          carRef.current,
          {
            x: '0vw',
            opacity: 1,
            rotate: 0,
            duration: 2.2,
            ease: 'power3.out',
          },
          '+=0.2'
        )

      // Step 3: Metrics subtly rise and reveal beneath the car
        .to(
          '.metric-card',
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 1.2,
            ease: 'power2.out',
          },
          '-=0.8'
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative bg-[#07080a] min-h-screen text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />

      {/* Pinned Hero Section Viewport */}
      <section
        id="hero"
        className="relative h-screen flex flex-col justify-between items-center px-4 overflow-hidden pt-8 pb-10"
      >
        <HeroHeadline headlineRef={headlineRef} />
        <ScrollCarStage carRef={carRef} />
        <MetricsBar metricsRef={metricsRef} />
      </section>

      {/* Downstream Content (Scroll destination) */}
      <NextContent />
    </div>
  );
}