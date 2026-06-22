import type { Metadata } from 'next';
import MarkdownPage from '@/components/MarkdownPage';

export const metadata: Metadata = {
  title: 'Contact | Vincent Mardon',
  description:
    'Contacter Vincent Mardon pour un accompagnement musical, une répétition, un concert, un cours ou un devsi personnalisé en Île-de-France.',
};

export default function ContactPage() {
  return <MarkdownPage fileName="contact.md" />;
}
