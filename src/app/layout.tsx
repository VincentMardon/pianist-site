import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/styles/global.css';

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
    <html lang="fr">
      <body>{children}</body>
      <SpeedInsights />
    </html>
  );
}
