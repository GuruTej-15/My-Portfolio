import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Download,
  CheckCircle2,
  Code2,
  Layers,
  ShieldCheck,
  Cpu,
  Database,
  Terminal,
  Activity,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Sparkle } from '@/components/ui/Sparkle';
import { projectsData } from '@/lib/data/projects-data';
import { ArchitectureDiagram } from '@/components/projects/ArchitectureDiagram';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} — Engineering Case Study`,
    description: project.inSimpleWords || project.plainEnglishSummary,
    openGraph: {
      title: `${project.title} — GuruTej Pratap`,
      description: project.inSimpleWords || project.plainEnglishSummary,
      type: 'article',
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projectsData[currentIndex];
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  return (
    <div className="py-10 sm:py-16">
      <Container size="wide">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#675B57] hover:text-[#352A27] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>// BACK TO PROJECTS INDEX</span>
          </Link>

          <span className="text-xs font-mono text-[#90A9A6]">
            SYSTEM {project.order} OF {projectsData.length}
          </span>
        </div>

        {/* 1. PROJECT HERO */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge
              variant={
                project.status === 'LIVE'
                  ? 'system-live'
                  : project.status === 'VERIFIED'
                  ? 'mint'
                  : 'system-running'
              }
              dot
            >
              {project.status}
            </Badge>
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#E9F6F5] text-[#986953] font-semibold">
              CASE STUDY
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#352A27] tracking-tight leading-[1.1]">
            {project.title}
          </h1>

          <p className="mt-3 text-lg sm:text-xl font-mono text-[#675B57] max-w-3xl">
            {project.tagline}
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3.5 mt-6">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                variant="primary"
                size="md"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Launch Live System
              </Button>
            )}

            <Button
              href={project.githubUrl}
              variant="outline"
              size="md"
              icon={<GithubIcon className="w-4 h-4" />}
            >
              Inspect Source Code
            </Button>

            <Button
              href="/GuruTej_Pratap_Resume.pdf"
              download="GuruTej_Pratap_Resume.pdf"
              variant="cv"
              size="md"
              icon={<Download className="w-4 h-4 text-[#986953]" />}
            >
              Download CV
            </Button>
          </div>

          {/* Compact Metadata Row */}
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-[#D8E5E3]">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[#E9F6F5] text-[#352A27] border border-[#D8E5E3]"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* 2. PLAIN-ENGLISH ONE-LINE EXPLANATION ("IN SIMPLE WORDS") */}
        <section className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border-l-4 border-l-[#D49879] border border-[#D8E5E3] shadow-xs mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Sparkle size={12} variant="coral" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#986953] uppercase">
              In Simple Words (Executive Summary)
            </span>
          </div>
          <p className="text-base sm:text-lg text-[#352A27] font-medium leading-relaxed">
            &ldquo;{project.inSimpleWords}&rdquo;
          </p>
        </section>

        {/* 13. RESULTS & MEASURABLE OUTCOMES (Early Proof Row) */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-5 rounded-2xl bg-[#E9F6F5]/50 border border-[#D8E5E3] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-[#90A9A6] uppercase tracking-wider block">
                  {metric.label}
                </span>
                <span className="text-2xl sm:text-3xl font-bold font-display text-[#352A27] mt-1 block">
                  {metric.value}
                </span>
              </div>
              <span className="text-xs text-[#675B57] mt-2 font-sans leading-tight">
                {metric.context}
              </span>
            </div>
          ))}
        </section>

        {/* 3 & 4. PROBLEM & WHY IT MATTERS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="p-7 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3]">
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block mb-2">
              01 // The Problem
            </span>
            <h2 className="text-xl font-display font-bold text-[#352A27] mb-3">
              Friction Points & Architectural Gaps
            </h2>
            <p className="text-sm sm:text-base text-[#675B57] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-7 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3]">
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block mb-2">
              02 // Why It Matters
            </span>
            <h2 className="text-xl font-display font-bold text-[#352A27] mb-3">
              Real-World Engineering Consequences
            </h2>
            <p className="text-sm sm:text-base text-[#675B57] leading-relaxed">
              {project.whyItMatters}
            </p>
          </div>
        </section>

        {/* 5 & 6. WHAT I BUILT & HOW IT WORKS */}
        <section className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#D8E5E3] mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-mono text-[#2E8B57] uppercase tracking-wider block">
                03 // Solution Delivery
              </span>
              <h2 className="text-2xl font-display font-bold text-[#352A27]">
                What I Built
              </h2>
              <p className="text-sm sm:text-base text-[#675B57] leading-relaxed">
                {project.whatIBuilt}
              </p>
            </div>

            <div className="lg:col-span-6 space-y-3 lg:border-l lg:border-[#D8E5E3] lg:pl-8">
              <span className="text-xs font-mono text-[#986953] uppercase tracking-wider block">
                04 // Runtime Execution
              </span>
              <h2 className="text-2xl font-display font-bold text-[#352A27]">
                How It Works
              </h2>
              <p className="text-sm sm:text-base text-[#675B57] leading-relaxed">
                {project.howItWorks}
              </p>
            </div>
          </div>
        </section>

        {/* 7. ARCHITECTURE VISUALIZATION */}
        <section className="mb-12">
          <div className="mb-4">
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block">
              05 // Visual Architecture Blueprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#352A27]">
              System Topology & Component Flow
            </h2>
          </div>
          <ArchitectureDiagram slug={project.slug} />
        </section>

        {/* 8. MY CONTRIBUTION */}
        <section className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#D8E5E3] mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-[#986953] uppercase tracking-wider">
              06 // Engineering Ownership
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#352A27] mb-6">
            My Personal Contributions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyContributions.map((contrib, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#E9F6F5]/40 border border-[#D8E5E3] flex items-start gap-3"
              >
                <span className="font-mono text-xs font-bold text-[#986953] bg-[#E9F6F5] px-2 py-0.5 rounded shrink-0">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-[#352A27] leading-relaxed">
                  {contrib}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. KEY TECHNICAL DECISIONS */}
        <section className="mb-12">
          <div className="mb-6">
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block">
              07 // Architectural Trade-offs
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#352A27]">
              Key Technical Decisions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.technicalDecisions.map((decision) => (
              <div
                key={decision.title}
                className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] flex flex-col justify-between shadow-xs"
              >
                <div>
                  <h3 className="font-display font-bold text-base text-[#352A27] mb-2 leading-snug">
                    {decision.title}
                  </h3>
                  <div className="space-y-3 mt-3 text-xs leading-relaxed">
                    <div>
                      <span className="font-mono text-[10px] text-[#90A9A6] uppercase block font-semibold">
                        Rationale:
                      </span>
                      <p className="text-[#675B57] mt-0.5">{decision.rationale}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#2E8B57] uppercase block font-semibold">
                        Verified Outcome:
                      </span>
                      <p className="text-[#352A27] mt-0.5 font-medium">{decision.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10. VISUAL PROOF / SCREENSHOTS */}
        {project.slug === 'flashcard-engine' && (
          <section className="mb-12 p-8 rounded-3xl bg-[#FFFFFF] border border-[#D8E5E3]">
            <div className="mb-4">
              <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block">
                08 // Visual Proof
              </span>
              <h2 className="text-2xl font-display font-bold text-[#352A27]">
                Live Progressive Web App Interface
              </h2>
              <p className="text-sm text-[#675B57] mt-1">
                Real capture of the 3D flip card animation and headless Google Sheets quiz interaction.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#D8E5E3] bg-[#E9F6F5]/20 max-w-3xl mx-auto shadow-sm">
              <Image
                src="/images/projects/flashcards.png"
                alt="Smart Flashcard Engine UI Screenshot"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </section>
        )}

        {/* 11. TECHNICAL IMPLEMENTATION DEEP DIVE */}
        <section className="mb-12">
          <div className="mb-6">
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block">
              09 // Code Deep Dive
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#352A27]">
              Technical Implementation Specifics
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {project.technicalDeepDive.map((deepDive) => (
              <div
                key={deepDive.title}
                className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display font-bold text-lg text-[#352A27]">
                    {deepDive.title}
                  </h3>
                  <p className="text-xs font-mono text-[#2E8B57] mt-0.5 mb-3">
                    {deepDive.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#675B57] leading-relaxed mb-4">
                    {deepDive.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {deepDive.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#352A27]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E8B57] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {deepDive.codeOrStructureSnippet && (
                  <div className="mt-4 p-4 rounded-xl bg-[#352A27] text-[#E9F6F5] font-mono text-xs overflow-x-auto">
                    <pre>
                      <code>{deepDive.codeOrStructureSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 12. CHALLENGES & LEARNINGS */}
        <section className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#D8E5E3] mb-12">
          <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block mb-2">
            10 // Engineering Obstacles
          </span>
          <h2 className="text-2xl font-display font-bold text-[#352A27] mb-6">
            Challenges Overcome & Key Takeaways
          </h2>
          <div className="space-y-4">
            {project.challengesAndLearnings.map((challenge, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#E9F6F5]/30 border border-[#D8E5E3] flex items-start gap-3"
              >
                <span className="font-mono text-xs font-bold text-[#D49879] bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#D8E5E3] shrink-0">
                  OBSTACLE {idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-[#675B57] leading-relaxed">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 14. TECHNOLOGY STACK BY DOMAIN */}
        <section className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#D8E5E3] mb-16">
          <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block mb-2">
            11 // Verified Tech Stack
          </span>
          <h2 className="text-2xl font-display font-bold text-[#352A27] mb-6">
            Domain-Organized Tooling Breakdown
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.stackBreakdown.map((domain) => (
              <div key={domain.domain} className="space-y-2">
                <h3 className="font-mono text-xs font-bold text-[#352A27] uppercase tracking-wider border-b border-[#D8E5E3] pb-2">
                  {domain.domain}
                </h3>
                <ul className="space-y-1.5 pt-1">
                  {domain.tools.map((tool) => (
                    <li
                      key={tool}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#E9F6F5] text-[#352A27] border border-[#D8E5E3]/80"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 17. PREVIOUS / NEXT PROJECT NAVIGATION */}
        <nav className="mb-16 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#D8E5E3] pt-8">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#90A9A6] transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <ChevronLeft className="w-5 h-5 text-[#90A9A6] group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="text-[10px] font-mono text-[#90A9A6] block uppercase">
                  Previous Case Study
                </span>
                <span className="font-display font-bold text-sm sm:text-base text-[#352A27]">
                  {prevProject.title}
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-[#90A9A6] hidden sm:inline">
              {prevProject.category}
            </span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#90A9A6] transition-all flex items-center justify-between group text-right sm:text-left"
          >
            <div>
              <span className="text-[10px] font-mono text-[#90A9A6] block uppercase">
                Next Case Study
              </span>
              <span className="font-display font-bold text-sm sm:text-base text-[#352A27]">
                {nextProject.title}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#90A9A6] group-hover:translate-x-1 transition-transform" />
          </Link>
        </nav>

        {/* 18. RECRUITER CLOSING CONTACT CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#E9F6F5]/70 border-2 border-[#D8E5E3] text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-[#986953] uppercase tracking-widest block mb-2 font-semibold">
            // NEXT STEP FOR RECRUITERS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#352A27]">
            Have an open role or internship in mind?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#675B57] leading-relaxed max-w-xl mx-auto">
            I am available for full-stack, systems, and cloud-native software engineering opportunities. Let’s discuss how I can contribute to your team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Contact GuruTej
            </Button>
            <Button
              href="/GuruTej_Pratap_Resume.pdf"
              download="GuruTej_Pratap_Resume.pdf"
              variant="cv"
              size="lg"
              icon={<Download className="w-4 h-4 text-[#986953]" />}
            >
              Download CV (PDF)
            </Button>
            <Button
              href={project.githubUrl}
              variant="outline"
              size="lg"
              icon={<GithubIcon className="w-4 h-4" />}
            >
              GitHub Repository
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
