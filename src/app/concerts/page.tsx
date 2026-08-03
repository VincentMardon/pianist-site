import type { Metadata } from 'next';
import CallToAction from '@/components/CallToAction';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Concerts privés',
  description:
    'Vincent Mardon, pianiste professionnel en Île-de-France, propose des concerts privés sur mesure à domicile, pour vos réceptions, cérémonies et événements en Seine-et-Marne et dans le Grand Paris.',
  alternates: {
    canonical: '/concerts',
  },
};

export default function ConcertsPage() {
  return (
    <>
      <MarkdownPage fileName="concerts.md" />

      <CallToAction
        title="Un concert pensé pour votre événement"
        text="À domicile, dans un lieu de réception ou pour une occasion particulière, le programme peut être adapté à votre espace, à vos invités et à l’ambiance recherchée."
        links={[
          { href: '/tarifs', label: 'Consulter les tarifs' },
          { href: '/contact', label: 'Me contacter' },
        ]}
      />
    </>
  );
}
