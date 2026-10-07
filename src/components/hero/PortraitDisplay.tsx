import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { DotMatrix } from '../ui/DotMatrix';
import { Sparkle } from '../ui/Sparkle';

interface PortraitDisplayProps {
  className?: string;
  priority?: boolean;
  size?: 'hero' | 'about' | 'compact';
}

export function PortraitDisplay({
  className,
  priority = true,
  size = 'hero',
}: PortraitDisplayProps) {
  const containerSizes = {
    hero: 'w-[280px] min-[360px]:w-[300px] min-[400px]:w-[340px] sm:w-[380px] md:w-[420px] lg:w-[460px] aspect-[4/5]',
    about: 'w-[260px] min-[360px]:w-[290px] min-[400px]:w-[320px] sm:w-[360px] md:w-[400px] aspect-[4/5]',
    compact: 'w-[220px] sm:w-[280px] aspect-[4/5]',
  };

  return (
    <div className={clsx('relative group select-none', className)}>
      {/* Decorative Blueprint Corner Markers */}
      <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#90A9A6]/50 pointer-events-none z-20" />
      <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#90A9A6]/50 pointer-events-none z-20" />
      
      {/* Ambient Soft Mint Backing Shape */}
      <div className="absolute inset-0 bg-[#E9F6F5] rounded-3xl -rotate-1 scale-[1.02] border border-[#D8E5E3] transition-transform duration-300 group-hover:rotate-0" />
      
      {/* Secondary Soft Mint Offset Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D3E8E6]/60 to-[#E9F6F5]/40 rounded-3xl rotate-1 scale-[1.01] pointer-events-none" />

      {/* Main Image Container */}
      <div
        className={clsx(
          'relative z-10 overflow-hidden rounded-3xl bg-[#FDFDFD] border border-[#D8E5E3] shadow-md shadow-[#90A9A6]/10',
          containerSizes[size]
        )}
      >
        <picture>
          <source srcSet="/images/portrait.webp" type="image/webp" />
          <Image
            src="/images/portrait.png"
            alt="GuruTej Pratap — Full-Stack Developer & Systems Builder"
            fill
            sizes="(max-width: 640px) 320px, (max-width: 768px) 380px, (max-width: 1024px) 420px, 460px"
            priority={priority}
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </picture>

        {/* Subtle Bottom Vignette to ground text */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#352A27]/20 to-transparent pointer-events-none" />

        {/* Technical Coordinate Tag */}
        <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FDFDFD]/90 backdrop-blur-sm border border-[#D8E5E3] text-[10px] font-mono tracking-wider text-[#352A27]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B57]" />
          <span>GURU TEJ PRATAP // DEV</span>
        </div>
      </div>

      {/* Floating Graphic Accents */}
      <DotMatrix
        rows={4}
        cols={4}
        className="absolute -bottom-5 -left-5 z-20 hidden sm:block opacity-80"
      />
      <Sparkle
        size={20}
        variant="coral"
        className="absolute -top-4 -right-4 z-20 animate-pulse hidden sm:block"
      />
    </div>
  );
}
