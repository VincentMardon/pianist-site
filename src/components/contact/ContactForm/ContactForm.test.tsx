import { fireEvent, render, screen } from '@testing-library/react';
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

describe('ContactForm validation', () => {
  it('does not show validation messages before a field is touched', () => {
    render(<ContactForm />);

    expect(screen.queryByText('Ce champ est requis.')).not.toBeInTheDocument();
    expect(screen.queryByText('Indiquez une adresse email valide.')).not.toBeInTheDocument();
  });

  it('shows a required error after leaving an empty required field', () => {
    render(<ContactForm />);

    fireEvent.blur(screen.getByLabelText('Nom'));

    expect(screen.getByText('Ce champ est requis.')).toBeInTheDocument();
  });

  it('shows an email error after leaving an invalid email field', () => {
    render(<ContactForm />);

    const emailInput = screen.getByLabelText('Adresse email');

    fireEvent.change(emailInput, {
      target: { value: 'adresse-invalide' },
    });

    fireEvent.blur(emailInput);

    expect(screen.getByText('Indiquez une adresse email valide.')).toBeInTheDocument();
  });

  it('reveals validation errors when submitting an empty form', () => {
    render(<ContactForm />);

    const form = screen.getByRole('button', { name: 'Envoyer' }).closest('form');

    expect(form).not.toBeNull();
    fireEvent.submit(form!);

    expect(screen.getAllByText('Ce champ est requis.')).toHaveLength(4);
  });

  it('marks an invalid touched field as aria-invalid', () => {
    render(<ContactForm />);

    const emailInput = screen.getByLabelText('Adresse email');

    fireEvent.change(emailInput, {
      target: { value: 'adresse-invalide' },
    });

    fireEvent.blur(emailInput);

    expect(emailInput).toHaveAttribute('aria-invalid', 'true');
  });
});
