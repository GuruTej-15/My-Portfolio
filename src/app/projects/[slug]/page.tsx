import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Download, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projectsData } from '@/lib/data/projects-data';

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
    title: `${project.title} — Case Study`,
    description: project.plainEnglishSummary,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-16">
      <Container size="wide">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#675B57] hover:text-[#352A27] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>// BACK TO PROJECTS DIRECTORY</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <PageHeader
          tag={`Case Study // ${project.category}`}
          title={project.title}
          description={project.tagline}
        >
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                variant="primary"
                size="md"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Live System
              </Button>
            )}
            <Button
              href={project.githubUrl}
              variant="outline"
              size="md"
              icon={<GithubIcon className="w-4 h-4" />}
            >
              Source Code
            </Button>
          </div>
        </PageHeader>

        {/* Status & Key Metrics Strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#E9F6F5]/50 border border-[#D8E5E3] mb-12">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-[#90A9A6] uppercase">Deployment Status</span>
            <div className="mt-1">
              <Badge variant={project.status === 'LIVE' ? 'system-live' : 'mint'} dot>
                {project.status}
              </Badge>
            </div>
          </div>

          {project.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-0.5">
              <span className="text-[10px] font-mono text-[#90A9A6] uppercase">{metric.label}</span>
              <span className="text-xl font-bold font-display text-[#352A27]">{metric.value}</span>
              <span className="text-xs text-[#675B57] font-sans truncate">{metric.context}</span>
            </div>
          ))}
        </div>

        {/* Recruiter-First Plain Language Summary Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border-l-4 border-l-[#D49879] border border-[#D8E5E3] shadow-sm mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-[#986953] uppercase block mb-2">
            In Simple Words (Executive Summary)
          </span>
          <p className="text-base sm:text-lg text-[#352A27] font-medium leading-relaxed">
            {project.plainEnglishSummary}
          </p>
        </div>

        {/* Two-Column Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3]">
            <h2 className="text-xl font-display font-bold text-[#352A27] mb-3">
              The Engineering Problem
            </h2>
            <p className="text-sm sm:text-base text-[#675B57] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3]">
            <h2 className="text-xl font-display font-bold text-[#352A27] mb-3">
              What I Built & How It Works
            </h2>
            <p className="text-sm sm:text-base text-[#675B57] leading-relaxed mb-3">
              {project.whatIBuilt}
            </p>
            <p className="text-sm sm:text-base text-[#675B57] leading-relaxed">
              {project.howItWorks}
            </p>
          </div>
        </div>

        {/* Technical Architecture Details */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] mb-12">
          <h2 className="text-xl font-display font-bold text-[#352A27] mb-4">
            Key Architectural Guarantees & Implementations
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.architectureDetails.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#E9F6F5]/40 border border-[#D8E5E3]/80">
                <CheckCircle2 className="w-4 h-4 text-[#2E8B57] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#352A27] leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Applied */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] mb-16">
          <h2 className="text-xl font-display font-bold text-[#352A27] mb-4">
            Technologies Applied
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-mono rounded-lg bg-[#E9F6F5] text-[#352A27] border border-[#D8E5E3]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Recruiter Closing CTA */}
        <div className="p-8 rounded-2xl bg-[#E9F6F5]/60 border border-[#D8E5E3] text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-display font-bold text-[#352A27]">
            Interested in the code architecture?
          </h3>
          <p className="mt-2 text-sm text-[#675B57]">
            Review the full implementation on GitHub or download my verified resume.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Button
              href="/GuruTej_Pratap_Resume.pdf"
              download="GuruTej_Pratap_Resume.pdf"
              variant="cv"
              size="md"
              icon={<Download className="w-4 h-4 text-[#986953]" />}
            >
              Download CV
            </Button>
            <Button href={project.githubUrl} variant="outline" size="md" icon={<GithubIcon className="w-4 h-4" />}>
              Open Repository
            </Button>
            <Button href="/contact" variant="primary" size="md">
              Contact GuruTej
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
