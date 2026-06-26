import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useContactFormState } from './useContactFormState';

describe('useContactFormState', () => {
  it('starts with idle fields', () => {
    const { result } = renderHook(() => useContactFormState());

    expect(result.current.values).toEqual({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    expect(result.current.getStatus('name')).toBe('idle');
    expect(result.current.getStatus('email')).toBe('idle');
    expect(result.current.getStatus('subject')).toBe('idle');
    expect(result.current.getStatus('message')).toBe('idle');
  });

  it('marks a blurred empty field as invalid', () => {
    const { result } = renderHook(() => useContactFormState());

    act(() => {
      result.current.handleBlur('name');
    });

    expect(result.current.getStatus('name')).toBe('invalid');
  });

  it('marks a valid changed and blurred field as valid', () => {
    const { result } = renderHook(() => useContactFormState());

    act(() => {
      result.current.handleChange('name', 'Vincent');
      result.current.handleBlur('name');
    });

    expect(result.current.values.name).toBe('Vincent');
    expect(result.current.getStatus('name')).toBe('valid');
  });

  it('marks every field as touched on submit validation', () => {
    const { result } = renderHook(() => useContactFormState());

    act(() => {
      result.current.touchAllFields();
    });

    expect(result.current.getStatus('name')).toBe('invalid');
    expect(result.current.getStatus('email')).toBe('invalid');
    expect(result.current.getStatus('subject')).toBe('invalid');
    expect(result.current.getStatus('message')).toBe('invalid');
  });
});
