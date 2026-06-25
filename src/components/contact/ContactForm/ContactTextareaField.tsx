import * as styles from './ContactForm.css';
import type { FieldName, FieldStatus } from './contactFormTypes';
import { getClassName } from './getClassName';

type ContactTextareaFieldProps = {
  name: FieldName;
  label: string;
  value: string;
  status: FieldStatus;
  error: string;
  placeholder: string;
  rows: number;
  onChange: (name: FieldName, value: string) => void;
  onBlur: (name: FieldName) => void;
};

export default function ContactTextareaField({
  name,
  label,
  value,
  status,
  error,
  placeholder,
  rows,
  onChange,
  onBlur,
}: ContactTextareaFieldProps) {
  const fieldGroupClassName = getClassName(
    styles.fieldGroup,
    status === 'valid' && styles.fieldGroupValid,
    status === 'invalid' && styles.fieldGroupInvalid,
  );

  const textareaClassName = getClassName(
    styles.textarea,
    status === 'valid' && styles.inputValid,
    status === 'invalid' && styles.inputInvalid,
  );

  const textareaFrameClassName = getClassName(
    styles.textareaFrame,
    status === 'valid' && styles.textareaFrameValid,
    status === 'invalid' && styles.textareaFrameInvalid,
  );

  const isInvalid = status === 'invalid';
  const errorId = `${name}-error`;

  return (
    <div className={fieldGroupClassName}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      <div className={textareaFrameClassName}>
        <textarea
          id={name}
          name={name}
          rows={rows}
          className={textareaClassName}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(name, event.currentTarget.value)}
          onBlur={() => onBlur(name)}
          aria-invalid={isInvalid}
          aria-describedby={isInvalid ? errorId : undefined}
          required
        />
      </div>

      {isInvalid && error && (
        <p id={errorId} className={styles.fieldError}>
          {error}
        </p>
      )}
    </div>
  );
}
