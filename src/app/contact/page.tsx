import React from 'react';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Download, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/data/site-config';
import { ContactForm } from '@/components/contact/ContactForm';
import { PageEndCta } from '@/components/common/PageEndCta';

export const metadata: Metadata = {
  title: 'Contact GuruTej Pratap — Full-Stack Developer',
  description:
    'Get in touch with GuruTej Pratap for full-stack software development opportunities and software internships. Direct email, LinkedIn, and canonical CV download.',
  openGraph: {
    title: 'Contact GuruTej Pratap — Engineering Inquiries',
    description:
      'Have something worth building? Connect directly for full-stack development and software engineering opportunities.',
  },
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 text-[#352A27]">
      <Container size="wide">
        {/* Header */}
        <section className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2E8B57]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#2E8B57] uppercase">
              GET IN TOUCH // ENGINEERING COLLABORATION
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-2xl min-[400px]:text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#352A27] leading-[1.15] break-words">
                Have something worth building?
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg font-mono text-[#675B57] max-w-3xl leading-relaxed break-words">
                I am actively open to full-stack software engineering opportunities, systems roles, and software internships. Reach out directly or send an inquiry below.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Button
                href="/GuruTej_Pratap_Resume.pdf"
                download="GuruTej_Pratap_Resume.pdf"
                variant="cv"
                size="md"
                icon={<Download className="w-4 h-4 text-[#986953]" />}
              >
                Download Canonical CV
              </Button>
            </div>
          </div>
        </section>

        {/* Content Layout: Direct Channels + Interactive Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20 sm:mb-24">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#F4F9F8] border-2 border-[#D8E5E3] space-y-6">
              <div>
                <span className="text-xs font-mono text-[#986953] font-bold uppercase tracking-wider block mb-1">
                  DIRECT ACCESS
                </span>
                <h2 className="text-2xl font-display font-bold text-[#352A27]">
                  Verified Channels
                </h2>
              </div>

              <div className="space-y-3.5">
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#2E8B57] transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#E9F6F5] text-[#2E8B57]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#90A9A6] uppercase block font-semibold">
                        PRIMARY EMAIL
                      </span>
                      <span className="text-sm font-mono font-bold text-[#352A27] group-hover:text-[#2E8B57] transition-colors">
                        {siteConfig.email}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#90A9A6] group-hover:text-[#2E8B57] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* LinkedIn */}
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#0077B5] transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#E9F6F5] text-[#0077B5]">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#90A9A6] uppercase block font-semibold">
                        LINKEDIN PROFILE
                      </span>
                      <span className="text-sm font-mono font-bold text-[#352A27] group-hover:text-[#0077B5] transition-colors">
                        linkedin.com/in/gurutejpratap
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#90A9A6] group-hover:text-[#0077B5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* GitHub */}
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#352A27] transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#E9F6F5] text-[#352A27]">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#90A9A6] uppercase block font-semibold">
                        GITHUB CODEBASE
                      </span>
                      <span className="text-sm font-mono font-bold text-[#352A27]">
                        github.com/GuruTej-15
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#90A9A6] group-hover:text-[#352A27] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Phone */}
                <a
                  href={siteConfig.social.phone}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#986953] transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#E9F6F5] text-[#986953]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#90A9A6] uppercase block font-semibold">
                        PHONE / WHATSAPP
                      </span>
                      <span className="text-sm font-mono font-bold text-[#352A27] group-hover:text-[#986953]">
                        {siteConfig.phone}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#90A9A6] group-hover:text-[#986953] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-[#E9F6F5] text-[#90A9A6]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#90A9A6] uppercase block font-semibold">
                      LOCATION
                    </span>
                    <span className="text-xs font-bold text-[#352A27]">
                      {siteConfig.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* CV Action Strip */}
              <div className="pt-2">
                <Button
                  href="/GuruTej_Pratap_Resume.pdf"
                  download="GuruTej_Pratap_Resume.pdf"
                  variant="cv"
                  size="md"
                  className="w-full justify-center"
                  icon={<Download className="w-4 h-4 text-[#986953]" />}
                >
                  Download Canonical CV (PDF)
                </Button>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Closing Direct Inquiries Note */}
        <div className="p-6 rounded-2xl bg-[#E9F6F5]/50 border border-[#D8E5E3] flex flex-wrap items-center justify-between text-xs font-mono text-[#675B57] gap-3">
          <span className="flex items-center gap-1.5 text-[#2E8B57] font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Direct Inquiries: I usually respond as soon as I can.</span>
          </span>
          <span className="text-[#90A9A6]">All inquiries received directly at {siteConfig.email}</span>
        </div>
      </Container>
    </div>
  );
}
