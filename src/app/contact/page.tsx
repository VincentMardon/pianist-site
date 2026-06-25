import type { Metadata } from 'next';
import ContactPageContent from '@/components/contact/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contacter Vincent Mardon pour un accompagnement musical, une répétition, un concert, un cours ou une demande de devis en Île-de-France.',
};

type ContactPageProps = {
  searchParams: Promise<{
    sent?: string;
    error?: string;
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;

  return <ContactPageContent isSent={params.sent === '1'} hasError={params.error === '1'} />;
}
