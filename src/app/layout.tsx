import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Cormorant_Infant, Inter } from 'next/font/google';
import '@/styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
});

const cormorant = Cormorant_Infant({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-title',
});

export const metadata: Metadata = {
  title: 'Vincent Mardon | Pianiste accompagnateur',
  description: 'Pianiste accompagnateur indépendant en Île-de-France',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
      <SpeedInsights />
    </html>
  );
}
