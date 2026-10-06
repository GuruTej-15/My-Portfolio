import React from 'react';
import type { Metadata } from 'next';
import { Download } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { journeyData } from '@/lib/data/journey-data';
import { JourneyTimeline } from '@/components/journey/JourneyTimeline';
import { PageEndCta } from '@/components/common/PageEndCta';

export const metadata: Metadata = {
  title: 'Journey & Milestones — GuruTej Pratap',
  description:
    'Chronological academic and technical milestones: B.Tech CSE at Lovely Professional University, summer training, hackathons, and software platform developments.',
  openGraph: {
    title: 'Journey & Milestones — GuruTej Pratap',
    description:
      'Chronological academic and technical milestones: B.Tech CSE, systems development, training, and verified achievements.',
  },
};

export default function JourneyPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 text-[#352A27]">
      <Container size="wide">
        {/* Page Header */}
        <section className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2E8B57]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#2E8B57] uppercase">
              JOURNEY // CHRONOLOGICAL MILESTONES
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#352A27] leading-[1.15]">
                Academic & Systems Trajectory
              </h1>
              <p className="mt-4 text-lg sm:text-xl font-mono text-[#675B57] max-w-3xl leading-relaxed">
                A verified chronological record documenting foundational mathematics, undergraduate engineering at Lovely Professional University, competitive hackathons, and software platform developments.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Button
                href="/GuruTej_Pratap_Resume.pdf"
                download="GuruTej_Pratap_Resume.pdf"
                variant="cv"
                size="md"
                icon={<Download className="w-4 h-4 text-[#986953]" />}
              >
                Download Canonical CV
              </Button>
            </div>
          </div>
        </section>

        {/* Vertical Editorial Timeline */}
        <section className="max-w-4xl">
          <JourneyTimeline milestones={journeyData} />
        </section>

        {/* Page End CTA */}
        <PageEndCta
          variant="minimal"
          title="Have something worth building?"
          subtitle="Looking for an engineer who combines theoretical fundamentals with working production systems? Let’s connect."
          primaryButtonText="Contact Me"
          primaryButtonHref="/contact"
        />
      </Container>
    </div>
  );
}
