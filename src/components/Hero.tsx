import React, { useState } from 'react';
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
import { PERSONAL_INFO } from '../data/resumeData';
import { TerminalDemo } from './TerminalDemo';
import { GithubIcon } from './Icons';

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
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Staff Positioning & Thesis */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                Staff Software Engineer · AI Systems & Full-Stack
              </span>
            </div>

            {/* Main Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300">
                I build and ship production AI agents, custom ML pipelines, and high-scale platforms.
              </p>
            </div>

            {/* Core Philosophy / Summary Quote */}
            <div className="relative pl-4 border-l-2 border-cyan-500/60 bg-gradient-to-r from-cyan-950/20 to-transparent p-3 rounded-r-lg">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                "I go looking for the problem worth solving rather than waiting to be assigned one, and I'd rather ship something real than write a plan about shipping it."
              </p>
            </div>

            {/* Key Quick Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                <Bot className="w-3.5 h-3.5 text-cyan-400" />
                <span>Production AI Agents</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Amazon Comprehend ML</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                <Code2 className="w-3.5 h-3.5 text-purple-400" />
                <span>React · TypeScript · C# .NET</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Creator of Neuron (~1.6k/wk npm)</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#neuron"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all cursor-pointer"
              >
                <span>Explore Neuron Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 text-sm font-semibold transition-all cursor-pointer"
              >
                <span>View St. Jude Experience</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white border border-slate-800 text-sm transition-all cursor-pointer"
              >
                <span>Full Resume PDF</span>
              </button>
            </div>

            {/* Direct Contact Bar with Quick Copy */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              {/* Copy Email Pill */}
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
                {copiedEmail ? (
                  <span className="text-emerald-400 font-semibold text-[11px] flex items-center gap-1">
                    <Check className="w-3 h-3" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-500" />
                )}
              </button>

              {/* Copy Phone Pill */}
              <button
                onClick={handleCopyPhone}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
                {copiedPhone ? (
                  <span className="text-emerald-400 font-semibold text-[11px] flex items-center gap-1">
                    <Check className="w-3 h-3" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-500" />
                )}
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-200 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>github.com/kovartravis</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Interactive Neuron Terminal Demo */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Highlight badge above terminal */}
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Interactive AI Memory Simulator
                </span>
                <span className="text-xs text-slate-500 font-mono">Live Demo</span>
              </div>

              {/* Terminal Container */}
              <TerminalDemo />
              
              <div className="mt-2 text-center text-xs text-slate-500">
                Interactive preview of <span className="text-cyan-400 font-medium">Neuron</span> — persistent schema-enforced memory for coding agents.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
