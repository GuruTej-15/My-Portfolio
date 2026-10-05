import React from 'react';
import type { Metadata } from 'next';
import { Calendar, MapPin, Award, BookOpen, Users, Terminal } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { Badge } from '@/components/ui/Badge';
import { journeyData } from '@/lib/data/journey-data';

export const metadata: Metadata = {
  title: 'Journey',
  description: 'Chronological academic, technical, and engineering trajectory of GuruTej Pratap from secondary education to B.Tech CSE at Lovely Professional University.',
};

export default function JourneyPage() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Education':
        return <BookOpen className="w-4 h-4 text-[#352A27]" />;
      case 'Achievement':
        return <Award className="w-4 h-4 text-[#D49879]" />;
      case 'Training':
        return <Terminal className="w-4 h-4 text-[#2A7B88]" />;
      case 'Community':
        return <Users className="w-4 h-4 text-[#986953]" />;
      default:
        return <Calendar className="w-4 h-4 text-[#90A9A6]" />;
    }
  };

  return (
    <div className="py-12 sm:py-16">
      <Container size="wide">
        <PageHeader
          tag="Engineering Trajectory"
          title="My Journey & Milestones"
          description="A chronological timeline documenting academic milestones, systems engineering training, competitive hackathons, and certifications with verified dates."
        />

        {/* Timeline Container */}
        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Vertical Blueprint Track */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-[#D49879] via-[#90A9A6]/40 to-[#D8E5E3] -translate-x-1/2 hidden sm:block" />

          <div className="space-y-10 sm:space-y-12">
            {journeyData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge on Track */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-[#FDFDFD] border-2 border-[#90A9A6] z-10 shadow-sm">
                    {getCategoryIcon(item.category)}
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full sm:w-[calc(50%-2rem)] p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border ${
                      item.highlight ? 'border-[#90A9A6] shadow-sm' : 'border-[#D8E5E3]'
                    }`}
                  >
                    {/* Period & Category Header */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-[#986953]">
                        {item.period}
                      </span>
                      <Badge variant="mint" className="text-[10px]">
                        {item.category}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-display font-bold text-[#352A27]">
                      {item.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#8E827E] mt-1 mb-3">
                      <span className="font-semibold text-[#675B57]">{item.institution}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#90A9A6]" />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#675B57] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.gradeOrOutcome && (
                      <div className="p-2.5 rounded-lg bg-[#E9F6F5] border border-[#D8E5E3] text-xs font-mono text-[#352A27] font-semibold mb-3">
                        ✓ {item.gradeOrOutcome}
                      </div>
                    )}

                    {/* Acquired Skills */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#D8E5E3]/60">
                      {item.skillsAcquired.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#E9F6F5]/50 text-[#675B57] border border-[#D8E5E3]/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
