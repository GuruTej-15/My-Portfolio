import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass, Mail, Download } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Sparkle } from '@/components/ui/Sparkle';
import { DotMatrix } from '@/components/ui/DotMatrix';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-12 left-10 pointer-events-none opacity-40">
        <DotMatrix rows={6} cols={6} />
      </div>
      <div className="absolute bottom-16 right-12 pointer-events-none opacity-50">
        <Sparkle size={32} variant="coral" />
      </div>

      <Container size="narrow">
        <div className="text-center max-w-xl mx-auto space-y-8 relative z-10">
          {/* Engineering Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9F6F5] border border-[#D8E5E3] text-xs font-mono text-[#986953]">
            <span className="w-2 h-2 rounded-full bg-[#B85C50] animate-pulse" />
            <span>ERROR 404 // ROUTE_NOT_RESOLVED</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-[#352A27]">
              Page Not Found
            </h1>
            <p className="text-base text-[#675B57] leading-relaxed">
              The requested resource is not indexed in the Mint Systems hierarchy or has been relocated.
              Explore the verified projects or return to the main dashboard.
            </p>
          </div>

          {/* Action Hub */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/" variant="primary" size="md">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              <span>Return Home</span>
            </Button>
            <Button href="/projects" variant="secondary" size="md">
              <Compass className="w-4 h-4 mr-1.5" />
              <span>Explore Projects</span>
            </Button>
            <a
              href="/GuruTej_Pratap_Resume.pdf"
              download="GuruTej_Pratap_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E9F6F5] text-[#352A27] border border-[#D8E5E3] hover:bg-[#D3E8E6] text-xs font-semibold tracking-wide transition-all"
            >
              <Download className="w-3.5 h-3.5 text-[#986953]" />
              <span>Download CV</span>
            </a>
          </div>

          {/* System Diagnostic Footer */}
          <div className="pt-8 border-t border-[#D8E5E3] flex items-center justify-center gap-4 text-xs font-mono text-[#90A9A6]">
            <span>SYSTEM: ONLINE</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#352A27] transition-colors underline underline-offset-2">
              Report an Issue / Contact
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
