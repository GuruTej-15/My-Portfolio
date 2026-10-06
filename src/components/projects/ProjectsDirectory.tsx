'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Layers,
  Server,
  Smartphone,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Sparkle } from '@/components/ui/Sparkle';
import { GithubIcon } from '@/components/ui/Icons';
import { Project } from '@/lib/types';
import clsx from 'clsx';

interface ProjectsDirectoryProps {
  projects: Project[];
}

export function ProjectsDirectory({ projects }: ProjectsDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { label: 'ALL', value: 'All', count: projects.length },
    { label: 'FULL-STACK', value: 'Full-Stack', count: projects.filter((p) => p.category === 'Full-Stack').length },
    { label: 'SYSTEMS', value: 'Systems & Concurrency', count: projects.filter((p) => p.category === 'Systems & Concurrency').length },
    { label: 'DEVOPS', value: 'DevOps & Cloud-Native', count: projects.filter((p) => p.category === 'DevOps & Cloud-Native').length },
    { label: 'PWA', value: 'PWA & Algorithms', count: projects.filter((p) => p.category === 'PWA & Algorithms').length },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const recordhub = projects.find((p) => p.slug === 'recordhub')!;
  const osSim = projects.find((p) => p.slug === 'os-locking-simulator')!;
  const devops = projects.find((p) => p.slug === 'unified-devops')!;
  const bloodbank = projects.find((p) => p.slug === 'smart-blood-bank')!;
  const flashcards = projects.find((p) => p.slug === 'flashcard-engine')!;

  const isFiltered = selectedCategory !== 'All';

  return (
    <div className="space-y-12">
      {/* Minimal Category Filter Selector */}
      <div className="flex flex-wrap items-center gap-1.5 pt-2 pb-1">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={clsx(
                'px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors duration-150 flex items-center gap-1.5 cursor-pointer',
                isActive
                  ? 'bg-[#352A27] text-[#FFFFFF]'
                  : 'bg-[#F4F9F8] text-[#675B57] hover:bg-[#E9F6F5] hover:text-[#352A27] border border-[#D8E5E3]/60'
              )}
            >
              <span>{cat.label}</span>
              <span
                className={clsx(
                  'text-[10px] font-mono px-1 rounded',
                  isActive ? 'bg-[#FFFFFF]/20 text-[#FFFFFF]' : 'text-[#90A9A6]'
                )}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* FILTERED VIEW: Clean Asymmetric List */}
      {isFiltered ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        /* DEFAULT VIEW: Curated Editorial Index with Hierarchy */
        <div className="space-y-10">
          {/* Dominant Flagship Card: RecordHub */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#FFFFFF] border-2 border-[#D8E5E3] hover:border-[#90A9A6] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#90A9A6]/10 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge variant="system-live" dot>
                      {recordhub.status}
                    </Badge>
                    <span className="text-xs font-mono text-[#90A9A6]">
                      {recordhub.category}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#E9F6F5] text-[#986953] font-bold">
                      FLAGSHIP PLATFORM
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-[#352A27] group-hover:text-[#986953] transition-colors">
                    {recordhub.title}
                  </h3>

                  <p className="mt-2 text-sm font-mono text-[#90A9A6]">
                    {recordhub.tagline}
                  </p>

                  <p className="mt-4 text-base sm:text-lg text-[#675B57] leading-relaxed max-w-3xl">
                    {recordhub.inSimpleWords}
                  </p>

                  {/* Verified Metric Pill */}
                  <div className="mt-6 inline-flex items-center gap-4 p-3.5 rounded-2xl bg-[#E9F6F5]/70 border border-[#D8E5E3]">
                    <div className="border-r border-[#90A9A6]/30 pr-4">
                      <span className="text-[10px] font-mono text-[#90A9A6] uppercase block">
                        Verified Metric
                      </span>
                      <span className="text-xl font-bold font-display text-[#352A27]">
                        35% Faster
                      </span>
                    </div>
                    <span className="text-xs text-[#675B57] max-w-xs leading-tight">
                      Faster profile loading achieved through responsive data aggregation pipeline work.
                    </span>
                  </div>
                </div>

                {/* Tech & Actions */}
                <div className="mt-8 pt-6 border-t border-[#D8E5E3]/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {recordhub.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-lg bg-[#E9F6F5] text-[#352A27] border border-[#D8E5E3]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/projects/${recordhub.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#352A27] text-[#FDFDFD] text-xs font-bold hover:bg-[#251D1B] transition-colors shadow-xs"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {recordhub.liveUrl && (
                      <a
                        href={recordhub.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#E9F6F5] text-[#352A27] border border-[#D8E5E3] text-xs font-semibold hover:bg-[#D3E8E6] transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#90A9A6]" />
                      </a>
                    )}

                    <a
                      href={recordhub.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-[#D8E5E3] hover:border-[#352A27] text-[#675B57] hover:text-[#352A27] transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Blueprint Diagram Box */}
              <div className="lg:col-span-4 rounded-2xl bg-[#E9F6F5]/40 border border-[#D8E5E3] p-6 flex flex-col justify-between h-full min-h-[260px]">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#90A9A6]">
                  <span>// ARCHITECTURE</span>
                  <span className="text-[#2E8B57]">VERIFIED</span>
                </div>

                <div className="space-y-3 my-4">
                  <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#D8E5E3] text-xs font-mono">
                    <span className="text-[#986953] font-bold">AUTH:</span> httpOnly JWT + 30m Cutoff
                  </div>
                  <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#D8E5E3] text-xs font-mono">
                    <span className="text-[#2A7B88] font-bold">STATE:</span> App Router + React 19
                  </div>
                  <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#D8E5E3] text-xs font-mono">
                    <span className="text-[#352A27] font-bold">STORE:</span> MongoDB Indexed Pipelines
                  </div>
                </div>

                <span className="text-[10px] font-mono text-[#8E827E] text-center block">
                  Next.js 16 Production Deployment
                </span>
              </div>
            </div>
          </div>

          {/* Grid Pair 1: Systems & Concurrency + Cloud-Native DevOps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProjectCard project={osSim} highlightBadge="SYSTEMS SIMULATOR" />
            <ProjectCard project={devops} highlightBadge="DEVOPS OVERLAY" />
          </div>

          {/* Grid Pair 2: Smart Blood Bank + Offline PWA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProjectCard project={bloodbank} highlightBadge="ALGORITHMIC HEALTHCARE" />
            <ProjectCard project={flashcards} highlightBadge="OFFLINE-FIRST PWA" />
          </div>
        </div>
      )}
    </div>
  );
}

/** Modular Project Card Component */
function ProjectCard({ project, highlightBadge }: { project: Project; highlightBadge?: string }) {
  return (
    <div className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#90A9A6] transition-all duration-300 shadow-sm hover:shadow-lg group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
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
            {highlightBadge && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E9F6F5] text-[#986953] font-semibold">
                {highlightBadge}
              </span>
            )}
          </div>
          <span className="text-xs font-mono text-[#90A9A6]">{project.category}</span>
        </div>

        <h3 className="text-2xl font-display font-bold text-[#352A27] group-hover:text-[#986953] transition-colors">
          {project.title}
        </h3>

        <p className="mt-1 text-xs font-mono text-[#90A9A6]">{project.tagline}</p>

        <p className="mt-4 text-sm sm:text-base text-[#675B57] leading-relaxed">
          {project.plainEnglishSummary}
        </p>

        {/* Primary Metric Badge */}
        {project.metrics.length > 0 && (
          <div className="mt-5 p-3 rounded-xl bg-[#E9F6F5]/50 border border-[#D8E5E3] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#90A9A6] uppercase block">
                {project.metrics[0].label}
              </span>
              <span className="text-base font-bold font-display text-[#352A27]">
                {project.metrics[0].value}
              </span>
            </div>
            <span className="text-xs font-mono text-[#675B57] text-right max-w-[200px] truncate">
              {project.metrics[0].context}
            </span>
          </div>
        )}

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[#E9F6F5] text-[#352A27] border border-[#D8E5E3]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-[11px] font-mono text-[#90A9A6]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-6 mt-6 border-t border-[#D8E5E3]/80 flex items-center justify-between">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#352A27] hover:text-[#986953] transition-colors"
        >
          <span>View Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[#675B57] hover:text-[#352A27]"
            >
              <span>Live</span>
              <ExternalLink className="w-3 h-3 text-[#90A9A6]" />
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-[#675B57] hover:text-[#352A27]"
            aria-label="GitHub Repository"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Repo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
