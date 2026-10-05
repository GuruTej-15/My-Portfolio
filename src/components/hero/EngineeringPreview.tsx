import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, Terminal, Database, Cloud, Cpu } from 'lucide-react';
import { Sparkle } from '../ui/Sparkle';

interface EngineeringDomain {
  icon: React.ReactNode;
  title: string;
  technologies: { name: string; project?: string }[];
}

const engineeringDomains: EngineeringDomain[] = [
  {
    icon: <Layers className="w-4 h-4 text-[#986953]" />,
    title: 'Frontend Engineering',
    technologies: [
      { name: 'Next.js 16 (App Router)', project: 'RecordHub' },
      { name: 'React 19', project: 'RecordHub' },
      { name: 'Tailwind CSS', project: 'RecordHub' },
      { name: 'PWA / Service Workers', project: 'Flashcards' },
    ],
  },
  {
    icon: <Terminal className="w-4 h-4 text-[#2A7B88]" />,
    title: 'Backend & Systems',
    technologies: [
      { name: 'Node.js & Express', project: 'RecordHub' },
      { name: 'REST APIs & JWT RBAC', project: 'Blood Bank' },
      { name: 'Redis & BullMQ Queues', project: 'DevOps' },
      { name: 'Socket.io Realtime', project: 'DevOps' },
    ],
  },
  {
    icon: <Database className="w-4 h-4 text-[#352A27]" />,
    title: 'Databases & In-Memory',
    technologies: [
      { name: 'MongoDB & Mongoose', project: 'RecordHub' },
      { name: 'Aggregation Pipelines', project: 'RecordHub' },
      { name: 'MySQL Relational', project: 'Core' },
      { name: 'Redis Key-Value Cache', project: 'DevOps' },
    ],
  },
  {
    icon: <Cloud className="w-4 h-4 text-[#2E8B57]" />,
    title: 'Cloud & DevOps',
    technologies: [
      { name: 'Docker Containerization', project: 'DevOps' },
      { name: 'Kubernetes & Argo CD', project: 'DevOps' },
      { name: 'Trivy Security Scanning', project: 'DevOps' },
      { name: 'GitHub Actions CI/CD', project: 'DevOps' },
    ],
  },
  {
    icon: <Cpu className="w-4 h-4 text-[#D49879]" />,
    title: 'Systems & Core CS',
    technologies: [
      { name: 'C Systems Programming', project: 'OS Sim' },
      { name: 'Readers-Writer Locks', project: 'OS Sim' },
      { name: 'DFS Deadlock Graph Cycle', project: 'OS Sim' },
      { name: 'Binary Heaps O(log n)', project: 'Blood Bank' },
    ],
  },
];

export function EngineeringPreview() {
  return (
    <section className="py-16 sm:py-20 bg-[#FDFDFD] border-t border-[#D8E5E3] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#90A9A6] tracking-widest uppercase mb-1">
              <span>Stack Breadth & Computer Science Rigor</span>
              <Sparkle size={10} variant="coral" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#352A27]">
              Engineering Architecture
            </h2>
          </div>

          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#352A27] hover:text-[#986953] transition-colors group"
          >
            <span>Explore Engineering Arsenal</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 5-Domain Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {engineeringDomains.map((domain) => (
            <div
              key={domain.title}
              className="p-6 rounded-2xl bg-[#E9F6F5]/40 border border-[#D8E5E3] hover:border-[#90A9A6] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-[#FFFFFF] border border-[#D8E5E3]">
                    {domain.icon}
                  </div>
                  <h3 className="font-display font-bold text-sm text-[#352A27]">
                    {domain.title}
                  </h3>
                </div>

                <div className="space-y-2 mt-4">
                  {domain.technologies.map((t) => (
                    <div
                      key={t.name}
                      className="p-2 rounded-lg bg-[#FFFFFF] border border-[#D8E5E3]/80 text-xs flex flex-col"
                    >
                      <span className="font-mono text-[#352A27] font-medium text-[11px]">
                        {t.name}
                      </span>
                      {t.project && (
                        <span className="text-[10px] font-mono text-[#90A9A6] mt-0.5">
                          ↳ {t.project}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#D8E5E3]/60">
                <span className="text-[10px] font-mono text-[#8E827E] uppercase block">
                  NO ARBITRARY PERCENTAGES
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
