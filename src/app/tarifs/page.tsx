import type { Metadata } from 'next';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Tarifs | Vincent Mardon',
  description:
    'Tarifs des prestations de Vincent Mardon, pianiste accompagnateur en Île-de-France : accompagnement, cours particuliers, concerts et projets spécifiques.',
};

export default function TarifsPage() {
  return <MarkdownPage fileName="tarifs.md" />;
}
