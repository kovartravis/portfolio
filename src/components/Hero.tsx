import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { 
  Sparkles, 
  Terminal as TerminalIcon, 
  ArrowRight, 
  Copy, 
  Check, 
  MapPin, 
  Phone, 
  Mail, 
  Bot, 
  Code2, 
  Zap 
} from 'lucide-react';
import { TerminalDemo } from './TerminalDemo';
import { GithubIcon } from './Icons';
import { Reveal } from './effects/Reveal';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Staff Positioning & Thesis */}
          <Reveal className="lg:col-span-6 space-y-7 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 shadow-xs max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700 whitespace-nowrap overflow-hidden text-ellipsis">
                Staff Software Engineer · AI Systems & Full-Stack
              </span>
            </div>

            {/* Main Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.15] text-balance">
                Hi, I'm <span className="text-slate-950 underline decoration-cyan-500/40 decoration-4 underline-offset-8 inline-block whitespace-nowrap">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-600 leading-relaxed pt-1 text-pretty">
                I build and ship production AI agents, custom ML pipelines, and high-scale enterprise platforms.
              </p>
            </div>

            {/* Core Philosophy / Summary Quote */}
            <div className="relative pl-5 border-l-2 border-slate-900 bg-white/60 p-4 rounded-r-xl border border-stone-200/60 shadow-xs">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic text-pretty">
                "I go looking for the problem worth solving rather than waiting to be assigned one, and I'd rather ship something real than write a plan about shipping it."
              </p>
            </div>

            {/* Key Quick Badges */}
            <div className="flex flex-wrap gap-2 text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-slate-700 shadow-xs whitespace-nowrap">
                <Bot className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <span>Production AI Agents</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-slate-700 shadow-xs whitespace-nowrap">
                <Zap className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Amazon Comprehend ML</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-slate-700 shadow-xs whitespace-nowrap">
                <Code2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>React · TypeScript · C# .NET</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-slate-700 shadow-xs whitespace-nowrap">
                <TerminalIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Neuron (~1.6k/wk npm)</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#neuron"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Explore Neuron Project</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#experience"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-stone-50 text-slate-800 border border-stone-200 text-sm font-semibold transition-all shadow-xs cursor-pointer whitespace-nowrap"
              >
                <span>View Experience</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-stone-100 hover:bg-stone-200/80 text-slate-700 hover:text-slate-900 border border-stone-200 text-sm font-medium transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Full Resume</span>
              </button>
            </div>

            {/* Direct Contact Bar with Quick Copy */}
            <div className="pt-5 border-t border-stone-200 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              {/* Copy Email Pill */}
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white hover:bg-stone-50 border border-stone-200 text-slate-700 hover:text-slate-900 transition-colors shadow-xs cursor-pointer whitespace-nowrap"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <span>{PERSONAL_INFO.email}</span>
                {copiedEmail ? (
                  <span className="text-emerald-600 font-semibold text-[11px] flex items-center gap-1">
                    <Check className="w-3 h-3 shrink-0" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 shrink-0" />
                )}
              </button>

              {/* Copy Phone Pill */}
              <button
                onClick={handleCopyPhone}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white hover:bg-stone-50 border border-stone-200 text-slate-700 hover:text-slate-900 transition-colors shadow-xs cursor-pointer whitespace-nowrap"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
                {copiedPhone ? (
                  <span className="text-emerald-600 font-semibold text-[11px] flex items-center gap-1">
                    <Check className="w-3 h-3 shrink-0" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 shrink-0" />
                )}
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <span>github.com/kovartravis</span>
              </a>
            </div>
          </Reveal>

          {/* Right Column: Live Interactive Neuron Terminal Demo */}
          <Reveal delay={120} className="lg:col-span-6">
            <div className="relative">
              {/* Highlight badge above terminal */}
              <div className="flex items-center justify-between mb-2.5 px-1">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-600" /> Interactive AI Memory Simulator
                </span>
                <span className="text-xs text-slate-400 font-mono">Live Demo</span>
              </div>

              {/* Terminal Container */}
              <TerminalDemo />
              
              <div className="mt-3 text-center text-xs text-slate-500">
                Interactive preview of <span className="text-slate-900 font-semibold">Neuron</span> — persistent schema-enforced memory for coding agents.
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
