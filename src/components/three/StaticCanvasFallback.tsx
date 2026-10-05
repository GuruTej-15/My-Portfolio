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
  highlight?: boolean;
}

const fallbackNodes: NodePoint[] = [
  { id: 'next', name: 'Next.js', x: 50, y: 35, r: 8, highlight: true },
  { id: 'react', name: 'React', x: 25, y: 25, r: 7 },
  { id: 'node', name: 'Node.js', x: 75, y: 28, r: 7 },
  { id: 'mongo', name: 'MongoDB', x: 82, y: 62, r: 6.5 },
  { id: 'cpp', name: 'C/C++', x: 18, y: 65, r: 7 },
  { id: 'devops', name: 'DevOps', x: 38, y: 82, r: 6.5, highlight: true },
  { id: 'corecs', name: 'Core CS', x: 65, y: 78, r: 7 },
  { id: 'github', name: 'Git', x: 50, y: 56, r: 5.5 },
];

const connections: [string, string][] = [
  ['next', 'react'],
  ['next', 'node'],
  ['next', 'github'],
  ['node', 'mongo'],
  ['node', 'devops'],
  ['react', 'cpp'],
  ['cpp', 'devops'],
  ['devops', 'corecs'],
  ['corecs', 'mongo'],
  ['github', 'devops'],
  ['github', 'corecs'],
];

export function StaticCanvasFallback({ className }: StaticCanvasFallbackProps) {
  return (
    <div
      className={clsx(
        'relative w-full h-full min-h-[340px] flex items-center justify-center select-none overflow-hidden rounded-3xl bg-[#E9F6F5]/40 border border-[#D8E5E3]',
        className
      )}
      aria-label="Mint Systems Engineering Network Diagram"
      role="img"
    >
      {/* Background blueprint grid pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-60" />

      {/* Center Ambient Glow */}
      <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-[#D3E8E6] to-[#E9F6F5] blur-2xl opacity-70 pointer-events-none" />

      <svg
        viewBox="0 0 100 100"
        className="w-full h-full max-w-[420px] max-h-[380px] relative z-10 p-4"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connector Lines */}
        <g stroke="#90A9A6" strokeWidth="0.75" strokeDasharray="1.5 1.5" opacity="0.6">
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

        {/* Node Circles */}
        {fallbackNodes.map((node) => (
          <g key={node.id} className="cursor-default">
            {/* Outer Soft Ring */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 2.5}
              fill={node.highlight ? '#D49879' : '#D3E8E6'}
              fillOpacity={node.highlight ? '0.2' : '0.35'}
              className="animate-pulse"
              style={{ animationDuration: `${2.5 + (node.x % 3)}s` }}
            />

            {/* Inner Hub Circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="#FFFFFF"
              stroke={node.highlight ? '#D49879' : '#90A9A6'}
              strokeWidth="1.2"
            />

            {/* Core Pip */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r * 0.35}
              fill={node.highlight ? '#986953' : '#352A27'}
            />

            {/* Label */}
            <text
              x={node.x}
              y={node.y + node.r + 4.5}
              textAnchor="middle"
              className="text-[3.2px] font-mono font-medium fill-[#352A27]"
              style={{ pointerEvents: 'none' }}
            >
              {node.name}
            </text>
          </g>
        ))}
      </svg>

      {/* Blueprint Legend Pill */}
      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFFFFF]/90 border border-[#D8E5E3] text-[10px] font-mono text-[#675B57] shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B57]" />
        <span>MINT SYSTEMS // TOPOLOGY</span>
      </div>

      <div className="absolute top-3 left-3 z-20 flex items-center gap-1 text-[10px] font-mono text-[#90A9A6]">
        <Sparkle size={10} variant="coral" />
        <span>SYSTEM ARCHITECTURE</span>
      </div>
    </div>
  );
}
