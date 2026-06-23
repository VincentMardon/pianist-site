import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import MarkdownPage from './MarkdownPage';

describe('MarkdownPage', () => {
  it('renders markdown headings', async () => {
    render(await MarkdownPage({ fileName: 'tarifs.md' }));

    expect(screen.getByRole('heading', { level: 1, name: /tarifs/i })).toBeInTheDocument();
  });

  it('renders markdown tables', async () => {
    render(await MarkdownPage({ fileName: 'tarifs.md' }));

    expect(screen.getAllByRole('table')).toHaveLength(4);

    expect(
      screen.getAllByRole('columnheader', {
        name: /prestation/i,
      }),
    ).toHaveLength(4);

    expect(
      screen.getAllByRole('columnheader', {
        name: /tarif/i,
      }),
    ).toHaveLength(4);

    expect(screen.getByText(/accompagnement ponctuel/i)).toBeInTheDocument();
    expect(screen.getByText(/^60 €\/h$/i)).toBeInTheDocument();
    expect(screen.getByText(/cours débutant/i)).toBeInTheDocument();
    expect(screen.getByText(/^40 à 60 €\/h$/i)).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: /me contacter/i,
      }),
    ).toHaveAttribute('href', '/contact');
  });
});
