import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ContactField from './ContactField';

describe('ContactField', () => {
  it('renders a labelled input', () => {
    render(
      <ContactField
        name="email"
        label="Adresse email"
        type="email"
        value=""
        status="idle"
        error=""
        placeholder="votre@email.fr"
        autoComplete="email"
        onChange={vi.fn()}
        onBlur={vi.fn()}
      />,
    );

    const input = screen.getByLabelText('Adresse email');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'email');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('placeholder', 'votre@email.fr');
    expect(input).toHaveAttribute('autoComplete', 'email');
  });

  it('calls onChange with the field name and value', () => {
    const handleChange = vi.fn();

    render(
      <ContactField
        name="email"
        label="Adresse email"
        type="email"
        value=""
        status="idle"
        error=""
        placeholder="votre@email,fr"
        onChange={handleChange}
        onBlur={vi.fn()}
      />,
    );

    fireEvent.change(screen.getByLabelText('Adresse email'), {
      target: { value: 'test@example.com' },
    });

    expect(handleChange).toHaveBeenCalledWith('email', 'test@example.com');
  });

  it('calls onBlur with the field name', () => {
    const handleBlur = vi.fn();

    render(
      <ContactField
        name="email"
        label="Adresse email"
        type="email"
        value=""
        status="idle"
        error=""
        placeholder="votre@email.fr"
        onChange={vi.fn()}
        onBlur={handleBlur}
      />,
    );

    fireEvent.blur(screen.getByLabelText('Adresse email'));

    expect(handleBlur).toHaveBeenCalledWith('email');
  });

  it('renders an error message when invalid', () => {
    render(
      <ContactField
        name="email"
        label="Adresse email"
        type="email"
        value="adresse-invalide"
        status="invalid"
        error="Indiquez une adresse email valide."
        placeholder="votre@email.fr"
        onChange={vi.fn()}
        onBlur={vi.fn()}
      />,
    );

    const input = screen.getByLabelText('Adresse email');

    expect(screen.getByText('Indiquez une adresse email valide.')).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-describedby', 'email-error');
  });

  it('does not render an error message when valid', () => {
    render(
      <ContactField
        name="email"
        label="Adresse email"
        type="email"
        value="test@example.com"
        status="valid"
        error=""
        placeholder="votre@email.fr"
        onChange={vi.fn()}
        onBlur={vi.fn()}
      />,
    );

    expect(screen.queryByText('Indiquez une adresse email valide.')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Adresse email')).toHaveAttribute('aria-invalid', 'false');
  });
});
