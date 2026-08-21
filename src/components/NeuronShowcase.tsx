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
    <section id="neuron" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Featured Open Source System
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Neuron — Persistent Memory for AI Coding Agents
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-base">
              {NEURON_PROJECT.description}
            </p>
          </div>

          {/* Quick Repo & NPM Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={NEURON_PROJECT.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold transition-all hover:border-slate-600"
            >
              <GithubIcon className="w-4 h-4 text-white" />
              <span>github.com/kovartravis/neuron</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 text-sm font-mono transition-all cursor-pointer"
            >
              {copiedCmd ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>npm i -g @kovartravis/neuron</span>
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">Weekly Downloads</div>
            <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono mt-1">~1,600+</div>
            <div className="text-[11px] text-slate-500">Active npm ecosystem</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">Releases</div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono mt-1">40+ Versions</div>
            <div className="text-[11px] text-slate-500">Actively maintained</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">License</div>
            <div className="text-xl sm:text-2xl font-bold text-purple-400 font-mono mt-1">MIT Open Source</div>
            <div className="text-[11px] text-slate-500">Free & unrestricted</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">Storage Engine</div>
            <div className="text-xl sm:text-2xl font-bold text-amber-400 font-mono mt-1">Git-Diffable MD</div>
            <div className="text-[11px] text-slate-500">Zero opaque lock-in</div>
          </div>
        </div>

        {/* Deep Architecture Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Why Git-Diffable Markdown vs Black-Box DB */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              Why Git-Diffable Markdown instead of a Black-Box DB?
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {/* Comparison Box */}
              <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-900/30">
                <div className="flex items-center gap-2 text-sm font-bold text-rose-400 mb-2">
                  <XCircle className="w-4 h-4" /> Traditional Vector / Embedding DB
                </div>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                  <li>Opaque binary float embeddings cannot be verified in Git PRs</li>
                  <li>Prone to silent hallucinations without strict schema guarantees</li>
                  <li>Vendor lock-in with proprietary cloud databases & latency overhead</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/40">
                <div className="flex items-center gap-2 text-sm font-bold text-cyan-300 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Neuron's Schema-Enforced Approach
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li><strong className="text-white">100% Git-Diffable:</strong> Every memory and architectural rule is human-readable and reviewed in PRs</li>
                  <li><strong className="text-white">Schema Validation:</strong> Frontmatter is strictly typed with Zod/JSON schemas</li>
                  <li><strong className="text-white">Native Agent Hooks:</strong> Plugs directly into Claude Code, Codex, Cursor & Copilot CLI</li>
                </ul>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {NEURON_PROJECT.architecturePoints.map((pt, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <h4 className="text-xs font-bold text-slate-200">{pt.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{pt.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Harness Configs & Code Viewer */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="text-xs font-bold text-slate-300 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                Harness Integration Configs
              </div>
              <span className="text-[11px] text-slate-500 font-mono">TypeScript / Node</span>
            </div>

            {/* Harness Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {harnessDetails.map((harness, idx) => (
                <button
                  key={harness.name}
                  onClick={() => setActiveHarness(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeHarness === idx
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm'
                      : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700/50'
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
            <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 font-mono text-xs overflow-x-auto text-slate-200 leading-relaxed scrollbar-thin">
              <pre className="text-cyan-300">{harnessDetails[activeHarness].code}</pre>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-cyan-400" /> Auto-creates branch ADRs
              </span>
              <a
                href={NEURON_PROJECT.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
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
