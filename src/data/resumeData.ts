export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  leadershipTag?: string;
  summary: string;
  highlights: {
    title: string;
    description: string;
    metrics?: string;
    tags: string[];
  }[];
}

export interface ProjectItem {
  name: string;
  tagline: string;
  license: string;
  githubUrl: string;
  npmUrl?: string;
  stats: {
    downloads: string;
    releases: string;
    license: string;
    status: string;
  };
  description: string;
  architecturePoints: {
    title: string;
    description: string;
  }[];
  supportedHarnesses: {
    name: string;
    type: string;
    icon: string;
  }[];
  codeSnippet: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    context: string;
    iconName?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "TRAVIS KOVAR",
  title: "Senior Software Engineer — AI Systems & Full-Stack",
  headline: "I build and ship — from production AI agents and ML pipelines to full-stack platforms used by hundreds of people.",
  location: "Cordova, TN",
  phone: "(512) 800-4209",
  email: "kovartravis@gmail.com",
  github: "https://github.com/kovartravis",
  neuronRepo: "https://github.com/kovartravis/neuron",
  availability: "Senior SWE · Targeting Staff / Lead Roles",
  summary:
    "Software engineer who builds and ships — from production AI agents to full-stack platforms used by hundreds of people. I've built internal libraries and project templates that other engineering teams picked up on their own, and I informally lead a group of 8 engineers without needing a title to do it. I go looking for the problem worth solving rather than waiting to be assigned one, and I'd rather ship something real than write a plan about shipping it.",
};

export const KEY_METRICS = [
  {
    value: "3,000+",
    label: "Docs / Month Automated",
    subtext: "Manual document processing cut to zero with custom ML",
    color: "from-cyan-400 to-blue-500",
  },
  {
    value: "50+ hrs",
    label: "Saved Every Month",
    subtext: "Recovered via automated Comprehend ML pipeline",
    color: "from-emerald-400 to-teal-500",
  },
  {
    value: "2,000+",
    label: "Support Tickets Eliminated",
    subtext: "By designing the greenfield Event Experiences platform",
    color: "from-violet-400 to-purple-500",
  },
  {
    value: "1,600+",
    label: "Weekly npm Downloads",
    subtext: "Neuron AI agent persistent memory engine (40+ releases)",
    color: "from-amber-400 to-orange-500",
  },
  {
    value: "8",
    label: "Engineers Mentored / Led",
    subtext: "Informal technical leadership across cross-functional teams",
    color: "from-pink-400 to-rose-500",
  },
  {
    value: "100s",
    label: "Engineers Using Shared Libs",
    subtext: "Internal tools and templates adopted organically company-wide",
    color: "from-indigo-400 to-cyan-400",
  },
];

export const NEURON_PROJECT: ProjectItem = {
  name: "Neuron",
  tagline: "Persistent Memory System for AI Coding Agents",
  license: "MIT Licensed · Open Source",
  githubUrl: "https://github.com/kovartravis/neuron",
  npmUrl: "https://www.npmjs.com/package/@kovartravis/neuron",
  stats: {
    downloads: "~1,600+ weekly downloads",
    releases: "40+ published releases",
    license: "MIT Open Source",
    status: "Actively Maintained",
  },
  description:
    "A schema-enforced, git-diffable markdown memory layer for AI coding agents. Unlike opaque vector databases, Neuron keeps agent context transparent, human-auditable, and natively version-controlled alongside application code.",
  architecturePoints: [
    {
      title: "Schema-Enforced Git-Diffable Markdown",
      description:
        "Stores agent memory, architectural decisions, and project conventions as clean markdown with strict frontmatter validation instead of black-box embedding databases.",
    },
    {
      title: "Native Harness Hooks Integration",
      description:
        "Hooks directly into Claude Code, Codex CLI, Cursor, and GitHub Copilot CLI to inject relevant memory context and capture decision history automatically.",
    },
    {
      title: "Zero Opaque Vendor Lock-in",
      description:
        "All memories live in the repository tree, allowing code reviewers and CI systems to inspect agent learnings in standard pull requests.",
    },
    {
      title: "High Performance & Battle-Tested",
      description:
        "Over 40 published releases with ~1,600+ weekly downloads on npm, trusted by engineers building autonomous and pair-programming agent workflows.",
    },
  ],
  supportedHarnesses: [
    { name: "Claude Code", type: "Native Hook / Harness", icon: "Bot" },
    { name: "Cursor IDE", type: "Rule & Memory Injector", icon: "Code2" },
    { name: "GitHub Copilot CLI", type: "Context Extender", icon: "Github" },
    { name: "Codex CLI", type: "Session Preserver", icon: "Terminal" },
  ],
  codeSnippet: `// Example Neuron harness integration hook
import { NeuronMemoryHarness } from '@kovartravis/neuron';

const harness = new NeuronMemoryHarness({
  storage: '.neuron/memory',
  schemaValidation: true,
  autoGitDiff: true,
});

// Intercepts agent prompt & hydrates verified markdown memory
const enrichedContext = await harness.hydrate({
  agent: 'claude-code',
  query: 'Refactor lead qualification workflow',
});

console.log(\`[Neuron] Loaded \${enrichedContext.memories.length} schema-validated memories\`);`,
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "st-jude",
    company: "ALSAC / St. Jude Children's Research Hospital",
    role: "Software Engineer",
    period: "May 2021 – Present",
    leadershipTag: "Informal Technical Lead for a group of 8 engineers",
    summary:
      "Leading technical architecture across AI initiatives, custom machine learning pipelines, and core enterprise platforms supporting the St. Jude fundraising and business development missions.",
    highlights: [
      {
        title: "Autonomous Lead-Qualification AI Agents",
        description:
          "Conceived, built, and shipped production AI agents that automate the lead-qualification stage of the business development workflow. Took the project from zero to production without a formal internal AI/ML team in place.",
        metrics: "Automated end-to-end lead qualification in production",
        tags: ["AI Agents", "LLM Orchestration", "Python", "API Development"],
      },
      {
        title: "Custom Amazon Comprehend ML Pipeline",
        description:
          "Designed and trained a custom machine learning pipeline on Amazon Comprehend that took over complex document processing entirely, eliminating manual review workloads.",
        metrics: "Cut 3,000+ docs/mo of manual work down to 0; saved 50+ hrs/mo",
        tags: ["Amazon Comprehend", "Machine Learning", "AWS", "Python", "NLP"],
      },
      {
        title: "Greenfield Event Experiences Platform",
        description:
          "Architected and built the Event Experiences platform from the ground up to track event revenue and expenses, supporting high peak concurrency during major campaigns.",
        metrics: "200+ peak concurrent users; 2,000+ support tickets eliminated",
        tags: ["React", "TypeScript", "C# .NET", "AWS", "Kafka"],
      },
      {
        title: "Legacy Monolith Modernization & Team Leadership",
        description:
          "Rebuilt an obsolete internal platform as a modern React/C#.NET cloud application on personal initiative. Subsequently led the ~8-engineer effort to ship it, vastly improving scalability and decommissioning a legacy system nobody wanted to maintain.",
        metrics: "Decommissioned legacy tech debt; led 8 engineers",
        tags: ["React", "C# .NET", "System Migration", "Microservices"],
      },
      {
        title: "Company-Wide Developer Libraries & Templates",
        description:
          "Authored internal developer libraries and shared project starter templates that hundreds of engineers across the organization now use day-to-day. Adopted organically across multiple teams due to high utility and developer experience.",
        metrics: "Adopted voluntarily by 100s of engineers across teams",
        tags: ["DevEx", "Shared Libraries", "Architecture", "CI/CD"],
      },
    ],
  },
  {
    id: "truckpro",
    company: "TruckPro",
    role: "Lead Developer",
    period: "January 2019 – May 2021",
    summary:
      "Owned customer-facing web applications end-to-end and initiated modernization of enterprise integration infrastructure.",
    highlights: [
      {
        title: "End-to-End Customer-Facing Web Applications",
        description:
          "Owned mission-critical customer-facing web applications from the initial design mockup to production deployment, used daily across the business for commercial operations.",
        metrics: "Full lifecycle ownership from UI mockups to production",
        tags: ["Full-Stack", "JavaScript / React", "API Design", "UI/UX"],
      },
      {
        title: "Integration Modernization with MuleSoft",
        description:
          "Kicked off the company's first integration modernization initiative, introducing MuleSoft to systematically replace brittle point-to-point legacy integrations with manageable enterprise APIs.",
        metrics: "Replaced legacy point-to-point architecture with MuleSoft",
        tags: ["MuleSoft", "Enterprise Integration", "API Architecture"],
      },
    ],
  },
  {
    id: "american-home-shield",
    company: "American Home Shield",
    role: "Software Engineer",
    period: "January 2018 – December 2019",
    summary:
      "Engineered high-converting sales funnels and modern cloud e-commerce services supporting post-launch commercial operations.",
    highlights: [
      {
        title: "Modern Angular Sales Funnel & AWS Cloud Backend",
        description:
          "Built a modern Angular customer sales funnel paired with a robust C# / AWS e-commerce backend that successfully replaced legacy systems supporting post-launch commercial operations.",
        metrics: "Replaced legacy systems with modern cloud e-commerce",
        tags: ["Angular", "C# .NET", "AWS", "E-Commerce", "REST APIs"],
      },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "AI & ML Systems",
    description: "Production agents, NLP pipelines, and developer memory harnesses",
    skills: [
      {
        name: "AI Agents & Autonomous Systems",
        level: "Expert",
        context: "Shipped lead qualification agents & open-source Neuron memory harness",
      },
      {
        name: "Amazon Comprehend & NLP",
        level: "Expert",
        context: "Trained custom ML pipeline automating 3,000+ docs/month at St. Jude",
      },
      {
        name: "Machine Learning Pipelines",
        level: "Advanced",
        context: "Document classification, entity extraction, automated routing",
      },
      {
        name: "LLM Harness Hooks & Memory",
        level: "Expert",
        context: "Built native hooks for Claude Code, Codex, Cursor, Copilot CLI",
      },
      {
        name: "AWS Certified AI Practitioner",
        level: "Expert",
        context: "Certified deep knowledge of cloud AI/ML services and patterns",
      },
    ],
  },
  {
    category: "Full-Stack & Frontend",
    description: "Modern, high-performance web applications and design systems",
    skills: [
      {
        name: "React & TypeScript",
        level: "Expert",
        context: "Architected enterprise portals, Event Experiences UI, shared component libs",
      },
      {
        name: "Modern UI / Tailwind CSS",
        level: "Expert",
        context: "Rapid, accessible, polished interfaces and reactive states",
      },
      {
        name: "Angular",
        level: "Advanced",
        context: "Engineered customer-facing sales funnels at American Home Shield",
      },
      {
        name: "State Management & Reactivity",
        level: "Expert",
        context: "Optimistic updates, complex forms, real-time dashboards",
      },
      {
        name: "Developer Tooling & DX",
        level: "Expert",
        context: "Internal project templates and npm libraries used by 100s of devs",
      },
    ],
  },
  {
    category: "Backend & Distributed Systems",
    description: "Scalable services, streaming data, and resilient cloud architecture",
    skills: [
      {
        name: "C# .NET Core",
        level: "Expert",
        context: "High-throughput e-commerce and internal platform backends",
      },
      {
        name: "API Development & REST / GraphQL",
        level: "Expert",
        context: "Clean contract design, microservices, enterprise integrations",
      },
      {
        name: "Amazon Web Services (AWS)",
        level: "Expert",
        context: "Comprehend, Lambda, S3, ECS, CloudFront, IAM, EventBridge",
      },
      {
        name: "Apache Kafka & Event-Driven",
        level: "Advanced",
        context: "Asynchronous event streaming and decoupled service architectures",
      },
    ],
  },
  {
    category: "Architecture & Leadership",
    description: "Technical leadership, initiative-taking, and quality engineering",
    skills: [
      {
        name: "Informal Technical Leadership",
        level: "Expert",
        context: "Led 8 engineers across platforms without needing formal title",
      },
      {
        name: "Legacy System Modernization",
        level: "Expert",
        context: "Self-initiated rebuilds eliminating painful tech debt",
      },
      {
        name: "Automated Testing & Selenium",
        level: "Advanced",
        context: "End-to-end test automation and regression test suites",
      },
      {
        name: "Open Source Maintenance",
        level: "Expert",
        context: "Published 40+ releases, ~1.6k+ weekly npm downloads on Neuron",
      },
    ],
  },
];

export const EDUCATION_AND_CERTS = {
  education: {
    degree: "B.S. in Computer Science",
    institution: "Texas State University",
    period: "2012 – 2017",
    highlights: ["Data Structures & Algorithms", "Systems Programming", "Distributed Computing"],
  },
  certification: {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    status: "Active & Verified",
    badgeUrl: "https://aws.amazon.com/certification/",
  },
};
