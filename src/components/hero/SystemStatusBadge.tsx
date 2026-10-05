import React from 'react';
import clsx from 'clsx';

interface SystemStatusBadgeProps {
  status?: string;
  className?: string;
}

export function SystemStatusBadge({
  status = 'AVAILABLE FOR ROLES & INTERNSHIPS',
  className,
}: SystemStatusBadgeProps) {
  return (
    <div
      className={clsx(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E9F6F5] border border-[#D8E5E3] text-xs font-mono tracking-wider text-[#352A27] select-none',
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2E8B57] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E8B57]" />
      </span>
      <span className="font-semibold text-[11px]">{status}</span>
    </div>
  );
}
