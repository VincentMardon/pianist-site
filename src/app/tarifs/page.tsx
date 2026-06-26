import type { Metadata } from 'next';
import CallToAction from '@/components/CallToAction';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Tarifs',
  description:
    'Tarifs de Vincent Mardon pour accompagnement musical, cours de piano, accompagnement pédagogique, concerts, demi-journées, journées et projets sur devis.',
};

export default function TarifsPage() {
  return (
    <>
      <MarkdownPage fileName="tarifs.md" />
      <CallToAction
        title="Préciser une demande"
        text="Pour un accompagnement ponctuel, un cours, une répétition longue ou un projet spécifique, vous pouvez me contacter afin de définir le cadre le plus adapté"
        links={[{ href: '/contact', label: 'Me contacter' }]}
      />
    </>
  );
}
