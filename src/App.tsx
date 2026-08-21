import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsRibbon } from './components/MetricsRibbon';
import { NeuronShowcase } from './components/NeuronShowcase';
import { Experience } from './components/Experience';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { NeuralBackground } from './components/effects/NeuralBackground';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafaf9] text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900 relative overflow-x-hidden">
      {/* Interactive Neural Mesh Canvas Background */}
      <NeuralBackground />

      {/* Ambient background glow orbs without expensive blur filters */}
      <div
        className="fixed top-0 left-1/4 w-[700px] h-[700px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.09) 0%, rgba(99, 102, 241, 0.05) 45%, transparent 70%)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      <div
        className="fixed bottom-1/4 right-10 w-[600px] h-[600px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle at center, rgba(245, 158, 11, 0.06) 0%, rgba(244, 63, 94, 0.04) 45%, transparent 70%)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero & Live Interactive AI Memory Simulator */}
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* 2. Key Quantitative Production Metrics Ribbon */}
        <MetricsRibbon />

        {/* 3. Featured Open-Source Engine: Neuron Deep Dive */}
        <NeuronShowcase />

        {/* 4. Experience & Enterprise Systems (St. Jude, TruckPro, American Home Shield) */}
        <Experience />

        {/* 5. Interactive Filterable Skills & Architectural Matrix */}
        <SkillsMatrix />

        {/* 6. Academic Background & AWS Certified AI Credential */}
        <EducationCertifications />

        {/* 7. Direct Contact & Communication */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* ATS & Printable Resume Preview Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
