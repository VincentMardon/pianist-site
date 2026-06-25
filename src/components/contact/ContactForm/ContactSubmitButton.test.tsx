import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContactSubmitButton from './ContactSubmitButton';

describe('ContactSubmitButton', () => {
  it('renders a submit button', () => {
    render(<ContactSubmitButton />);

    expect(screen.getByRole('button', { name: 'Envoyer' })).toHaveAttribute('type', 'submit');
  });
});
