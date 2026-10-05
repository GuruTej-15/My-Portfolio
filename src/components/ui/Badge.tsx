import React from 'react';
import clsx from 'clsx';

export type BadgeVariant =
  | 'default'
  | 'mint'
  | 'teal'
  | 'coral'
  | 'system-live'
  | 'system-running'
  | 'system-blocked';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  dot?: boolean;
}

export function Badge({
  children,
  variant = 'default',
  className,
  dot = false,
  ...props
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase font-mono select-none';

  const variantStyles = {
    default: 'bg-[#E9F6F5]/70 text-[#352A27] border border-[#D8E5E3]',
    mint: 'bg-[#D3E8E6] text-[#352A27] border border-[#90A9A6]/30',
    teal: 'bg-transparent text-[#675B57] border border-[#90A9A6]/50',
    coral: 'bg-[#D49879]/15 text-[#986953] border border-[#D49879]/40',
    'system-live': 'bg-emerald-50 text-emerald-800 border border-emerald-300/60',
    'system-running': 'bg-sky-50 text-sky-800 border border-sky-300/60',
    'system-blocked': 'bg-amber-50 text-amber-800 border border-amber-300/60',
  };

  const dotColor = {
    default: 'bg-[#90A9A6]',
    mint: 'bg-[#352A27]',
    teal: 'bg-[#90A9A6]',
    coral: 'bg-[#D49879]',
    'system-live': 'bg-emerald-600',
    'system-running': 'bg-sky-600',
    'system-blocked': 'bg-amber-600',
  };

  return (
    <span className={clsx(baseStyles, variantStyles[variant], className)} {...props}>
      {dot && (
        <span
          className={clsx('w-1.5 h-1.5 rounded-full shrink-0 animate-pulse', dotColor[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
