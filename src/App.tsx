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

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
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
