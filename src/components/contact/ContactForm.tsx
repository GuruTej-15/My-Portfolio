'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Copy, ExternalLink, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/data/site-config';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Construct mailto link
    const subjectLine = encodeURIComponent(
      formData.subject || `Engineering Inquiry from ${formData.name}`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subjectLine}&body=${bodyContent}`;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="p-7 sm:p-9 lg:p-10 rounded-3xl bg-[#FFFFFF] border-2 border-[#D8E5E3] shadow-sm">
      <div className="flex items-center justify-between gap-2 mb-2">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#352A27]">
          Send a Message
        </h2>
        <span className="text-xs font-mono text-[#2E8B57] font-semibold bg-[#E9F6F5] px-2.5 py-1 rounded-md border border-[#D8E5E3]">
          ACTIVE INBOX
        </span>
      </div>

      <p className="text-xs sm:text-sm text-[#675B57] mb-8 leading-relaxed">
        Recruiters and hiring managers: send a direct note through your email client or write to{' '}
        <button
          onClick={handleCopyEmail}
          className="text-[#352A27] font-semibold underline hover:text-[#986953] transition-colors cursor-pointer"
          title="Click to copy email address"
        >
          {siteConfig.email}
        </button>
        {copied && <span className="ml-2 text-xs text-[#2E8B57] font-mono">✓ Copied!</span>}
      </p>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-[#E9F6F5] border border-[#D8E5E3] space-y-4 text-center">
          <div className="w-12 h-12 rounded-full bg-[#FFFFFF] border border-[#2E8B57] flex items-center justify-center mx-auto text-[#2E8B57]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-[#352A27]">
              Email Client Launched
            </h3>
            <p className="text-xs sm:text-sm text-[#675B57] mt-1 max-w-md mx-auto">
              Your message has been formatted and opened in your default email client. If it did not launch automatically, feel free to send directly to{' '}
              <strong className="text-[#352A27]">{siteConfig.email}</strong>.
            </p>
          </div>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-mono text-[#675B57] hover:text-[#352A27] underline"
            >
              Reset Form
            </button>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#D8E5E3] text-xs font-mono font-semibold text-[#352A27]"
            >
              <Copy className="w-3.5 h-3.5 text-[#986953]" />
              <span>Copy Email</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono font-bold text-[#352A27] uppercase mb-1.5"
              >
                Your Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Morgan"
                className="w-full px-4 py-3 rounded-xl bg-[#FDFDFD] border border-[#D8E5E3] text-sm text-[#352A27] placeholder:text-[#90A9A6] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]/30 focus:border-[#2E8B57] transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono font-bold text-[#352A27] uppercase mb-1.5"
              >
                Your Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-4 py-3 rounded-xl bg-[#FDFDFD] border border-[#D8E5E3] text-sm text-[#352A27] placeholder:text-[#90A9A6] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]/30 focus:border-[#2E8B57] transition-all"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-mono font-bold text-[#352A27] uppercase mb-1.5"
            >
              Subject / Role Context
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="e.g. Full-Stack Role / Summer 2026 Internship"
              className="w-full px-4 py-3 rounded-xl bg-[#FDFDFD] border border-[#D8E5E3] text-sm text-[#352A27] placeholder:text-[#90A9A6] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]/30 focus:border-[#2E8B57] transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono font-bold text-[#352A27] uppercase mb-1.5"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Hi GuruTej, I came across your portfolio and wanted to discuss an opportunity on our team..."
              className="w-full px-4 py-3 rounded-xl bg-[#FDFDFD] border border-[#D8E5E3] text-sm text-[#352A27] placeholder:text-[#90A9A6] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]/30 focus:border-[#2E8B57] transition-all resize-y"
            />
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#352A27] text-[#FFFFFF] text-sm font-semibold hover:bg-[#251D1B] transition-colors shadow-sm cursor-pointer w-full sm:w-auto"
            >
              <Send className="w-4 h-4 text-[#D49879]" />
              <span>Launch Email Client</span>
            </button>

            <span className="text-[11px] font-mono text-[#90A9A6]">
              Direct to {siteConfig.email}
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
