import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContactPageContent from './ContactPageContent';

describe('ContactPageContent', () => {
  it('renders the contact page content', () => {
    render(<ContactPageContent isSent={false} hasError={false} />);

    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Envoyer' })).toBeInTheDocument();
  });

  it('renders a success message', () => {
    render(<ContactPageContent isSent hasError={false} />);

    expect(screen.getByText(/Votre message a bien été envoyé/i)).toBeInTheDocument();
  });

  it('renders an error message', () => {
    render(<ContactPageContent isSent={false} hasError />);

    expect(screen.getByText(/Le message n'a pas pu être envoyé/i)).toBeInTheDocument();
  });
});
