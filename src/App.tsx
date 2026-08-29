import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { NeuronShowcase } from './components/NeuronShowcase';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafaf9] text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      <main>
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <Experience />
        <NeuronShowcase />
        <SkillsMatrix />
        <EducationCertifications />
        <ContactSection />
      </main>

      <Footer />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
