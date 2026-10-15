import React from 'react';
import clsx from 'clsx';
import { Sparkle } from '../ui/Sparkle';

interface StaticCanvasFallbackProps {
  className?: string;
}

interface NodePoint {
  id: string;
  name: string;
  x: number;
  y: number;
  r: number;
  labelY: number;
  highlight?: boolean;
}

const fallbackNodes: NodePoint[] = [
  { id: 'next', name: 'Next.js 16', x: 50, y: 16, r: 5.2, labelY: 8.5, highlight: true },
  { id: 'react', name: 'React 19', x: 18, y: 20, r: 4.6, labelY: 12.5 },
  { id: 'node', name: 'Node.js', x: 82, y: 20, r: 4.6, labelY: 12.5 },
  { id: 'git', name: 'Git & CI/CD', x: 50, y: 36, r: 4.6, labelY: 43.5 },
  { id: 'cpp', name: 'C / C++', x: 15, y: 42, r: 4.6, labelY: 49.5 },
  { id: 'mongo', name: 'MongoDB', x: 85, y: 42, r: 4.6, labelY: 49.5 },
  { id: 'corecs', name: 'POSIX / OS', x: 31, y: 57, r: 4.4, labelY: 64.5 },
  { id: 'devops', name: 'Kubernetes', x: 69, y: 57, r: 4.6, labelY: 64.5, highlight: true },
];

const connections: [string, string][] = [
  ['next', 'react'],
  ['next', 'node'],
  ['next', 'git'],
  ['react', 'cpp'],
  ['node', 'mongo'],
  ['git', 'devops'],
  ['git', 'cpp'],
  ['cpp', 'corecs'],
  ['corecs', 'devops'],
  ['node', 'devops'],
  ['mongo', 'devops'],
];

export function StaticCanvasFallback({ className }: StaticCanvasFallbackProps) {
  return (
    <div
      className={clsx(
        'relative w-full h-full flex items-center justify-center select-none overflow-hidden rounded-xl bg-[#F4F9F8]',
        className
      )}
      aria-label="Mint Systems Engineering Topology Diagram"
      role="img"
    >
      {/* Background blueprint grid pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      {/* Center Ambient Glow */}
      <div className="absolute w-48 h-48 rounded-full bg-gradient-to-tr from-[#D3E8E6] to-[#E9F6F5] blur-2xl opacity-60 pointer-events-none" />

      <svg
        viewBox="0 0 100 70"
        className="w-full h-full relative z-10 px-2 py-1"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connector Lines */}
        <g stroke="#90A9A6" strokeWidth="0.65" strokeDasharray="1.2 1.2" opacity="0.55">
          {connections.map(([fromId, toId]) => {
            const from = fallbackNodes.find((n) => n.id === fromId);
            const to = fallbackNodes.find((n) => n.id === toId);
            if (!from || !to) return null;
            return (
              <line
                key={`${fromId}-${toId}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
              />
            );
          })}
        </g>

        {/* Node Circles & Labels */}
        {fallbackNodes.map((node) => (
          <g key={node.id} className="cursor-default">
            {/* Outer Soft Ring */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 2.0}
              fill={node.highlight ? '#D49879' : '#D3E8E6'}
              fillOpacity={node.highlight ? '0.2' : '0.35'}
              className="animate-pulse"
              style={{ animationDuration: `${2.8 + (node.x % 3)}s` }}
            />

            {/* Inner Hub Circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="#FFFFFF"
              stroke={node.highlight ? '#D49879' : '#90A9A6'}
              strokeWidth="0.9"
            />

            {/* Core Pip */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r * 0.4}
              fill={node.highlight ? '#986953' : node.id === 'next' ? '#2E8B57' : '#352A27'}
            />

            {/* Label with white outline pill effect */}
            <text
              x={node.x}
              y={node.labelY}
              textAnchor="middle"
              className="text-[2.6px] font-mono font-bold fill-[#352A27]"
              paintOrder="stroke"
              stroke="#FDFDFD"
              strokeWidth="0.6"
              strokeLinejoin="round"
              style={{ pointerEvents: 'none' }}
            >
              {node.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
