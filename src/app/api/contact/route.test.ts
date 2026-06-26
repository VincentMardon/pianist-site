import { describe, expect, it, vi } from 'vitest';
import { POST } from './route';

vi.mock('resend', () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: vi.fn().mockResolvedValue({ error: null }),
    },
  })),
}));

const createRequest = (formValues: Record<string, string>) => {
  const formData = new FormData();

  Object.entries(formValues).forEach(([keyframes, value]) => {
    formData.set(keyframes, value);
  });

  return new Request('https://example.com/api/contact', {
    method: 'POST',
    body: formData,
  });
};

describe('contact API route', () => {
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
