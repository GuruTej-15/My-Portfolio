import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'cv' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export type ButtonAsButtonProps = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: undefined;
    download?: undefined;
  };

export type ButtonAsLinkProps = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
    download?: boolean | string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  icon,
  iconPosition = 'right',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#986953] disabled:opacity-50 disabled:pointer-events-none rounded-xl select-none min-h-[44px]';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#352A27] text-[#FDFDFD] hover:bg-[#251D1B] active:scale-[0.98] shadow-sm shadow-[#352A27]/10',
    secondary:
      'bg-[#E9F6F5] text-[#352A27] hover:bg-[#D3E8E6] active:scale-[0.98] border border-[#D8E5E3]',
    outline:
      'bg-transparent text-[#352A27] border border-[#90A9A6]/40 hover:border-[#352A27] hover:bg-[#E9F6F5]/50 active:scale-[0.98]',
    cv:
      'bg-[#E9F6F5] text-[#352A27] border-2 border-[#90A9A6] hover:bg-[#D3E8E6] hover:border-[#352A27] active:scale-[0.98] shadow-sm font-semibold tracking-wide',
    ghost:
      'bg-transparent text-[#675B57] hover:text-[#352A27] hover:bg-[#E9F6F5]/60',
  };

  const combinedClasses = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if ('href' in props && props.href) {
    const { href, download, target, rel, ...rest } = props as ButtonAsLinkProps;
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

    if (download) {
      return (
        <a
          href={href}
          download={download === true ? '' : download}
          target={target}
          rel={rel || 'noopener noreferrer'}
          className={combinedClasses}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    if (isExternal) {
      return (
        <a
          href={href}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
          className={combinedClasses}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
