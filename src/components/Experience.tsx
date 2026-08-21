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

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/30 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" /> Work Experience & Systems Built
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            High-Impact Engineering History
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            From zero-to-one greenfield platforms and autonomous AI agents to enterprise modernization and informal engineering leadership.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => {
            const isStJude = exp.id === 'st-jude';

            return (
              <div
                key={exp.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isStJude
                    ? 'bg-slate-900/90 border-cyan-500/40 shadow-2xl shadow-cyan-950/20'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 shadow-lg'
                }`}
              >
                {/* Header Banner */}
                <div className="p-6 sm:p-8 border-b border-slate-800/80 bg-slate-950/40">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-extrabold text-white">
                          {exp.company}
                        </h3>
                        {exp.leadershipTag && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-700/60">
                            <Users className="w-3.5 h-3.5 text-indigo-400" />
                            {exp.leadershipTag}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-400">
                        <span className="font-semibold text-cyan-400">{exp.role}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {isStJude && (
                      <div className="flex items-center gap-2">
                        <div className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 text-xs font-medium flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          Current Role · Staff Level Scope
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="mt-4 text-sm text-slate-300 max-w-4xl leading-relaxed">
                    {exp.summary}
                  </p>
                </div>

                {/* Highlights Grid */}
                <div className="p-6 sm:p-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" /> Key Architectural Accomplishments & Delivered Value
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {exp.highlights.map((hl, hlIdx) => (
                      <div
                        key={hlIdx}
                        className="group p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all hover:bg-slate-950 flex flex-col justify-between"
                      >
                        <div>
                          {/* Title & Metric */}
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h5 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                              {hl.title}
                            </h5>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                            {hl.description}
                          </p>
                        </div>

                        <div>
                          {/* Highlight Impact Metric */}
                          {hl.metrics && (
                            <div className="mb-3 p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs font-medium text-cyan-200 flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
                              <span>{hl.metrics}</span>
                            </div>
                          )}

                          {/* Tech Tags */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {hl.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
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
