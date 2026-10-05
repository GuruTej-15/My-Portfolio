import React from 'react';
import clsx from 'clsx';

interface ProofItem {
  metric: string;
  label: string;
  context: string;
}

const proofItems: ProofItem[] = [
  {
    metric: '5',
    label: 'Featured Systems',
    context: 'Engineering Portfolio',
  },
  {
    metric: '35%',
    label: 'Faster Profile Loading',
    context: 'RecordHub',
  },
  {
    metric: '7.42',
    label: 'CGPA — B.Tech CSE',
    context: 'Lovely Professional University',
  },
  {
    metric: 'Verified',
    label: 'Certifications',
    context: 'Oracle, Infosys, WNS & Tech Veda',
  },
];

interface ProofStripProps {
  className?: string;
}

export function ProofStrip({ className }: ProofStripProps) {
  return (
    <div
      className={clsx(
        'w-full py-6 px-6 sm:px-8 rounded-2xl bg-[#E9F6F5]/70 border border-[#D8E5E3] backdrop-blur-sm shadow-xs',
        className
      )}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#90A9A6]/20">
        {proofItems.map((item, idx) => (
          <div
            key={item.label}
            className={clsx('flex flex-col gap-1', {
              'pt-4 sm:pt-0 sm:pl-6': idx > 0,
            })}
          >
            <span className="text-2xl sm:text-3xl font-bold font-display text-[#352A27]">
              {item.metric}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#352A27]">
              {item.label}
            </span>
            <span className="text-[11px] sm:text-xs text-[#675B57] font-sans">
              {item.context}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
