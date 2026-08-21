import React from 'react';
import { EDUCATION_AND_CERTS } from '../data/resumeData';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { SpotlightCard } from './effects/SpotlightCard';
import { Reveal } from './effects/Reveal';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="credentials" className="py-16 sm:py-20 bg-stone-100/50 border-t border-stone-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" /> Education & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Academic Background & Certifications
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Degree Card */}
          <Reveal delay={0}>
            <SpotlightCard
              spotlightColor="rgba(6, 182, 212, 0.1)"
              className="h-full p-7 sm:p-9 rounded-3xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-default"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="p-3 rounded-2xl bg-stone-100 border border-stone-200 text-slate-800">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-stone-100 text-slate-700 border border-stone-200 font-medium">
                    {EDUCATION_AND_CERTS.education.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-950 mb-1">
                  {EDUCATION_AND_CERTS.education.degree}
                </h3>
                <p className="text-sm font-semibold text-slate-600 mb-4">
                  {EDUCATION_AND_CERTS.education.institution}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 text-pretty">
                  Comprehensive foundation in computational theory, algorithm design, software architecture, and distributed systems engineering.
                </p>
              </div>

              <div className="pt-5 border-t border-stone-200 flex flex-wrap gap-2">
                {EDUCATION_AND_CERTS.education.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-stone-50 text-slate-700 border border-stone-200"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          {/* AWS AI Certification Card */}
          <Reveal delay={80}>
            <SpotlightCard
              spotlightColor="rgba(99, 102, 241, 0.1)"
              className="h-full p-7 sm:p-9 rounded-3xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-default"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-700">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {EDUCATION_AND_CERTS.certification.status}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-950 mb-1">
                  {EDUCATION_AND_CERTS.certification.title}
                </h3>
                <p className="text-sm font-semibold text-slate-600 mb-4">
                  {EDUCATION_AND_CERTS.certification.issuer}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 text-pretty">
                  Formal certification demonstrating mastery in artificial intelligence, machine learning pipelines, prompt engineering, generative AI patterns, and AWS AI cloud services (Comprehend, Bedrock, SageMaker).
                </p>
              </div>

              <div className="pt-5 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Verified Cloud AI Credential
                </span>
                <a
                  href={EDUCATION_AND_CERTS.certification.badgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-700 hover:text-indigo-900 flex items-center gap-1 font-semibold hover:underline"
                >
                  AWS Cert Hub <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </SpotlightCard>
          </Reveal>

        </div>

      </div>
    </section>
  );
};
