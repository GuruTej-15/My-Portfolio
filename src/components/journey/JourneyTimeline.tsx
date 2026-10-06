'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Terminal,
  Users,
  Code2,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Badge, BadgeVariant } from '@/components/ui/Badge';
import { TimelineMilestone } from '@/lib/types';
import clsx from 'clsx';

interface JourneyTimelineProps {
  milestones: TimelineMilestone[];
}

export function JourneyTimeline({ milestones }: JourneyTimelineProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    { label: 'ALL MILESTONES', value: 'ALL' },
    { label: 'PROJECTS', value: 'Project' },
    { label: 'EDUCATION', value: 'Education' },
    { label: 'CERTIFICATIONS', value: 'Certification' },
    { label: 'TRAINING', value: 'Training' },
    { label: 'COMMUNITY & IMPACT', value: 'Community' },
  ];

  const filteredMilestones =
    selectedCategory === 'ALL'
      ? milestones
      : milestones.filter((m) => {
          if (selectedCategory === 'Community') {
            return m.category === 'Community' || m.category === 'Extracurricular';
          }
          return m.category === selectedCategory;
        });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Education':
        return <BookOpen className="w-4 h-4 text-[#986953]" />;
      case 'Project':
        return <Code2 className="w-4 h-4 text-[#2E8B57]" />;
      case 'Certification':
        return <Award className="w-4 h-4 text-[#D49879]" />;
      case 'Training':
        return <Terminal className="w-4 h-4 text-[#352A27]" />;
      case 'Community':
      case 'Extracurricular':
        return <Users className="w-4 h-4 text-[#986953]" />;
      default:
        return <Calendar className="w-4 h-4 text-[#90A9A6]" />;
    }
  };

  const getCategoryBadgeVariant = (category: string): BadgeVariant => {
    switch (category) {
      case 'Project':
        return 'system-live';
      case 'Education':
        return 'coral';
      case 'Certification':
        return 'mint';
      case 'Training':
        return 'teal';
      default:
        return 'default';
    }
  };

  const getProjectLink = (id: string) => {
    switch (id) {
      case 'recordhub-platform':
        return '/projects/recordhub';
      case 'os-simulator-dev':
        return '/projects/os-locking-simulator';
      case 'unified-devops-platform':
        return '/projects/unified-devops';
      case 'dsa-training-bloodbank':
        return '/projects/smart-blood-bank';
      default:
        return null;
    }
  };

  return (
    <div className="space-y-10">
      {/* Category Filter Selector */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#D8E5E3]">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={clsx(
                'px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer',
                isActive
                  ? 'bg-[#352A27] text-[#FFFFFF]'
                  : 'bg-[#F4F9F8] text-[#675B57] hover:bg-[#E9F6F5] hover:text-[#352A27] border border-[#D8E5E3]'
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Editorial Vertical Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-[#D8E5E3] space-y-12 sm:space-y-16">
        {filteredMilestones.map((item) => {
          const projectUrl = getProjectLink(item.id);

          return (
            <div key={item.id} className="relative group">
              {/* Mint Circular Node on Timeline Track */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-[#FFFFFF] border-2 border-[#2E8B57] shadow-xs group-hover:scale-110 transition-transform">
                {getCategoryIcon(item.category)}
              </div>

              {/* Editorial Milestone Block */}
              <div className="space-y-3">
                {/* Period & Category Header */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-mono font-bold text-[#986953] bg-[#E9F6F5] px-2.5 py-0.5 rounded border border-[#D8E5E3]">
                    {item.period}
                  </span>

                  <Badge variant={getCategoryBadgeVariant(item.category)} className="text-[10px]">
                    {item.category === 'Project'
                      ? 'SOFTWARE PROJECT'
                      : item.category === 'Training'
                      ? 'ACADEMIC TRAINING'
                      : item.category.toUpperCase()}
                  </Badge>

                  {item.highlight && (
                    <span className="text-[10px] font-mono text-[#2E8B57] font-semibold">
                      ★ KEY MILESTONE
                    </span>
                  )}
                </div>

                {/* Milestone Title */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-[#352A27] leading-snug">
                  {item.title}
                </h2>

                {/* Institution & Location */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#675B57]">
                  <span className="font-semibold text-[#352A27]">{item.institution}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#90A9A6]" />
                    {item.location}
                  </span>
                </div>

                {/* Narrative Description */}
                <p className="text-sm sm:text-base text-[#675B57] leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                {/* Verified Grade or Outcome Pill */}
                {item.gradeOrOutcome && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#E9F6F5] border border-[#D8E5E3] text-xs font-mono text-[#352A27] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E8B57]" />
                    <span>{item.gradeOrOutcome}</span>
                  </div>
                )}

                {/* Acquired Skills / Tools */}
                {item.skillsAcquired && item.skillsAcquired.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.skillsAcquired.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-[#F4F9F8] text-[#352A27] border border-[#D8E5E3]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Explicit Project / Certificate Cross-Links */}
                {projectUrl && (
                  <div className="pt-2">
                    <Link
                      href={projectUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#2E8B57] hover:underline"
                    >
                      <span>Explore Verified Project Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}

                {item.category === 'Certification' && (
                  <div className="pt-2">
                    <Link
                      href="/certificates"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#986953] hover:underline"
                    >
                      <span>View in Verified Certificate Archive</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
