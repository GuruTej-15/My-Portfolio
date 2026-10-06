'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Download } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { Sparkle } from '../ui/Sparkle';

interface NavLinkItem {
  label: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Journey', href: '/journey' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FDFDFD]/90 backdrop-blur-md border-b border-[#D8E5E3] transition-all">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-[#986953] rounded-lg"
          aria-label="GuruTej Pratap Home"
        >
          <div className="w-8 h-8 rounded-lg bg-[#E9F6F5] border border-[#D8E5E3] flex items-center justify-center text-[#352A27] font-display font-bold text-sm group-hover:bg-[#D3E8E6] transition-colors">
            GP
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-[#352A27]">
              GURU TEJ
            </span>
            <span className="text-[10px] font-mono tracking-wider text-[#90A9A6] -mt-0.5 flex items-center gap-1">
              SYSTEMS <Sparkle size={8} variant="coral" />
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#E9F6F5]/50 border border-[#D8E5E3]/80"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs rounded-full transition-all focus-visible:outline-2 focus-visible:outline-[#986953] ${
                  isActive
                    ? 'bg-[#D3E8E6] text-[#352A27] font-semibold shadow-xs'
                    : 'font-medium text-[#675B57] hover:text-[#352A27] hover:bg-[#E9F6F5]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Canonical Download CV CTA */}
          <a
            href="/GuruTej_Pratap_Resume.pdf"
            download="GuruTej_Pratap_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E9F6F5] text-[#352A27] border border-[#90A9A6]/50 hover:bg-[#D3E8E6] hover:border-[#352A27] text-xs font-semibold tracking-wide transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-[#986953]"
            aria-label="Download CV as PDF"
          >
            <Download className="w-3.5 h-3.5 text-[#986953]" />
            <span>Download CV</span>
          </a>

          {/* Quick Contact CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 rounded-xl bg-[#352A27] text-[#FDFDFD] hover:bg-[#251D1B] text-xs font-semibold tracking-wide transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-[#986953]"
          >
            <span>Let&apos;s Connect</span>
          </Link>
        </div>

        {/* Mobile Navigation Trigger */}
        <MobileNav />
      </div>
    </header>
  );
}
