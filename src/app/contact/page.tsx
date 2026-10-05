import React from 'react';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Download, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/data/site-config';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Connect directly with GuruTej Pratap for full-stack engineering opportunities, software internships, and technical collaboration.',
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container size="wide">
        <PageHeader
          tag="Get In Touch"
          title="Let’s Build Something Meaningful."
          description="I am actively open to software engineering internships, junior developer roles, and technical project collaborations. Reach out directly or submit an inquiry below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#E9F6F5]/50 border border-[#D8E5E3] flex flex-col gap-6">
              <h2 className="text-xl font-display font-bold text-[#352A27]">
                Direct Contact Channels
              </h2>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#90A9A6] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#E9F6F5] text-[#352A27] shrink-0">
                    <Mail className="w-4 h-4 text-[#986953]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-mono text-[#90A9A6] uppercase block">
                      Email Address
                    </span>
                    <span className="text-sm font-semibold text-[#352A27] truncate block group-hover:text-[#986953]">
                      {siteConfig.email}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#90A9A6] shrink-0 group-hover:text-[#352A27]" />
                </a>

                {/* Phone */}
                <a
                  href={siteConfig.social.phone}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#90A9A6] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#E9F6F5] text-[#352A27] shrink-0">
                    <Phone className="w-4 h-4 text-[#986953]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-mono text-[#90A9A6] uppercase block">
                      Phone Number
                    </span>
                    <span className="text-sm font-semibold text-[#352A27] truncate block group-hover:text-[#986953]">
                      {siteConfig.phone}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#90A9A6] shrink-0 group-hover:text-[#352A27]" />
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#D8E5E3]">
                  <div className="p-2 rounded-lg bg-[#E9F6F5] text-[#352A27] shrink-0">
                    <MapPin className="w-4 h-4 text-[#90A9A6]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-mono text-[#90A9A6] uppercase block">
                      Current Location
                    </span>
                    <span className="text-sm font-semibold text-[#352A27]">
                      {siteConfig.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-4 border-t border-[#D8E5E3]">
                <span className="text-xs font-mono text-[#90A9A6] uppercase block mb-3">
                  Professional Profiles
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FFFFFF] border border-[#D8E5E3] text-xs font-semibold text-[#352A27] hover:bg-[#D3E8E6] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FFFFFF] border border-[#D8E5E3] text-xs font-semibold text-[#352A27] hover:bg-[#D3E8E6] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* CV Download Strip */}
              <div className="pt-2">
                <Button
                  href="/GuruTej_Pratap_Resume.pdf"
                  download="GuruTej_Pratap_Resume.pdf"
                  variant="cv"
                  size="md"
                  className="w-full"
                  icon={<Download className="w-4 h-4 text-[#986953]" />}
                >
                  Download Canonical CV (PDF)
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] shadow-sm">
              <h2 className="text-2xl font-display font-bold text-[#352A27] mb-2">
                Send a Direct Message
              </h2>
              <p className="text-xs sm:text-sm text-[#675B57] mb-6">
                Recruiters and engineers: fill out this short form or email me directly at{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-[#352A27] font-semibold underline">
                  {siteConfig.email}
                </a>.
              </p>

              <form
                action={`mailto:${siteConfig.email}`}
                method="GET"
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono font-medium text-[#352A27] uppercase mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFDFD] border border-[#D8E5E3] text-sm text-[#352A27] placeholder:text-[#8E827E] focus:outline-none focus:ring-2 focus:ring-[#986953]/20 focus:border-[#986953] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-medium text-[#352A27] uppercase mb-1.5"
                    >
                      Your Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFDFD] border border-[#D8E5E3] text-sm text-[#352A27] placeholder:text-[#8E827E] focus:outline-none focus:ring-2 focus:ring-[#986953]/20 focus:border-[#986953] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono font-medium text-[#352A27] uppercase mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Software Engineering Internship / Full-Stack Role"
                    className="w-full px-4 py-3 rounded-xl bg-[#FDFDFD] border border-[#D8E5E3] text-sm text-[#352A27] placeholder:text-[#8E827E] focus:outline-none focus:ring-2 focus:ring-[#986953]/20 focus:border-[#986953] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="body"
                    className="block text-xs font-mono font-medium text-[#352A27] uppercase mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="body"
                    name="body"
                    rows={5}
                    required
                    placeholder="Hello GuruTej, I came across your portfolio and wanted to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FDFDFD] border border-[#D8E5E3] text-sm text-[#352A27] placeholder:text-[#8E827E] focus:outline-none focus:ring-2 focus:ring-[#986953]/20 focus:border-[#986953] transition-all resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#352A27] text-[#FDFDFD] text-sm font-semibold hover:bg-[#251D1B] transition-colors shadow-sm w-full sm:w-auto"
                  >
                    <Send className="w-4 h-4 text-[#D49879]" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
