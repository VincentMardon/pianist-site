import { describe, expect, it } from 'vitest';
import { getFieldError } from './contactFormValidation';

describe('getFieldError', () => {
  it('requires every field', () => {
    expect(getFieldError('name', '')).toBe('Ce champ est requis.');
    expect(getFieldError('email', '')).toBe('Ce champ est requis.');
    expect(getFieldError('subject', '')).toBe('Ce champ est requis.');
    expect(getFieldError('message', '')).toBe('Ce champ est requis.');
  });

  it('validates email format', () => {
    expect(getFieldError('email', 'not-an-email')).toBe('Indiquez une adresse email valide.');
    expect(getFieldError('email', 'vincent@example.fr')).toBe('');
  });

  it('validates minimum lengths', () => {
    expect(getFieldError('name', 'V')).toBe('Le nom doit contenir au moins 2 caractères.');
    expect(getFieldError('subject', 'ok')).toBe("L'objet doit contenir au moins 3 caractères.");
    expect(getFieldError('message', 'To short')).toBe('Le message doit contenir au moins 10 caractères.');
  });
});
