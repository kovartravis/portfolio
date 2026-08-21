import React from 'react';
import { AnimatedCounter } from './effects/AnimatedCounter';
import { Reveal } from './effects/Reveal';

const STREAMLINED_METRICS = [
  {
    value: "3,000+",
    label: "Docs / Month Automated",
    subtext: "Custom ML pipeline cutting manual processing to zero",
  },
  {
    value: "50+ hrs",
    label: "Saved Every Month",
    subtext: "Recovered via automated Comprehend ML pipeline",
  },
  {
    value: "2,000+",
    label: "Support Tickets Cut",
    subtext: "High-throughput greenfield events platform",
  },
  {
    value: "80+ Eng",
    label: "Using Shared Libs & Tools",
    subtext: "Adopted organically across company without mandate",
  },
];

export const MetricsRibbon: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-stone-100/60 border-y border-stone-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-800 mb-1.5">
            Production Track Record
          </h2>
          <p className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight text-balance">
            Measured outcomes in AI systems & platform scale
          </p>
        </Reveal>

        {/* Single Unified Stat Bar */}
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-stone-200 shadow-xs divide-y sm:divide-y-0 sm:divide-x divide-stone-200/90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {STREAMLINED_METRICS.map((metric) => (
            <div key={metric.label} className="p-6 sm:p-7 text-center flex flex-col justify-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-mono tracking-tight whitespace-nowrap mb-1">
                <AnimatedCounter value={metric.value} />
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1 mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500 leading-relaxed text-pretty">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
