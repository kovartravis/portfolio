import React from 'react';
import { KEY_METRICS } from '../data/resumeData';
import { TrendingUp, Users, Cpu, FileCheck, Clock, Download } from 'lucide-react';

const ICONS = [FileCheck, Clock, TrendingUp, Download, Users, Cpu];

export const MetricsRibbon: React.FC = () => {
  return (
    <section className="py-12 bg-slate-900/40 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-1">
            Proven Track Record & Production Impact
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-white">
            High-leverage engineering results across AI, platforms, and leadership
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {KEY_METRICS.map((metric, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={metric.label}
                className="group relative p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 font-mono">
                    {metric.value}
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/80 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500/20 transition-colors border border-slate-700/60">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="text-base font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {metric.label}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    {metric.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
