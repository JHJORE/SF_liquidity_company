import { DM_Sans, JetBrains_Mono, Instrument_Serif } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { AuthProvider } from '@/lib/auth-context';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
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
  title: 'SFLC — Tokenized equity infrastructure for private companies',
  description:
    'The tokenized equity management system and ledger for private companies. Programmable ownership, automated compliance, instant stablecoin settlement.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <AuthProvider>{children}</AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
