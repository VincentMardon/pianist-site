import { Metadata } from 'next';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Pédagogie | Vincent Mardon',
  description:
    'Méthode pédagogique de Vincent Mardon : accompagnement musical, travail du piano, interprétation, technique et progression adaptée à chaque élève.',
};

export default function PedagogiePage() {
  return <MarkdownPage fileName="pedagogie.md" />;
}
