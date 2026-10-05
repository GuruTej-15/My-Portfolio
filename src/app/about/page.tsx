import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { PortraitDisplay } from '@/components/hero/PortraitDisplay';
import { siteConfig } from '@/lib/data/site-config';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about GuruTej Pratap, his computer science background at Lovely Professional University, development philosophy, and system building approach.',
};

export default function AboutPage() {
  const buildingPillars = [
    {
      title: 'Full-Stack Web Systems',
      description: 'Architecting scalable applications with Next.js App Router, React 19, Express microservices, and indexed MongoDB data layers.',
    },
    {
      title: 'Systems & Concurrency',
      description: 'Modeling operating systems synchronization, Readers-Writer locks, and DFS-based deadlock detection algorithms in C and JavaScript.',
    },
    {
      title: 'Cloud-Native & DevOps',
      description: 'Constructing non-intrusive observation overlays with Kubernetes, Argo CD, Redis/BullMQ durable queues, and Trivy security gates.',
    },
  ];

  const workflowSteps = [
    { step: '01', title: 'Deconstruct Problem', desc: 'Isolate constraints, edge cases, and algorithmic complexity before writing code.' },
    { step: '02', title: 'Architect Clean Schemas', desc: 'Design resilient data models, indexed access patterns, and explicit state machines.' },
    { step: '03', title: 'Build with Rigor', desc: 'Implement with strict typing, secure auth patterns (httpOnly, bcrypt, AES-256), and clean component boundaries.' },
    { step: '04', title: 'Verify & Stress Test', desc: 'Subject systems to high-concurrency simulation, optimize bottlenecks, and verify live behavior.' },
  ];

  return (
    <div className="py-12 sm:py-16">
      <Container size="wide">
        <PageHeader
          tag="Identity & Philosophy"
          title="About GuruTej Pratap"
          description="B.Tech Computer Science student at Lovely Professional University. I design and build software systems where architectural clarity meets practical reliability."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <PortraitDisplay size="about" />
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-[#675B57] leading-relaxed">
            <div className="space-y-4 text-base sm:text-lg">
              <p>
                I am a Computer Science and Engineering student at <strong className="text-[#352A27]">Lovely Professional University, Punjab</strong> (2024–2028) with a <strong className="text-[#352A27]">7.42 CGPA</strong>. My path in technology is centered on one guiding principle: <em className="text-[#352A27] font-medium">&ldquo;Build to understand; design to simplify.&rdquo;</em>
              </p>
              <p>
                Rather than treating web development as merely connecting component libraries, I examine what happens under the surface—from how an operating system schedules concurrent file locks to how a Redis queue prevents webhook data loss during high-volume CI deployments.
              </p>
              <p>
                My work spans building full-stack platforms like <strong className="text-[#352A27]">RecordHub</strong> (Next.js 16 / MongoDB), engineering operating system concurrency models like the <strong className="text-[#352A27]">OS File Locking Simulator</strong> in C, creating healthcare triage algorithms in the <strong className="text-[#352A27]">Smart Blood Bank</strong>, and developing cloud-native overlays like the <strong className="text-[#352A27]">Unified DevOps Platform</strong>.
              </p>
            </div>

            {/* Core Capability Pillars */}
            <div className="mt-6 pt-6 border-t border-[#D8E5E3]">
              <h2 className="text-xl font-display font-bold text-[#352A27] mb-4">
                What I Build
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {buildingPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-2xl bg-[#E9F6F5]/50 border border-[#D8E5E3] flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-display font-bold text-sm text-[#352A27] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#675B57] leading-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Blueprint */}
            <div className="mt-6 pt-6 border-t border-[#D8E5E3]">
              <h2 className="text-xl font-display font-bold text-[#352A27] mb-4">
                Engineering Approach
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {workflowSteps.map((ws) => (
                  <div key={ws.step} className="flex gap-3 items-start p-4 rounded-xl bg-[#FFFFFF] border border-[#D8E5E3]">
                    <span className="font-mono text-xs font-bold text-[#986953] bg-[#E9F6F5] px-2 py-0.5 rounded">
                      {ws.step}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-[#352A27]">{ws.title}</h4>
                      <p className="text-xs text-[#675B57] mt-0.5">{ws.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recruiter Actions */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-[#D8E5E3]">
              <Button
                href="/GuruTej_Pratap_Resume.pdf"
                download="GuruTej_Pratap_Resume.pdf"
                variant="cv"
                size="md"
                icon={<Download className="w-4 h-4 text-[#986953]" />}
              >
                Download Canonical CV
              </Button>
              <Button href="/projects" variant="primary" size="md">
                View Project Proof
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
