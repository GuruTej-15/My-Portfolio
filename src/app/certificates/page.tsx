import React from 'react';
import type { Metadata } from 'next';
import { ExternalLink, CheckCircle, ShieldCheck, Folder, Download, FileCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { certificatesData, certificatesMasterDriveUrl } from '@/lib/data/certificates-data';
import { PageEndCta } from '@/components/common/PageEndCta';

export const metadata: Metadata = {
  title: 'Certificates & Credentials — GuruTej Pratap',
  description:
    'Verified industry certifications earned by GuruTej Pratap: Oracle Cloud Agentic AI, Infosys Springboard C++, WNS Cares Foundation Cybersecurity, and Tech Veda React.js.',
  openGraph: {
    title: 'Certificates & Credentials — GuruTej Pratap',
    description:
      'Official credentials verified by industry institutions with direct proof documentation in Google Drive.',
  },
};

export default function CertificatesPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 text-[#352A27]">
      <Container size="wide">
        {/* Header */}
        <section className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2E8B57]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#2E8B57] uppercase">
              CREDENTIALS // PROOF ARCHIVE
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#352A27] leading-[1.15]">
                Verified Credentials Archive
              </h1>
              <p className="mt-4 text-lg sm:text-xl font-mono text-[#675B57] max-w-3xl leading-relaxed">
                Official certifications issued by industry institutions. Each entry links directly to verified proof documentation in Google Drive.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button
                href={certificatesMasterDriveUrl}
                variant="outline"
                size="md"
                icon={<Folder className="w-4 h-4 text-[#986953]" />}
              >
                View Certificate Archive ↗
              </Button>
              <Button
                href="/GuruTej_Pratap_Resume.pdf"
                download="GuruTej_Pratap_Resume.pdf"
                variant="cv"
                size="md"
                icon={<Download className="w-4 h-4 text-[#986953]" />}
              >
                Download CV
              </Button>
            </div>
          </div>
        </section>

        {/* Archival Ledger Register Layout (Open Editorial Structure — Not Boxed Cards) */}
        <section className="mb-20 sm:mb-24">
          <div className="flex items-center justify-between pb-3 border-b-2 border-[#D8E5E3] text-xs font-mono text-[#90A9A6] mb-8">
            <span>OFFICIAL REGISTER ({certificatesData.length} VERIFIED ENTRIES)</span>
            <span className="text-[#2E8B57] font-semibold flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5" />
              <span>ALL VERIFICATION LINKS ACTIVE</span>
            </span>
          </div>

          <div className="divide-y divide-[#D8E5E3]">
            {certificatesData.map((cert, idx) => (
              <div
                key={cert.id}
                className="py-10 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start group"
              >
                {/* Left Column: Metadata & Issue Date */}
                <div className="lg:col-span-3 space-y-2">
                  <span className="text-xs font-mono font-bold text-[#986953] bg-[#E9F6F5] px-2.5 py-0.5 rounded border border-[#D8E5E3] inline-block">
                    CREDENTIAL 0{idx + 1}
                  </span>
                  <div className="text-xs font-mono text-[#675B57] pt-1">
                    <span className="text-[#90A9A6] block uppercase text-[10px]">ISSUED:</span>
                    <span className="font-semibold text-[#352A27]">{cert.issueDate}</span>
                  </div>
                  <div>
                    <Badge variant="mint" dot className="text-[10px]">
                      {cert.category}
                    </Badge>
                  </div>
                </div>

                {/* Middle Column: Title & Issuer & Description */}
                <div className="lg:col-span-6 space-y-2.5">
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-[#352A27] group-hover:text-[#2E8B57] transition-colors leading-snug">
                    {cert.title}
                  </h2>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#675B57]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2E8B57]" />
                    <span className="font-semibold text-[#352A27]">Issuer: {cert.issuer}</span>
                  </div>

                  {cert.description && (
                    <p className="text-sm text-[#675B57] leading-relaxed pt-1">
                      {cert.description}
                    </p>
                  )}
                </div>

                {/* Right Column: Verification Action */}
                <div className="lg:col-span-3 lg:text-right flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-3 pt-2">
                  <span className="text-[11px] font-mono text-[#2E8B57] flex items-center gap-1 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>VERIFIED PROOF</span>
                  </span>

                  <a
                    href={cert.proofUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F4F9F8] hover:bg-[#E9F6F5] text-xs font-mono font-bold text-[#352A27] border border-[#D8E5E3] hover:border-[#2E8B57] transition-colors shadow-xs"
                  >
                    <span>View Proof ↗</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#986953]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Page End CTA */}
        <PageEndCta
          variant="warm-accent"
          title="Have something worth building?"
          subtitle="Looking for a full-stack developer with verified computer science competence and cloud AI fundamentals? Let’s connect."
          primaryButtonText="Contact GuruTej"
          primaryButtonHref="/contact"
        />
      </Container>
    </div>
  );
}
