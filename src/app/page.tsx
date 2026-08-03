import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';
import { siteUrl } from '@/config/site';

const websiteJsonLd = {
  '@context:': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Vincent Mardon',
  url: `${siteUrl}/`,
};

export const metadata: Metadata = {
  title: {
    absolute: 'Vincent Mardon | Pianiste accompagnateur en Île-de-France',
  },
  description:
    'Pianiste accompagnateur en Seine-et-Marne et Île-de-France pour répétitions, auditions, examens, concerts, projets musicaux et accompagnement pédagogique.',
  alternates: {
    canonical: '/',
  },
};

export default async function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <HomeContent />
    </>
  );
}
