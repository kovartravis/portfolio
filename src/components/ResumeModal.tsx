import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  FileText 
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, NEURON_PROJECT, EDUCATION_AND_CERTS, SKILL_CATEGORIES } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const rawResume = `TRAVIS KOVAR
${PERSONAL_INFO.title}
Cordova, TN · ${PERSONAL_INFO.phone} · ${PERSONAL_INFO.email} · github.com/kovartravis
linkedin.com/in/travis-kovar-0a1929147 · x.com/kovartravis

SUMMARY
${PERSONAL_INFO.summary}

EXPERIENCE
${EXPERIENCES.map(e => `
${e.role} | ${e.company}
${e.period}${e.leadershipTag ? ` | ${e.leadershipTag}` : ''}
${e.highlights.map(h => `• ${h.description}`).join('\n')}`).join('\n\n')}

PROJECTS
${NEURON_PROJECT.name} | ${NEURON_PROJECT.license} | ${NEURON_PROJECT.githubUrl}
• ${NEURON_PROJECT.description}
• ${NEURON_PROJECT.stats.releases}

Tripkit | travel MCP for personal agents (in progress) | https://github.com/kovartravis/tripkit

SKILLS
${SKILL_CATEGORIES.map(c => `${c.category}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}

EDUCATION & CERTIFICATIONS
${EDUCATION_AND_CERTS.education.degree}, ${EDUCATION_AND_CERTS.education.institution}, ${EDUCATION_AND_CERTS.education.period}
${EDUCATION_AND_CERTS.certification.title}, ${EDUCATION_AND_CERTS.certification.issuer}`;

    navigator.clipboard.writeText(rawResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return createPortal(
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
    >
      
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2 text-slate-200 font-semibold text-sm">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Resume Preview & Print</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Printer className="w-3.5 h-3.5 shrink-0" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700 cursor-pointer whitespace-nowrap shrink-0"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> : <Copy className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans bg-white text-slate-900 selection:bg-cyan-200 space-y-6">
          
          {/* Header */}
          <div className="text-center border-b border-slate-200 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 text-balance">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-bold text-slate-700 mt-1 uppercase tracking-wide">
              {PERSONAL_INFO.title}
            </p>
            <div className="mt-2 text-xs text-slate-600 flex flex-wrap items-center justify-center gap-3 font-medium">
              <span className="whitespace-nowrap">{PERSONAL_INFO.location}</span>
              <span className="hidden sm:inline">·</span>
              <span className="whitespace-nowrap">{PERSONAL_INFO.phone}</span>
              <span className="hidden sm:inline">·</span>
              <span className="whitespace-nowrap">{PERSONAL_INFO.email}</span>
              <span className="hidden sm:inline">·</span>
              <span className="whitespace-nowrap">github.com/kovartravis</span>
              <span className="hidden sm:inline">·</span>
              <span className="whitespace-nowrap">linkedin.com/in/travis-kovar-0a1929147</span>
              <span className="hidden sm:inline">·</span>
              <span className="whitespace-nowrap">x.com/kovartravis</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 mb-2">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 mb-3">
              Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-bold text-slate-900">
                    <div>
                      <span>{exp.role}</span>
                      <span className="font-normal text-slate-600"> · {exp.company}</span>
                    </div>
                    <div className="text-slate-500 font-normal text-xs">
                      {exp.period}
                    </div>
                  </div>
                  {exp.leadershipTag && (
                    <div className="text-xs italic text-indigo-800 font-semibold mb-1">
                      {exp.leadershipTag}
                    </div>
                  )}
                  <ul className="mt-1 space-y-1 text-xs text-slate-700 list-disc list-outside pl-4 leading-relaxed">
                    {exp.highlights.map((hl, i) => (
                      <li key={i}>{hl.description}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex items-baseline justify-between text-xs sm:text-sm font-bold text-slate-900">
                  <div>
                    <span>{NEURON_PROJECT.name}</span>
                    <span className="font-normal text-slate-600"> · {NEURON_PROJECT.license}</span>
                  </div>
                  <div className="text-xs text-cyan-700 font-mono">
                    github.com/kovartravis/neuron
                  </div>
                </div>
                <ul className="mt-1 space-y-1 text-xs text-slate-700 list-disc list-outside pl-4 leading-relaxed">
                  <li>{NEURON_PROJECT.description}</li>
                  <li>{NEURON_PROJECT.stats.releases}.</li>
                </ul>
              </div>
              <div>
                <div className="flex items-baseline justify-between text-xs sm:text-sm font-bold text-slate-900">
                  <div>
                    <span>Tripkit</span>
                    <span className="font-normal text-slate-600"> · in progress</span>
                  </div>
                  <div className="text-xs text-cyan-700 font-mono">
                    github.com/kovartravis/tripkit
                  </div>
                </div>
                <ul className="mt-1 space-y-1 text-xs text-slate-700 list-disc list-outside pl-4 leading-relaxed">
                  <li>Travel MCP for personal agents (trip ledger + tools).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 mb-2">
              Skills
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed font-mono">
              AI agents, Amazon Comprehend, Machine Learning, React, TypeScript, C# .NET, AWS, API development, Kafka, Selenium
            </p>
          </div>

          {/* Education & Certs */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 mb-2">
              Education & Certifications
            </h2>
            <div className="text-xs text-slate-800 space-y-1">
              <div>
                <strong className="text-slate-900">{EDUCATION_AND_CERTS.education.degree}</strong>, {EDUCATION_AND_CERTS.education.institution}, {EDUCATION_AND_CERTS.education.period}
              </div>
              <div>
                <strong className="text-slate-900">{EDUCATION_AND_CERTS.certification.title}</strong>, {EDUCATION_AND_CERTS.certification.issuer}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>,
    document.body
  );
};
