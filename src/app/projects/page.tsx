import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { projectsData } from '@/lib/data/projects-data';
import { ProjectsDirectory } from '@/components/projects/ProjectsDirectory';

export const metadata: Metadata = {
  title: 'Engineering Projects & Case Studies',
  description:
    'Verified engineering case studies by GuruTej Pratap: RecordHub, OS Locking Simulator, Smart Blood Bank, Smart Flashcard Engine, and Unified DevOps Platform.',
};

export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container size="wide">
        <PageHeader
          tag="Engineering Portfolio"
          title="Projects & Systems Index"
          description="Selected systems, experiments, and cloud-native platforms built with measurable performance outcomes and verified code repositories."
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button
              href="/GuruTej_Pratap_Resume.pdf"
              download="GuruTej_Pratap_Resume.pdf"
              variant="cv"
              size="md"
              icon={<Download className="w-4 h-4 text-[#986953]" />}
            >
              Download Verified CV
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Get in Touch
            </Button>
          </div>
        </PageHeader>

        {/* Dynamic Filterable Directory with Asymmetric Editorial Hierarchy */}
        <div className="mt-8">
          <ProjectsDirectory projects={projectsData} />
        </div>

        {/* Bottom Recruiter Proof & Action Callout */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-[#E9F6F5]/60 border border-[#D8E5E3] text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-[#90A9A6] uppercase tracking-widest block mb-2">
            // RECRUITER USABILITY GUARANTEE
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#352A27]">
            Looking for architectural depth or source code verification?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#675B57] leading-relaxed max-w-2xl mx-auto">
            Every listed project is backed by verified GitHub commits, reproducible local builds, and documented technical trade-offs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Button
              href="/GuruTej_Pratap_Resume.pdf"
              download="GuruTej_Pratap_Resume.pdf"
              variant="cv"
              size="lg"
              icon={<Download className="w-4 h-4 text-[#986953]" />}
            >
              Download Full Resume (PDF)
            </Button>
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Initiate Conversation
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
