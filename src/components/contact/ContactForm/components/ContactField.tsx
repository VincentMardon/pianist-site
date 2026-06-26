import * as styles from './ContactField.css';
import type { FieldName, FieldStatus } from '../model/contactFormTypes';
import { getClassName } from '../utils/getClassName';

type ContactFieldProps = {
  name: FieldName;
  label: string;
  type: 'text' | 'email';
  value: string;
  status: FieldStatus;
  error: string;
  placeholder: string;
  autoComplete?: string;
  onChange: (name: FieldName, value: string) => void;
  onBlur: (name: FieldName) => void;
};

export default function ContactField({
  name,
  label,
  type,
  value,
  status,
  error,
  placeholder,
  autoComplete,
  onChange,
  onBlur,
}: ContactFieldProps) {
  const fieldGroupClassName = getClassName(
    styles.fieldGroup,
    status === 'valid' && styles.fieldGroupValid,
    status === 'invalid' && styles.fieldGroupInvalid,
  );

  const inputClassName = getClassName(
    styles.input,
    status === 'valid' && styles.inputValid,
    status === 'invalid' && styles.inputInvalid,
  );

  const isInvalid = status === 'invalid';
  const errorId = `${name}-error`;

  return (
    <div className={fieldGroupClassName}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        className={inputClassName}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(name, event.currentTarget.value)}
        onBlur={() => onBlur(name)}
        aria-invalid={isInvalid}
        aria-describedby={isInvalid ? errorId : undefined}
        required
      />

      {isInvalid && error && (
        <p id={errorId} className={styles.fieldError}>
          {error}
        </p>
      )}
    </div>
  );
}
