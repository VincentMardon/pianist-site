import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  it('renders the contact form fields', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText('Nom')).toBeInTheDocument();
    expect(screen.getByLabelText('Adresse email')).toBeInTheDocument();
    expect(screen.getByLabelText('Objet')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Envoyer' })).toBeInTheDocument();
  });

  it('submits to the contact API route', () => {
    render(<ContactForm />);

    const form = screen.getByRole('button', { name: 'Envoyer' }).closest('form');

    expect(form).toHaveAttribute('action', '/api/contact');
    expect(form).toHaveAttribute('method', 'post');
  });
});
