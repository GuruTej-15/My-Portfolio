import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { Badge } from '@/components/ui/Badge';
import { projectsData } from '@/lib/data/projects-data';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Verified engineering case studies by GuruTej Pratap spanning full-stack web applications, OS concurrency simulators, cloud-native DevOps overlays, and offline PWAs.',
};

export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container size="wide">
        <PageHeader
          tag="Engineering Portfolio"
          title="Featured Projects & Case Studies"
          description="A curated catalog of software systems, concurrency simulators, and cloud-native architectures built with measurable technical outcomes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projectsData.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#90A9A6] transition-all duration-300 hover:shadow-lg hover:shadow-[#90A9A6]/10 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
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
                  <span className="text-xs font-mono text-[#90A9A6]">
                    {project.category}
                  </span>
                </div>

                <h2 className="text-2xl font-display font-bold text-[#352A27] group-hover:text-[#986953] transition-colors">
                  {project.title}
                </h2>

                <p className="mt-1 text-xs font-mono text-[#90A9A6]">
                  {project.tagline}
                </p>

                <p className="mt-3 text-sm text-[#675B57] leading-relaxed line-clamp-3">
                  {project.plainEnglishSummary}
                </p>

                {/* Metrics Highlight */}
                {project.metrics.length > 0 && (
                  <div className="mt-5 p-3 rounded-xl bg-[#E9F6F5]/50 border border-[#D8E5E3] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#90A9A6] uppercase block">
                        {project.metrics[0].label}
                      </span>
                      <span className="text-sm font-bold font-display text-[#352A27]">
                        {project.metrics[0].value}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#675B57] max-w-[140px] text-right font-sans truncate">
                      {project.metrics[0].context}
                    </span>
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[#E9F6F5] text-[#352A27] border border-[#D8E5E3]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 text-[11px] font-mono rounded-md text-[#90A9A6]">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 mt-6 border-t border-[#D8E5E3]/80 flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#352A27] hover:text-[#986953] transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-3 text-xs">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#675B57] hover:text-[#352A27] flex items-center gap-1"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#675B57] hover:text-[#352A27] flex items-center gap-1"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>Repo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
