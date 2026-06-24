import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CallToAction from './CallToAction';

describe('CallToAction', () => {
  it('renders title, text and links', () => {
    render(
      <CallToAction
        title="Un projet musical ?"
        text="Vous pouvez consulter les tarifs ou me contacter."
        links={[
          { href: '/tarifs', label: 'Consulter les tarifs' },
          { href: '/contact', label: 'Me contacter' },
        ]}
      />,
    );

    expect(
      screen.getByRole('heading', {
        name: /un projet musical/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/vous pouvez consulter les tarifs/i)).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: /consulter les tarifs/i,
      }),
    ).toHaveAttribute('href', '/tarifs');

    expect(
      screen.getByRole('link', {
        name: /me contacter/i,
      }),
    ).toHaveAttribute('href', '/contact');
  });
});
