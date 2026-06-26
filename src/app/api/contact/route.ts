import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import type { FieldValues } from '@/lib/contact/contactFormTypes';
import { isValidContactForm } from '@/lib/contact/contactFormValidation';

const getFormValue = (formData: FormData, key: string) => {
  const value = formData.get(key);

  if (typeof value !== 'string') {
    return '';
  }

  return value.trim();
};

const redirectToContact = (request: Request, status: 'sent' | 'error') => {
  const url = new URL('/contact', request.url);
  url.searchParams.set(status, '1');

  return NextResponse.redirect(url, { status: 303 });
};

export async function POST(request: Request) {
  const formData = await request.formData();

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

  const values: FieldValues = {
    name: getFormValue(formData, 'name'),
    email: getFormValue(formData, 'email'),
    subject: getFormValue(formData, 'subject'),
    message: getFormValue(formData, 'message'),
  };

  const website = getFormValue(formData, 'website');

  if (website) {
    return redirectToContact(request, 'sent');
  }

  if (!isValidContactForm(values)) {
    return redirectToContact(request, 'error');
  }

  if (!resendApiKey || !contactToEmail || !contactFromEmail) {
    return redirectToContact(request, 'error');
  }

  const resend = new Resend(resendApiKey);

  const { error } = await resend.emails.send({
    from: contactFromEmail,
    to: contactToEmail,
    replyTo: values.email,
    subject: `Nouveau message - ${values.subject}`,
    text: `
      Nom : ${values.name}
      Email : ${values.email}
      Objet : ${values.subject}

      Message :
      ${values.message}
    `.trim(),
  });

  if (error) {
    return redirectToContact(request, 'error');
  }

  return redirectToContact(request, 'sent');
}
