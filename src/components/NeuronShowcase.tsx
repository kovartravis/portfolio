import React from 'react';
import { ExternalLink } from 'lucide-react';
import { NEURON_PROJECT } from '../data/resumeData';
import { GithubIcon } from './Icons';

export const NeuronShowcase: React.FC = () => {
  return (
    <section id="neuron" className="py-12 sm:py-16 border-t border-stone-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Projects
        </h2>

        <div className="mt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-bold text-slate-950">
              {NEURON_PROJECT.name} — {NEURON_PROJECT.tagline}
            </h3>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            {NEURON_PROJECT.stats.downloads} · {NEURON_PROJECT.stats.releases} · {NEURON_PROJECT.license}
          </p>

          <p className="mt-3 text-sm text-slate-700 leading-relaxed max-w-2xl">
            {NEURON_PROJECT.description}
          </p>

          <ul className="mt-4 space-y-2">
            {NEURON_PROJECT.architecturePoints.map((point) => (
              <li key={point.title} className="text-sm leading-relaxed">
                <span className="font-semibold text-slate-900">{point.title}.</span>{' '}
                <span className="text-slate-600">{point.description}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <a
              href={NEURON_PROJECT.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-cyan-800 hover:text-cyan-900 hover:underline"
            >
              <GithubIcon className="w-4 h-4" />
              View on GitHub
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            {NEURON_PROJECT.npmUrl && (
              <a
                href={NEURON_PROJECT.npmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-cyan-800 hover:text-cyan-900 hover:underline"
              >
                View on npm
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
