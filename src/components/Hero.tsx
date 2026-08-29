import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { GithubIcon } from './Icons';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="pt-14 pb-12 sm:pt-20 sm:pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
          {PERSONAL_INFO.name}
        </h1>
        <p className="mt-1.5 text-base sm:text-lg font-medium text-slate-600">
          {PERSONAL_INFO.title}
        </p>

        <p className="mt-5 text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl">
          {PERSONAL_INFO.summary}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={onOpenResumeModal}
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            View Resume
          </button>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-white hover:bg-stone-50 text-slate-800 border border-stone-200 text-sm font-semibold transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-6 pt-6 border-t border-stone-200 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
            {PERSONAL_INFO.location}
          </span>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4 text-slate-400 shrink-0" />
            {PERSONAL_INFO.email}
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
          </button>
          <span className="flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-slate-400 shrink-0" />
            {PERSONAL_INFO.phone}
          </span>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-slate-900 transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-slate-400 shrink-0" />
            github.com/kovartravis
          </a>
        </div>
      </div>
    </section>
  );
};
