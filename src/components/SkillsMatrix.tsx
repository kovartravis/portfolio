import React from 'react';
import { SKILL_CATEGORIES } from '../data/resumeData';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 border-t border-stone-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Skills
        </h2>

        <div className="mt-8 space-y-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-sm font-bold text-slate-900">{cat.category}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{cat.description}</p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    title={skill.context}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-stone-100 text-slate-700 border border-stone-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
