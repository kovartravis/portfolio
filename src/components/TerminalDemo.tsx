import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw, Check, Sparkles, Copy } from 'lucide-react';

interface TerminalLine {
  id: string;
  type: 'command' | 'output' | 'system' | 'diff' | 'success';
  text?: string;
  diffLines?: { type: 'add' | 'sub' | 'ctx'; text: string }[];
}

const PRESET_COMMANDS = [
  { cmd: 'neuron status', label: '1. Status & Harnesses' },
  { cmd: 'neuron memory query "lead-qualification"', label: '2. Search Agent Memory' },
  { cmd: 'neuron diff --last-session', label: '3. Git-Diffable Memory' },
  { cmd: 'neuron harness --attach claude-code', label: '4. Attach Hook' },
];

export const TerminalDemo: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: '1',
      type: 'system',
      text: '⚡ Neuron AI Agent Memory Harness v2.4.1 initialized.',
    },
    {
      id: '2',
      type: 'system',
      text: 'Type a command or click a quick-action button below to simulate live agent memory integration.',
    },
    {
      id: '3',
      type: 'command',
      text: 'neuron status',
    },
    {
      id: '4',
      type: 'output',
      text: `[Neuron Engine] Storage: .neuron/memory/ (Git-Tracked Markdown)
● Harness Integration: Active (Claude Code, Cursor, Codex, Copilot CLI)
● Validated Memory Entities: 42 schema-verified ADRs
● Last Sync: 2 minutes ago | Status: 100% in sync with main`,
    },
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    const newHistory: TerminalLine[] = [
      ...history,
      { id: Date.now().toString(), type: 'command', text: cmd },
    ];

    const lower = cmd.toLowerCase();

    if (lower === 'clear' || lower === 'cls') {
      setHistory([
        {
          id: Date.now().toString(),
          type: 'system',
          text: 'Terminal cleared. Type "help" or click presets.',
        },
      ]);
      setInputVal('');
      return;
    }

    if (lower === 'help' || lower === 'neuron --help' || lower === 'neuron -h') {
      newHistory.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `Available Commands:
  • neuron status                  - Inspect harness status, hooks & active markdown memories
  • neuron memory query <query>    - Search schema-enforced persistent agent context
  • neuron diff --last-session     - View git-diffable markdown memory updates
  • neuron harness --attach <tool> - Connect to Claude Code, Cursor, Codex, or Copilot
  • neuron init                    - Initialize .neuron/ schema in current workspace
  • resume                         - Print quick engineering profile
  • clear                          - Clear terminal output`,
      });
    } else if (lower.includes('status')) {
      newHistory.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `[Neuron Engine: v2.4.1]
──────────────────────────────────────────────────────────
Storage Target:     .neuron/memory/ (Markdown + YAML Frontmatter)
Schema Validation:  Enabled (strict type-checked ADRs)
Harness Hooks:      Claude Code [ENABLED] · Cursor [ENABLED] · Copilot [ENABLED]
Weekly Downloads:   ~1,600+ on npm registry
Active Releases:    40+ published versions
Integrity:          All agent memories directly inspectable in GitHub PRs`,
      });
    } else if (lower.includes('query') || lower.includes('search')) {
      newHistory.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `[Neuron Memory Query: "${cmd.replace(/^neuron (memory )?(query|search) ?/i, '') || 'lead-qualification'}"]
Found 1 matching schema-validated Architectural Decision Record (ADR):

File: .neuron/memory/adr-014-lead-qualification.md
───
---
title: "Autonomous Lead-Qualification Agent Pipeline"
domain: "Business Development / St. Jude"
status: "Production Deployed"
author: "Travis Kovar"
confidence_score: 0.98
tags: ["amazon-comprehend", "ai-agent", "event-driven", "react-csharp"]
---
# Summary
Deploys autonomous lead qualification agent to intake inbound inquiries,
run entity extraction via custom Amazon Comprehend ML, and route to BD reps.
Eliminated 3,000+ monthly manual document touches with zero manual intervention.`,
      });
    } else if (lower.includes('diff')) {
      newHistory.push({
        id: (Date.now() + 1).toString(),
        type: 'diff',
        diffLines: [
          { type: 'ctx', text: '--- a/.neuron/memory/context.md' },
          { type: 'ctx', text: '+++ b/.neuron/memory/context.md' },
          { type: 'ctx', text: '@@ -12,4 +12,7 @@' },
          { type: 'ctx', text: ' status: verified' },
          { type: 'sub', text: '- architecture: legacy-monolith-sync' },
          { type: 'add', text: '+ architecture: modern-react-csharp-microservices' },
          { type: 'add', text: '+ automated_throughput: "3,000 docs/mo via Amazon Comprehend"' },
          { type: 'add', text: '+ active_lead_capacity: "200+ peak concurrent users"' },
        ],
      });
      newHistory.push({
        id: (Date.now() + 2).toString(),
        type: 'success',
        text: '✓ Memory diff verified and ready to commit to git repository.',
      });
    } else if (lower.includes('harness') || lower.includes('attach')) {
      newHistory.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `[Harness Hook Attached: Claude Code]
✓ Injected 42 schema-validated markdown memories into agent context window
✓ Registered pre-prompt hook: @neuron/harness/claude-code.js
✓ Registered post-execution memory persistence watcher
Agent is now equipped with persistent, auditable project memory.`,
      });
    } else if (lower.includes('init')) {
      newHistory.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `[Neuron Init]
✓ Created .neuron/
✓ Created .neuron/memory/
✓ Generated .neuron/schema.json
✓ Added git hook for schema enforcement on commit
Ready! Run \`neuron status\` to verify.`,
      });
    } else if (lower === 'resume') {
      newHistory.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `TRAVIS KOVAR — Staff Software Engineer (AI Systems & Full-Stack)
Cordova, TN | (512) 800-4209 | kovartravis@gmail.com
• St. Jude / ALSAC: Built AI agents, ML pipeline (3k docs/mo), Event Experiences platform (200+ peak users).
• Neuron: Open-source persistent memory for AI coding agents (~1.6k+ weekly npm downloads).
• Stack: AI Agents, Amazon Comprehend, React, TypeScript, C# .NET, AWS, Kafka.`,
      });
    } else {
      newHistory.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `Command not recognized: "${cmd}". Type "help" or click one of the quick presets below.`,
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('npm install -g @kovartravis/neuron');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleReset = () => {
    setHistory([
      {
        id: '1',
        type: 'system',
        text: '⚡ Neuron AI Agent Memory Harness reloaded.',
      },
      {
        id: '2',
        type: 'system',
        text: 'Try running: neuron status, neuron memory query "lead-qualification", or neuron diff',
      },
    ]);
  };

  return (
    <div className="w-full rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-sm">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80 select-none gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-1 text-xs font-medium text-slate-400 flex items-center gap-1.5 truncate">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate">neuron-harness — bash</span>
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleCopyInstall}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700/60 cursor-pointer whitespace-nowrap"
            title="Copy npm install command"
          >
            {isCopied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="text-emerald-300 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="hidden sm:inline">npm i @kovartravis/neuron</span>
                <span className="sm:hidden">npm i</span>
              </>
            )}
          </button>
          <button
            onClick={handleReset}
            className="p-1 text-slate-400 hover:text-slate-200 transition-colors rounded hover:bg-slate-800 cursor-pointer shrink-0"
            title="Reset terminal"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Output Body */}
      <div className="p-4 sm:p-5 h-80 sm:h-96 overflow-y-auto space-y-3 font-mono text-xs sm:text-sm scrollbar-thin">
        {history.map((line) => {
          if (line.type === 'command') {
            return (
              <div key={line.id} className="flex items-start gap-2 text-slate-100">
                <span className="text-cyan-400 select-none">➜</span>
                <span className="text-emerald-400 select-none">~/.neuron</span>
                <span className="text-purple-400 select-none">$</span>
                <span className="font-semibold">{line.text}</span>
              </div>
            );
          }

          if (line.type === 'system') {
            return (
              <div key={line.id} className="text-cyan-300/80 bg-cyan-950/30 border-l-2 border-cyan-500 px-3 py-1.5 rounded-r">
                {line.text}
              </div>
            );
          }

          if (line.type === 'diff' && line.diffLines) {
            return (
              <div key={line.id} className="bg-slate-950/90 rounded-lg p-3 border border-slate-800 space-y-1 font-mono text-xs overflow-x-auto">
                <div className="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" /> Git-Diffable Markdown Memory Stream:
                </div>
                {line.diffLines.map((dl, idx) => (
                  <div
                    key={idx}
                    className={
                      dl.type === 'add'
                        ? 'text-emerald-400 bg-emerald-950/40 px-1 rounded'
                        : dl.type === 'sub'
                        ? 'text-rose-400 bg-rose-950/40 px-1 rounded'
                        : 'text-slate-400'
                    }
                  >
                    {dl.text}
                  </div>
                ))}
              </div>
            );
          }

          if (line.type === 'success') {
            return (
              <div key={line.id} className="text-emerald-400 font-medium flex items-center gap-1.5">
                <Check className="w-4 h-4" /> {line.text}
              </div>
            );
          }

          return (
            <div key={line.id} className="text-slate-300 whitespace-pre-wrap leading-relaxed pl-4 border-l border-slate-800">
              {line.text}
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Preset Command Buttons */}
      <div className="px-4 py-2.5 bg-slate-950/60 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto">
        <span className="text-xs text-slate-400 flex items-center gap-1 whitespace-nowrap">
          <Play className="w-3 h-3 text-cyan-400" /> Quick test:
        </span>
        {PRESET_COMMANDS.map((preset) => (
          <button
            key={preset.cmd}
            onClick={() => executeCommand(preset.cmd)}
            className="text-xs px-2.5 py-1 rounded bg-slate-800/90 hover:bg-cyan-950/60 hover:border-cyan-500/60 text-slate-300 hover:text-cyan-200 border border-slate-700/60 transition-all whitespace-nowrap cursor-pointer"
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Terminal Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          executeCommand(inputVal);
        }}
        className="flex items-center px-4 py-3 bg-slate-950 border-t border-slate-800"
      >
        <span className="text-cyan-400 font-bold mr-2 select-none">➜</span>
        <span className="text-purple-400 font-bold mr-2 select-none">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'help', 'neuron status', 'neuron memory query', etc..."
          className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none font-mono text-xs sm:text-sm"
        />
        <button
          type="submit"
          className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 text-white rounded text-xs font-semibold transition-colors cursor-pointer"
        >
          Run
        </button>
      </form>
    </div>
  );
};
