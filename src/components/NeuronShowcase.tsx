import React, { useState } from 'react';
import { 
  Sparkles, 
  GitBranch, 
  CheckCircle2, 
  XCircle, 
  ExternalLink, 
  Copy, 
  Check, 
  Cpu, 
  ShieldCheck 
} from 'lucide-react';
import { NEURON_PROJECT } from '../data/resumeData';
import { GithubIcon } from './Icons';

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

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-14">
          <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <div className="text-xs text-slate-500 font-medium whitespace-nowrap">Weekly Downloads</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono mt-1 whitespace-nowrap">~1,600+</div>
            <div className="text-[11px] text-slate-400 mt-0.5 whitespace-nowrap">Active npm ecosystem</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <div className="text-xs text-slate-500 font-medium whitespace-nowrap">Releases</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono mt-1 whitespace-nowrap">40+ Versions</div>
            <div className="text-[11px] text-slate-400 mt-0.5 whitespace-nowrap">Actively maintained</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <div className="text-xs text-slate-500 font-medium whitespace-nowrap">License</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono mt-1 whitespace-nowrap">MIT</div>
            <div className="text-[11px] text-slate-400 mt-0.5 whitespace-nowrap">Open source & free</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <div className="text-xs text-slate-500 font-medium whitespace-nowrap">Storage Engine</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono mt-1 whitespace-nowrap">Git Markdown</div>
            <div className="text-[11px] text-slate-400 mt-0.5 whitespace-nowrap">Zero opaque lock-in</div>
          </div>
        </div>

        {/* Deep Architecture Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Why Git-Diffable Markdown vs Black-Box DB */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-slate-950 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-700" />
              Why Git-Diffable Markdown instead of a Black-Box DB?
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {/* Traditional Box */}
              <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200/70">
                <div className="flex items-center gap-2 text-xs font-bold text-rose-800 uppercase tracking-wide mb-2">
                  <XCircle className="w-4 h-4 text-rose-600" /> Traditional Vector / Embedding DB
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                  <li>Opaque binary float embeddings cannot be verified in Git PRs</li>
                  <li>Prone to silent hallucinations without strict schema guarantees</li>
                  <li>Vendor lock-in with proprietary cloud databases & latency overhead</li>
                </ul>
              </div>

              {/* Neuron Box */}
              <div className="p-5 rounded-2xl bg-cyan-50/50 border border-cyan-200/80">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-900 uppercase tracking-wide mb-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-700" /> Neuron's Schema-Enforced Approach
                </div>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                  <li><strong className="text-slate-950">100% Git-Diffable:</strong> Every memory and architectural rule is human-readable and reviewed in PRs</li>
                  <li><strong className="text-slate-950">Schema Validation:</strong> Frontmatter is strictly typed with Zod/JSON schemas</li>
                  <li><strong className="text-slate-950">Native Agent Hooks:</strong> Plugs directly into Claude Code, Codex, Cursor & Copilot CLI</li>
                </ul>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {NEURON_PROJECT.architecturePoints.map((pt, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
                  <h4 className="text-xs font-bold text-slate-900">{pt.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{pt.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Harness Configs & Code Viewer */}
          <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-6 shadow-xl text-slate-100">
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

            {/* Code snippet block */}
            <div className="rounded-xl bg-slate-900 p-4 border border-slate-800 font-mono text-xs overflow-x-auto text-slate-200 leading-relaxed scrollbar-thin">
              <pre className="text-cyan-300">{harnessDetails[activeHarness].code}</pre>
            </div>

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
