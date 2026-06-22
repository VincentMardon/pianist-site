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

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /prestation/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /tarif/i })).toBeInTheDocument();
    expect(screen.getAllByRole('cell', { name: /50 €\/h/i })).toHaveLength(2);
  });
});
