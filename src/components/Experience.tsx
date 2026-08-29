import React from 'react';
import { EXPERIENCES } from '../data/resumeData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 border-t border-stone-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Experience
        </h2>

        <div className="mt-8 space-y-10">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-lg font-bold text-slate-950">
                  {exp.role} · {exp.company}
                </h3>
                <span className="text-sm text-slate-500 whitespace-nowrap">{exp.period}</span>
              </div>
              {exp.leadershipTag && (
                <p className="mt-0.5 text-sm text-slate-500">{exp.leadershipTag}</p>
              )}

              <p className="mt-2.5 text-sm text-slate-700 leading-relaxed max-w-2xl">
                {exp.summary}
              </p>

              <ul className="mt-4 space-y-3">
                {exp.highlights.map((hl, hlIdx) => (
                  <li key={hlIdx} className="text-sm leading-relaxed">
                    <span className="font-semibold text-slate-900">{hl.title}.</span>{' '}
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
