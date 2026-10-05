import React from 'react';
import clsx from 'clsx';
import { Sparkle } from '../ui/Sparkle';

interface PageHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  tag,
  title,
  description,
  className,
  children,
}: PageHeaderProps) {
  return (
    <div className={clsx('relative pb-8 mb-12 border-b border-[#D8E5E3]', className)}>
      {/* Blueprint Top Marker */}
      <div className="flex items-center gap-2 mb-3">
        {tag && (
          <span className="text-xs font-mono tracking-widest text-[#90A9A6] uppercase">
            // {tag}
          </span>
        )}
        <Sparkle size={10} variant="coral" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-[#352A27]">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-base sm:text-lg text-[#675B57] leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
        {children && <div className="shrink-0">{children}</div>}
      </div>
    </div>
  );
}
