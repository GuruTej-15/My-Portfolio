'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Download, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { siteConfig } from '@/lib/data/site-config';
import { Sparkle } from '../ui/Sparkle';
import { DotMatrix } from '../ui/DotMatrix';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Journey', href: '/journey' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Contact', href: '/contact' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key press for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="relative z-50 p-2.5 rounded-xl border border-[#D8E5E3] bg-[#FDFDFD]/90 text-[#352A27] hover:bg-[#E9F6F5] transition-colors focus-visible:outline-2 focus-visible:outline-[#986953]"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Full-Screen Drawer Overlay */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          className="fixed inset-0 z-40 bg-[#FDFDFD] flex flex-col justify-between p-6 sm:p-8 pt-24 overflow-y-auto animate-fadeIn"
        >
          {/* Background Decorative Motifs */}
          <div className="absolute top-12 right-12 pointer-events-none opacity-40">
            <DotMatrix rows={6} cols={6} />
          </div>
          <div className="absolute bottom-24 left-8 pointer-events-none opacity-50">
            <Sparkle size={28} variant="coral" />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 relative z-10">
            <div className="text-[11px] font-mono tracking-widest text-[#90A9A6] uppercase mb-2">
              Navigation Menu
            </div>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-2xl font-display font-bold py-1.5 flex items-center justify-between transition-colors ${
                    isActive
                      ? 'text-[#352A27] pl-3 border-l-4 border-[#D49879]'
                      : 'text-[#675B57] hover:text-[#352A27]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-[#90A9A6]">{item.href}</span>
                </Link>
              );
            })}
          </nav>

          {/* Actions & Recruiter Strip */}
          <div className="mt-8 pt-6 border-t border-[#D8E5E3] flex flex-col gap-4 relative z-10">
            {/* Download CV Main Action */}
            <a
              href="/GuruTej_Pratap_Resume.pdf"
              download="GuruTej_Pratap_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#352A27] text-[#FDFDFD] font-semibold text-sm hover:bg-[#251D1B] transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>

            {/* Quick Contact Action */}
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#E9F6F5] text-[#352A27] border border-[#D8E5E3] font-medium text-sm hover:bg-[#D3E8E6] transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-[#90A9A6]" />
            </Link>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 pt-3 text-[#675B57]">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 hover:text-[#352A27] transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 hover:text-[#352A27] transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Send Email"
                className="p-2 hover:text-[#352A27] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
