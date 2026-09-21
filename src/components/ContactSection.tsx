import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';
import { SocialLinks } from './SocialLinks';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 border-t border-stone-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Contact
        </h2>

        <div className="mt-6">
          <SocialLinks
            showLabels
            className="flex flex-col gap-3"
            linkClassName="flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition-colors w-fit"
          />
        </div>

        <div className="mt-6 space-y-3 text-sm">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors w-fit"
          >
            <Mail className="w-4 h-4 text-slate-400 shrink-0" />
            {PERSONAL_INFO.email}
          </a>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 text-xs text-cyan-800 hover:text-cyan-900 hover:underline cursor-pointer ml-6"
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedEmail ? 'Copied' : 'Copy email'}
          </button>

          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/[^\d+]/g, '')}`}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors w-fit"
          >
            <Phone className="w-4 h-4 text-slate-400 shrink-0" />
            {PERSONAL_INFO.phone}
          </a>

          <div className="flex items-center gap-2 text-slate-500">
            <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
            {PERSONAL_INFO.location}
          </div>
        </div>
      </div>
    </section>
  );
};
