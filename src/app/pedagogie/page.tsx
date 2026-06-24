import type { Metadata } from 'next';
import CallToAction from '@/components/CallToAction';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Pédagogie',
  description:
    'Méthode pédagogique de Vincent Mardon : travail du piano, interprétation, technique, autonomie et progression adaptée à chaque élève.',
};

export default function PedagogiePage() {
  return (
    <>
      <MarkdownPage fileName="pedagogie.md" />

      <CallToAction
        title="Échanger autour d'un objectif musical"
        text="Chaque accompagnement dépend du niveau, du contexte et de la manière de travailler. Un premier échange permet de clarifier le cadre le plus adapté."
        links={[
          { href: '/tarifs', label: 'Consulter les tarifs' },
          { href: '/contact', label: 'Me contacter' },
        ]}
      />
    </>
  );
}
