import React from 'react';
import clsx from 'clsx';

interface OrganicCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | string;
  className?: string;
  opacity?: number;
}

export function OrganicCircle({
  size = 320,
  className,
  style,
  ...props
}: OrganicCircleProps) {
  return (
    <div
      className={clsx(
        'rounded-full pointer-events-none select-none bg-gradient-to-tr from-[#D3E8E6] to-[#E9F6F5] blur-[1px]',
        className
      )}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  );
}
