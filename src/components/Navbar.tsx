import React, { useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';
import { SocialLinks } from './SocialLinks';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

const NAV_LINKS = [
  { name: 'Work', href: '#work' },
  { name: 'Point of View', href: '#point-of-view' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fafaf9]/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        <a href="#" className="font-bold text-slate-900 text-sm whitespace-nowrap">
          {PERSONAL_INFO.name}
        </a>

        <nav className="hidden sm:flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <SocialLinks className="flex items-center gap-2.5" iconClassName="w-3.5 h-3.5" />
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </nav>

        <button
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="sm:hidden p-2 text-slate-600"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-stone-200 px-4 py-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-2 text-sm font-medium text-slate-700"
            >
              {link.name}
            </a>
          ))}
          <div className="px-2 py-2">
            <SocialLinks showLabels className="flex flex-col gap-2" linkClassName="flex items-center gap-1.5 text-sm font-medium text-slate-700" />
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResumeModal();
            }}
            className="flex items-center gap-1.5 px-2 py-2 text-sm font-medium text-slate-500"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>
      )}
    </header>
  );
};
