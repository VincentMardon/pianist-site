import type { Metadata } from 'next';
import CallToAction from '@/components/CallToAction';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Présentation',
  description:
    "Parcours de Vincent Mardon, pianiste accompagnateur indépendant en Île-de-France, formé au piano classique et engagé dans l'accompagnement des musiciens.",
};

export default function PresentationPage() {
  return (
    <>
      <MarkdownPage fileName="presentation.md" />

      <CallToAction
        title="Un accompagnement à construire selon votre projet"
        text="Pour une audition, un examen, un cours ou une répétition, les conditions pratiques oeuvent être adaptées à votre situation."
        links={[
          { href: '/tarifs', label: 'Consulter les tarifs' },
          { href: '/contact', label: 'Me contacter' },
        ]}
      />
    </>
  );
}
