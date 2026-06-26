import * as fieldStyles from './ContactField.css';
import * as textareaStyles from './ContactTextareaField.css';
import type { FieldName, FieldStatus } from '../model/contactFormTypes';
import { getClassName } from '../utils/getClassName';

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
    fieldStyles.fieldGroup,
    status === 'valid' && fieldStyles.fieldGroupValid,
    status === 'invalid' && fieldStyles.fieldGroupInvalid,
  );

  const textareaClassName = getClassName(
    textareaStyles.textarea,
    status === 'valid' && fieldStyles.inputValid,
    status === 'invalid' && fieldStyles.inputInvalid,
  );

  const textareaFrameClassName = getClassName(
    textareaStyles.textareaFrame,
    status === 'valid' && textareaStyles.textareaFrameValid,
    status === 'invalid' && textareaStyles.textareaFrameInvalid,
  );

  const isInvalid = status === 'invalid';
  const errorId = `${name}-error`;

  return (
    <div className={fieldGroupClassName}>
      <label htmlFor={name} className={fieldStyles.label}>
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
        <p id={errorId} className={fieldStyles.fieldError}>
          {error}
        </p>
      )}
    </div>
  );
}
