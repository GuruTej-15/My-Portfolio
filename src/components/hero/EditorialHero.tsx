import React from 'react';
import { ArrowRight, Download, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { PortraitDisplay } from './PortraitDisplay';
import { SystemStatusBadge } from './SystemStatusBadge';
import { HeroCanvasWrapper } from '../three/HeroCanvasWrapper';
import { Sparkle } from '../ui/Sparkle';
import { DotMatrix } from '../ui/DotMatrix';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { siteConfig } from '@/lib/data/site-config';

export function EditorialHero() {
  return (
    <div className="relative pt-6 sm:pt-12 pb-12 lg:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Editorial Positioning & Recruiter CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-6 relative z-10">
          {/* Eyebrow / Availability Status */}
          <div className="flex flex-wrap items-center gap-3">
            <SystemStatusBadge status="AVAILABLE FOR ROLES & INTERNSHIPS" />
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-[#90A9A6]">
              <Sparkle size={10} variant="coral" />
              <span>LPU B.TECH CSE</span>
            </span>
          </div>

          {/* Editorial Headline */}
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono tracking-widest text-[#90A9A6] uppercase block">
              Full-Stack & Systems Engineering
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#352A27] leading-[1.06]">
              Building Digital <br />
              <span className="text-[#352A27] relative inline-block">
                Systems
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-3.5 bg-[#D3E8E6] -z-10 -rotate-1 rounded-sm" />
              </span>{' '}
              with Rigor.
            </h1>
          </div>

          {/* Positioning & Plain-Language Explanation */}
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-lg sm:text-xl font-display font-bold text-[#352A27]">
              Full-Stack Developer & Systems Builder
            </h2>
            <p className="text-base sm:text-lg text-[#675B57] leading-relaxed">
              I am <strong className="text-[#352A27] font-semibold">{siteConfig.name}</strong>, a Computer Science student at Lovely Professional University. I architect resilient web applications, concurrency simulators, and cloud-native infrastructure platforms that bridge algorithmic depth with clean UX.
            </p>
          </div>

          {/* Recruiter Primary CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Button
              href="/projects"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore My Work
            </Button>

            {/* Canonical Native CV Download */}
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

          {/* Secondary Verification Quick-Links */}
          <div className="flex flex-wrap items-center gap-6 pt-3 text-xs font-mono text-[#675B57]">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#352A27] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-3 h-3 text-[#90A9A6]" />
            </a>

            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#352A27] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3 h-3 text-[#90A9A6]" />
            </a>

            <span className="hidden md:inline text-[#90A9A6]">
              // 7.42 CGPA • Etawah / Punjab
            </span>
          </div>
        </div>

        {/* Right Column: Editorial Portrait + 3D Node Mesh Integration */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative">
          <div className="relative w-full max-w-[460px]">
            {/* Visual Portrait Component */}
            <div className="relative z-10 flex justify-center lg:justify-end">
              <PortraitDisplay size="hero" priority={true} />
            </div>

            {/* Embedded 3D Node Network Preview Card below portrait */}
            <div className="mt-6 relative z-10 w-full rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] p-4 shadow-sm hover:border-[#90A9A6] transition-all">
              <div className="flex items-center justify-between gap-2 mb-2 px-1">
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#352A27]">
                  <span className="w-2 h-2 rounded-full bg-[#2E8B57] animate-pulse" />
                  <span>3D STACK TOPOLOGY</span>
                </div>
                <span className="text-[10px] font-mono text-[#90A9A6]">
                  INTERACTIVE
                </span>
              </div>
              <div className="h-[220px] w-full rounded-xl overflow-hidden bg-[#E9F6F5]/40 border border-[#D8E5E3]/80">
                <HeroCanvasWrapper className="w-full h-full" />
              </div>
            </div>

            {/* Background Decorative Motifs */}
            <DotMatrix
              rows={5}
              cols={5}
              className="absolute -top-6 -left-8 pointer-events-none opacity-40 z-0 hidden sm:block"
            />
            <Sparkle
              size={24}
              variant="coral"
              className="absolute -bottom-4 -left-4 pointer-events-none z-20 animate-pulse hidden sm:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
