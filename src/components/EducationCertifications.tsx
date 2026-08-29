import React from 'react';
import { EDUCATION_AND_CERTS } from '../data/resumeData';
import { ExternalLink } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="credentials" className="py-12 sm:py-16 border-t border-stone-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Education & Certifications
        </h2>

        <div className="mt-8 space-y-6">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-bold text-slate-950">
                {EDUCATION_AND_CERTS.education.degree}
              </h3>
              <span className="text-sm text-slate-500">{EDUCATION_AND_CERTS.education.period}</span>
            </div>
            <p className="text-sm text-slate-600 mt-0.5">{EDUCATION_AND_CERTS.education.institution}</p>
            <p className="mt-1 text-xs text-slate-500">
              {EDUCATION_AND_CERTS.education.highlights.join(' · ')}
            </p>
          </div>

          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-bold text-slate-950">
                {EDUCATION_AND_CERTS.certification.title}
              </h3>
              <span className="text-sm text-slate-500">{EDUCATION_AND_CERTS.certification.status}</span>
            </div>
            <p className="text-sm text-slate-600 mt-0.5">{EDUCATION_AND_CERTS.certification.issuer}</p>
            <a
              href={EDUCATION_AND_CERTS.certification.badgeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-cyan-800 hover:text-cyan-900 hover:underline"
            >
              View credential
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
