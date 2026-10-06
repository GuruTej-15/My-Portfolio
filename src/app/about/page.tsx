import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Download,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  Terminal,
  ExternalLink,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { PortraitDisplay } from '@/components/hero/PortraitDisplay';
import { PageEndCta } from '@/components/common/PageEndCta';
import { Sparkle } from '@/components/ui/Sparkle';

export const metadata: Metadata = {
  title: 'About GuruTej Pratap — Full-Stack & Systems Engineer',
  description:
    'Who is GuruTej Pratap beyond project cards: engineering philosophy, full-stack systems approach, computer science education at Lovely Professional University, and technical focus.',
  openGraph: {
    title: 'About GuruTej Pratap — Digital Systems Builder',
    description:
      'I build digital systems by understanding how they work beneath the surface. B.Tech CSE at Lovely Professional University.',
  },
};

export default function AboutPage() {
  const buildingAreas = [
    {
      domain: '01 // Full-Stack Web Systems',
      title: 'Resilient Web Applications',
      description:
        'Architecting production-ready applications with Next.js 16 App Router, React 19, Express route handlers, and indexed MongoDB data pipelines. Emphasizes end-to-end type safety, httpOnly security, and fast profile loading.',
      projectLink: '/projects/recordhub',
      projectName: 'RecordHub Case Study',
    },
    {
      domain: '02 // Systems & Concurrency',
      title: 'Low-Level Synchronization',
      description:
        'Modeling POSIX file locking primitives, Readers-Writer synchronization locks, strict FIFO queues, and O(V + E) DFS graph cycle detection in ANSI C and ES6 JavaScript to visualize and resolve deadlocks under high contention.',
      projectLink: '/projects/os-locking-simulator',
      projectName: 'OS Simulator Case Study',
    },
    {
      domain: '03 // Cloud-Native & DevOps',
      title: 'Non-Destructive Observation Overlays',
      description:
        'Building telemetry and governance control planes connecting Git commits, BullMQ worker queues, Trivy vulnerability policy gates, and live Kubernetes clusters (Kind v1.36.1) without destructive cluster modifications.',
      projectLink: '/projects/unified-devops',
      projectName: 'Unified DevOps Case Study',
    },
    {
      domain: '04 // Algorithmic Engines',
      title: 'Data Structures Applied to Reality',
      description:
        'Translating classical computer science theory—such as Binary Heap Priority Queues for hospital emergency triage in O(log n) time and MinHeap FEFO expiration sorting—into practical healthcare workflows and offline PWAs.',
      projectLink: '/projects/smart-blood-bank',
      projectName: 'Blood Bank Case Study',
    },
  ];

  const engineeringPhilosophy = [
    {
      step: '01',
      phase: 'Understand',
      desc: 'Deconstruct system invariants, boundary conditions, and algorithmic complexity before writing code.',
    },
    {
      step: '02',
      phase: 'Design',
      desc: 'Structure explicit schemas, state transitions, and component boundaries to isolate side effects.',
    },
    {
      step: '03',
      phase: 'Build',
      desc: 'Implement with typed rigor, clean abstractions, and zero-compromise security patterns.',
    },
    {
      step: '04',
      phase: 'Test',
      desc: 'Stress-test under concurrent contention, simulate failure conditions, and verify monotonic state transitions.',
    },
    {
      step: '05',
      phase: 'Improve',
      desc: 'Measure performance with real telemetry, refine aggregation pipelines, and eliminate operational latency.',
    },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 text-[#352A27]">
      <Container size="wide">
        {/* =========================================================================
            1. EDITORIAL OPENING
            ========================================================================= */}
        <section className="mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2E8B57]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#2E8B57] uppercase">
              ABOUT // DIGITAL IDENTITY
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.15] max-w-4xl text-[#352A27]">
            &ldquo;I build digital systems by understanding how they work beneath the surface.&rdquo;
          </h1>

          <p className="mt-6 text-lg sm:text-xl font-mono text-[#675B57] max-w-3xl leading-relaxed">
            Full-stack developer and systems builder based in India. Engineering software where architectural clarity, algorithmic discipline, and practical reliability converge.
          </p>
        </section>

        {/* =========================================================================
            2. PROFESSIONAL INTRODUCTION & PORTRAIT COMPOSITION
            ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 sm:mb-24 border-t border-[#D8E5E3] pt-12 sm:pt-16">
          {/* Asymmetric Editorial Portrait Column */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <PortraitDisplay size="about" priority />

            {/* Portrait Metadata Tag */}
            <div className="mt-6 p-4 rounded-2xl bg-[#F4F9F8] border border-[#D8E5E3] text-xs font-mono text-[#675B57] w-full max-w-[360px]">
              <div className="flex items-center justify-between pb-2 border-b border-[#D8E5E3]">
                <span className="text-[#90A9A6]">IDENTITY:</span>
                <span className="text-[#352A27] font-semibold">GuruTej Pratap</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[#D8E5E3]">
                <span className="text-[#90A9A6]">FOCUS:</span>
                <span className="text-[#2E8B57] font-semibold">Full-Stack & Systems</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-[#90A9A6]">LOCATION:</span>
                <span className="text-[#352A27]">Punjab / UP, India</span>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#675B57] leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#352A27]">
              Engineering beyond framework abstractions.
            </h2>

            <p>
              I am an undergraduate Computer Science and Engineering student at{' '}
              <strong className="text-[#352A27] font-semibold">
                Lovely Professional University, Punjab
              </strong>{' '}
              (2024–2028, CGPA: 7.42). While many developers treat web software as merely wiring together third-party packages, I am driven by understanding what actually happens when bytes travel across a socket or when concurrent threads contend for a file.
            </p>

            <p>
              My background blends rigorous theoretical computer science with end-to-end practical delivery. In the classroom and labs, I study process scheduling, memory hierarchies, database indexing, and graph traversal. In code, I translate those principles into working software: from a <strong className="text-[#352A27]">Next.js 16 competitive programming tracker</strong> with zero-leakage httpOnly authentication, to a <strong className="text-[#352A27]">POSIX locking simulator</strong> that detects deadlocks with DFS cycles.
            </p>

            <p>
              Whether working on frontend ergonomics with Tailwind CSS and React 19, or backend resilience with Redis worker queues and Kubernetes observations, I care deeply about correctness, clean boundaries, and measurable outcomes.
            </p>

            {/* Quick Action Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Button
                href="/GuruTej_Pratap_Resume.pdf"
                download="GuruTej_Pratap_Resume.pdf"
                variant="cv"
                size="md"
                icon={<Download className="w-4 h-4 text-[#986953]" />}
              >
                Download Verified CV
              </Button>
              <Button href="/projects" variant="primary" size="md">
                View Project Proof
              </Button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. WHAT I BUILD
            ========================================================================= */}
        <section className="mb-20 sm:mb-24 border-t border-[#D8E5E3] pt-12 sm:pt-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block font-semibold mb-2">
              01 // CORE CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#352A27]">
              What I Build
            </h2>
            <p className="mt-3 text-base text-[#675B57] leading-relaxed">
              Real systems engineered to solve concrete friction points across web, concurrency, and cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {buildingAreas.map((area) => (
              <div
                key={area.domain}
                className="p-7 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#90A9A6] transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#986953] block mb-2">
                    {area.domain}
                  </span>
                  <h3 className="text-xl font-display font-bold text-[#352A27] group-hover:text-[#986953] transition-colors mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#675B57] leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D8E5E3]/80 flex items-center justify-between">
                  <Link
                    href={area.projectLink}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#2E8B57] hover:underline"
                  >
                    <span>{area.projectName}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            4. ENGINEERING PHILOSOPHY (OPEN BLUEPRINT FLOW)
            ========================================================================= */}
        <section className="mb-20 sm:mb-24 border-t border-[#D8E5E3] pt-12 sm:pt-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block font-semibold mb-2">
              02 // METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#352A27]">
              How I Think About Engineering
            </h2>
            <p className="mt-3 text-base text-[#675B57] leading-relaxed">
              A disciplined, open blueprint from problem discovery to iterative improvement.
            </p>
          </div>

          {/* Connected Blueprint Flow */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {engineeringPhilosophy.map((step, idx) => (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-[#FFFFFF] border-2 border-[#D8E5E3] hover:border-[#2E8B57] transition-all flex flex-col justify-between relative group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs font-bold text-[#986953] bg-[#E9F6F5] px-2 py-0.5 rounded border border-[#D8E5E3]">
                        PHASE {step.step}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#90A9A6] group-hover:bg-[#2E8B57] transition-colors" />
                    </div>

                    <h3 className="font-display font-bold text-lg text-[#352A27] mb-2">
                      {step.phase}
                    </h3>

                    <p className="text-xs text-[#675B57] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {idx < 4 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-[#FFFFFF] border border-[#D8E5E3] text-[#90A9A6]">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. EDUCATION CONTEXT
            ========================================================================= */}
        <section className="mb-20 sm:mb-24 border-t border-[#D8E5E3] pt-12 sm:pt-16">
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#F4F9F8] border-2 border-[#D8E5E3]">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-5 h-5 text-[#986953]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#986953] uppercase">
                ACADEMIC FOUNDATION
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#352A27]">
                  Lovely Professional University, Punjab
                </h2>
                <p className="text-sm sm:text-base font-mono text-[#2E8B57] font-semibold mt-1">
                  Bachelor of Technology in Computer Science and Engineering • Aug 2024 – May 2028
                </p>
                <p className="mt-4 text-sm sm:text-base text-[#675B57] leading-relaxed max-w-2xl">
                  Undergraduate curriculum focused on core systems engineering, data structures and algorithms, operating systems, database management systems, and distributed web architectures.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
                <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] w-full max-w-[260px] text-center">
                  <span className="text-[10px] font-mono text-[#90A9A6] uppercase block font-semibold">
                    CUMULATIVE GRADE
                  </span>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#352A27] mt-1">
                    7.42
                  </div>
                  <span className="text-xs font-mono text-[#2E8B57] mt-1 block font-semibold">
                    CGPA • B.Tech CSE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. CURRENT TECHNICAL DIRECTION
            ========================================================================= */}
        <section className="mb-20 sm:mb-24 border-t border-[#D8E5E3] pt-12 sm:pt-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block font-semibold mb-2">
              03 // WHERE I AM HEADING NEXT
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#352A27]">
              Current Technical Direction
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3]">
              <span className="text-xs font-mono font-bold text-[#2E8B57] block mb-2">
                DISTRIBUTED RUNTIMES
              </span>
              <h3 className="font-display font-bold text-base text-[#352A27] mb-2">
                Event Streaming & Queues
              </h3>
              <p className="text-xs sm:text-sm text-[#675B57] leading-relaxed">
                Deepening work with asynchronous worker queues (BullMQ/Redis) and idempotent state reconciliation to withstand network partitioning and out-of-order execution.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3]">
              <span className="text-xs font-mono font-bold text-[#D49879] block mb-2">
                CLOUD OBSERVABILITY
              </span>
              <h3 className="font-display font-bold text-base text-[#352A27] mb-2">
                Cluster Health & Drift
              </h3>
              <p className="text-xs sm:text-sm text-[#675B57] leading-relaxed">
                Expanding non-destructive observation models over Kubernetes and GitOps tooling (Argo CD) to detect configuration drift and enforce container security gates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3]">
              <span className="text-xs font-mono font-bold text-[#986953] block mb-2">
                AGENTIC ARCHITECTURES
              </span>
              <h3 className="font-display font-bold text-base text-[#352A27] mb-2">
                Autonomous Tool Execution
              </h3>
              <p className="text-xs sm:text-sm text-[#675B57] leading-relaxed">
                Applying knowledge from Oracle Certified Foundations Associate — Agentic AI to build verifiable, deterministic tool invocation pipelines for software engineering workflows.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. PAGE END CTA
            ========================================================================= */}
        <PageEndCta
          variant="mint-editorial"
          title="Have something worth building?"
          subtitle="I am actively open to software engineering internships, junior developer roles, and technical collaborations. Let’s discuss how I can contribute to your team."
          primaryButtonText="Contact GuruTej"
          primaryButtonHref="/contact"
          secondaryButtonText="Explore Projects"
          secondaryButtonHref="/projects"
        />
      </Container>
    </div>
  );
}
