import React from 'react';
import clsx from 'clsx';

interface ProofItem {
  metric: string;
  label: string;
  detail: string;
}

const proofItems: ProofItem[] = [
  {
    metric: '5 Systems',
    label: 'Engineered & Deployed',
    detail: 'Full-stack, OS concurrency & DevOps',
  },
  {
    metric: '-35%',
    label: 'Profile Latency',
    detail: 'Indexed Mongoose aggregation (RecordHub)',
  },
  {
    metric: '7.42 CGPA',
    label: 'B.Tech CSE @ LPU',
    detail: 'Computer Science & Engineering',
  },
  {
    metric: 'Oracle & Infosys',
    label: 'Verified Credentials',
    detail: 'Agentic AI, OCI AI, C++ Certified',
  },
];

interface ProofStripProps {
  className?: string;
}

export function ProofStrip({ className }: ProofStripProps) {
  return (
    <div
      className={clsx(
        'w-full py-6 px-6 sm:px-8 rounded-2xl bg-[#E9F6F5]/60 border border-[#D8E5E3] backdrop-blur-sm',
        className
      )}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#90A9A6]/20">
        {proofItems.map((item, idx) => (
          <div
            key={item.metric}
            className={clsx('flex flex-col gap-1', {
              'pt-4 sm:pt-0 sm:pl-6': idx > 0,
            })}
          >
            <span className="text-xl sm:text-2xl font-bold font-display text-[#352A27]">
              {item.metric}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#352A27]">
              {item.label}
            </span>
            <span className="text-[11px] sm:text-xs text-[#675B57] font-sans">
              {item.detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
