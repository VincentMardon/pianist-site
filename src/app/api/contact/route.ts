import { NextResponse } from 'next/server';
import { Resend } from 'resend';

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

  const name = getFormValue(formData, 'name');
  const email = getFormValue(formData, 'email');
  const subject = getFormValue(formData, 'subject');
  const message = getFormValue(formData, 'message');
  const website = getFormValue(formData, 'website');

  if (website) {
    return redirectToContact(request, 'sent');
  }

  if (!name || !email || !subject || !message) {
    return redirectToContact(request, 'error');
  }

  if (!resendApiKey || !contactToEmail || !contactFromEmail) {
    return redirectToContact(request, 'error');
  }

  const resend = new Resend(resendApiKey);

  const { error } = await resend.emails.send({
    from: contactFromEmail,
    to: contactToEmail,
    replyTo: email,
    subject: `Nouveau message - ${subject}`,
    text: `
      Nom : ${name}
      Email : ${email}
      Objet : ${subject}

      Message :
      ${message}
    `.trim(),
  });

  if (error) {
    return redirectToContact(request, 'error');
  }

  return redirectToContact(request, 'sent');
}
