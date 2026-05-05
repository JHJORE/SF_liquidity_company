import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { AuthProvider } from '@/lib/auth-context';
import Topbar from '@/components/Topbar';
import Statusbar from '@/components/Statusbar';
import AuthShell from '@/components/AuthShell';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-geist-mono',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata = {
  title: 'San Francisco Liquidity Company',
  description: 'Internal and external liquidity venues for venture-backed equity.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <body>
        <AuthProvider>
          <Topbar />
          <Statusbar />
          <main className="screen active">{children}</main>
          <AuthShell />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
