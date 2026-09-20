/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ContrastSection } from './components/ContrastSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { FoundersSection } from './components/FoundersSection';
import { CostEstimator } from './components/CostEstimator';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactTerminal } from './components/ContactTerminal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeBrief, setActiveBrief] = useState<string>('');

  const handleOpenEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectForBrief = (projectTitle: string) => {
    setActiveBrief(`I am interested in building a website with the visual caliber, motion, and speed of "${projectTitle}".`);
    handleOpenContact();
  };

  const handleApplyEstimateToBrief = (briefSummary: string) => {
    setActiveBrief(briefSummary);
    handleOpenContact();
  };

  return (
    <div className="relative min-h-screen bg-[#08090e] text-[#f1f3f9] selection:bg-indigo-500 selection:text-white">
      {/* Magnetic Ambient Mouse Glow (Desktop) */}
      <CustomCursor />

      {/* Global 60FPS Reactive Particle Constellation Canvas */}
      <ParticleCanvas />

      {/* Glass Navigation Bar */}
      <Navbar
        onOpenEstimator={handleOpenEstimator}
        onOpenContact={handleOpenContact}
      />

      {/* Main Experience Flow */}
      <main className="relative z-10">
        {/* Hero with 3D Holographic Perspective Viewport */}
        <Hero
          onOpenEstimator={handleOpenEstimator}
          onOpenContact={handleOpenContact}
        />

        {/* The Contrast: Generic Agency vs Murtaza & Kamran */}
        <ContrastSection />

        {/* Portfolio Showcase with Device Switcher & Interactive Simulation */}
        <ProjectShowcase
          onSelectProjectForBrief={handleSelectProjectForBrief}
        />

        {/* Meet Murtaza & Kamran */}
        <FoundersSection
          onOpenContact={handleOpenContact}
        />

        {/* Interactive Scope & Price Estimator with Confetti */}
        <CostEstimator
          onApplyEstimateToBrief={handleApplyEstimateToBrief}
        />

        {/* 7-Day Standard Delivery Pipeline */}
        <ProcessSection />

        {/* Verified Client Testimonials */}
        <TestimonialsSection />

        {/* Client Launch Terminal */}
        <ContactTerminal
          initialBrief={activeBrief}
        />
      </main>

      {/* Footer with Direct Contact Directory */}
      <Footer />
    </div>
  );
}
