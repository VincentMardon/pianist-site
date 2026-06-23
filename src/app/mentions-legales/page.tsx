import type { Metadata } from 'next';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site de Vincent Mardon, pianiste accompagnateur indépendant en Île-de-France.',
};

export default function MentionsLegalesPage() {
  return <MarkdownPage fileName="mentions-legales.md" />;
}
