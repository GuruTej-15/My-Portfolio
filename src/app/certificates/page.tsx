import React from 'react';
import type { Metadata } from 'next';
import { ExternalLink, CheckCircle, ShieldCheck, Folder } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { certificatesData, certificatesMasterDriveUrl } from '@/lib/data/certificates-data';

export const metadata: Metadata = {
  title: 'Certificates & Credentials',
  description: 'Verified industry certifications in Agentic AI, OCI AI, C++ systems, and web engineering earned by GuruTej Pratap with direct proof documentation.',
};

export default function CertificatesPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container size="wide">
        <PageHeader
          tag="Verified Proof"
          title="Certificates & Credentials"
          description="Official credentials verified by industry institutions including Oracle Cloud Infrastructure, Infosys Springboard, WNS Cares Foundation, and Tech Veda."
        >
          <Button
            href={certificatesMasterDriveUrl}
            variant="outline"
            size="md"
            icon={<Folder className="w-4 h-4 text-[#986953]" />}
          >
            Open Certificate Drive Folder
          </Button>
        </PageHeader>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#D8E5E3] hover:border-[#90A9A6] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="mint" dot>
                    {cert.category}
                  </Badge>
                  <span className="text-xs font-mono text-[#986953]">
                    {cert.issueDate}
                  </span>
                </div>

                <h2 className="text-xl font-display font-bold text-[#352A27] group-hover:text-[#986953] transition-colors leading-snug">
                  {cert.title}
                </h2>

                <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-[#675B57]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2E8B57]" />
                  <span>Issuer: {cert.issuer}</span>
                </div>

                {cert.description && (
                  <p className="mt-3 text-xs sm:text-sm text-[#675B57] leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>

              {/* Direct Verification Action */}
              <div className="pt-5 mt-6 border-t border-[#D8E5E3] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#2E8B57] flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  <span>VERIFIED RECORD</span>
                </span>

                <a
                  href={cert.proofUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E9F6F5] hover:bg-[#D3E8E6] text-xs font-semibold text-[#352A27] border border-[#D8E5E3] transition-colors"
                >
                  <span>View Proof</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#90A9A6]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
