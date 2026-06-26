import type { FieldName } from '@/lib/contact/contactFormTypes';
type ContactFieldConfig = {
  name: Exclude<FieldName, 'message'>;
  label: string;
  type: 'text' | 'email';
  placeholder: string;
  autoComplete?: string;
};

export const contactFields = [
  {
    name: 'name',
    label: 'Nom',
    type: 'text',
    autoComplete: 'name',
    placeholder: 'Votre nom',
  },
  {
    name: 'email',
    label: 'Adresse email',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'votre@email.fr',
  },
  {
    name: 'subject',
    label: 'Objet',
    type: 'text',
    autoComplete: undefined,
    placeholder: 'Objet de votre demande',
  },
] as const satisfies readonly ContactFieldConfig[];
