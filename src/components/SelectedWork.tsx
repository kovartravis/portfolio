import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SELECTED_WORK } from '../data/resumeData';
import { GithubIcon } from './Icons';

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="py-12 sm:py-16 border-t border-stone-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Selected Work
        </h2>

        <div className="mt-8 space-y-10">
          {SELECTED_WORK.map((item) => (
            <article key={item.id} id={item.id}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-bold text-slate-950">
                  {item.name}
                </h3>
                {item.status && (
                  <span className="text-sm text-slate-500">{item.status}</span>
                )}
              </div>
              <p className="mt-1 text-sm sm:text-base text-slate-700 leading-relaxed">
                {item.tagline}
              </p>
              {item.metrics && item.metrics.length > 0 && (
                <p className="mt-1 text-sm text-slate-500">
                  {item.metrics.join(' · ')}
                </p>
              )}
              {item.description && item.description !== item.tagline && (
                <p className="mt-3 text-sm text-slate-700 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              )}
              {item.points && item.points.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li key={point.title} className="text-sm leading-relaxed">
                      <span className="font-semibold text-slate-900">{point.title}.</span>{' '}
                      <span className="text-slate-600">{point.description}</span>
                    </li>
                  ))}
                </ul>
              )}
              {item.links && item.links.length > 0 && (
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-cyan-800 hover:text-cyan-900 hover:underline"
                    >
                      {link.label === 'GitHub' && <GithubIcon className="w-4 h-4" />}
                      {link.label === 'GitHub' ? 'View on GitHub' : `View on ${link.label}`}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
