import React from 'react';
import { EXPERIENCES } from '../data/resumeData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-10 sm:py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h3 className="text-lg font-bold text-slate-800 tracking-tight">
          Experience
        </h3>

        <div className="mt-6 space-y-8">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h4 className="text-base font-semibold text-slate-900">
                  {exp.role} · {exp.company}
                </h4>
                <span className="text-sm text-slate-500 whitespace-nowrap">{exp.period}</span>
              </div>
              {exp.leadershipTag && (
                <p className="mt-0.5 text-sm text-slate-500">{exp.leadershipTag}</p>
              )}

              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed max-w-2xl">
                {exp.summary}
              </p>

              <ul className="mt-3 space-y-2">
                {exp.highlights.map((hl, hlIdx) => (
                  <li key={hlIdx} className="text-sm leading-relaxed">
                    <span className="font-medium text-slate-800">{hl.title}.</span>{' '}
                    <span className="text-slate-600">{hl.description}</span>
                    {hl.metrics && (
                      <span className="text-slate-500"> ({hl.metrics})</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
