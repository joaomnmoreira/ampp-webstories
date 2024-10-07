import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern Next.js Website',
  description: 'A beautiful and fully featured production-ready website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script 
          src="https://cdn.ampproject.org/amp-story-player-v0.js"
          strategy="beforeInteractive"
        />
        <link 
          href="https://cdn.ampproject.org/amp-story-player-v0.css" 
          rel="stylesheet" 
          type="text/css"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}