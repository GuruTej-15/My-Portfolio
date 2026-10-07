import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
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
  GitBranch,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Sparkle } from '@/components/ui/Sparkle';
import { projectsData } from '@/lib/data/projects-data';
import { ArchitectureDiagram } from '@/components/projects/ArchitectureDiagram';
import { ProjectVisualProof } from '@/components/projects/ProjectVisualProof';

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
    title: `${project.title} — Engineering Case Study | GuruTej Pratap`,
    description: project.inSimpleWords || project.plainEnglishSummary,
    openGraph: {
      title: `${project.title} — Engineering Case Study`,
      description: project.inSimpleWords || project.plainEnglishSummary,
      type: 'article',
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);

  if (!currentIndex && currentIndex !== 0) {
    notFound();
  }

  if (currentIndex === -1) {
    notFound();
  }

  const project = projectsData[currentIndex];
  const prevProject =
    currentIndex > 0
      ? projectsData[currentIndex - 1]
      : projectsData[projectsData.length - 1];
  const nextProject =
    currentIndex < projectsData.length - 1
      ? projectsData[currentIndex + 1]
      : projectsData[0];

  return (
    <article className="py-12 sm:py-16 lg:py-20 text-[#352A27]">
      <Container size="wide">
        {/* Navigation Breadcrumb */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#D8E5E3] pb-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#675B57] hover:text-[#352A27] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>← ALL PROJECTS</span>
          </Link>

          <div className="flex items-center gap-3 text-xs font-mono text-[#90A9A6]">
            <span>SYSTEM {project.order} OF {projectsData.length}</span>
            <span>•</span>
            <span className="uppercase text-[#2E8B57] font-semibold">{project.category}</span>
          </div>
        </div>

        {/* =========================================================================
            CHAPTER 1: PROJECT HERO
            ========================================================================= */}
        <header className="mb-14 lg:mb-16">
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
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
              {project.status === 'LIVE' ? 'VERIFIED LIVE' : project.status}
            </Badge>

            <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-[#E9F6F5] text-[#986953] font-bold border border-[#D8E5E3]">
              ENGINEERING CASE STUDY
            </span>
          </div>

          <h1 className="text-2xl min-[400px]:text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#352A27] tracking-tight leading-[1.1] max-w-4xl break-words">
            {project.title}
          </h1>

          <p className="mt-4 text-lg sm:text-xl font-mono text-[#675B57] max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-3.5 mt-8">
            {project.liveUrl ? (
              <Button
                href={project.liveUrl}
                variant="primary"
                size="md"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Launch Live System
              </Button>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F4F9F8] border border-[#D8E5E3] text-xs font-mono text-[#90A9A6]">
                <Terminal className="w-3.5 h-3.5 text-[#90A9A6]" />
                <span>Live Demo: Local / Cloud-Native Engine</span>
              </span>
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

          {/* Core Technologies Badges */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-5 border-t border-[#D8E5E3]">
            <span className="text-xs font-mono text-[#90A9A6] mr-2">TECH STACK:</span>
            {project.technologies.slice(0, 8).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#E9F6F5] text-[#352A27] border border-[#D8E5E3]"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* =========================================================================
            CHAPTER 2: PRODUCT / VISUAL PROOF
            ========================================================================= */}
        <section className="mb-20 sm:mb-24">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
            <div>
              <span className="text-xs font-mono text-[#2E8B57] uppercase tracking-wider block font-bold">
                01 // PRODUCT PROOF & RUNTIME VIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#352A27] mt-1">
                Visual Proof & System Telemetry
              </h2>
            </div>
            <span className="text-xs font-mono text-[#90A9A6]">
              {project.liveUrl ? 'Verified Web Application' : 'Verified Local Architecture'}
            </span>
          </div>

          <ProjectVisualProof
            slug={project.slug}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        </section>

        {/* =========================================================================
            CHAPTER 3: IN SIMPLE WORDS (EXECUTIVE SUMMARY)
            ========================================================================= */}
        <section className="mb-20 sm:mb-24 border-l-4 border-l-[#D49879] pl-6 sm:pl-8 py-2">
          <div className="flex items-center gap-2 mb-3">
            <Sparkle size={14} variant="coral" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#986953] uppercase">
              In Simple Words
            </span>
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-[#352A27] leading-relaxed max-w-4xl">
            &ldquo;{project.inSimpleWords}&rdquo;
          </p>
        </section>

        {/* =========================================================================
            CHAPTER 4: THE PROBLEM & WHY IT MATTERS
            ========================================================================= */}
        <section className="mb-20 sm:mb-24 border-t border-[#D8E5E3] pt-12 sm:pt-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block font-semibold mb-2">
              02 // The Context
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#352A27]">
              The Problem & Why It Matters
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#986953] font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#986953]" />
                The Problem
              </h3>
              <p className="text-base sm:text-lg text-[#675B57] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#2E8B57] font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2E8B57]" />
                Why It Matters
              </h3>
              <p className="text-base sm:text-lg text-[#675B57] leading-relaxed">
                {project.whyItMatters}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 5: WHAT I BUILT & HOW IT WORKS
            ========================================================================= */}
        <section className="mb-20 sm:mb-24 border-t border-[#D8E5E3] pt-12 sm:pt-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block font-semibold mb-2">
              03 // Solution Delivery
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#352A27]">
              What I Built & How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#352A27] font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#352A27]" />
                What I Built
              </h3>
              <p className="text-base sm:text-lg text-[#675B57] leading-relaxed">
                {project.whatIBuilt}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#352A27] font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#352A27]" />
                How It Works
              </h3>
              <p className="text-base sm:text-lg text-[#675B57] leading-relaxed">
                {project.howItWorks}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 6: SYSTEM ARCHITECTURE
            ========================================================================= */}
        <section className="mb-20 sm:mb-24 border-t border-[#D8E5E3] pt-12 sm:pt-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block font-semibold mb-2">
              04 // Architecture Topology
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#352A27]">
              System Architecture & Component Flow
            </h2>
          </div>

          <ArchitectureDiagram slug={project.slug} />

          {/* Key Invariants / Details */}
          <div className="mt-8 pt-6 border-t border-[#D8E5E3]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#986953] font-bold mb-4">
              Core Architectural Invariants
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
              {project.architectureDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F4F9F8] border border-[#D8E5E3]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2E8B57] shrink-0 mt-0.5" />
                  <span className="text-[#352A27]">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 7: MY CONTRIBUTION
            ========================================================================= */}
        <section className="mb-20 sm:mb-24 border-t border-[#D8E5E3] pt-12 sm:pt-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block font-semibold mb-2">
              05 // Direct Engineering Ownership
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#352A27]">
              My Key Contributions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyContributions.map((contrib, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] flex items-start gap-3.5"
              >
                <span className="font-mono text-xs font-bold text-[#986953] bg-[#E9F6F5] px-2 py-0.5 rounded border border-[#D8E5E3] shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <p className="text-sm sm:text-base text-[#352A27] leading-relaxed">
                  {contrib}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 8: TECHNICAL DEEP DIVE & ARCHITECTURAL DECISIONS
            ========================================================================= */}
        <section className="mb-20 sm:mb-24 border-t border-[#D8E5E3] pt-12 sm:pt-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block font-semibold mb-2">
              06 // Technical Deep Dive
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#352A27]">
              Engineering Decisions & Code Specifics
            </h2>
          </div>

          {/* Trade-offs & Decisions */}
          <div className="mb-12">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#986953] font-bold mb-4">
              Architectural Decisions & Trade-Offs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {project.technicalDecisions.map((decision) => (
                <div
                  key={decision.title}
                  className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-display font-bold text-base text-[#352A27] mb-3 leading-snug">
                      {decision.title}
                    </h4>
                    <div className="space-y-3 text-xs leading-relaxed">
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
          </div>

          {/* Implementation Deep Dive */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#2E8B57] font-bold mb-4">
              Concrete Code & Algorithmic Structures
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {project.technicalDeepDive.map((deepDive) => (
                <div
                  key={deepDive.title}
                  className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-display font-bold text-lg text-[#352A27]">
                      {deepDive.title}
                    </h4>
                    <p className="text-xs font-mono text-[#2E8B57] mt-0.5 mb-3 font-semibold">
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
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 9: RESULTS & MEASURED OUTCOMES
            ========================================================================= */}
        <section className="mb-20 sm:mb-24 border-t border-[#D8E5E3] pt-12 sm:pt-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block font-semibold mb-2">
              07 // Verified Outcomes
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#352A27]">
              Measured Results & Production Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-6 rounded-2xl bg-[#E9F6F5]/50 border border-[#D8E5E3] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#90A9A6] uppercase tracking-wider block">
                    {metric.label}
                  </span>
                  <span className="text-3xl sm:text-4xl font-bold font-display text-[#352A27] mt-1 block">
                    {metric.value}
                  </span>
                </div>
                <span className="text-xs text-[#675B57] mt-3 font-sans leading-relaxed">
                  {metric.context}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 10: TECHNOLOGY STACK BREAKDOWN
            ========================================================================= */}
        <section className="mb-20 sm:mb-24 border-t border-[#D8E5E3] pt-12 sm:pt-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block font-semibold mb-2">
              08 // Tooling & Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#352A27]">
              Domain-Organized Technology Stack
            </h2>
          </div>

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

        {/* =========================================================================
            CHAPTER 11: ENGINEERING OBSTACLES & LESSONS
            ========================================================================= */}
        <section className="mb-20 sm:mb-24 border-t border-[#D8E5E3] pt-12 sm:pt-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-wider block font-semibold mb-2">
              09 // Problem Solving
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#352A27]">
              Engineering Obstacles Overcome & Key Lessons
            </h2>
          </div>

          <div className="space-y-4">
            {project.challengesAndLearnings.map((challenge, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] flex items-start gap-4"
              >
                <span className="font-mono text-xs font-bold text-[#D49879] bg-[#E9F6F5] px-2.5 py-1 rounded border border-[#D8E5E3] shrink-0">
                  OBSTACLE {idx + 1}
                </span>
                <p className="text-sm sm:text-base text-[#675B57] leading-relaxed">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 12: PROJECT TRAVERSAL NAVIGATION
            ========================================================================= */}
        <nav className="mb-16 border-t border-[#D8E5E3] pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#675B57] hover:text-[#352A27] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>← ALL PROJECTS INDEX</span>
            </Link>

            <span className="text-xs font-mono text-[#90A9A6]">
              NAVIGATE CASE STUDIES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#90A9A6] transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <ChevronLeft className="w-5 h-5 text-[#90A9A6] group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="text-[10px] font-mono text-[#90A9A6] block uppercase">
                    Previous Project
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
                  Next Project
                </span>
                <span className="font-display font-bold text-sm sm:text-base text-[#352A27]">
                  {nextProject.title}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#90A9A6] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </nav>

        {/* =========================================================================
            CHAPTER 13: RECRUITER CONTACT & CALL-TO-ACTION
            ========================================================================= */}
        <section className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#E9F6F5]/80 border-2 border-[#D8E5E3] text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-[#986953] uppercase tracking-widest block mb-2 font-bold">
            // NEXT STEP FOR RECRUITERS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#352A27]">
            Interested in discussing this architecture?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#675B57] leading-relaxed max-w-xl mx-auto">
            I am actively seeking software engineering roles and internships across full-stack, systems, and cloud infrastructure.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
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
    </article>
  );
}
