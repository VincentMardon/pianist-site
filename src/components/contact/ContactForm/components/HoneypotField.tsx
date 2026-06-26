import * as styles from './HoneypotField.css';

export default function HoneypotField() {
  return (
    <div className={styles.honeypot} aria-hidden="true">
      <label htmlFor="website">Site web</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}
