import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/resumeData';
import { 
  Cpu, 
  Layers, 
  Server, 
  Users, 
  Search, 
  CheckCircle2, 
  Code 
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'AI & ML Systems': Cpu,
  'Full-Stack & Frontend': Layers,
  'Backend & Distributed Systems': Server,
  'Architecture & Leadership': Users,
};

export const SkillsMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeTab === 'All') return true;
    return cat.category === activeTab;
  }).map((cat) => {
    return {
      ...cat,
      skills: cat.skills.filter((skill) => {
        if (!searchTerm) return true;
        const q = searchTerm.toLowerCase();
        return (
          skill.name.toLowerCase().includes(q) ||
          skill.context.toLowerCase().includes(q) ||
          cat.category.toLowerCase().includes(q)
        );
      }),
    };
  }).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" /> Technical Expertise & Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Architectural Capabilities
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Every skill backed by real production workload experience and measured business impact.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-slate-900/90 border border-slate-800 w-full sm:w-auto">
            {['All', ...SKILL_CATEGORIES.map((c) => c.category)].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search skill, ML, React, C#..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
            />
          </div>
        </div>

        {/* Categories & Skills Display */}
        <div className="space-y-8">
          {filteredCategories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.category] || Code;
            return (
              <div
                key={cat.category}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cat.category}</h3>
                    <p className="text-xs text-slate-400">{cat.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all hover:bg-slate-950 group"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-bold text-sm text-slate-200 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-950/50 text-cyan-300 border border-cyan-800/50">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{skill.context}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
