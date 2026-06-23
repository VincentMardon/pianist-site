import type { Metadata } from 'next';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Présentation',
  description:
    "Parcours de Vincent Mardon, pianiste accompagnateur indépendant en Île-de-France, formé au piano classique et engagé dans l'accompagnement des musiciens.",
};

export default function PresentationPage() {
  return <MarkdownPage fileName="presentation.md" />;
}
