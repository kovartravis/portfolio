import React from 'react';
import { EDUCATION_AND_CERTS } from '../data/resumeData';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="credentials" className="py-20 bg-slate-900/30 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" /> Education & Credentials
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Academic Background & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Degree Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-950/60 border border-cyan-800 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {EDUCATION_AND_CERTS.education.period}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                {EDUCATION_AND_CERTS.education.degree}
              </h3>
              <p className="text-sm font-semibold text-cyan-400 mb-4">
                {EDUCATION_AND_CERTS.education.institution}
              </p>

              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Comprehensive foundation in computational theory, algorithm design, software architecture, and distributed systems engineering.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
              {EDUCATION_AND_CERTS.education.highlights.map((h) => (
                <span
                  key={h}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-950 text-slate-300 border border-slate-800"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* AWS AI Certification Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-indigo-950/40 border border-indigo-500/30 hover:border-indigo-500/50 transition-all shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-indigo-950/80 border border-indigo-700/80 text-indigo-400">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {EDUCATION_AND_CERTS.certification.status}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                {EDUCATION_AND_CERTS.certification.title}
              </h3>
              <p className="text-sm font-semibold text-indigo-300 mb-4">
                {EDUCATION_AND_CERTS.certification.issuer}
              </p>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Formal certification demonstrating mastery in artificial intelligence, machine learning pipelines, prompt engineering, generative AI patterns, and AWS AI cloud services (Comprehend, Bedrock, SageMaker).
              </p>
            </div>

            <div className="pt-4 border-t border-indigo-950/80 flex items-center justify-between">
              <span className="text-xs text-indigo-200 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Verified Cloud AI Credential
              </span>
              <a
                href={EDUCATION_AND_CERTS.certification.badgeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold hover:underline"
              >
                AWS Cert Hub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
