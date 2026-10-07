import type { Metadata, Viewport } from 'next';
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from '@vercel/analytics/next';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const viewport: Viewport = {
  themeColor: '#E9F6F5',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://gurutej-portfolio.vercel.app'),
  title: {
    template: '%s | GuruTej Pratap',
    default: 'GuruTej Pratap — Full-Stack Developer',
  },
  description:
    'Production portfolio of GuruTej Pratap. Exploring full-stack engineering, operating systems synchronization, cloud-native DevOps overlays, and algorithmic optimization. B.Tech CSE @ Lovely Professional University.',
  keywords: [
    'GuruTej Pratap',
    'Full-Stack Developer',
    'Next.js 16',
    'React 19',
    'OS Concurrency',
    'Deadlock Detection',
    'DevOps',
    'Lovely Professional University',
    'RecordHub',
  ],
  authors: [{ name: 'GuruTej Pratap', url: 'https://github.com/GuruTej-15' }],
  creator: 'GuruTej Pratap',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gurutej-portfolio.vercel.app',
    siteName: 'GuruTej Pratap Portfolio',
    title: 'GuruTej Pratap — Full-Stack Developer',
    description:
      'Personal portfolio and engineering case studies of GuruTej Pratap. Architected RecordHub, OS Locking Simulator, and Unified DevOps Platform.',
    images: [
      {
        url: '/images/portrait.png',
        width: 1111,
        height: 1415,
        alt: 'GuruTej Pratap — Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GuruTej Pratap — Full-Stack Developer',
    description:
      'Explore full-stack applications, OS deadlock simulation, and cloud-native systems by GuruTej Pratap.',
    images: ['/images/portrait.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FDFDFD] text-[#352A27] font-sans selection:bg-[#D3E8E6] selection:text-[#352A27]">
        {/* Universal Sticky Navbar */}
        <Navbar />

        {/* Primary Page Canvas */}
        <main className="flex-1">{children}</main>

        {/* Universal Footer */}
        <Footer />

        {/* Vercel Web Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
