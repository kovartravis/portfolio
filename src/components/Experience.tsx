import React from 'react';
import { EXPERIENCES } from '../data/resumeData';
import { 
  Briefcase, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  TrendingUp 
} from 'lucide-react';
import { SpotlightCard } from './effects/SpotlightCard';
import { Reveal } from './effects/Reveal';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-stone-100/50 border-t border-stone-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" /> Work Experience & Systems Built
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            High-Impact Engineering History
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed text-pretty">
            From zero-to-one greenfield platforms and autonomous AI agents to enterprise modernization and informal engineering leadership.
          </p>
        </Reveal>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => {
            const isStJude = exp.id === 'st-jude';

            return (
              <div
                key={exp.id}
                className="rounded-3xl border border-stone-200 bg-white shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Header Banner */}
                <div className="p-7 sm:p-9 border-b border-stone-200/90 bg-stone-50/50">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-extrabold text-slate-950">
                          {exp.company}
                        </h3>
                        {exp.leadershipTag && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 whitespace-nowrap">
                            <Users className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                            {exp.leadershipTag}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-500">
                        <span className="font-semibold text-slate-900 whitespace-nowrap">{exp.role}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5 text-slate-500 whitespace-nowrap">
                          <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {isStJude && (
                      <div className="flex items-center gap-2">
                        <div className="px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          Current Role · Staff Level Scope
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="mt-4 text-sm text-slate-700 max-w-4xl leading-relaxed text-pretty">
                    {exp.summary}
                  </p>
                </div>

                {/* Highlights Grid */}
                <div className="p-7 sm:p-9">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-600 shrink-0" /> Key Architectural Accomplishments & Delivered Value
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {exp.highlights.map((hl, hlIdx) => (
                      <SpotlightCard
                        key={hlIdx}
                        spotlightColor="rgba(6, 182, 212, 0.08)"
                        className="group p-6 rounded-2xl bg-stone-50/70 border border-stone-200/80 hover:border-stone-300 transition-all hover:bg-white flex flex-col justify-between shadow-2xs cursor-default"
                      >
                        <div>
                          {/* Title & Metric */}
                          <div className="flex items-start justify-between gap-3 mb-2.5">
                            <h5 className="text-base font-bold text-slate-900 group-hover:text-cyan-900 transition-colors text-balance">
                              {hl.title}
                            </h5>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 text-pretty">
                            {hl.description}
                          </p>
                        </div>

                        <div>
                          {/* Highlight Impact Metric */}
                          {hl.metrics && (
                            <div className="mb-4 p-3 rounded-xl bg-cyan-50/80 border border-cyan-200 text-xs font-medium text-cyan-900 flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-cyan-700 shrink-0" />
                              <span className="text-pretty">{hl.metrics}</span>
                            </div>
                          )}

                          {/* Tech Tags */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {hl.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white text-slate-600 border border-stone-200 shadow-2xs whitespace-nowrap"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </SpotlightCard>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
