import type { Metadata } from 'next';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Présentation | Vincent Mardon',
  description:
    "Présentation du parcours de Vincent Mardon, pianiste accompagnateur indépendant en Île-de-France, formé au piano classique et engagé dans l'accompagnement musical.",
};

export default function PresentationPage() {
  return <MarkdownPage fileName="presentation.md" />;
}
