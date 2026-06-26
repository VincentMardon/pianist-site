import { useCallback, useEffect } from 'react';
import { fieldNames } from '../model/contactFormFields';
import type { FieldValues, TouchedFields } from '../model/contactFormTypes';
import { initialValues } from '../model/contactFormValidation';

type UseAutofillSyncParameters = {
  formRef: React.RefObject<HTMLFormElement | null>;
  setValues: React.Dispatch<React.SetStateAction<FieldValues>>;
  setTouchedFields: React.Dispatch<React.SetStateAction<TouchedFields>>;
};

export function useAutofillSync({ formRef, setValues, setTouchedFields }: UseAutofillSyncParameters) {
  const getCurrentFormValues = useCallback(() => {
    const form = formRef.current;

    if (!form) {
      return initialValues;
    }

    const formData = new FormData(form);

    return fieldNames.reduce<FieldValues>(
      (currentValues, fieldName) => {
        const value = formData.get(fieldName);

        return {
          ...currentValues,
          [fieldName]: typeof value === 'string' ? value : '',
        };
      },
      { ...initialValues },
    );
  }, [formRef]);

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
  }, [getCurrentFormValues, setTouchedFields, setValues]);

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

  return {
    getCurrentFormValues,
    scheduleAutofillSync,
  };
}
