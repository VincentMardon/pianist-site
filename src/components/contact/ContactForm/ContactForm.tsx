'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import * as styles from './ContactForm.css';
import ContactField from './ContactField';
import ContactTextareaField from './ContactTextareaField';
import type { FieldName, FieldValues, TouchedFields } from './contactFormTypes';
import { getFieldError, getFieldStatus, initialTouched, initialValues } from './contactFormValidation';
import ContactSubmitButton from './ContactSubmitButton';

const fieldNames: FieldName[] = ['name', 'email', 'subject', 'message'];

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<FieldValues>(initialValues);
  const [touchedFields, setTouchedFields] = useState<TouchedFields>(initialTouched);

  const getStatus = (name: FieldName) => getFieldStatus(name, values, touchedFields);

  const handleChange = (name: FieldName, value: string) => {
    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleBlur = (name: FieldName) => {
    setTouchedFields((currentTouchedFields) => ({
      ...currentTouchedFields,
      [name]: true,
    }));
  };

  const getCurrentFormValues = useCallback(() => {
    const form = formRef.current;

    if (!form) {
      return initialValues;
    }

    const formData = new FormData(form);

    return fieldNames.reduce<FieldValues>((currentValues, fieldName) => {
      const value = formData.get(fieldName);

      return {
        ...currentValues,
        [fieldName]: typeof value === 'string' ? value : '',
      };
    }, initialValues);
  }, []);

  const syncAutofilledFields = useCallback(() => {
    const currentFormValues = getCurrentFormValues();

    const hasAutofilledValue = fieldNames.some((fieldName) => currentFormValues[fieldName].trim());

    if (!hasAutofilledValue) {
      return;
    }

    setValues(currentFormValues);

    setTouchedFields((currentTouchedFields) =>
      fieldNames.reduce<TouchedFields>(
        (nextTouchedFields, fieldName) => ({
          ...nextTouchedFields,
          [fieldName]: currentTouchedFields[fieldName] || Boolean(currentFormValues[fieldName].trim()),
        }),
        currentTouchedFields,
      ),
    );
  }, [getCurrentFormValues]);

  const scheduleAutofillSync = useCallback(() => {
    window.setTimeout(() => {
      syncAutofilledFields();
    }, 0);
  }, [syncAutofilledFields]);

  useEffect(() => {
    const animationFrameId = window.requestAnimationFrame(() => {
      syncAutofilledFields();
    });

    const timeoutId = window.setTimeout(() => {
      syncAutofilledFields();
    }, 300);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.clearTimeout(timeoutId);
    };
  }, [syncAutofilledFields]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const currentFormValues = getCurrentFormValues();

    setValues(currentFormValues);

    const errors = Object.entries(currentFormValues).filter(([fieldName, value]) =>
      getFieldError(fieldName as FieldName, value),
    );

    if (errors.length === 0) {
      return;
    }

    event.preventDefault();

    setTouchedFields({
      name: true,
      email: true,
      subject: true,
      message: true,
    });
  };

  return (
    <form
      ref={formRef}
      className={styles.form}
      action="/api/contact"
      method="post"
      onSubmit={handleSubmit}
      onFocusCapture={scheduleAutofillSync}
      onBlurCapture={scheduleAutofillSync}
      noValidate
    >
      <ContactField
        name="name"
        label="Nom"
        type="text"
        value={values.name}
        status={getStatus('name')}
        error={getFieldError('name', values.name)}
        autoComplete="name"
        placeholder="Votre nom"
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <ContactField
        name="email"
        label="Adresse email"
        type="email"
        value={values.email}
        status={getStatus('email')}
        error={getFieldError('email', values.email)}
        autoComplete="email"
        placeholder="votre@email.fr"
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <ContactField
        name="subject"
        label="Objet"
        type="text"
        value={values.subject}
        status={getStatus('subject')}
        error={getFieldError('subject', values.subject)}
        placeholder="Objet de votre demande"
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <ContactTextareaField
        name="message"
        label="Message"
        value={values.message}
        status={getStatus('message')}
        error={getFieldError('message', values.message)}
        placeholder="Votre message"
        rows={8}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Site web</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <ContactSubmitButton />
    </form>
  );
}
