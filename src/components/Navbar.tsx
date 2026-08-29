import React, { useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

const NAV_LINKS = [
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#neuron' },
  { name: 'Skills', href: '#skills' },
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

        <nav className="hidden sm:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer"
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
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResumeModal();
            }}
            className="flex items-center gap-1.5 px-2 py-2 text-sm font-medium text-slate-700"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>
      )}
    </header>
  );
};
