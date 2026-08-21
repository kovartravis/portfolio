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
    { name: 'Neuron (OSS)', href: '#neuron', icon: Terminal },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills & Architecture', href: '#skills', icon: Cpu },
    { name: 'Education & Certs', href: '#credentials', icon: Layers },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fafaf9]/90 backdrop-blur-md border-b border-stone-200 shadow-xs py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 p-[1px] shadow-xs group-hover:shadow-md transition-all">
            <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center font-mono font-bold text-slate-900 text-sm group-hover:scale-105 transition-transform">
              TK
            </div>
          </div>
          <div>
            <div className="font-bold text-slate-900 group-hover:text-cyan-700 transition-colors flex items-center gap-2 text-sm sm:text-base">
              <span>{PERSONAL_INFO.name}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Staff SWE
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              AI Systems & Full-Stack
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/80 border border-stone-200/90 rounded-full px-4 py-1.5 shadow-xs backdrop-blur-sm">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-stone-100 rounded-full transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-slate-400" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-white rounded-lg transition-colors border border-stone-200 shadow-xs"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white hover:bg-stone-50 text-slate-700 hover:text-slate-900 border border-stone-200 transition-all shadow-xs cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-600" />
            <span>Resume & PDF</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-xs hover:shadow-md"
          >
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-white rounded-lg transition-colors border border-stone-200"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fafaf9]/98 border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-white rounded-lg transition-colors"
                >
                  <Icon className="w-4 h-4 text-cyan-600" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white text-slate-800 font-semibold text-sm border border-stone-200 shadow-xs"
            >
              <FileText className="w-4 h-4 text-cyan-600" />
              <span>View & Print Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
