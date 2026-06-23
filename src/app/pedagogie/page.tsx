import type { Metadata } from 'next';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Pédagogie',
  description:
    'Méthode pédagogique de Vincent Mardon : travail du piano, interprétation, technique, autonomie et progression adaptée à chaque élève.',
};

export default function PedagogiePage() {
  return <MarkdownPage fileName="pedagogie.md" />;
}
