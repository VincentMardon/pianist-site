'use client';

import { useState } from 'react';
import * as styles from './ContactForm.css';

type FieldName = 'name' | 'email' | 'subject' | 'message';

type FieldValues = Record<FieldName, string>;
type TouchedFields = Record<FieldName, boolean>;

const initialValues: FieldValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const initialTouched: TouchedFields = {
  name: false,
  email: false,
  subject: false,
  message: false,
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getFieldError = (name: FieldName, value: string) => {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return 'Ce champ est requis.';
  }

  if (name === 'name' && trimmedValue.length < 2) {
    return 'Le nom doit contenir au moins 2 caractères.';
  }

  if (name === 'email' && !emailRegex.test(trimmedValue)) {
    return 'Indiquez une adresse email valide.';
  }

  if (name === 'subject' && trimmedValue.length < 3) {
    return "L'objet doit contenir au moins 3 caractères.";
  }

  if (name === 'message' && trimmedValue.length < 10) {
    return 'Le message doit contenir au moins 10 caractères.';
  }

  return '';
};

const getClassName = (...classNames: Array<string | false>) => classNames.filter(Boolean).join(' ');

export default function ContactForm() {
  const [values, setValues] = useState<FieldValues>(initialValues);
  const [touchedFields, setTouchedFields] = useState<TouchedFields>(initialTouched);

  const getStatus = (name: FieldName) => {
    if (!touchedFields[name]) {
      return 'idle';
    }

    return getFieldError(name, values[name]) ? 'invalid' : 'valid';
  };

  const getFieldGroupClassName = (name: FieldName) => {
    const status = getStatus(name);

    return getClassName(
      styles.fieldGroup,
      status === 'valid' && styles.fieldGroupValid,
      status === 'invalid' && styles.fieldGroupInvalid,
    );
  };

  const getInputClassName = (name: FieldName, baseClassName = styles.input) => {
    const status = getStatus(name);

    return getClassName(
      baseClassName,
      status === 'valid' && styles.inputValid,
      status === 'invalid' && styles.inputInvalid,
    );
  };

  const getTextareaFrameClassName = () => {
    const status = getStatus('message');

    return getClassName(
      styles.textareaFrame,
      status === 'valid' && styles.textareaFrameValid,
      status === 'invalid' && styles.textareaFrameInvalid,
    );
  };

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const errors = Object.entries(values).filter(([fieldName, value]) => getFieldError(fieldName as FieldName, value));

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

  const renderErrorMessage = (name: FieldName) => {
    const error = getFieldError(name, values[name]);

    if (!touchedFields[name] || !error) {
      return null;
    }

    return (
      <p id={`${name}-error`} className={styles.fieldError}>
        {error}
      </p>
    );
  };

  return (
    <form className={styles.form} action="/api/contact" method="post" onSubmit={handleSubmit} noValidate>
      <div className={getFieldGroupClassName('name')}>
        <label htmlFor="name" className={styles.label}>
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className={getInputClassName('name')}
          autoComplete="name"
          placeholder="Votre nom"
          value={values.name}
          onChange={(event) => handleChange('name', event.currentTarget.value)}
          onBlur={() => handleBlur('name')}
          aria-invalid={getStatus('name') === 'invalid'}
          aria-describedby={getStatus('name') === 'invalid' ? 'name-error' : undefined}
          required
        />
        {renderErrorMessage('name')}
      </div>

      <div className={getFieldGroupClassName('email')}>
        <label htmlFor="email" className={styles.label}>
          Adresse email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={getInputClassName('email')}
          autoComplete="email"
          placeholder="votre@email.fr"
          value={values.email}
          onChange={(event) => handleChange('email', event.currentTarget.value)}
          onBlur={() => handleBlur('email')}
          aria-invalid={getStatus('email') === 'invalid'}
          aria-describedby={getStatus('email') === 'invalid' ? 'email-error' : undefined}
          required
        />
        {renderErrorMessage('email')}
      </div>

      <div className={getFieldGroupClassName('subject')}>
        <label htmlFor="subject" className={styles.label}>
          Objet
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className={getInputClassName('subject')}
          placeholder="Objet de votre demande"
          value={values.subject}
          onChange={(event) => handleChange('subject', event.currentTarget.value)}
          onBlur={() => handleBlur('subject')}
          aria-invalid={getStatus('subject') === 'invalid'}
          aria-describedby={getStatus('subject') === 'invalid' ? 'subject-error' : undefined}
          required
        />
        {renderErrorMessage('subject')}
      </div>

      <div className={getFieldGroupClassName('message')}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>

        <div className={getTextareaFrameClassName()}>
          <textarea
            id="message"
            name="message"
            rows={8}
            className={getInputClassName('message', styles.textarea)}
            placeholder="Votre message"
            value={values.message}
            onChange={(event) => handleChange('message', event.currentTarget.value)}
            onBlur={() => handleBlur('message')}
            aria-invalid={getStatus('message') === 'invalid'}
            aria-describedby={getStatus('message') === 'invalid' ? 'message-error' : undefined}
            required
          />
        </div>

        {renderErrorMessage('message')}
      </div>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Site web</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className={styles.submitButton}>
        Envoyer
      </button>
    </form>
  );
}
