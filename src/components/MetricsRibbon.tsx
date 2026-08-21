import React from 'react';
import { KEY_METRICS } from '../data/resumeData';
import { TrendingUp, Users, Cpu, FileCheck, Clock, Download } from 'lucide-react';
import { SpotlightCard } from './effects/SpotlightCard';
import { AnimatedCounter } from './effects/AnimatedCounter';
import { Reveal } from './effects/Reveal';

const ICONS = [FileCheck, Clock, TrendingUp, Download, Users, Cpu];

export const MetricsRibbon: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-stone-100/60 border-y border-stone-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-800 mb-2">
            Production Track Record & Engineering Impact
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Measured outcomes across AI, systems, and leadership
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEY_METRICS.map((metric, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <Reveal key={metric.label} delay={idx * 60}>
                <SpotlightCard
                  spotlightColor="rgba(6, 182, 212, 0.12)"
                  className="group h-full p-7 sm:p-8 rounded-2xl bg-white border border-stone-200/90 hover:border-stone-300 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md cursor-default"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-mono tracking-tight whitespace-nowrap">
                      <AnimatedCounter value={metric.value} />
                    </div>
                    <div className="p-2.5 rounded-xl bg-stone-100 text-slate-700 group-hover:text-cyan-800 group-hover:bg-cyan-50 transition-colors border border-stone-200 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-base font-bold text-slate-900 text-balance">
                      {metric.label}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed text-pretty">
                      {metric.subtext}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
