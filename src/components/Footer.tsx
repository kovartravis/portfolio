import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-stone-200 text-xs text-slate-500">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}</span>
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-slate-900 transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          GitHub
        </a>
      </div>
    </footer>
  );
};
