'use client';

import About from '@/components/About';
import Hero from '@/components/Hero';
import History from '@/components/History';
import Schedule from '@/components/Schedule';

export default function Home() {
  return (
    <>
      <Hero />
      <History />
      <About />
      <Schedule />
    </>
  );
}
