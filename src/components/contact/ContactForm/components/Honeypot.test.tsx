import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HoneypotField from './HoneypotField';

describe('HoneypotField', () => {
  it('renders a hidden website field for a spam prevention', () => {
    render(<HoneypotField />);

    const input = screen.getByLabelText('Site web');
    const wrapper = input.closest('div');

    expect(input).toHaveAttribute('name', 'website');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('autocomplete', 'off');
    expect(input).toHaveAttribute('tabindex', '-1');
    expect(wrapper).toHaveAttribute('aria-hidden', 'true');
  });
});
