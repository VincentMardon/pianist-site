import type { FieldName, FieldStatus, FieldValues, TouchedFields } from './contactFormTypes';

export const initialValues: FieldValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export const initialTouched: TouchedFields = {
  name: false,
  email: false,
  subject: false,
  message: false,
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const getFieldError = (name: FieldName, value: string) => {
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

export const getFieldStatus = (name: FieldName, values: FieldValues, touchedFields: TouchedFields): FieldStatus => {
  if (!touchedFields[name]) {
    return 'idle';
  }

  return getFieldError(name, values[name]) ? 'invalid' : 'valid';
};
