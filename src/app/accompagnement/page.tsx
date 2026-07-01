import type { Metadata } from 'next';
import CallToAction from '@/components/CallToAction';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Accompagnement',
  description:
    'Accompagnement au piano pour chanteurs, instrumentistes, examens, auditions, concerts et projets musicaux à Grand Paris Sud et en Île-de-France.',
};

export default function PedagogiePage() {
  return (
    <>
      <MarkdownPage fileName="accompagnement.md" />

      <CallToAction
        title="Préparer une répétition, une audition ou un projet musical"
        text="Chaque accompagnement dépend du programme, du niveau de préparation et de l'échéance prévue. Un premier échange permet de clarifier le cadre le plus adapté."
        links={[
          { href: '/tarifs', label: 'Consulter les tarifs' },
          { href: '/contact', label: 'Me contacter' },
        ]}
      />
    </>
  );
}
