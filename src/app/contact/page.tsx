import type { Metadata } from 'next';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contacter Vincent Mardon pour un accompagnement musical, une répétition, un concert, un cours ou une demande de devis en Île-de-France.',
};

export default function ContactPage() {
  return <MarkdownPage fileName="contact.md" />;
}
