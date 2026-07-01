import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a>,
}));

import HomeContent from './HomeContent';

describe('HomeContent', () => {
  it('renders the main heading', () => {
    render(<HomeContent />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /vincent mardon - pianiste/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders main navigation links', () => {
    render(<HomeContent />);

    expect(
      screen.getByRole('link', {
        name: /^en savoir plus$/i,
      }),
    ).toHaveAttribute('href', '/presentation');

    expect(
      screen.getByRole('link', {
        name: /consulter les tarifs/i,
      }),
    ).toHaveAttribute('href', '/tarifs');

    expect(
      screen.getByRole('link', {
        name: /en savoir plus sur ma méthode pédagogique/i,
      }),
    ).toHaveAttribute('href', '/pedagogie');

    expect(
      screen.getByRole('link', {
        name: /me contacter/i,
      }),
    ).toHaveAttribute('href', '/contact');
  });

  it('renders all section headings', () => {
    render(<HomeContent />);

    expect(screen.getByRole('heading', { name: /prestations/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /une approche simple/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument();
  });
});
