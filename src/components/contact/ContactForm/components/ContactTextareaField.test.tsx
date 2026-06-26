import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ContactTextareaField from './ContactTextareaField';

describe('ContactTextareaField', () => {
  it('renders a labelled textarea', () => {
    render(
      <ContactTextareaField
        name="message"
        label="Message"
        value=""
        status="idle"
        error=""
        placeholder="Votre message"
        rows={8}
        onChange={vi.fn()}
        onBlur={vi.fn()}
      />,
    );

    const textarea = screen.getByLabelText('Message');

    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('name', 'message');
    expect(textarea).toHaveAttribute('placeholder', 'Votre message');
    expect(textarea).toHaveAttribute('rows', '8');
  });

  it('calls onChange with the field name and value', () => {
    const handleChange = vi.fn();

    render(
      <ContactTextareaField
        name="message"
        label="Message"
        value=""
        status="idle"
        error=""
        placeholder="Votre message"
        rows={8}
        onChange={handleChange}
        onBlur={vi.fn()}
      />,
    );

    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'Un message de test.' },
    });

    expect(handleChange).toHaveBeenCalledWith('message', 'Un message de test.');
  });

  it('calls onBlur with the field name', () => {
    const handleBlur = vi.fn();

    render(
      <ContactTextareaField
        name="message"
        label="Message"
        value=""
        status="idle"
        error=""
        placeholder="Votre message"
        rows={8}
        onChange={vi.fn()}
        onBlur={handleBlur}
      />,
    );

    fireEvent.blur(screen.getByLabelText('Message'));

    expect(handleBlur).toHaveBeenCalledWith('message');
  });

  it('renders an error message when invalid', () => {
    render(
      <ContactTextareaField
        name="message"
        label="Message"
        value="To short"
        status="invalid"
        error="Le message doit contenir au moins 10 caractères."
        placeholder="Votre message"
        rows={8}
        onChange={vi.fn()}
        onBlur={vi.fn()}
      />,
    );

    const textarea = screen.getByLabelText('Message');

    expect(screen.getByText('Le message doit contenir au moins 10 caractères.')).toBeInTheDocument();
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
    expect(textarea).toHaveAttribute('aria-describedby', 'message-error');
  });
});
