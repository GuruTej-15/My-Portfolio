'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  ExternalLink,
  CheckCircle2,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  FileCode,
  ShieldCheck,
  Eye,
} from 'lucide-react';
import clsx from 'clsx';
import { projectsVisualData } from '@/lib/data/projects-visual-data';

interface ProjectVisualProofProps {
  slug: string;
  liveUrl?: string;
  githubUrl: string;
  className?: string;
}

export function ProjectVisualProof({
  slug,
  liveUrl,
  githubUrl,
  className,
}: ProjectVisualProofProps) {
  const config = projectsVisualData[slug];
  const [activeIdx, setActiveIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const screenshots = config?.screenshots || [];
  const currentScreenshot = screenshots[activeIdx] || screenshots[0];

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowRight') {
        setActiveIdx((prev) => (prev + 1) % screenshots.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
      }
    },
    [isLightboxOpen, screenshots.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!config || screenshots.length === 0) {
    return null;
  }

  return (
    <div
      className={clsx(
        'relative rounded-3xl overflow-hidden border-2 border-[#D8E5E3] bg-[#FFFFFF] shadow-sm',
        className
      )}
    >
      {/* 1. Visual Window Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-[#F4F9F8] border-b border-[#D8E5E3]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E58C7A]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2B755]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2E8B57]/70" />
          </div>
          <span className="text-xs font-mono text-[#675B57] flex items-center gap-1.5 font-medium">
            <FileCode className="w-3.5 h-3.5 text-[#2E8B57]" />
            <span>{config.windowTitle}</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-[#90A9A6] hidden sm:inline">
            {config.environmentBadge}
          </span>

          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-[#D8E5E3] text-xs font-mono text-[#352A27] hover:border-[#2E8B57] hover:text-[#2E8B57] transition-colors"
            title="Expand Fullscreen (Esc to exit)"
            aria-label="Expand image to fullscreen lightbox"
          >
            <Maximize2 className="w-3 h-3 text-[#2E8B57]" />
            <span className="hidden min-[420px]:inline">Expand View</span>
          </button>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#2E8B57]/10 text-[#2E8B57] text-xs font-mono font-bold hover:bg-[#2E8B57]/20 transition-colors"
            >
              <span>Live System</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* 2. Main Stage: Primary Active Screenshot Display */}
      <div className="p-4 sm:p-6 lg:p-8 bg-[#FDFDFD]">
        <div
          className="relative rounded-2xl overflow-hidden border border-[#D8E5E3] bg-[#0E1520] group cursor-pointer shadow-inner"
          onClick={() => setIsLightboxOpen(true)}
        >
          {/* Main Visual Image */}
          <div className="relative w-full aspect-[16/9] max-h-[720px] overflow-hidden">
            <Image
              src={currentScreenshot.imageSrc}
              alt={currentScreenshot.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority={activeIdx === 0}
              className="object-contain object-top transition-transform duration-300 group-hover:scale-[1.01]"
            />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-[#352A27]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/95 text-xs font-mono font-bold text-[#352A27] shadow-md border border-[#D8E5E3]">
                <Eye className="w-3.5 h-3.5 text-[#2E8B57]" />
                <span>Click to Inspect High-Resolution</span>
              </span>
            </div>
          </div>

          {/* Screenshot Category Badge Pill */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#D8E5E3] text-[10px] font-mono font-bold text-[#2E8B57] tracking-wider uppercase shadow-xs">
              {currentScreenshot.badge}
            </span>
          </div>
        </div>

        {/* Caption & Technical Invariant Banner */}
        <div className="mt-4 p-4 rounded-xl bg-[#F4F9F8] border border-[#D8E5E3]">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
            <h3 className="text-sm sm:text-base font-display font-bold text-[#352A27]">
              {currentScreenshot.title}
            </h3>
            <span className="text-[11px] font-mono text-[#90A9A6]">
              FIGURE 0{activeIdx + 1} OF 0{screenshots.length}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#675B57] leading-relaxed">
            {currentScreenshot.caption}
          </p>
        </div>

        {/* 3. Secondary Screenshots Switcher Strip (2–4 authentic views) */}
        {screenshots.length > 1 && (
          <div className="mt-5 pt-4 border-t border-[#D8E5E3]/80">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#90A9A6] font-bold block mb-3">
              SELECTABLE SYSTEM VIEWS // {screenshots.length} AUTHENTIC CAPTURES
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {screenshots.map((s, idx) => {
                const isSelected = idx === activeIdx;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={clsx(
                      'p-2 rounded-xl border text-left transition-all flex flex-col justify-between group focus:outline-hidden focus:ring-2 focus:ring-[#2E8B57]/50',
                      isSelected
                        ? 'border-[#2E8B57] bg-[#E9F6F5]/60 shadow-xs'
                        : 'border-[#D8E5E3] bg-[#FFFFFF] hover:border-[#90A9A6] hover:bg-[#F4F9F8]'
                    )}
                  >
                    {/* Thumbnail Preview */}
                    <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-[#D8E5E3] bg-[#0E1520] mb-2">
                      <Image
                        src={s.imageSrc}
                        alt={s.title}
                        fill
                        sizes="240px"
                        className="object-contain object-top"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 border-2 border-[#2E8B57] rounded-lg pointer-events-none" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span
                          className={clsx(
                            'text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border',
                            isSelected
                              ? 'bg-[#2E8B57] text-[#FFFFFF] border-[#2E8B57]'
                              : 'bg-[#F4F9F8] text-[#675B57] border-[#D8E5E3]'
                          )}
                        >
                          {s.badge}
                        </span>
                        <span className="text-[9px] font-mono text-[#90A9A6]">
                          0{idx + 1}
                        </span>
                      </div>
                      <span
                        className={clsx(
                          'text-xs font-display font-bold line-clamp-1 block',
                          isSelected ? 'text-[#2E8B57]' : 'text-[#352A27] group-hover:text-[#2E8B57]'
                        )}
                      >
                        {s.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 4. Bottom Proof Tag & Integrity Guarantee */}
      <div className="px-6 py-3.5 bg-[#F4F9F8] border-t border-[#D8E5E3] flex flex-wrap items-center justify-between text-xs font-mono text-[#675B57] gap-2">
        <span className="flex items-center gap-1.5 text-[#2E8B57] font-medium">
          <CheckCircle2 className="w-4 h-4 text-[#2E8B57]" />
          <span>Authentic Application UI • Unmodified runtime state with verified privacy redaction</span>
        </span>
        <div className="flex items-center gap-4 text-[#90A9A6]">
          <span>{slug.toUpperCase()} // PROOF ARCHIVE</span>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#352A27] hover:text-[#2E8B57] underline underline-offset-2 transition-colors"
            >
              Inspect Code
            </a>
          )}
        </div>
      </div>

      {/* 5. Accessible Full-Screen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${currentScreenshot.title} — Full Screen Inspection`}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#352A27]/90 backdrop-blur-md p-3 sm:p-6 select-none animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Top Header */}
          <div
            className="flex items-center justify-between gap-3 text-white pb-3 border-b border-[#FFFFFF]/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-[#2E8B57] text-[#FFFFFF] text-[10px] font-mono font-bold uppercase tracking-wider">
                {currentScreenshot.badge}
              </span>
              <h4 className="text-sm sm:text-base font-display font-bold text-white truncate max-w-md sm:max-w-xl">
                {currentScreenshot.title}
              </h4>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#D8E5E3] hidden sm:inline">
                {activeIdx + 1} / {screenshots.length} (Use ← / → keys)
              </span>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-lg bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/25 text-white transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2E8B57]"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Body with Prev/Next Controls */}
          <div
            className="relative flex-1 flex items-center justify-center my-3 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            {screenshots.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setActiveIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length)
                }
                className="absolute left-2 sm:left-4 z-20 p-2.5 rounded-full bg-[#FFFFFF]/15 hover:bg-[#FFFFFF]/30 text-white backdrop-blur-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-[#2E8B57]"
                aria-label="Previous Screenshot"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* High-Resolution Modal Image */}
            <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
              <Image
                src={currentScreenshot.imageSrc}
                alt={currentScreenshot.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Next Button */}
            {screenshots.length > 1 && (
              <button
                type="button"
                onClick={() => setActiveIdx((prev) => (prev + 1) % screenshots.length)}
                className="absolute right-2 sm:right-4 z-20 p-2.5 rounded-full bg-[#FFFFFF]/15 hover:bg-[#FFFFFF]/30 text-white backdrop-blur-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-[#2E8B57]"
                aria-label="Next Screenshot"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Lightbox Bottom Caption */}
          <div
            className="bg-[#241C1A]/95 p-3 sm:p-4 rounded-xl border border-[#FFFFFF]/10 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs sm:text-sm text-[#D8E5E3] max-w-4xl mx-auto leading-relaxed">
              {currentScreenshot.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
