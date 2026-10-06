import React from 'react';
import Link from 'next/link';
import { Download, Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { siteConfig } from '@/lib/data/site-config';
import { Sparkle } from '../ui/Sparkle';
import { DotMatrix } from '../ui/DotMatrix';

export function Footer() {
  return (
    <footer className="w-full bg-[#E9F6F5]/40 border-t border-[#D8E5E3] mt-24 relative overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute top-8 right-8 pointer-events-none opacity-40">
        <DotMatrix rows={4} cols={4} />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Identity & Status */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg text-[#352A27]">
                GURU TEJ PRATAP
              </span>
              <Sparkle size={12} variant="coral" />
            </div>
            <p className="text-sm text-[#675B57] max-w-md leading-relaxed">
              Full-Stack Developer & Systems Builder. Designing high-performance web applications, concurrency simulators, and cloud-native systems with architectural clarity.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D3E8E6] text-[11px] font-mono tracking-wider text-[#352A27] border border-[#90A9A6]/30">
                <span className="w-2 h-2 rounded-full bg-[#2E8B57]" />
                <span>SYSTEM ONLINE // READY</span>
              </span>
              <span className="text-xs text-[#8E827E] font-mono">
                LPU, PUNJAB
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono tracking-widest text-[#90A9A6] uppercase">
              Directory
            </span>
            <ul className="flex flex-col space-y-2 text-sm text-[#675B57]">
              <li>
                <Link href="/about" className="hover:text-[#352A27] transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#352A27] transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-[#352A27] transition-colors">
                  Skills & Tech Stack
                </Link>
              </li>
              <li>
                <Link href="/journey" className="hover:text-[#352A27] transition-colors">
                  Journey Timeline
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="hover:text-[#352A27] transition-colors">
                  Verified Certificates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#352A27] transition-colors">
                  Contact Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Recruiter Access & Socials */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono tracking-widest text-[#90A9A6] uppercase">
              Recruiter Quick Access
            </span>
            <div className="flex flex-col gap-2.5">
              <a
                href="/GuruTej_Pratap_Resume.pdf"
                download="GuruTej_Pratap_Resume.pdf"
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#352A27] text-[#FDFDFD] text-xs font-semibold hover:bg-[#251D1B] transition-colors"
                aria-label="Download GuruTej Pratap Resume PDF"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-3.5 h-3.5 text-[#D49879]" />
                  <span>Download CV (PDF)</span>
                </span>
                <span className="text-[10px] font-mono text-[#D8E5E3]">243 KB</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#FDFDFD] border border-[#D8E5E3] text-[#352A27] text-xs font-medium hover:bg-[#E9F6F5] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#90A9A6]" />
                  <span>{siteConfig.email}</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#90A9A6]" />
              </a>
            </div>

            <div className="flex items-center gap-4 pt-1 text-[#675B57]">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-1.5 rounded-lg border border-[#D8E5E3] hover:text-[#352A27] hover:border-[#352A27] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-1.5 rounded-lg border border-[#D8E5E3] hover:text-[#352A27] hover:border-[#352A27] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#D8E5E3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E827E] font-sans">
          <span>&copy; {new Date().getFullYear()} GuruTej Pratap. All rights reserved.</span>
          <span className="font-mono text-[11px] tracking-wide text-[#90A9A6]">
            MINT SYSTEMS // BUILT WITH NEXT.JS 16
          </span>
        </div>
      </div>
    </footer>
  );
}
