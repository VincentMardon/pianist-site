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

  it('does not show validation messages before a field is touched', () => {
    render(<ContactForm />);

    expect(screen.queryByText('Ce champ est requis.')).not.toBeInTheDocument();
    expect(screen.queryByText('Indiquez une adresse email valide.')).not.toBeInTheDocument();
  });

  it('reveals validation errors when submitting an empty form', () => {
    render(<ContactForm />);

    const form = screen.getByRole('button', { name: 'Envoyer' }).closest('form');

    expect(form).not.toBeNull();
    fireEvent.submit(form!);

    expect(screen.getAllByText('Ce champ est requis.')).toHaveLength(4);
  });

  it('shows a valid state after correcting a touched field', () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText('Nom');

    fireEvent.blur(nameInput);

    expect(screen.getByText('Ce champ est requis.')).toBeInTheDocument();

    fireEvent.change(nameInput, { target: { value: 'Vincent' } });

    expect(screen.queryByText('Ce champ est requis.')).not.toBeInTheDocument();
  });
});
