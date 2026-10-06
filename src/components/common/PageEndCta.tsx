import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download, Mail, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Sparkle } from '@/components/ui/Sparkle';
import clsx from 'clsx';

interface PageEndCtaProps {
  title?: string;
  subtitle?: string;
  variant?: 'mint-editorial' | 'blueprint' | 'minimal' | 'warm-accent';
  showCv?: boolean;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export function PageEndCta({
  title = 'Have something worth building?',
  subtitle = 'I am actively seeking software engineering roles, full-stack development, and systems internships. Let’s discuss how I can contribute to your engineering goals.',
  variant = 'mint-editorial',
  showCv = true,
  primaryButtonText = 'Contact Me',
  primaryButtonHref = '/contact',
  secondaryButtonText,
  secondaryButtonHref,
  className,
}: PageEndCtaProps) {
  if (variant === 'minimal') {
    return (
      <section className={clsx('mt-16 sm:mt-20 pt-12 border-t border-[#D8E5E3]', className)}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 sm:p-10 rounded-3xl bg-[#F4F9F8] border border-[#D8E5E3]">
          <div>
            <span className="text-xs font-mono text-[#986953] uppercase tracking-wider font-bold block mb-1">
              // NEXT STEP
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#352A27]">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-[#675B57] mt-1.5 max-w-lg leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button
              href={primaryButtonHref}
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {primaryButtonText}
            </Button>
            {showCv && (
              <Button
                href="/GuruTej_Pratap_Resume.pdf"
                download="GuruTej_Pratap_Resume.pdf"
                variant="cv"
                size="md"
                icon={<Download className="w-4 h-4 text-[#986953]" />}
              >
                Download CV
              </Button>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'blueprint') {
    return (
      <section className={clsx('mt-16 sm:mt-20 pt-12 border-t border-[#D8E5E3]', className)}>
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFFFF] border-2 border-[#D8E5E3] relative overflow-hidden">
          {/* Subtle blueprint pattern background */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none hidden md:block">
            <svg width="100%" height="100%">
              <pattern id="blueprint-cta-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2E8B57" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#blueprint-cta-grid)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#2E8B57]" />
              <span className="text-xs font-mono text-[#2E8B57] font-bold uppercase tracking-wider">
                ENGINEERING COLLABORATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#352A27]">
              {title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#675B57] leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mt-8">
              <Button
                href={primaryButtonHref}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {primaryButtonText}
              </Button>
              {showCv && (
                <Button
                  href="/GuruTej_Pratap_Resume.pdf"
                  download="GuruTej_Pratap_Resume.pdf"
                  variant="cv"
                  size="lg"
                  icon={<Download className="w-4 h-4 text-[#986953]" />}
                >
                  Download CV (PDF)
                </Button>
              )}
              {secondaryButtonText && secondaryButtonHref && (
                <Button
                  href={secondaryButtonHref}
                  variant="outline"
                  size="lg"
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'warm-accent') {
    return (
      <section className={clsx('mt-16 sm:mt-20 pt-12 border-t border-[#D8E5E3]', className)}>
        <div className="p-8 sm:p-12 rounded-3xl bg-[#E9F6F5]/50 border-2 border-l-8 border-[#D8E5E3] border-l-[#D49879] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <Sparkle size={12} variant="coral" />
              <span className="text-xs font-mono text-[#986953] font-bold uppercase tracking-wider">
                VERIFIED CREDENTIAL ARCHIVE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#352A27]">
              {title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#675B57] leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button
              href={primaryButtonHref}
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {primaryButtonText}
            </Button>
            {showCv && (
              <Button
                href="/GuruTej_Pratap_Resume.pdf"
                download="GuruTej_Pratap_Resume.pdf"
                variant="cv"
                size="lg"
                icon={<Download className="w-4 h-4 text-[#986953]" />}
              >
                Download CV
              </Button>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Default: 'mint-editorial'
  return (
    <section className={clsx('mt-16 sm:mt-24 pt-12 border-t border-[#D8E5E3]', className)}>
      <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#E9F6F5]/70 border-2 border-[#D8E5E3] text-center max-w-3xl mx-auto shadow-sm">
        <span className="text-xs font-mono text-[#986953] uppercase tracking-widest block mb-2 font-bold">
          // NEXT STEP FOR RECRUITERS
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#352A27]">
          {title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#675B57] leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
          <Button
            href={primaryButtonHref}
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            {primaryButtonText}
          </Button>
          {showCv && (
            <Button
              href="/GuruTej_Pratap_Resume.pdf"
              download="GuruTej_Pratap_Resume.pdf"
              variant="cv"
              size="lg"
              icon={<Download className="w-4 h-4 text-[#986953]" />}
            >
              Download CV (PDF)
            </Button>
          )}
          {secondaryButtonText && secondaryButtonHref && (
            <Button
              href={secondaryButtonHref}
              variant="outline"
              size="lg"
            >
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
