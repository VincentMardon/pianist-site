import * as styles from './ContactForm.css';

export default function ContactForm() {
  return (
    <form className={styles.form} action="/api/contact" method="post">
      <div className={styles.fieldGroup}>
        <label htmlFor="name" className={styles.label}>
          Nom
        </label>
        <input id="name" name="name" type="text" className={styles.input} autoComplete="name" required />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="email" className={styles.label}>
          Adresse email
        </label>
        <input id="email" name="email" type="email" className={styles.input} autoComplete="email" required />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="subject" className={styles.label}>
          Objet
        </label>
        <input id="subject" name="subject" type="text" className={styles.input} required />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea id="message" name="message" rows={8} className={styles.textarea} required />
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
