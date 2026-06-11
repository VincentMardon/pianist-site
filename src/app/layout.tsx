import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Cormorant_Infant, Inter } from 'next/font/google';
import Link from 'next/link';
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
  description:
    'Vincent Mardon, pianiste accompagnateur indépendant en Île-de-France. Accompagnement de chanteurs, instrumentistes, examens, auditions et projets artistiques.',
  verification: {
    google: 'HSmgXPI2nMj4FKgroMLw7r3-E7f5bmkal8t1TzDHNtw',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <div>
          <header>
            <nav>
              <Link href="/">Accueil</Link>
              <Link href="/presentation">Présentation</Link>
              <Link href="/tarifs">Tarifs</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </header>

          <main>{children}</main>
        </div>
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
