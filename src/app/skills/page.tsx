import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Download,
  ArrowRight,
  Code2,
  Layers,
  Database,
  Cloud,
  Terminal,
  Cpu,
  Wrench,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { skillsData } from '@/lib/data/skills-data';
import { PageEndCta } from '@/components/common/PageEndCta';
import { Sparkle } from '@/components/ui/Sparkle';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Engineering Capabilities & Technical Stack — GuruTej Pratap',
  description:
    'Verified engineering toolkit, languages, systems primitives, and cloud-native infrastructure utilized across GuruTej Pratap’s verified software projects.',
  openGraph: {
    title: 'Engineering Capabilities — GuruTej Pratap',
    description:
      'What I actually build with: Core CS, Frontend, Backend, Databases, Cloud/DevOps, and Developer Tools.',
  },
};

export default function SkillsPage() {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Languages':
        return <Code2 className="w-4 h-4 text-[#986953]" />;
      case 'Frontend':
        return <Layers className="w-4 h-4 text-[#2E8B57]" />;
      case 'Backend & APIs':
        return <Terminal className="w-4 h-4 text-[#352A27]" />;
      case 'Databases':
        return <Database className="w-4 h-4 text-[#D49879]" />;
      case 'Cloud / DevOps':
        return <Cloud className="w-4 h-4 text-[#2E8B57]" />;
      case 'Developer Tools':
        return <Wrench className="w-4 h-4 text-[#90A9A6]" />;
      case 'Core Computer Science':
        return <Cpu className="w-4 h-4 text-[#986953]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#90A9A6]" />;
    }
  };

  const systemLayers = [
    {
      code: 'CORE',
      name: 'Theory & Primitives',
      skills: 'DSA • Concurrency • Graph DFS • Heaps',
      color: 'border-[#986953] bg-[#986953]/10 text-[#986953]',
    },
    {
      code: 'CLIENT',
      name: 'Interactive Frontend',
      skills: 'Next.js 16 • React 19 • Tailwind • PWA',
      color: 'border-[#2E8B57] bg-[#2E8B57]/10 text-[#2E8B57]',
    },
    {
      code: 'SERVER',
      name: 'Backend & APIs',
      skills: 'Node.js • Express • REST • httpOnly JWT',
      color: 'border-[#352A27] bg-[#352A27]/10 text-[#352A27]',
    },
    {
      code: 'STATE',
      name: 'Data & Persistence',
      skills: 'MongoDB • Pipelines • Redis • SQL',
      color: 'border-[#D49879] bg-[#D49879]/10 text-[#D49879]',
    },
    {
      code: 'INFRA',
      name: 'Cloud & Delivery',
      skills: 'Docker • Kubernetes • Argo CD • Vercel',
      color: 'border-[#2E8B57] bg-[#2E8B57]/10 text-[#2E8B57]',
    },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 text-[#352A27]">
      <Container size="wide">
        {/* Page Header */}
        <section className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2E8B57]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#2E8B57] uppercase">
              ENGINEERING // TECHNICAL STACK
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#352A27] leading-[1.15]">
                What I actually build with.
              </h1>
              <p className="mt-4 text-lg sm:text-xl font-mono text-[#675B57] max-w-3xl leading-relaxed">
                No arbitrary percentage bars or fake proficiency gauges. An authentic index of languages, libraries, and computer science fundamentals verified through active project repositories.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Button
                href="/GuruTej_Pratap_Resume.pdf"
                download="GuruTej_Pratap_Resume.pdf"
                variant="cv"
                size="md"
                icon={<Download className="w-4 h-4 text-[#986953]" />}
              >
                Download Tech Resume
              </Button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            ENGINEERING-SYSTEM BLUEPRINT VISUALIZATION
            ========================================================================= */}
        <section className="mb-16 sm:mb-20 p-8 sm:p-10 rounded-3xl bg-[#F4F9F8] border-2 border-[#D8E5E3]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#D8E5E3]">
            <div>
              <span className="text-xs font-mono text-[#986953] font-bold uppercase tracking-wider block">
                SYSTEM ARCHITECTURE TOPOLOGY
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-[#352A27] mt-0.5">
                Full-Stack Tier Relationship
              </h2>
            </div>
            <span className="text-xs font-mono text-[#90A9A6]">
              CORE → FRONTEND → BACKEND → DATA → INFRASTRUCTURE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative">
            {systemLayers.map((layer, idx) => (
              <div
                key={layer.code}
                className="p-5 rounded-2xl bg-[#FFFFFF] border-2 border-[#D8E5E3] hover:border-[#90A9A6] transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={clsx('px-2 py-0.5 rounded text-[10px] font-mono font-bold border', layer.color)}>
                      {layer.code}
                    </span>
                    <span className="text-[10px] font-mono text-[#90A9A6]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-sm text-[#352A27] mb-1">
                    {layer.name}
                  </h3>

                  <p className="text-xs font-mono text-[#675B57] leading-relaxed">
                    {layer.skills}
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
        </section>

        {/* =========================================================================
            7 VERIFIED SKILL DOMAINS
            ========================================================================= */}
        <section className="space-y-12 mb-20 sm:mb-24">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block font-semibold mb-2">
              01 // DOMAIN-ORGANIZED ARSENAL
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#352A27]">
              Technical Skills & Project Cross-References
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#675B57] leading-relaxed">
              Every major skill features direct links to the engineering case study where it is implemented in code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((category) => (
              <div
                key={category.title}
                className="p-7 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#90A9A6] transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-[#E9F6F5] border border-[#D8E5E3]">
                      {getCategoryIcon(category.title)}
                    </div>
                    <h3 className="text-xl font-display font-bold text-[#352A27]">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#675B57] leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={clsx(
                          'inline-flex flex-col gap-1 px-3.5 py-2 rounded-xl border transition-all text-xs',
                          skill.highlight
                            ? 'bg-[#E9F6F5]/50 border-[#D8E5E3] hover:border-[#2E8B57]'
                            : 'bg-[#FDFDFD] border-[#D8E5E3] hover:border-[#90A9A6]'
                        )}
                      >
                        <span className="font-mono font-semibold text-[#352A27]">
                          {skill.name}
                        </span>

                        {skill.usedInProjects && skill.usedInProjects.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1 pt-0.5">
                            <span className="text-[9px] font-mono text-[#90A9A6] uppercase">
                              USED IN:
                            </span>
                            {skill.usedInProjects.map((pSlug) => (
                              <Link
                                key={pSlug}
                                href={`/projects/${pSlug}`}
                                className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#FFFFFF] border border-[#D8E5E3] text-[#2E8B57] hover:bg-[#2E8B57] hover:text-[#FFFFFF] transition-colors"
                              >
                                {pSlug === 'recordhub' && 'RecordHub'}
                                {pSlug === 'os-locking-simulator' && 'OS Simulator'}
                                {pSlug === 'smart-blood-bank' && 'Blood Bank'}
                                {pSlug === 'flashcard-engine' && 'Flashcards'}
                                {pSlug === 'unified-devops' && 'Unified DevOps'}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            PAGE END CTA
            ========================================================================= */}
        <PageEndCta
          variant="blueprint"
          title="Have something worth building?"
          subtitle="Explore the verified code repositories or reach out directly to discuss how my systems and full-stack skill set aligns with your team."
          primaryButtonText="Contact Me"
          primaryButtonHref="/contact"
          secondaryButtonText="Explore Projects"
          secondaryButtonHref="/projects"
        />
      </Container>
    </div>
  );
}
