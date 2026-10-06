import React from 'react';
import type { Metadata } from 'next';
import { ExternalLink, CheckCircle, ShieldCheck, Folder, Download, Award, FileCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { certificatesData, certificatesMasterDriveUrl } from '@/lib/data/certificates-data';
import { PageEndCta } from '@/components/common/PageEndCta';

export const metadata: Metadata = {
  title: 'Certificates & Credentials Archive — GuruTej Pratap',
  description:
    'Verified industry certifications earned by GuruTej Pratap: Oracle Cloud Agentic AI, Infosys Springboard C++, WNS Cares Foundation Cybersecurity, and Tech Veda React.js.',
  openGraph: {
    title: 'Certificates & Credentials Archive — GuruTej Pratap',
    description:
      'Official credentials verified by industry institutions with direct proof documentation.',
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
              CREDENTIALS // VERIFIED PROOF
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#352A27] leading-[1.15]">
                Certifications & Verification Archive
              </h1>
              <p className="mt-4 text-lg sm:text-xl font-mono text-[#675B57] max-w-3xl leading-relaxed">
                Official credentials verified by industry institutions. Each entry links directly to verified proof documentation in Google Drive.
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

        {/* Certificate Archive List / Table-Style Layout */}
        <section className="space-y-6 mb-20 sm:mb-24">
          <div className="flex items-center justify-between pb-3 border-b border-[#D8E5E3] text-xs font-mono text-[#90A9A6]">
            <span>OFFICIAL RECORD ({certificatesData.length} CREDENTIALS)</span>
            <span className="text-[#2E8B57] font-semibold flex items-center gap-1">
              <FileCheck className="w-3.5 h-3.5" />
              <span>ALL PROOF LINKS ACTIVE</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificatesData.map((cert, idx) => (
              <div
                key={cert.id}
                className="p-7 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#D8E5E3] hover:border-[#90A9A6] transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold text-[#986953] bg-[#E9F6F5] px-2.5 py-0.5 rounded border border-[#D8E5E3]">
                      CREDENTIAL 0{idx + 1}
                    </span>

                    <Badge variant="mint" dot>
                      {cert.category}
                    </Badge>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-display font-bold text-[#352A27] group-hover:text-[#986953] transition-colors leading-snug">
                    {cert.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-3 mt-3 text-xs font-mono text-[#675B57]">
                    <span className="font-semibold text-[#352A27] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2E8B57]" />
                      {cert.issuer}
                    </span>
                    <span>•</span>
                    <span className="text-[#986953] font-semibold">{cert.issueDate}</span>
                  </div>

                  {cert.description && (
                    <p className="mt-4 text-xs sm:text-sm text-[#675B57] leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>

                {/* Direct Verification Action Row */}
                <div className="pt-6 mt-6 border-t border-[#D8E5E3] flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-[#2E8B57] flex items-center gap-1.5 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>VERIFIED CREDENTIAL</span>
                  </span>

                  <a
                    href={cert.proofUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#E9F6F5] hover:bg-[#D3E8E6] text-xs font-mono font-bold text-[#352A27] border border-[#D8E5E3] transition-colors"
                  >
                    <span>View Proof</span>
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
          subtitle="Looking for an engineer with verified systems competence and certified cloud AI knowledge? Get in touch."
          primaryButtonText="Contact GuruTej"
          primaryButtonHref="/contact"
        />
      </Container>
    </div>
  );
}
