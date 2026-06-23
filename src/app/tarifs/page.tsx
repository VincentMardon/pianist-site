import type { Metadata } from 'next';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Tarifs',
  description:
    'Tarifs de Vincent Mardon pour accompagnement musical, cours de piano, accompagnement pédagogique, concerts, demi-journées, journées et projets projets sur devis.',
};

export default function TarifsPage() {
  return <MarkdownPage fileName="tarifs.md" />;
}
