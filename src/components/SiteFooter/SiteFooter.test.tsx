import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SiteFooter from './SiteFooter';

describe('SiteFooter', () => {
  it('renders footer navigation links', () => {
    render(<SiteFooter />);

    expect(
      screen.getByRole('navigation', {
        name: /navigation secondaire/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: /mentions légales/i,
      }),
    ).toHaveAttribute('href', '/mentions-legales');

    expect(
      screen.getByRole('link', {
        name: /contact/i,
      }),
    ).toHaveAttribute('href', '/contact');
  });

  it('renders copyright notice', () => {
    render(<SiteFooter />);

    expect(screen.getByText(/© 2026 Vincent Mardon/i)).toBeInTheDocument();
  });
});
