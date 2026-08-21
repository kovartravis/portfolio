import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 bg-white border-t border-stone-200 text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center font-mono font-bold text-slate-900 text-xs">
              TK
            </div>
            <div>
              <div className="font-bold text-slate-900">{PERSONAL_INFO.name}</div>
              <div className="text-[11px] text-slate-500">{PERSONAL_INFO.title}</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600 font-medium">
            <a href="#neuron" className="hover:text-slate-900 transition-colors">Neuron OSS</a>
            <a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-slate-900 transition-colors">Skills</a>
            <a href="#credentials" className="hover:text-slate-900 transition-colors">Credentials</a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors flex items-center gap-1.5">
              <GithubIcon className="w-3.5 h-3.5 text-slate-800" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 border border-stone-200 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-slate-600" />
            </button>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Travis Kovar. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-mono">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
