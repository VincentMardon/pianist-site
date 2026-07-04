import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContactFallback from './ContactFallback';

describe('ContactFallback', () => {
  it('renders fallback contact information', () => {
    render(<ContactFallback />);

    expect(screen.getByRole('link', { name: 'contact@vincent-mardon.fr' })).toHaveAttribute(
      'href',
      'mailto:contact@vincent-mardon.fr',
    );

    expect(screen.getByRole('link', { name: 'tarifs' })).toHaveAttribute('href', '/tarifs');
  });
});
