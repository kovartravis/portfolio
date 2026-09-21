import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { SocialLinks } from './SocialLinks';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
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

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <SocialLinks />
          <button
            onClick={onOpenResumeModal}
            className="text-sm font-medium text-slate-500 hover:text-slate-900 underline-offset-4 hover:underline cursor-pointer"
          >
            View resume
          </button>
        </div>
      </div>
    </section>
  );
};
