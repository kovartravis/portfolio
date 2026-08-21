import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  GitBranch, 
  CheckCircle2, 
  ExternalLink, 
  Copy, 
  Check, 
  Cpu, 
  ShieldCheck 
} from 'lucide-react';
import { NEURON_PROJECT } from '../data/resumeData';
import { GithubIcon } from './Icons';
import { BorderBeam } from './effects/BorderBeam';

export const NeuronShowcase: React.FC = () => {
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [activeHarness, setActiveHarness] = useState(0);

  const harnessDetails = [
    {
      name: "Claude Code",
      badge: "Native Hook",
      tagline: "Injects verified architectural context directly before prompt execution",
      code: `// .neuron/harness/claude-code.config.js
export default {
  agent: "claude-code",
  hooks: {
    beforeSession: async ({ prompt }) => {
      return await neuron.hydrateMemory({ query: prompt, minConfidence: 0.85 });
    },
    afterDecision: async ({ adr }) => {
      await neuron.commitMarkdownRecord(adr);
    }
  }
};`
    },
    {
      name: "Cursor IDE",
      badge: "Rules & Memory",
      tagline: "Synchronizes .cursorrules with schema-validated repository memories",
      code: `// .neuron/harness/cursor.config.js
export default {
  agent: "cursor",
  syncTarget: ".cursor/rules/agent-memory.mdc",
  format: "frontmatter-markdown",
  autoSyncOnSave: true
};`
    },
    {
      name: "Codex CLI",
      badge: "Harness Hook",
      tagline: "Maintains cross-turn state in git-auditable markdown files",
      code: `// .neuron/harness/codex.config.js
export default {
  agent: "codex-cli",
  preserveContextHistory: true,
  storagePath: ".neuron/memory/sessions/"
};`
    },
    {
      name: "GitHub Copilot CLI",
      badge: "Context Extender",
      tagline: "Supplements CLI suggestions with internal team design patterns",
      code: `// .neuron/harness/copilot.config.js
export default {
  agent: "github-copilot-cli",
  injectSharedTemplates: true,
  strictSchema: true
};`
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install -g @kovartravis/neuron');
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section id="neuron" className="py-24 sm:py-32 bg-[#fafaf9] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 shrink-0" /> Featured Open Source System
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
              Neuron — Persistent Memory for AI Coding Agents
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base leading-relaxed text-pretty">
              {NEURON_PROJECT.description}
            </p>
          </div>

          {/* Quick Repo & NPM Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={NEURON_PROJECT.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-slate-800 border border-stone-200 text-xs sm:text-sm font-semibold transition-all shadow-xs whitespace-nowrap"
            >
              <GithubIcon className="w-4 h-4 text-slate-900 shrink-0" />
              <span>github.com/kovartravis/neuron</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </a>

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-50 hover:bg-cyan-100/80 border border-cyan-200 text-cyan-900 text-xs sm:text-sm font-mono font-medium transition-all shadow-xs cursor-pointer whitespace-nowrap"
            >
              {copiedCmd ? <Check className="w-4 h-4 text-emerald-600 shrink-0" /> : <Copy className="w-4 h-4 text-cyan-700 shrink-0" />}
              <span>npm i -g @kovartravis/neuron</span>
            </button>
          </div>
        </div>

        {/* Quick Stat Highlights - Single inline bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-xs mb-10 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-950 font-mono text-sm sm:text-base">~1,600+</span>
            <span className="text-slate-500">Weekly Downloads</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-stone-200" />
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-950 font-mono text-sm sm:text-base">40+</span>
            <span className="text-slate-500">Versions Maintained</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-stone-200" />
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-950 font-mono text-sm sm:text-base">MIT</span>
            <span className="text-slate-500">Open Source</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-stone-200" />
          <div className="flex items-center gap-2">
            <span className="font-bold text-cyan-800 font-mono text-sm sm:text-base">Git Markdown</span>
            <span className="text-slate-500">Storage Engine</span>
          </div>
        </div>

        {/* Deep Architecture & Live Integration Configs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Why Git-Diffable Markdown */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-700 shrink-0" />
                Why Git Markdown over Vector DBs?
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-pretty">
                Opaque binary embeddings cannot be code-reviewed in pull requests. Neuron provides an auditable memory layer that lives directly in your git repository.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-700 mt-0.5 shrink-0" />
                  <div className="text-xs text-slate-700">
                    <strong className="text-slate-950">100% Git-Diffable:</strong> Every memory and decision record is human-readable and reviewed in standard PR workflows.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-700 mt-0.5 shrink-0" />
                  <div className="text-xs text-slate-700">
                    <strong className="text-slate-950">Schema-Enforced:</strong> Frontmatter metadata validated strictly against Zod / JSON schemas to stop agent hallucination.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-700 mt-0.5 shrink-0" />
                  <div className="text-xs text-slate-700">
                    <strong className="text-slate-950">Native Agent Hooks:</strong> Integrates directly into Claude Code, Cursor, Codex, and Copilot CLI.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Harness Configs & Code Viewer with BorderBeam */}
          <div className="lg:col-span-7 relative bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-7 shadow-2xl text-slate-100 overflow-hidden">
            {/* Animated glowing border beam effect */}
            <BorderBeam size={220} duration={10} colorFrom="#06b6d4" colorTo="#818cf8" />

            <div className="flex items-center justify-between border-b border-slate-800 pb-3.5 mb-4">
              <div className="text-xs font-bold text-slate-200 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                Harness Integration Configs
              </div>
              <span className="text-[11px] text-slate-400 font-mono">TypeScript / Node</span>
            </div>

            {/* Harness Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {harnessDetails.map((harness, idx) => (
                <button
                  key={harness.name}
                  onClick={() => setActiveHarness(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeHarness === idx
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-xs'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {harness.name}
                </button>
              ))}
            </div>

            <p className="text-xs text-slate-400 mb-3">
              {harnessDetails[activeHarness].tagline}
            </p>

            {/* Code snippet block with smooth transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHarness}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl bg-slate-900 p-4 border border-slate-800 font-mono text-xs overflow-x-auto text-slate-200 leading-relaxed scrollbar-thin"
              >
                <pre className="text-cyan-300">{harnessDetails[activeHarness].code}</pre>
              </motion.div>
            </AnimatePresence>

            <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-cyan-400" /> Auto-creates branch ADRs
              </span>
              <a
                href={NEURON_PROJECT.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1 font-semibold"
              >
                View on GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
