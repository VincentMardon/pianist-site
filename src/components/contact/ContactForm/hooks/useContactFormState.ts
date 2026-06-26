import { useState } from 'react';
import type { FieldName, FieldValues, TouchedFields } from '../model/contactFormTypes';
import { getFieldStatus, initialTouched, initialValues } from '../model/contactFormValidation';

export function useContactFormState() {
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

  const touchAllFields = () => {
    setTouchedFields({
      name: true,
      email: true,
      subject: true,
      message: true,
    });
  };

  return {
    values,
    setValues,
    touchedFields,
    setTouchedFields,
    getStatus,
    handleChange,
    handleBlur,
    touchAllFields,
  };
}
