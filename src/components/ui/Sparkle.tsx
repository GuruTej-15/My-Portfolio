import React from 'react';
import clsx from 'clsx';

interface SparkleProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  className?: string;
  variant?: 'coral' | 'teal' | 'charcoal';
}

export function Sparkle({
  size = 18,
  className,
  variant = 'coral',
  ...props
}: SparkleProps) {
  const colorClass = {
    coral: 'text-[#D49879]',
    teal: 'text-[#90A9A6]',
    charcoal: 'text-[#352A27]',
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('pointer-events-none select-none inline-block', colorClass[variant], className)}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 0C12.5 7 17 11.5 24 12C17 12.5 12.5 17 12 24C11.5 17 7 12.5 0 12C7 11.5 11.5 7 12 0Z" />
    </svg>
  );
}
