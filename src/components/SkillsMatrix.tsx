import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
import { SpotlightCard } from './effects/SpotlightCard';
import { Reveal } from './effects/Reveal';

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
    <section id="skills" className="py-16 sm:py-20 bg-[#fafaf9] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" /> Technical Expertise & Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Skills & Architectural Capabilities
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed text-pretty">
            Every skill backed by real production workload experience and measured business impact.
          </p>
        </Reveal>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Tab buttons with layoutId */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200 w-full sm:w-auto overflow-x-auto">
            {['All', ...SKILL_CATEGORIES.map((c) => c.category)].map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900 hover:bg-stone-200/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-slate-900 rounded-xl shadow-xs"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </div>

          {/* Search input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search skill, ML, React, C#..."
              className="w-full bg-white border border-stone-200 rounded-xl pl-9.5 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-600 shadow-xs transition-colors"
            />
          </div>
        </div>

        {/* Categories & Skills Display */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.category] || Code;
              return (
                <motion.div
                  key={cat.category}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="p-7 sm:p-9 rounded-3xl bg-white border border-stone-200 shadow-xs"
                >
                  <div className="flex items-center gap-3.5 mb-7">
                    <div className="p-2.5 rounded-xl bg-stone-100 border border-stone-200 text-slate-800 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">{cat.category}</h3>
                      <p className="text-xs text-slate-500">{cat.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cat.skills.map((skill) => (
                      <SpotlightCard
                        key={skill.name}
                        spotlightColor="rgba(6, 182, 212, 0.1)"
                        className="p-4.5 rounded-2xl bg-stone-50/70 border border-stone-200 hover:border-stone-300 transition-all hover:bg-white group shadow-2xs cursor-default"
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-bold text-sm text-slate-900 group-hover:text-cyan-900 transition-colors text-balance">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 whitespace-nowrap shrink-0">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed flex items-start gap-1.5 text-pretty">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{skill.context}</span>
                        </p>
                      </SpotlightCard>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
