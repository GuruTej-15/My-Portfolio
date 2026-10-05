import React from 'react';
import { Activity, Sparkles, Server, GitFork } from 'lucide-react';
import { Sparkle } from '../ui/Sparkle';

interface FocusItem {
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
}

const focusItems: FocusItem[] = [
  {
    icon: <Server className="w-4 h-4 text-[#2E8B57]" />,
    tag: 'DEVOPS & CLOUD-NATIVE',
    title: 'Kubernetes Cluster Observation & Overlay Governance',
    description: 'Operating non-intrusive cluster observation for Kubernetes and Argo CD, ingesting HMAC-SHA256 GitHub webhooks into durable Redis/BullMQ worker queues with Trivy vulnerability scanning.',
  },
  {
    icon: <Activity className="w-4 h-4 text-[#986953]" />,
    tag: 'FULL-STACK PERFORMANCE',
    title: 'Next.js 16 App Router & Data Pipeline Optimization',
    description: 'Refining responsive MongoDB data aggregation pipelines and query indexing in RecordHub to sustain 35% faster user profile loading under multi-metric retrieval.',
  },
  {
    icon: <Sparkles className="w-4 h-4 text-[#D49879]" />,
    tag: 'AGENTIC ARCHITECTURES',
    title: 'Oracle Certified Agentic AI Foundations',
    description: 'Studying autonomous AI agent workflows, deterministic tool invocation protocols, and OCI foundation model patterns as certified by Oracle Cloud Infrastructure.',
  },
];

export function CurrentFocus() {
  return (
    <section className="py-14 sm:py-18 bg-[#E9F6F5]/30 border-t border-[#D8E5E3]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-mono text-[#90A9A6] tracking-widest uppercase mb-2">
          <Sparkle size={10} variant="coral" />
          <span>Active Technical Trajectory</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#352A27] mb-8">
          Currently Building & Exploring
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focusItems.map((item) => (
            <div
              key={item.title}
              className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#90A9A6] transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-[#E9F6F5] border border-[#D8E5E3]">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-[#90A9A6] font-semibold">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-[#352A27] leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#675B57] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-[#D8E5E3]/60 flex items-center gap-2 text-[11px] font-mono text-[#2E8B57]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B57]" />
                <span>IN ACTIVE EXPLORATION</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
