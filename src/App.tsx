import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PointOfView } from './components/PointOfView';
import { SelectedWork } from './components/SelectedWork';
import { Experience } from './components/Experience';
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
        <PointOfView />
        <SelectedWork />
        <section aria-labelledby="background-heading" className="border-t border-stone-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16">
            <h2 id="background-heading" className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Background
            </h2>
            <p className="mt-2 text-sm text-slate-500 max-w-2xl">
              Experience, skills, and education. The one-page resume is also available from the header.
            </p>
          </div>
          <Experience />
          <SkillsMatrix />
          <EducationCertifications />
        </section>
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
