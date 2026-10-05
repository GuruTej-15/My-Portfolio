'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { StaticCanvasFallback } from './StaticCanvasFallback';

// Dynamic import with ssr: false so Three.js never touches SSR
const MintNodeNetwork = dynamic(() => import('./MintNodeNetwork'), {
  ssr: false,
  loading: () => <StaticCanvasFallback />,
});

interface HeroCanvasWrapperProps {
  className?: string;
}

export function HeroCanvasWrapper({ className }: HeroCanvasWrapperProps) {
  const [shouldRender3D, setShouldRender3D] = useState<boolean | null>(null);

  useEffect(() => {
    // 1. Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setShouldRender3D(false);
      return;
    }

    // 2. Check for mobile viewport (below 768px use lightweight static fallback)
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setShouldRender3D(false);
      return;
    }

    // 3. Check for WebGL capability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl) {
        setShouldRender3D(true);
      } else {
        setShouldRender3D(false);
      }
    } catch {
      setShouldRender3D(false);
    }
  }, []);

  // During initial mount or SSR, render high-performance static fallback
  if (shouldRender3D === null || shouldRender3D === false) {
    return <StaticCanvasFallback className={className} />;
  }

  return (
    <div className={className}>
      <React.Suspense fallback={<StaticCanvasFallback />}>
        <MintNodeNetwork />
      </React.Suspense>
    </div>
  );
}
