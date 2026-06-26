import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { FieldValues, TouchedFields } from '@/lib/contact/contactFormTypes';
import { useAutofillSync } from './useAutofillSync';

const emptyValues: FieldValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const emptyTouchedFields: TouchedFields = {
  name: false,
  email: false,
  subject: false,
  message: false,
};

const createContactForm = (values: Partial<FieldValues> = {}) => {
  const form = document.createElement('form');

  const nameInput = document.createElement('input');
  nameInput.name = 'name';
  nameInput.value = values.name ?? '';

  const emailInput = document.createElement('input');
  emailInput.name = 'email';
  emailInput.value = values.email ?? '';

  const subjectInput = document.createElement('input');
  subjectInput.name = 'subject';
  subjectInput.value = values.subject ?? '';

  const messageTextarea = document.createElement('textarea');
  messageTextarea.name = 'message';
  messageTextarea.value = values.message ?? '';

  const honeypotInput = document.createElement('input');
  honeypotInput.name = 'website';
  honeypotInput.value = 'bot-value';

  form.append(nameInput, emailInput, subjectInput, messageTextarea, honeypotInput);

  return form;
};

const renderUseAutofillSync = (form: HTMLFormElement | null) => {
  const setValues = vi.fn();
  const setTouchedFields = vi.fn();
  const formRef = { current: form };

  const hook = renderHook(() =>
    useAutofillSync({
      formRef,
      setValues,
      setTouchedFields,
    }),
  );

  return {
    ...hook,
    setValues,
    setTouchedFields,
  };
};

afterEach(() => {
  vi.restoreAllMocks();
  vi.useRealTimers();
});

describe('useAutofillSync', () => {
  it('returns initial values when the form ref is empty', () => {
    const { result } = renderUseAutofillSync(null);

    expect(result.current.getCurrentFormValues()).toEqual(emptyValues);
  });

  it('reads contact field values from the form', () => {
    const form = createContactForm({
      name: 'Vincent',
      email: 'vincent@example.fr',
      subject: 'Cours',
      message: 'Bonjour, je cherche un accompagnateur.',
    });

    const { result } = renderUseAutofillSync(form);

    expect(result.current.getCurrentFormValues()).toEqual({
      name: 'Vincent',
      email: 'vincent@example.fr',
      subject: 'Cours',
      message: 'Bonjour, je cherche un accompagnateur.',
    });
  });

  it('ignores fields outside the contact form model', () => {
    const form = createContactForm({
      name: 'Vincent',
    });

    const { result } = renderUseAutofillSync(form);

    expect(result.current.getCurrentFormValues()).not.toHaveProperty('website');
  });

  it('does not sync values when every contact field is empty', () => {
    vi.useFakeTimers();

    const form = createContactForm();
    const { result, setValues, setTouchedFields } = renderUseAutofillSync(form);

    act(() => {
      result.current.scheduleAutofillSync();
      vi.runOnlyPendingTimers();
    });

    expect(setValues).not.toHaveBeenCalled();
    expect(setTouchedFields).not.toHaveBeenCalled();
  });

  it('syncs autofilled values and marks filled fields as touched', () => {
    vi.useFakeTimers();

    const form = createContactForm({
      name: 'Vincent',
      email: 'vincent@example.fr',
    });

    const { result, setValues, setTouchedFields } = renderUseAutofillSync(form);

    act(() => {
      result.current.scheduleAutofillSync();
      vi.runOnlyPendingTimers();
    });

    expect(setValues).toHaveBeenCalledWith({
      name: 'Vincent',
      email: 'vincent@example.fr',
      subject: '',
      message: '',
    });

    expect(setTouchedFields).toHaveBeenCalled();

    const updateTouchedFields = setTouchedFields.mock.lastCall?.[0] as (
      currentTouchedFields: TouchedFields,
    ) => TouchedFields;

    expect(updateTouchedFields(emptyTouchedFields)).toEqual({
      name: true,
      email: true,
      subject: false,
      message: false,
    });
  });

  it('preserves fields that were already touched during autofill sync', () => {
    vi.useFakeTimers();

    const form = createContactForm({
      email: 'vincent@example.fr',
    });

    const { result, setTouchedFields } = renderUseAutofillSync(form);

    act(() => {
      result.current.scheduleAutofillSync();
      vi.runOnlyPendingTimers();
    });

    const updateTouchedFields = setTouchedFields.mock.lastCall?.[0] as (
      currentTouchedFields: TouchedFields,
    ) => TouchedFields;

    expect(
      updateTouchedFields({
        name: true,
        email: false,
        subject: false,
        message: true,
      }),
    ).toEqual({
      name: true,
      email: true,
      subject: false,
      message: true,
    });
  });
});
