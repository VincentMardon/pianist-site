import * as styles from './ContactSubmitButton.css';

export default function ContactSubmitButton() {
  return (
    <button type="submit" className={styles.submitButton}>
      Envoyer
    </button>
  );
}
