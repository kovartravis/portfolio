import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Layers, 
  Briefcase, 
  Cpu, 
  FileText, 
  Mail, 
  Menu, 
  X 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';
import { GithubIcon } from './Icons';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Neuron', href: '#neuron', icon: Terminal },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Credentials', href: '#credentials', icon: Layers },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fafaf9]/92 backdrop-blur-md border-b border-stone-200/90 shadow-2xs py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 p-[1px] shadow-xs group-hover:shadow-md transition-all">
            <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center font-mono font-bold text-slate-900 text-xs sm:text-sm group-hover:scale-105 transition-transform">
              TK
            </div>
          </div>
          <div>
            <div className="font-bold text-slate-900 group-hover:text-cyan-700 transition-colors flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm whitespace-nowrap">
              <span>{PERSONAL_INFO.name}</span>
              <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
                Senior SWE
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block whitespace-nowrap">
              AI Systems & Full-Stack
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/90 border border-stone-200/90 rounded-full px-3 py-1.5 shadow-2xs backdrop-blur-sm shrink-0">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-stone-100 rounded-full transition-colors whitespace-nowrap"
              >
                <Icon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-white rounded-xl transition-colors border border-stone-200 shadow-2xs shrink-0"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-white hover:bg-stone-50 text-slate-700 hover:text-slate-900 border border-stone-200 transition-all shadow-2xs cursor-pointer whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
            <span>Resume & PDF</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-2xs hover:shadow-xs whitespace-nowrap shrink-0"
          >
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Mobile & Tablet Controls */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-white text-slate-700 border border-stone-200 shadow-2xs whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-white rounded-xl transition-colors border border-stone-200 bg-white/80 shadow-2xs shrink-0"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-stone-200 px-4 pt-3 pb-5 space-y-3 mt-2 shadow-lg backdrop-blur-xl max-w-6xl mx-auto">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-stone-50 rounded-xl transition-colors"
                >
                  <Icon className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
