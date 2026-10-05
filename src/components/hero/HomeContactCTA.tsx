import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { Sparkle } from '../ui/Sparkle';
import { DotMatrix } from '../ui/DotMatrix';
import { siteConfig } from '@/lib/data/site-config';

export function HomeContactCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#FDFDFD] relative overflow-hidden border-t border-[#D8E5E3]">
      {/* Decorative Accents */}
      <div className="absolute top-8 left-12 pointer-events-none opacity-40 hidden sm:block">
        <DotMatrix rows={5} cols={5} />
      </div>
      <div className="absolute bottom-8 right-12 pointer-events-none opacity-40 hidden sm:block">
        <DotMatrix rows={5} cols={5} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#E9F6F5] border border-[#D8E5E3] text-xs font-mono text-[#352A27]">
          <Sparkle size={10} variant="coral" />
          <span>RECRUITER & TEAM INQUIRIES</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#352A27] tracking-tight leading-tight">
          Have something <br />
          <span className="text-[#352A27] relative inline-block">
            worth building?
            <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-3 bg-[#D3E8E6] -z-10 -rotate-1 rounded-sm" />
          </span>
        </h2>

        <p className="mt-5 text-base sm:text-lg text-[#675B57] max-w-xl mx-auto leading-relaxed">
          I am actively seeking software engineering internships, junior developer roles, and high-impact systems projects. Let&apos;s connect directly.
        </p>

        {/* Conversion CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Contact Me
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
        </div>

        {/* Direct Email fallback */}
        <div className="mt-8 text-xs font-mono text-[#8E827E]">
          Or email directly at{' '}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-[#352A27] font-semibold underline underline-offset-4 hover:text-[#986953]"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
