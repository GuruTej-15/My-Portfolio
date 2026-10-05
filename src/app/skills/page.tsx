import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, ArrowRight, Layers } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { skillsData } from '@/lib/data/skills-data';

export const metadata: Metadata = {
  title: 'Skills & Tech Stack',
  description: 'Technical competencies, system engineering skills, and architectural tools verified across GuruTej Pratap’s projects.',
};

export default function SkillsPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container size="wide">
        <PageHeader
          tag="Technical Competence"
          title="Skills & Engineering Arsenal"
          description="Technologies, frameworks, and foundational computer science principles applied directly to production applications and systems projects."
        >
          <Button
            href="/GuruTej_Pratap_Resume.pdf"
            download="GuruTej_Pratap_Resume.pdf"
            variant="cv"
            size="md"
            icon={<Download className="w-4 h-4 text-[#986953]" />}
          >
            Download Tech CV
          </Button>
        </PageHeader>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#90A9A6]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-[#986953]" />
                  <h2 className="text-xl font-display font-bold text-[#352A27]">
                    {category.title}
                  </h2>
                </div>
                <p className="text-xs text-[#675B57] leading-relaxed mb-6">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E9F6F5]/60 hover:bg-[#D3E8E6] border border-[#D8E5E3] transition-colors"
                    >
                      <span className="text-xs font-mono text-[#352A27]">
                        {skill.name}
                      </span>
                      {skill.usedInProjects && skill.usedInProjects.length > 0 && (
                        <div className="flex items-center gap-1 ml-1">
                          {skill.usedInProjects.map((pSlug) => (
                            <Link
                              key={pSlug}
                              href={`/projects/${pSlug}`}
                              title={`Used in ${pSlug}`}
                              className="text-[9px] font-mono px-1 py-0.2 rounded bg-[#FFFFFF] border border-[#90A9A6]/40 text-[#675B57] hover:text-[#352A27] uppercase"
                            >
                              {pSlug === 'os-locking-simulator'
                                ? 'OS'
                                : pSlug === 'smart-blood-bank'
                                ? 'Blood'
                                : pSlug === 'unified-devops'
                                ? 'DevOps'
                                : pSlug === 'flashcard-engine'
                                ? 'PWA'
                                : 'Hub'}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend Callout */}
        <div className="mt-12 p-4 rounded-xl bg-[#E9F6F5]/40 border border-[#D8E5E3] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#675B57]">
          <span>// KEY: Interactive badges link directly to the verified case study where each technology is utilized.</span>
          <Link href="/projects" className="text-[#352A27] font-semibold hover:underline flex items-center gap-1">
            <span>Explore All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
