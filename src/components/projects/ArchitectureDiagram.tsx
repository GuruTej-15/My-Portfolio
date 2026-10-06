import React from 'react';
import clsx from 'clsx';
import {
  Layers,
  ArrowRight,
  Database,
  Lock,
  Cpu,
  Server,
  Cloud,
  ShieldCheck,
  CheckCircle2,
  Activity,
  GitBranch,
  Smartphone,
  Sparkles,
} from 'lucide-react';

interface ArchitectureDiagramProps {
  slug: string;
  className?: string;
}

export function ArchitectureDiagram({ slug, className }: ArchitectureDiagramProps) {
  switch (slug) {
    case 'recordhub':
      return <RecordHubArchitecture className={className} />;
    case 'os-locking-simulator':
      return <OSLockingArchitecture className={className} />;
    case 'smart-blood-bank':
      return <BloodBankArchitecture className={className} />;
    case 'flashcard-engine':
      return <FlashcardArchitecture className={className} />;
    case 'unified-devops':
      return <DevOpsArchitecture className={className} />;
    default:
      return null;
  }
}

/** 1. RecordHub Architecture */
function RecordHubArchitecture({ className }: { className?: string }) {
  const tiers = [
    {
      step: '01',
      title: 'Client Interface',
      tech: 'Next.js 16 + React 19',
      details: ['App Router Layouts', 'Recharts Analytics', 'Client Activity Monitor'],
      icon: <Layers className="w-4 h-4 text-[#2E8B57]" />,
      badge: 'FRONTEND',
    },
    {
      step: '02',
      title: 'API & Session Gateway',
      tech: 'Route Handlers + JWT',
      details: ['httpOnly SameSite Cookies', '25m Inactivity Toast Warning', '30m Server-Side Expiration'],
      icon: <Lock className="w-4 h-4 text-[#986953]" />,
      badge: 'SECURITY',
    },
    {
      step: '03',
      title: 'Data Aggregation Pipeline',
      tech: 'MongoDB + Mongoose',
      details: ['Compound Indexing', 'Multi-Stage $facet Pipelines', '35% Faster Profile Loading'],
      icon: <Database className="w-4 h-4 text-[#352A27]" />,
      badge: 'DATABASE',
    },
    {
      step: '04',
      title: 'Verified Portfolio Output',
      tech: 'Public URLs + Analytics',
      details: ['Contest History Publishing', 'Rating Trajectory Export', 'Recruiter Verification'],
      icon: <Activity className="w-4 h-4 text-[#D49879]" />,
      badge: 'OUTPUT',
    },
  ];

  return (
    <div className={clsx('p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#D8E5E3]', className)}>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-[#D8E5E3]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2E8B57]" />
          <h3 className="font-display font-bold text-base sm:text-lg text-[#352A27]">
            RecordHub End-to-End System Topology
          </h3>
        </div>
        <span className="text-xs font-mono text-[#90A9A6]">Next.js 16 • MongoDB • httpOnly Auth</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tiers.map((t, idx) => (
          <div
            key={t.title}
            className="p-5 rounded-2xl bg-[#E9F6F5]/40 border border-[#D8E5E3] hover:border-[#90A9A6] transition-all flex flex-col justify-between relative group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs font-bold text-[#986953] bg-[#E9F6F5] px-2 py-0.5 rounded border border-[#D8E5E3]">
                  STAGE {t.step}
                </span>
                <span className="text-[10px] font-mono font-semibold text-[#90A9A6]">{t.badge}</span>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <div className="p-1 rounded bg-[#FFFFFF] border border-[#D8E5E3]">{t.icon}</div>
                <h4 className="font-display font-bold text-sm text-[#352A27]">{t.title}</h4>
              </div>

              <p className="text-xs font-mono text-[#2E8B57] font-semibold mb-3">{t.tech}</p>

              <ul className="space-y-1.5 text-xs text-[#675B57]">
                {t.details.map((d, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#90A9A6]" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {idx < 3 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-[#FFFFFF] border border-[#D8E5E3] text-[#90A9A6]">
                <ArrowRight className="w-3 h-3" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-[#D8E5E3]/80 flex flex-wrap items-center justify-between text-xs font-mono text-[#675B57] gap-2">
        <span className="flex items-center gap-1.5 text-[#2E8B57]">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Strict Invariant: No auth token exposed to client-side JS</span>
        </span>
        <span className="text-[#90A9A6]">Verified via RecordHub codebase & Vercel deployment</span>
      </div>
    </div>
  );
}

/** 2. OS Locking Simulator Architecture */
function OSLockingArchitecture({ className }: { className?: string }) {
  const components = [
    {
      step: '01',
      title: 'Process Engine',
      subtitle: 'Configurable Priorities',
      points: ['Processes P1...Pn', 'High, Medium, Low Priorities', 'Simulated Lock Requests'],
      icon: <Cpu className="w-4 h-4 text-[#D49879]" />,
    },
    {
      step: '02',
      title: 'Lock Manager & Queues',
      subtitle: 'Readers-Writer Semantics',
      points: ['SHARED (Multiple Readers)', 'EXCLUSIVE (Single Writer)', 'Strict FIFO Wait Queues'],
      icon: <Lock className="w-4 h-4 text-[#986953]" />,
    },
    {
      step: '03',
      title: 'Wait-For Graph (RAG)',
      subtitle: 'Directed Cycle Traversal',
      points: ['Directed Edge Allocation', 'O(V + E) DFS Traversal', 'Circular Wait Detection'],
      icon: <GitBranch className="w-4 h-4 text-[#2E8B57]" />,
    },
    {
      step: '04',
      title: 'Deadlock Recovery',
      subtitle: 'Victim Selection Heuristics',
      points: ['Lowest-Priority Preemption', '40% Lower Abort Rate', 'Zero Thread Starvation'],
      icon: <ShieldCheck className="w-4 h-4 text-[#352A27]" />,
    },
  ];

  return (
    <div className={clsx('p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#D8E5E3]', className)}>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-[#D8E5E3]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D49879]" />
          <h3 className="font-display font-bold text-base sm:text-lg text-[#352A27]">
            OS Synchronization & Deadlock Cycle Traversal Architecture
          </h3>
        </div>
        <span className="text-xs font-mono text-[#90A9A6]">ANSI C Core • DFS Traversal • FIFO Queue</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {components.map((c, idx) => (
          <div
            key={c.title}
            className="p-5 rounded-2xl bg-[#E9F6F5]/40 border border-[#D8E5E3] flex flex-col justify-between relative"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#986953] bg-[#E9F6F5] px-2 py-0.5 rounded border border-[#D8E5E3]">
                  SUBSYSTEM {c.step}
                </span>
                <div className="p-1 rounded bg-[#FFFFFF] border border-[#D8E5E3]">{c.icon}</div>
              </div>

              <h4 className="font-display font-bold text-sm text-[#352A27]">{c.title}</h4>
              <p className="text-xs font-mono text-[#90A9A6] mb-3">{c.subtitle}</p>

              <ul className="space-y-1.5 text-xs text-[#675B57]">
                {c.points.map((p, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#90A9A6]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {idx < 3 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-[#FFFFFF] border border-[#D8E5E3] text-[#90A9A6]">
                <ArrowRight className="w-3 h-3" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-[#D8E5E3]/80 flex flex-wrap items-center justify-between text-xs font-mono text-[#675B57] gap-2">
        <span className="flex items-center gap-1.5 text-[#2E8B57]">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Algorithm: Recursive DFS with recursionStack visited tracking</span>
        </span>
        <span className="text-[#90A9A6]">Verified via file_locking_sim.c & stress simulation suite</span>
      </div>
    </div>
  );
}

/** 3. Smart Blood Bank Architecture */
function BloodBankArchitecture({ className }: { className?: string }) {
  const steps = [
    {
      step: '01',
      title: 'Portal Ingestion',
      tech: 'React + Vite Client',
      items: ['Hospital Emergency Requests', 'Donor Registration Records', 'Real-Time Inventory Updates'],
      icon: <Layers className="w-4 h-4 text-[#2E8B57]" />,
    },
    {
      step: '02',
      title: 'Security & REST Gateway',
      tech: 'Express.js + Helmet',
      items: ['JWT Role-Based Access Control', 'Express Rate Limiting', 'Input Sanitization'],
      icon: <Lock className="w-4 h-4 text-[#986953]" />,
    },
    {
      step: '03',
      title: 'Custom Data Structures',
      tech: 'In-Memory Algorithmic Engine',
      items: ['Binary Heap Priority Queue', 'MinHeap FEFO Expiry Sorting', 'Hash Table ABO/Rh Matching'],
      icon: <Cpu className="w-4 h-4 text-[#D49879]" />,
    },
    {
      step: '04',
      title: 'Storage & Persistence',
      tech: 'MongoDB Atlas',
      items: ['O(log n) Emergency Triage Queue', 'Donor Record History', 'Low-Stock Inventory Alerts'],
      icon: <Database className="w-4 h-4 text-[#352A27]" />,
    },
  ];

  return (
    <div className={clsx('p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#D8E5E3]', className)}>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-[#D8E5E3]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2E8B57]" />
          <h3 className="font-display font-bold text-base sm:text-lg text-[#352A27]">
            Smart Blood Bank Algorithmic Triage Pipeline
          </h3>
        </div>
        <span className="text-xs font-mono text-[#90A9A6]">MERN Stack • Binary Heap • ABO/Rh Matrix</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s, idx) => (
          <div
            key={s.title}
            className="p-5 rounded-2xl bg-[#E9F6F5]/40 border border-[#D8E5E3] flex flex-col justify-between relative"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#986953] bg-[#E9F6F5] px-2 py-0.5 rounded border border-[#D8E5E3]">
                  LAYER {s.step}
                </span>
                <div className="p-1 rounded bg-[#FFFFFF] border border-[#D8E5E3]">{s.icon}</div>
              </div>

              <h4 className="font-display font-bold text-sm text-[#352A27]">{s.title}</h4>
              <p className="text-xs font-mono text-[#2E8B57] font-semibold mb-3">{s.tech}</p>

              <ul className="space-y-1.5 text-xs text-[#675B57]">
                {s.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#90A9A6]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {idx < 3 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-[#FFFFFF] border border-[#D8E5E3] text-[#90A9A6]">
                <ArrowRight className="w-3 h-3" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-[#D8E5E3]/80 flex flex-wrap items-center justify-between text-xs font-mono text-[#675B57] gap-2">
        <span className="flex items-center gap-1.5 text-[#2E8B57]">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Priority logic: Critical &gt; High &gt; Normal with FIFO tie-breaking</span>
        </span>
        <span className="text-[#90A9A6]">Verified via backend/dataStructures test suite</span>
      </div>
    </div>
  );
}

/** 4. Smart Flashcards Architecture */
function FlashcardArchitecture({ className }: { className?: string }) {
  const flow = [
    {
      step: '01',
      title: 'Progressive Web App Client',
      tech: 'Vanilla ES6+ • HTML5 Manifest',
      items: ['Zero-Dependency Core', 'Sub-100ms Cold Starts', 'Add to Home Screen (A2HS)'],
      icon: <Smartphone className="w-4 h-4 text-[#2E8B57]" />,
    },
    {
      step: '02',
      title: 'Service Worker Cache',
      tech: 'CacheStorage API • sw.js',
      items: ['Cache-First Asset Serving', '100% Offline Operability', 'Stale-While-Revalidate Sync'],
      icon: <Layers className="w-4 h-4 text-[#986953]" />,
    },
    {
      step: '03',
      title: 'Headless CMS Pipeline',
      tech: 'Google Apps Script API',
      items: ['Google Sheets Spreadsheet Store', 'Zero-Database Hosting Overhead', 'Dynamic JSON Deck Sync'],
      icon: <Cloud className="w-4 h-4 text-[#352A27]" />,
    },
    {
      step: '04',
      title: 'Algorithmic 3D Engine',
      tech: 'Fisher-Yates • CSS3 rotateY',
      items: ['O(n) Unbiased Shuffle', 'Regex MCQ Option Parser', '60fps Hardware-Accelerated Flip'],
      icon: <Sparkles className="w-4 h-4 text-[#D49879]" />,
    },
  ];

  return (
    <div className={clsx('p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#D8E5E3]', className)}>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-[#D8E5E3]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2E8B57]" />
          <h3 className="font-display font-bold text-base sm:text-lg text-[#352A27]">
            Offline PWA & Headless CMS Architecture
          </h3>
        </div>
        <span className="text-xs font-mono text-[#90A9A6]">Service Worker • Google Sheets API • CSS3 3D</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {flow.map((f, idx) => (
          <div
            key={f.title}
            className="p-5 rounded-2xl bg-[#E9F6F5]/40 border border-[#D8E5E3] flex flex-col justify-between relative"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#986953] bg-[#E9F6F5] px-2 py-0.5 rounded border border-[#D8E5E3]">
                  STEP {f.step}
                </span>
                <div className="p-1 rounded bg-[#FFFFFF] border border-[#D8E5E3]">{f.icon}</div>
              </div>

              <h4 className="font-display font-bold text-sm text-[#352A27]">{f.title}</h4>
              <p className="text-xs font-mono text-[#2E8B57] font-semibold mb-3">{f.tech}</p>

              <ul className="space-y-1.5 text-xs text-[#675B57]">
                {f.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#90A9A6]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {idx < 3 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-[#FFFFFF] border border-[#D8E5E3] text-[#90A9A6]">
                <ArrowRight className="w-3 h-3" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-[#D8E5E3]/80 flex flex-wrap items-center justify-between text-xs font-mono text-[#675B57] gap-2">
        <span className="flex items-center gap-1.5 text-[#2E8B57]">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Performance: Sub-100ms deck load time from CacheStorage</span>
        </span>
        <span className="text-[#90A9A6]">Verified via Netlify live deployment & sw.js</span>
      </div>
    </div>
  );
}

/** 5. Unified DevOps Platform Architecture */
function DevOpsArchitecture({ className }: { className?: string }) {
  const pipeline = [
    {
      step: '01',
      title: 'VCS & CI Sources',
      tech: 'GitHub Actions / Jenkins',
      points: ['HMAC-SHA256 Webhook Gateway', 'X-Hub-Signature-256 Check', 'Traceable Issue Linking'],
      icon: <GitBranch className="w-4 h-4 text-[#2E8B57]" />,
    },
    {
      step: '02',
      title: 'Durable Queue & Workers',
      tech: 'Redis + BullMQ',
      points: ['Standalone Worker Processes', 'Atomic Idempotency Claims', 'Terminal Status Monotonicity'],
      icon: <Server className="w-4 h-4 text-[#986953]" />,
    },
    {
      step: '03',
      title: 'Security Policy Gates',
      tech: 'Trivy CVE Scanner',
      points: ['Automated Vulnerability Scan', 'Blocking Release Thresholds', 'Controlled Gate Overrides'],
      icon: <ShieldCheck className="w-4 h-4 text-[#D49879]" />,
    },
    {
      step: '04',
      title: 'Cloud-Native Overlay',
      tech: 'Kind K8s + Argo CD',
      points: ['Strict Read-Only Observation', 'Drift & Divergence Detection', 'AES-256-GCM Encrypted Credentials'],
      icon: <Cloud className="w-4 h-4 text-[#352A27]" />,
    },
  ];

  return (
    <div className={clsx('p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#D8E5E3]', className)}>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-[#D8E5E3]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2E8B57]" />
          <h3 className="font-display font-bold text-base sm:text-lg text-[#352A27]">
            Unified DevOps Platform: Cloud-Native Overlay Pipeline
          </h3>
        </div>
        <span className="text-xs font-mono text-[#90A9A6]">Kind K8s v1.36.1 • Argo CD v3.5.3 • BullMQ</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pipeline.map((p, idx) => (
          <div
            key={p.title}
            className="p-5 rounded-2xl bg-[#E9F6F5]/40 border border-[#D8E5E3] flex flex-col justify-between relative"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#986953] bg-[#E9F6F5] px-2 py-0.5 rounded border border-[#D8E5E3]">
                  PHASE {p.step}
                </span>
                <div className="p-1 rounded bg-[#FFFFFF] border border-[#D8E5E3]">{p.icon}</div>
              </div>

              <h4 className="font-display font-bold text-sm text-[#352A27]">{p.title}</h4>
              <p className="text-xs font-mono text-[#2E8B57] font-semibold mb-3">{p.tech}</p>

              <ul className="space-y-1.5 text-xs text-[#675B57]">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#90A9A6]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {idx < 3 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-[#FFFFFF] border border-[#D8E5E3] text-[#90A9A6]">
                <ArrowRight className="w-3 h-3" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-[#D8E5E3]/80 flex flex-wrap items-center justify-between text-xs font-mono text-[#675B57] gap-2">
        <span className="flex items-center gap-1.5 text-[#2E8B57]">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Core Guarantee: Zero destructive cluster modifications (100% read-only observation)</span>
        </span>
        <span className="text-[#90A9A6]">Live verified with Kind K8s & Argo CD servers</span>
      </div>
    </div>
  );
}
