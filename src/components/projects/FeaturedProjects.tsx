import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Sparkle } from '../ui/Sparkle';
import { GithubIcon } from '../ui/Icons';
import { projectsData } from '@/lib/data/projects-data';

export function FeaturedProjects() {
  const recordhub = projectsData.find((p) => p.slug === 'recordhub')!;
  const osSim = projectsData.find((p) => p.slug === 'os-locking-simulator')!;
  const devops = projectsData.find((p) => p.slug === 'unified-devops')!;
  const bloodbank = projectsData.find((p) => p.slug === 'smart-blood-bank')!;

  return (
    <section className="py-16 sm:py-24 border-t border-[#D8E5E3] bg-[#E9F6F5]/25 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#90A9A6] tracking-widest uppercase mb-1">
              <span>Verified Systems & Case Studies</span>
              <Sparkle size={10} variant="coral" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#352A27]">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#352A27] hover:text-[#986953] transition-colors group"
          >
            <span>Explore All Systems Directory</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Visual Hierarchy: 1 Dominant Card */}
        <div className="mb-8">
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#FFFFFF] border-2 border-[#D8E5E3] hover:border-[#90A9A6] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#90A9A6]/10 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge variant="system-live" dot>
                      LIVE DEPLOYMENT
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
                    {recordhub.plainEnglishSummary}
                  </p>

                  {/* Highlight Metric */}
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
                      <span>Read Deep Case Study</span>
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

              {/* Decorative Blueprint Technical Diagram Tile */}
              <div className="lg:col-span-4 rounded-2xl bg-[#E9F6F5]/40 border border-[#D8E5E3] p-6 flex flex-col justify-between h-full min-h-[260px]">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#90A9A6]">
                  <span>// ARCHITECTURE</span>
                  <span className="text-[#2E8B57]">VERIFIED</span>
                </div>

                <div className="space-y-3 my-4">
                  <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#D8E5E3] text-xs font-mono">
                    <span className="text-[#986953] font-bold">AUTH:</span> httpOnly JWT + OAuth 2.0
                  </div>
                  <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#D8E5E3] text-xs font-mono">
                    <span className="text-[#2A7B88] font-bold">STATE:</span> App Router + React 19
                  </div>
                  <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#D8E5E3] text-xs font-mono">
                    <span className="text-[#352A27] font-bold">STORE:</span> MongoDB Indexed Schemas
                  </div>
                </div>

                <span className="text-[10px] font-mono text-[#8E827E] text-center block">
                  Next.js 16 Production Deployment
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Hierarchy: 2 Medium Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Medium Card 1: OS Locking Simulator */}
          <div className="flex flex-col justify-between p-8 rounded-3xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#90A9A6] transition-all duration-300 shadow-sm hover:shadow-lg group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <Badge variant="mint" dot>
                  {osSim.status}
                </Badge>
                <span className="text-xs font-mono text-[#90A9A6]">
                  {osSim.category}
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-[#352A27] group-hover:text-[#986953] transition-colors">
                {osSim.title}
              </h3>

              <p className="mt-2 text-xs font-mono text-[#90A9A6]">
                {osSim.tagline}
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#675B57] leading-relaxed">
                {osSim.plainEnglishSummary}
              </p>

              <div className="mt-5 p-3 rounded-xl bg-[#E9F6F5]/50 border border-[#D8E5E3] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#90A9A6] uppercase block">
                    Heavy Concurrency
                  </span>
                  <span className="text-base font-bold font-display text-[#352A27]">
                    40% Lower Simulated Abort Rate
                  </span>
                </div>
                <span className="text-xs font-mono text-[#675B57]">
                  Priority victim selection heuristics
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-5">
                {osSim.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[#E9F6F5] text-[#352A27] border border-[#D8E5E3]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#D8E5E3]/80 flex items-center justify-between">
              <Link
                href={`/projects/${osSim.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#352A27] hover:text-[#986953] transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={osSim.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#675B57] hover:text-[#352A27]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>

          {/* Medium Card 2: Unified DevOps Platform */}
          <div className="flex flex-col justify-between p-8 rounded-3xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#90A9A6] transition-all duration-300 shadow-sm hover:shadow-lg group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <Badge variant="system-running" dot>
                  {devops.status}
                </Badge>
                <span className="text-xs font-mono text-[#90A9A6]">
                  {devops.category}
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-[#352A27] group-hover:text-[#986953] transition-colors">
                {devops.title}
              </h3>

              <p className="mt-2 text-xs font-mono text-[#90A9A6]">
                {devops.tagline}
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#675B57] leading-relaxed">
                {devops.plainEnglishSummary}
              </p>

              <div className="mt-5 p-3 rounded-xl bg-[#E9F6F5]/50 border border-[#D8E5E3] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#90A9A6] uppercase block">
                    Security Architecture
                  </span>
                  <span className="text-base font-bold font-display text-[#352A27]">
                    AES-256-GCM Encryption
                  </span>
                </div>
                <span className="text-xs font-mono text-[#675B57]">
                  Kind K8s & Argo CD Overlay
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-5">
                {devops.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[#E9F6F5] text-[#352A27] border border-[#D8E5E3]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#D8E5E3]/80 flex items-center justify-between">
              <Link
                href={`/projects/${devops.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#352A27] hover:text-[#986953] transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={devops.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#675B57] hover:text-[#352A27]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Visual Hierarchy: 1 Supporting Card (Smart Blood Bank) */}
        <div className="p-7 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#90A9A6] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6 group">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="system-live" dot>
                {bloodbank.status}
              </Badge>
              <span className="text-xs font-mono text-[#90A9A6]">
                {bloodbank.category}
              </span>
            </div>

            <h3 className="text-xl font-display font-bold text-[#352A27] group-hover:text-[#986953] transition-colors">
              {bloodbank.title}
            </h3>

            <p className="mt-1 text-xs sm:text-sm text-[#675B57] leading-relaxed">
              {bloodbank.plainEnglishSummary}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {bloodbank.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#E9F6F5] text-[#352A27] border border-[#D8E5E3]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              href={`/projects/${bloodbank.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#352A27] text-[#FDFDFD] text-xs font-semibold hover:bg-[#251D1B] transition-colors"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {bloodbank.liveUrl && (
              <a
                href={bloodbank.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-[#D8E5E3] hover:border-[#352A27] text-[#675B57] hover:text-[#352A27] transition-colors"
                title="Live System"
              >
                <ExternalLink className="w-4 h-4 text-[#90A9A6]" />
              </a>
            )}

            <a
              href={bloodbank.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-[#D8E5E3] hover:border-[#352A27] text-[#675B57] hover:text-[#352A27] transition-colors"
              title="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
