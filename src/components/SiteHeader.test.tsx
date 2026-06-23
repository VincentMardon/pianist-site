import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SiteHeader from './SiteHeader';

describe('SiteHeader', () => {
  it('renders main navigation links', () => {
    render(<SiteHeader />);

    expect(
      screen.getByRole('navigation', {
        name: /navigation principale/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: /accueil/i,
      }),
    ).toHaveAttribute('href', '/');

    expect(
      screen.getByRole('link', {
        name: /présentation/i,
      }),
    ).toHaveAttribute('href', '/presentation');

    expect(
      screen.getByRole('link', {
        name: /pédagogie/i,
      }),
    ).toHaveAttribute('href', '/pedagogie');

    expect(
      screen.getByRole('link', {
        name: /tarifs/i,
      }),
    ).toHaveAttribute('href', '/tarifs');

    expect(
      screen.getByRole('link', {
        name: /contact/i,
      }),
    ).toHaveAttribute('href', '/contact');
  });
});
