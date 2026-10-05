import React from 'react';
import Link from 'next/link';
import { Download, ArrowRight, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PortraitDisplay } from '@/components/hero/PortraitDisplay';
import { ProofStrip } from '@/components/hero/ProofStrip';
import { SystemStatusBadge } from '@/components/hero/SystemStatusBadge';
import { DotMatrix } from '@/components/ui/DotMatrix';
import { Sparkle } from '@/components/ui/Sparkle';
import { OrganicCircle } from '@/components/ui/OrganicCircle';
import { siteConfig } from '@/lib/data/site-config';
import { projectsData } from '@/lib/data/projects-data';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Ambient Mint Circles */}
      <OrganicCircle
        size={500}
        className="absolute -top-32 -right-32 opacity-35"
      />
      <OrganicCircle
        size={400}
        className="absolute top-[650px] -left-36 opacity-25"
      />

      {/* Hero Foundation Section */}
      <section className="pt-12 sm:pt-20 pb-16 lg:pb-24 relative">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Positioning */}
            <div className="lg:col-span-7 flex flex-col gap-6 relative z-10">
              {/* Status Badge */}
              <div>
                <SystemStatusBadge />
              </div>

              {/* Editorial Headline */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-[#90A9A6] uppercase">
                  <span>Full-Stack & Systems Engineering</span>
                  <Sparkle size={12} variant="coral" />
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#352A27] leading-[1.08]">
                  Building Digital <br />
                  <span className="text-[#352A27] relative inline-block">
                    Systems
                    <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-3 bg-[#D3E8E6] -z-10 -rotate-1" />
                  </span>{' '}
                  with Rigor.
                </h1>
              </div>

              {/* Bio / Positioning Statement */}
              <p className="text-base sm:text-lg text-[#675B57] max-w-2xl leading-relaxed">
                I am <strong className="text-[#352A27] font-semibold">{siteConfig.name}</strong>, a Computer Science student at Lovely Professional University. I architect resilient web applications, concurrency simulators, and cloud-native infrastructure platforms that bridge algorithmic depth with clean UX.
              </p>

              {/* Primary Dual CTAs (Recruiter First) */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href="/projects"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore My Work
                </Button>

                {/* Direct 1-Click Resume Download */}
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
                  href="/contact"
                  variant="outline"
                  size="lg"
                >
                  Contact Me
                </Button>
              </div>

              {/* Quick Social Verification Links */}
              <div className="flex items-center gap-6 pt-4 text-xs font-mono text-[#675B57]">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#352A27] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#90A9A6]" />
                </a>

                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#352A27] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#90A9A6]" />
                </a>

                <span className="hidden sm:inline-flex items-center gap-1 text-[#90A9A6]">
                  <span>// B.Tech CSE @ LPU</span>
                </span>
              </div>
            </div>

            {/* Right Column: Editorial Portrait Display */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <PortraitDisplay size="hero" />
            </div>
          </div>

          {/* Proof Strip Section */}
          <div className="mt-16 sm:mt-24">
            <ProofStrip />
          </div>
        </Container>
      </section>

      {/* Featured Projects Preview Foundation */}
      <section className="py-16 sm:py-24 border-t border-[#D8E5E3] bg-[#E9F6F5]/20">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#90A9A6] tracking-widest uppercase mb-1">
                <span>Featured Engineering Work</span>
                <Sparkle size={10} variant="coral" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#352A27]">
                Selected Case Studies
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#352A27] hover:text-[#986953] transition-colors group"
            >
              <span>View All 5 Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Grid Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projectsData.slice(0, 3).map((project) => (
              <div
                key={project.slug}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#90A9A6] transition-all duration-300 hover:shadow-lg hover:shadow-[#90A9A6]/10"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant={project.status === 'LIVE' ? 'system-live' : project.status === 'VERIFIED' ? 'mint' : 'system-running'} dot>
                      {project.status}
                    </Badge>
                    <span className="text-xs font-mono text-[#90A9A6]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-[#352A27] group-hover:text-[#986953] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#675B57] line-clamp-3 leading-relaxed">
                    {project.plainEnglishSummary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.technologies.slice(0, 4).map((tech) => (
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
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#352A27] hover:text-[#986953] transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-3 text-xs">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#675B57] hover:text-[#352A27] flex items-center gap-0.5"
                      >
                        <span>Demo</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#675B57] hover:text-[#352A27] flex items-center gap-0.5"
                    >
                      <span>Repo</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA Lead-in */}
      <section className="py-20 bg-[#FDFDFD]">
        <Container size="narrow" className="text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkle size={14} variant="coral" />
            <span className="text-xs font-mono tracking-widest text-[#90A9A6] uppercase">
              Recruiter & Engineering Inquiries
            </span>
            <Sparkle size={14} variant="coral" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#352A27]">
            Have an engineering challenge worth building?
          </h2>
          <p className="mt-4 text-base text-[#675B57] max-w-xl mx-auto leading-relaxed">
            I am currently open to software engineering internships, junior developer roles, and high-impact full-stack collaborations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Let&apos;s Connect
            </Button>
            <Button
              href="/GuruTej_Pratap_Resume.pdf"
              download="GuruTej_Pratap_Resume.pdf"
              variant="cv"
              size="lg"
              icon={<Download className="w-4 h-4 text-[#986953]" />}
            >
              Download CV
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
