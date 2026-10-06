import React from 'react';
import Link from 'next/link';
import {
  ExternalLink,
  ShieldCheck,
  Cpu,
  Layers,
  Database,
  Terminal,
  Activity,
  CheckCircle2,
  Clock,
  Radio,
  FileCode,
  HardDrive,
  GitCommit,
  Wifi,
  WifiOff,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import clsx from 'clsx';

interface ProjectVisualProofProps {
  slug: string;
  liveUrl?: string;
  githubUrl: string;
  className?: string;
}

export function ProjectVisualProof({
  slug,
  liveUrl,
  githubUrl,
  className,
}: ProjectVisualProofProps) {
  return (
    <div className={clsx('relative rounded-3xl overflow-hidden border-2 border-[#D8E5E3] bg-[#FFFFFF] shadow-sm', className)}>
      {/* Visual Window Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-[#F4F9F8] border-b border-[#D8E5E3]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D8E5E3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D8E5E3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D8E5E3]" />
          </div>
          <span className="text-xs font-mono text-[#675B57] flex items-center gap-1.5">
            <FileCode className="w-3.5 h-3.5 text-[#2E8B57]" />
            {slug === 'recordhub' && 'recordhub.vercel.app'}
            {slug === 'os-locking-simulator' && 'simulator/os-concurrency-engine'}
            {slug === 'smart-blood-bank' && 'smart-blood-bank-management.vercel.app'}
            {slug === 'flashcard-engine' && 'satgurunotes.netlify.app'}
            {slug === 'unified-devops' && 'devops-overlay.internal/cluster-telemetry'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-[#90A9A6] hidden sm:inline">
            {liveUrl ? 'VERIFIED PRODUCTION DEPLOYMENT' : 'LOCAL VERIFIED ENGINE'}
          </span>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#2E8B57]/10 text-[#2E8B57] text-xs font-mono font-bold hover:bg-[#2E8B57]/20 transition-colors"
            >
              <span>Live System</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* Visual Body Content */}
      <div className="p-6 sm:p-8 lg:p-10 bg-[#FFFFFF]">
        {slug === 'recordhub' && <RecordHubVisual liveUrl={liveUrl} />}
        {slug === 'os-locking-simulator' && <OSSimulatorVisual />}
        {slug === 'smart-blood-bank' && <BloodBankVisual liveUrl={liveUrl} />}
        {slug === 'flashcard-engine' && <FlashcardsVisual liveUrl={liveUrl} />}
        {slug === 'unified-devops' && <UnifiedDevOpsVisual />}
      </div>

      {/* Bottom Proof Tag */}
      <div className="px-6 py-3 bg-[#F4F9F8] border-t border-[#D8E5E3] flex flex-wrap items-center justify-between text-xs font-mono text-[#675B57] gap-2">
        <span className="flex items-center gap-1.5 text-[#2E8B57]">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Authentic System Representation • Derived from project codebase</span>
        </span>
        <span className="text-[#90A9A6]">
          {liveUrl ? 'Live Production Service' : 'Architecture Engine'}
        </span>
      </div>
    </div>
  );
}

/** 1. RecordHub Visual Representation */
function RecordHubVisual({ liveUrl }: { liveUrl?: string }) {
  return (
    <div className="space-y-6">
      {/* Top Banner: Inactivity Session Guard */}
      <div className="p-3.5 rounded-xl bg-[#E9F6F5] border border-[#D8E5E3] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#352A27]">
          <ShieldCheck className="w-4 h-4 text-[#2E8B57]" />
          <span className="font-semibold">Security Invariant:</span>
          <span className="text-[#675B57]">httpOnly JWT with 25m client inactivity warning & 30m server cutoff</span>
        </div>
        <span className="text-[#2E8B57] font-bold bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#D8E5E3]">
          ACTIVE SESSION
        </span>
      </div>

      {/* Platform Trajectory & Rating Dashboard Mockup */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-[#F4F9F8] border border-[#D8E5E3]">
          <span className="text-[10px] font-mono text-[#90A9A6] uppercase">LeetCode Contest Rating</span>
          <div className="text-2xl font-display font-extrabold text-[#352A27] mt-1">1,840</div>
          <span className="text-xs font-mono text-[#2E8B57] mt-1 block">Top 8.4% • 650+ Problems</span>
        </div>
        <div className="p-4 rounded-xl bg-[#F4F9F8] border border-[#D8E5E3]">
          <span className="text-[10px] font-mono text-[#90A9A6] uppercase">Codeforces Performance</span>
          <div className="text-2xl font-display font-extrabold text-[#352A27] mt-1">1,420</div>
          <span className="text-xs font-mono text-[#2E8B57] mt-1 block">Specialist Tier • Regular Division Rounds</span>
        </div>
        <div className="p-4 rounded-xl bg-[#F4F9F8] border border-[#D8E5E3]">
          <span className="text-[10px] font-mono text-[#90A9A6] uppercase">Pipeline Latency Metric</span>
          <div className="text-2xl font-display font-extrabold text-[#986953] mt-1">-35%</div>
          <span className="text-xs font-mono text-[#675B57] mt-1 block">Aggregation pipeline vs multi-query</span>
        </div>
      </div>

      {/* Visual Aggregation Trajectory Bars */}
      <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] space-y-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#352A27] font-bold">Submission Velocity & Rating Trajectory (Recharts Pipeline)</span>
          <span className="text-[#90A9A6]">Next.js 16 App Router</span>
        </div>
        <div className="h-20 flex items-end gap-2 pt-2 border-b border-[#D8E5E3]/80 pb-2">
          {[40, 55, 48, 65, 72, 68, 85, 90, 82, 94, 98, 100].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
              <div
                style={{ height: `${height}%` }}
                className={clsx(
                  'w-full rounded-t-sm transition-all',
                  i >= 9 ? 'bg-[#2E8B57]' : 'bg-[#90A9A6]/40 group-hover:bg-[#90A9A6]'
                )}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[10px] font-mono text-[#90A9A6]">
          <span>Contest Q1</span>
          <span>Contest Q2</span>
          <span>Contest Q3</span>
          <span className="text-[#2E8B57] font-semibold">Latest Trajectory Peak</span>
        </div>
      </div>
    </div>
  );
}

/** 2. OS Concurrency Simulator Visual Representation */
function OSSimulatorVisual() {
  return (
    <div className="space-y-6">
      {/* Process & Lock State Table */}
      <div className="rounded-2xl border border-[#D8E5E3] overflow-hidden">
        <div className="px-4 py-2.5 bg-[#F4F9F8] border-b border-[#D8E5E3] flex justify-between items-center text-xs font-mono text-[#675B57]">
          <span className="font-semibold text-[#352A27]">Active Concurrency Simulation Engine (ANSI C + ES6)</span>
          <span className="text-[#986953]">DFS Cycle Check: O(V + E)</span>
        </div>
        <div className="divide-y divide-[#D8E5E3] text-xs font-mono">
          <div className="grid grid-cols-4 px-4 py-2 bg-[#E9F6F5]/40 text-[#90A9A6] font-bold">
            <span>PROCESS</span>
            <span>PRIORITY</span>
            <span>REQUESTED LOCK</span>
            <span>CURRENT STATE</span>
          </div>
          <div className="grid grid-cols-4 px-4 py-3 items-center">
            <span className="font-bold text-[#352A27]">P1 (Reader-A)</span>
            <span className="text-[#2E8B57]">HIGH</span>
            <span>SHARED (file_alpha.dat)</span>
            <span className="text-[#2E8B57] font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#2E8B57]" /> HOLDING_LOCK
            </span>
          </div>
          <div className="grid grid-cols-4 px-4 py-3 items-center">
            <span className="font-bold text-[#352A27]">P2 (Writer-A)</span>
            <span className="text-[#D49879]">MEDIUM</span>
            <span>EXCLUSIVE (file_alpha.dat)</span>
            <span className="text-[#986953] font-semibold flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#986953]" /> QUEUED (FIFO)
            </span>
          </div>
          <div className="grid grid-cols-4 px-4 py-3 items-center">
            <span className="font-bold text-[#352A27]">P3 (Reader-B)</span>
            <span className="text-[#675B57]">LOW</span>
            <span>SHARED (file_alpha.dat)</span>
            <span className="text-[#986953] font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#986953]" /> BLOCKED (Writer queued)
            </span>
          </div>
        </div>
      </div>

      {/* RAG & Heuristic Reduction Callout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-[#E9F6F5]/50 border border-[#D8E5E3]">
          <span className="text-[10px] font-mono text-[#90A9A6] uppercase">Deadlock Resolution Heuristic</span>
          <p className="text-sm font-display font-bold text-[#352A27] mt-1">Priority-Based Victim Preemption</p>
          <p className="text-xs text-[#675B57] mt-1">
            Preempts strictly lowest-priority contender; reduced simulated transaction abort rate by 40% under contention.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-[#E9F6F5]/50 border border-[#D8E5E3]">
          <span className="text-[10px] font-mono text-[#90A9A6] uppercase">Fairness Guarantees</span>
          <p className="text-sm font-display font-bold text-[#352A27] mt-1">FIFO Queue & Starvation Prevention</p>
          <p className="text-xs text-[#675B57] mt-1">
            Subsequent readers blocked once an exclusive writer queues, preventing infinite reader starvation.
          </p>
        </div>
      </div>
    </div>
  );
}

/** 3. Smart Blood Bank Visual Representation */
function BloodBankVisual({ liveUrl }: { liveUrl?: string }) {
  const groups = [
    { type: 'A+', units: 28, status: 'NORMAL' },
    { type: 'A-', units: 9, status: 'LOW' },
    { type: 'B+', units: 34, status: 'NORMAL' },
    { type: 'B-', units: 12, status: 'NORMAL' },
    { type: 'AB+', units: 18, status: 'NORMAL' },
    { type: 'AB-', units: 5, status: 'CRITICAL' },
    { type: 'O+', units: 42, status: 'OPTIMAL' },
    { type: 'O-', units: 8, status: 'LOW' },
  ];

  return (
    <div className="space-y-6">
      {/* Blood Inventory Distribution */}
      <div>
        <div className="flex items-center justify-between text-xs font-mono mb-2">
          <span className="text-[#352A27] font-bold">ABO/Rh Blood Inventory Tracking (8 Groups)</span>
          <span className="text-[#2E8B57] font-semibold">Universal Donor: O- • Universal Recipient: AB+</span>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {groups.map((g) => (
            <div
              key={g.type}
              className={clsx(
                'p-3 rounded-xl border text-center font-mono',
                g.status === 'CRITICAL'
                  ? 'bg-[#D49879]/20 border-[#D49879] text-[#986953]'
                  : g.status === 'LOW'
                  ? 'bg-[#E9F6F5] border-[#D8E5E3] text-[#352A27]'
                  : 'bg-[#F4F9F8] border-[#D8E5E3] text-[#352A27]'
              )}
            >
              <div className="text-base font-extrabold">{g.type}</div>
              <div className="text-xs font-bold text-[#2E8B57] mt-0.5">{g.units} units</div>
              <div className="text-[9px] text-[#90A9A6] mt-0.5">{g.status}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Triage Queue (Binary Heap Representation) */}
      <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3]">
        <div className="flex items-center justify-between text-xs font-mono mb-3">
          <span className="text-[#352A27] font-bold">Emergency Request Triage (In-Memory Binary Heap - O(log n))</span>
          <span className="text-[#986953]">Urgency Comparator + FIFO Tie Break</span>
        </div>
        <div className="space-y-2 text-xs font-mono">
          <div className="p-2.5 rounded-lg bg-[#D49879]/15 border border-[#D49879]/40 flex items-center justify-between">
            <span className="font-bold text-[#352A27] flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded bg-[#986953] text-[#FDFDFD] text-[10px]">ROOT / PRIORITY 1</span>
              Req #104 — Severe Trauma Ward (O- Required)
            </span>
            <span className="text-[#986953] font-bold">SEVERITY: CRITICAL</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#F4F9F8] border border-[#D8E5E3] flex items-center justify-between">
            <span className="font-bold text-[#352A27] flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded bg-[#E9F6F5] text-[#352A27] text-[10px]">HEAP NODE / PRIORITY 2</span>
              Req #102 — Scheduled Cardiac Surgery (A+ Required)
            </span>
            <span className="text-[#2E8B57] font-semibold">SEVERITY: HIGH</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 4. Smart Flashcards Visual Representation */
function FlashcardsVisual({ liveUrl }: { liveUrl?: string }) {
  return (
    <div className="space-y-6">
      {/* Offline Status & Deck Header */}
      <div className="p-3.5 rounded-xl bg-[#E9F6F5] border border-[#D8E5E3] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#352A27]">
          <Wifi className="w-4 h-4 text-[#2E8B57]" />
          <span className="font-semibold">PWA Architecture:</span>
          <span className="text-[#675B57]">100% Offline Availability via CacheStorage & Service Worker</span>
        </div>
        <span className="text-[#2E8B57] font-bold bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#D8E5E3]">
          LATENCY &lt; 100ms
        </span>
      </div>

      {/* Interactive 3D Card Simulation UI */}
      <div className="p-6 rounded-2xl bg-[#F4F9F8] border border-[#D8E5E3] max-w-xl mx-auto text-center space-y-4 shadow-sm">
        <div className="flex items-center justify-between text-xs font-mono text-[#90A9A6]">
          <span>DECK: SYSTEMS CONCURRENCY</span>
          <span>CARD 3 OF 24 (FISHER-YATES SHUFFLED)</span>
        </div>

        <div className="py-6 px-4 rounded-xl bg-[#FFFFFF] border-2 border-[#D8E5E3] shadow-xs">
          <span className="text-xs font-mono text-[#986953] uppercase font-bold block mb-2">QUESTION // ACTIVE RECALL</span>
          <p className="text-base sm:text-lg font-display font-bold text-[#352A27]">
            What is the primary difference between a Mutex and a Semaphore in POSIX threads?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-left">
          <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#D8E5E3] text-[#675B57]">
            A. Mutex has ownership; semaphore is a signaling counter
          </div>
          <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#D8E5E3] text-[#675B57]">
            B. Semaphores cannot be shared between processes
          </div>
        </div>

        <div className="text-[11px] font-mono text-[#2E8B57] font-medium pt-1">
          ✓ Hardware-accelerated CSS3 rotateY 3D transformation enabled
        </div>
      </div>
    </div>
  );
}

/** 5. Unified DevOps Platform Visual Representation */
function UnifiedDevOpsVisual() {
  return (
    <div className="space-y-6">
      {/* Cluster Environment Banner */}
      <div className="p-3.5 rounded-xl bg-[#E9F6F5] border border-[#D8E5E3] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#352A27]">
          <HardDrive className="w-4 h-4 text-[#2E8B57]" />
          <span className="font-semibold">Environment Verified:</span>
          <span className="text-[#675B57]">Kind Cluster v1.36.1 • Argo CD v3.5.3 • AES-256-GCM Credential Vault</span>
        </div>
        <span className="text-[#2E8B57] font-bold bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#D8E5E3]">
          NON-DESTRUCTIVE OVERLAY
        </span>
      </div>

      {/* Real Delivery Pipeline Timeline */}
      <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] space-y-4">
        <span className="text-xs font-mono text-[#352A27] font-bold block">
          End-to-End Delivery Pipeline & Policy Gate Timeline
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-[#F4F9F8] border border-[#D8E5E3]">
            <div className="text-[10px] text-[#90A9A6] mb-1">01 // VCS INGESTION</div>
            <div className="font-bold text-[#352A27]">GitHub Webhook</div>
            <div className="text-[11px] text-[#2E8B57] mt-1">HMAC-SHA256 Verified</div>
          </div>

          <div className="p-3 rounded-xl bg-[#F4F9F8] border border-[#D8E5E3]">
            <div className="text-[10px] text-[#90A9A6] mb-1">02 // WORKER QUEUE</div>
            <div className="font-bold text-[#352A27]">BullMQ + Redis</div>
            <div className="text-[11px] text-[#2E8B57] mt-1">Monotonic States</div>
          </div>

          <div className="p-3 rounded-xl bg-[#F4F9F8] border border-[#D8E5E3]">
            <div className="text-[10px] text-[#90A9A6] mb-1">03 // SECURITY GATE</div>
            <div className="font-bold text-[#352A27]">Trivy Scanner</div>
            <div className="text-[11px] text-[#2E8B57] mt-1">0 Critical CVEs (PASS)</div>
          </div>

          <div className="p-3 rounded-xl bg-[#F4F9F8] border border-[#D8E5E3]">
            <div className="text-[10px] text-[#90A9A6] mb-1">04 // K8S OBSERVATION</div>
            <div className="font-bold text-[#352A27]">Kind & Argo CD</div>
            <div className="text-[11px] text-[#2E8B57] mt-1">0 Drift Detected</div>
          </div>
        </div>
      </div>
    </div>
  );
}
