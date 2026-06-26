import { afterEach, describe, expect, it, vi } from 'vitest';
import { POST } from './route';

const sendEmail = vi.fn();

vi.mock('resend', () => ({
  Resend: class {
    emails = {
      send: sendEmail,
    };

    constructor(_apiKey: string) {}
  },
}));

const createRequest = (formValues: Record<string, string>) => {
  const formData = new FormData();

  Object.entries(formValues).forEach(([key, value]) => {
    formData.set(key, value);
  });

  return new Request('https://example.com/api/contact', {
    method: 'POST',
    body: formData,
  });
};

afterEach(() => {
  vi.clearAllMocks();

  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_TO_EMAIL;
  delete process.env.CONTACT_FROM_EMAIL;
});

describe('contact API route', () => {
  it('sends an email and redirects as sent when submitted values are valid', async () => {
    process.env.RESEND_API_KEY = 'test-key';
    process.env.CONTACT_TO_EMAIL = 'contact@example.com';
    process.env.CONTACT_FROM_EMAIL = 'site@example.com';

    sendEmail.mockResolvedValueOnce({ error: null });

    const response = await POST(
      createRequest({
        name: 'Vincent',
        email: 'vincent@example.fr',
        subject: 'Cours',
        message: 'Bonjour, je cherche un cours de piano.',
      }),
    );

    expect(sendEmail).toHaveBeenCalledOnce();

    const sentEmail = sendEmail.mock.calls[0][0];

    expect(sentEmail).toMatchObject({
      from: 'site@example.com',
      to: 'contact@example.com',
      replyTo: 'vincent@example.fr',
      subject: 'Nouveau message - Cours',
    });

    expect(sentEmail.text).toContain('Nom : Vincent');
    expect(sentEmail.text).toContain('Email : vincent@example.fr');
    expect(sentEmail.text).toContain('Objet : Cours');
    expect(sentEmail.text).toContain('Message :');
    expect(sentEmail.text).toContain('Bonjour, je cherche un cours de piano.');

    expect(response.status).toBe(303);
    expect(response.headers.get('location')).toBe('https://example.com/contact?sent=1');
  });

  it('redirects with an error when Resend fails', async () => {
    process.env.RESEND_API_KEY = 'test-key';
    process.env.CONTACT_TO_EMAIL = 'contact@example.com';
    process.env.CONTACT_FROM_EMAIL = 'site@example.com';

    sendEmail.mockResolvedValueOnce({ error: new Error('Resend failed') });

    const response = await POST(
      createRequest({
        name: 'Vincent',
        email: 'vincent@gmail.fr',
        subject: 'Cours',
        message: 'Bonjour, je cherche un cours de piano.',
      }),
    );

    expect(sendEmail).toHaveBeenCalledOnce();
    expect(response.status).toBe(303);
    expect(response.headers.get('location')).toBe('https://example.com/contact?error=1');
  });

  it('redirects with an error when email environment variables are missing', async () => {
    const response = await POST(
      createRequest({
        name: 'Vincent',
        email: 'vincent@example.fr',
        subject: 'Cours',
        message: 'Bonjour, je cherche un cours de piano.',
      }),
    );

    expect(sendEmail).not.toHaveBeenCalled();
    expect(response.status).toBe(303);
    expect(response.headers.get('location')).toBe('https://example.com/contact?error=1');
  });

  it('redirects with an error when submitted values are invalid', async () => {
    const response = await POST(
      createRequest({
        name: 'V',
        email: 'invalid-email',
        subject: 'OK',
        message: 'Court',
      }),
    );

    expect(response.status).toBe(303);
    expect(response.headers.get('location')).toBe('https://example.com/contact?error=1');
  });

  it('Redirects as sent when the honeypot field is filled', async () => {
    const response = await POST(
      createRequest({
        name: '',
        email: '',
        subject: '',
        message: '',
        website: 'bot',
      }),
    );

    expect(response.status).toBe(303);
    expect(response.headers.get('location')).toBe('https://example.com/contact?sent=1');
  });
});
