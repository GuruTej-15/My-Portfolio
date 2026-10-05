import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { EditorialHero } from '@/components/hero/EditorialHero';
import { ProofStrip } from '@/components/hero/ProofStrip';
import { FeaturedProjects } from '@/components/projects/FeaturedProjects';
import { EngineeringPreview } from '@/components/hero/EngineeringPreview';
import { CurrentFocus } from '@/components/hero/CurrentFocus';
import { HomeContactCTA } from '@/components/hero/HomeContactCTA';
import { OrganicCircle } from '@/components/ui/OrganicCircle';

export const metadata: Metadata = {
  title: 'GuruTej Pratap — Full-Stack Developer & Systems Builder',
  description:
    'Production portfolio of GuruTej Pratap. Architected RecordHub, OS Locking & Concurrency Simulator, and Unified DevOps Platform. B.Tech CSE @ Lovely Professional University.',
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#FDFDFD]">
      {/* Background Ambient Mint Circles */}
      <OrganicCircle
        size={540}
        className="absolute -top-40 -right-40 opacity-40"
      />
      <OrganicCircle
        size={440}
        className="absolute top-[700px] -left-48 opacity-25"
      />
      <OrganicCircle
        size={500}
        className="absolute top-[1800px] -right-40 opacity-20"
      />

      {/* Hero Section */}
      <section className="relative">
        <Container size="wide">
          <EditorialHero />
          
          {/* Credibility / Proof Strip */}
          <div className="mt-4 sm:mt-8 pb-12 sm:pb-16">
            <ProofStrip />
          </div>
        </Container>
      </section>

      {/* Featured Projects with Visual Hierarchy */}
      <FeaturedProjects />

      {/* Engineering Breadth Preview */}
      <EngineeringPreview />

      {/* Currently Building & Exploring */}
      <CurrentFocus />

      {/* Contact & Recruiter Conversion Lead-in */}
      <HomeContactCTA />
    </div>
  );
}
