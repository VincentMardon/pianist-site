import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: {
    absolute: 'Vincent Mardon | Pianiste accompagnateur en Île-de-France',
  },
  description:
    'Pianiste accompagnateur en Seine-et-Marne et Île-de-France pour répétitions, auditions, examens, concerts, projets musicaux et accompagnement pédagogique.',
};

export default async function HomePage() {
  return <HomeContent />;
}
