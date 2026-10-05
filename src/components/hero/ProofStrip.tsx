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
    label: 'Featured Engineering Projects',
    detail: 'Full-stack, OS concurrency & cloud-native DevOps',
  },
  {
    metric: '35% Faster',
    label: 'Profile Loading — RecordHub',
    detail: 'Indexed Mongoose schemas & aggregation pipelines',
  },
  {
    metric: '7.42 CGPA',
    label: 'B.Tech CSE @ LPU',
    detail: 'Lovely Professional University (2024 - 2028)',
  },
  {
    metric: 'Oracle & Infosys',
    label: 'Verified Certifications',
    detail: 'Agentic AI, OCI AI & C++ Systems Certified',
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
