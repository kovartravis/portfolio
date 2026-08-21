import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal as TerminalIcon, 
  Check, 
  Copy, 
  ArrowRight, 
  GitBranch, 
  Cpu, 
  FileText, 
  CheckCircle2, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { NEURON_PROJECT } from '../data/resumeData';

interface ShowcaseStep {
  id: string;
  stepNumber: string;
  title: string;
  shortLabel: string;
  icon: React.ElementType;
  badge: string;
  badgeColor: string;
  fileOrCmd: string;
  description: string;
  codeType: 'code' | 'markdown' | 'diff' | 'status';
  content: string;
  insight: string;
}

const SHOWCASE_STEPS: ShowcaseStep[] = [
  {
    id: 'hook',
    stepNumber: '01',
    title: 'Agent Harness Hook',
    shortLabel: '1. Hook Agent',
    icon: Cpu,
    badge: 'Pre-Prompt Injection',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    fileOrCmd: '.neuron/harness/claude-code.config.ts',
    description: 'Hooks into Claude Code, Cursor, and Codex CLI to inject validated memories before prompt execution.',
    codeType: 'code',
    content: `// .neuron/harness/claude-code.config.ts
import { neuron } from '@kovartravis/neuron';

export default {
  agent: 'claude-code',
  hooks: {
    beforeSession: async ({ prompt }) => {
      // Hydrates relevant ADRs directly into agent context
      return await neuron.hydrateMemory({ 
        query: prompt, 
        minConfidence: 0.85 
      });
    },
    afterDecision: async ({ adr }) => {
      await neuron.commitMarkdownRecord(adr);
    }
  }
};`,
    insight: 'Prevents agent context drift by injecting verified project decisions before prompt execution.',
  },
  {
    id: 'adr',
    stepNumber: '02',
    title: 'Schema-Enforced Memory',
    shortLabel: '2. Memory ADR',
    icon: FileText,
    badge: 'Zod-Validated Markdown',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    fileOrCmd: '.neuron/memory/adr-014-lead-agent.md',
    description: 'Generates strict YAML frontmatter + Markdown records for human audibility in pull requests.',
    codeType: 'markdown',
    content: `---
title: "Autonomous Lead-Qualification Agent Pipeline"
domain: "Business Development / St. Jude"
status: "Production Deployed"
author: "Travis Kovar"
confidence_score: 0.98
tags: ["amazon-comprehend", "ai-agent", "event-driven"]
---

# Architecture Decision
Deploy an event-driven AI agent that intakes inquiries, extracts entities
via custom Amazon Comprehend ML, and routes high-value leads in real-time.

### Production Impact
- 3,000+ monthly manual document touches eliminated
- Zero hallucinations via schema-enforced output validation`,
    insight: 'Memory records are 100% human-readable Markdown files stored directly in git.',
  },
  {
    id: 'diff',
    stepNumber: '03',
    title: 'Git-Diffable Review',
    shortLabel: '3. Git Diff',
    icon: GitBranch,
    badge: 'Auditable Pull Request',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    fileOrCmd: 'git diff .neuron/memory/context.md',
    description: 'Memories evolve via standard Git PRs — zero opaque vector DBs, black-box embeddings, or data loss.',
    codeType: 'diff',
    content: `--- a/.neuron/memory/context.md
+++ b/.neuron/memory/context.md
@@ -12,4 +12,6 @@
- status: exploring-prototype
+ status: production-deployed
+ throughput: "3,000 docs/mo automated via Comprehend"
+ concurrent_capacity: "200+ peak users"
+ verification: "Passed strict schema validation"`,
    insight: 'Every architectural update is code-reviewed in pull requests alongside code changes.',
  },
  {
    id: 'status',
    stepNumber: '04',
    title: 'Engine Status & Verified',
    shortLabel: '4. Status',
    icon: CheckCircle2,
    badge: 'Production Ready',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    fileOrCmd: 'neuron status --verbose',
    description: 'Validates integrity across all memory files, npm releases, and active harness hooks.',
    codeType: 'status',
    content: `[Neuron Engine v2.4.1] — All 42 Agent Memories Verified
─────────────────────────────────────────────────────────────
• Memory Storage:     .neuron/memory/ (Git-Tracked Markdown)
• Schema Validation:  PASS (Strict Zod ADR schemas)
• Active Harnesses:   Claude Code · Cursor · Codex · Copilot CLI
• Weekly Downloads:   ~1,600+ on npm registry
• Published Releases: 40+ versions
─────────────────────────────────────────────────────────────
✓ System 100% in sync with main branch. Zero vector drift.`,
    insight: 'Published on npm with ~1,600+ weekly downloads and 40+ active releases.',
  },
];

export const TerminalDemo: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  const activeStep = SHOWCASE_STEPS[activeStepIndex];

  const handleNextStep = () => {
    setActiveStepIndex((prev) => (prev + 1) % SHOWCASE_STEPS.length);
  };

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('npm install -g @kovartravis/neuron');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-3xl border border-slate-800 bg-slate-900/95 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-sm flex flex-col justify-between">
      
      {/* Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800/90 select-none gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-1 text-xs font-medium text-slate-400 flex items-center gap-1.5 truncate">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate">neuron showcase — {activeStep.fileOrCmd}</span>
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleCopyInstall}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700/60 cursor-pointer whitespace-nowrap"
            title="Copy npm install command"
          >
            {isCopied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="text-emerald-300 font-semibold text-[11px]">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="text-[11px]">npm i @kovartravis/neuron</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Guided Step Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 bg-slate-950/70 border-b border-slate-800/80 p-1.5 gap-1">
        {SHOWCASE_STEPS.map((step, idx) => {
          const isActive = idx === activeStepIndex;
          const Icon = step.icon;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStepIndex(idx)}
              className={`flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-slate-800 text-white shadow-xs border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
              <span className="whitespace-nowrap">{step.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Active Step Content Window */}
      <div className="p-4 sm:p-5 min-h-[290px] flex flex-col justify-between font-mono text-xs sm:text-[13px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="space-y-3"
          >
            {/* Step Header & Badge */}
            <div className="flex items-center justify-between gap-2 border-b border-slate-800/70 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-slate-500 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                  STEP {activeStep.stepNumber}
                </span>
                <span className="font-bold text-slate-200 text-xs sm:text-sm">
                  {activeStep.title}
                </span>
              </div>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${activeStep.badgeColor} whitespace-nowrap shrink-0`}>
                {activeStep.badge}
              </span>
            </div>

            {/* Code / Markdown Display Box */}
            <div className="bg-slate-950/90 rounded-2xl p-3.5 sm:p-4 border border-slate-800 text-xs font-mono overflow-x-auto leading-relaxed max-h-56 overflow-y-auto scrollbar-thin">
              {activeStep.codeType === 'diff' ? (
                <div className="space-y-1">
                  {activeStep.content.split('\n').map((line, i) => {
                    const isAdd = line.startsWith('+');
                    const isSub = line.startsWith('-');
                    const isHeader = line.startsWith('@@') || line.startsWith('---') || line.startsWith('+++');
                    return (
                      <div
                        key={i}
                        className={`px-1 rounded ${
                          isAdd
                            ? 'text-emerald-400 bg-emerald-950/40'
                            : isSub
                            ? 'text-rose-400 bg-rose-950/40'
                            : isHeader
                            ? 'text-cyan-400/80 font-bold'
                            : 'text-slate-400'
                        }`}
                      >
                        {line}
                      </div>
                    );
                  })}
                </div>
              ) : activeStep.codeType === 'status' ? (
                <div className="text-emerald-300 whitespace-pre-wrap leading-relaxed">
                  {activeStep.content}
                </div>
              ) : (
                <pre className="text-slate-300 whitespace-pre-wrap font-mono">
                  <code>{activeStep.content}</code>
                </pre>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Insight Bar & Step Controls */}
        <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-slate-400 text-[11px] sm:text-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="line-clamp-1">{activeStep.insight}</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
            <a
              href={NEURON_PROJECT.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 text-[11px] font-semibold text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1 shrink-0"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={handleNextStep}
              className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition-colors cursor-pointer shadow-xs whitespace-nowrap shrink-0"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
