import React from 'react';
import clsx from 'clsx';

interface DotMatrixProps extends React.SVGAttributes<SVGSVGElement> {
  rows?: number;
  cols?: number;
  gap?: number;
  dotSize?: number;
  className?: string;
}

export function DotMatrix({
  rows = 4,
  cols = 4,
  gap = 12,
  dotSize = 2.5,
  className,
  ...props
}: DotMatrixProps) {
  const width = (cols - 1) * gap + dotSize * 2;
  const height = (rows - 1) * gap + dotSize * 2;

  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({
        cx: dotSize + c * gap,
        cy: dotSize + r * gap,
        key: `${r}-${c}`,
      });
    }
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('text-[#90A9A6]/40 pointer-events-none select-none', className)}
      aria-hidden="true"
      {...props}
    >
      {dots.map((dot) => (
        <circle key={dot.key} cx={dot.cx} cy={dot.cy} r={dotSize / 2} fill="currentColor" />
      ))}
    </svg>
  );
}
