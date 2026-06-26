'use client';

import { useRef } from 'react';
import * as styles from './ContactForm.css';
import ContactField from './components/ContactField';
import ContactSubmitButton from './components/ContactSubmitButton';
import ContactTextareaField from './components/ContactTextareaField';
import HoneypotField from './components/HoneypotField';
import { useAutofillSync } from './hooks/useAutofillSync';
import { useContactFormState } from './hooks/useContactFormState';
import { contactFields, fieldNames } from './model/contactFormFields';
import { getFieldError } from './model/contactFormValidation';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const { values, setValues, setTouchedFields, getStatus, handleChange, handleBlur, touchAllFields } =
    useContactFormState();

  const { getCurrentFormValues, scheduleAutofillSync } = useAutofillSync({
    formRef,
    setValues,
    setTouchedFields,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const currentFormValues = getCurrentFormValues();

    setValues(currentFormValues);

    const errors = fieldNames.filter((fieldName) => getFieldError(fieldName, currentFormValues[fieldName]));

    if (errors.length === 0) {
      return;
    }

    event.preventDefault();
    touchAllFields();
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
      {contactFields.map((field) => (
        <ContactField
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
          value={values[field.name]}
          status={getStatus(field.name)}
          error={getFieldError(field.name, values[field.name])}
          autoComplete={field.autoComplete}
          placeholder={field.placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ))}

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

      <HoneypotField />

      <ContactSubmitButton />
    </form>
  );
}
