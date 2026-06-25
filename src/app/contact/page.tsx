import type { Metadata } from 'next';
import * as styles from './contact.css';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contacter Vincent Mardon pour un accompagnement musical, une répétition, un concert, un cours ou une demande de devis en Île-de-France.',
};

export default function ContactPage() {
  return (
    <section className={styles.contactSection}>
      <header className={styles.header}>
        <h1>Contact</h1>

        <p className={styles.introduction}>
          Pour toute demande d&apos;accompagnement, de répétition, de concert, de cours ou de devis personnalisé, vous
          pouvez me transmettre votre message à l&apos;aide du formulaire ci-dessous.
        </p>

        <p className={styles.responseTime}>Réponse généralement sous 24 à 48 heures.</p>
      </header>

      <form className={styles.form}>
        <div className={styles.fieldGroup}>
          <label htmlFor="name" className={styles.label}>
            Nom
          </label>
          <input id="name" name="name" type="text" className={styles.input} autoComplete="name" />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="email" className={styles.label}>
            Adresse email
          </label>
          <input id="email" name="email" type="email" className={styles.input} autoComplete="email" />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="subject" className={styles.label}>
            Objet
          </label>
          <input id="subject" name="subject" type="text" className={styles.input} />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea id="message" name="message" rows={8} className={styles.textarea} />
        </div>

        <button type="submit" className={styles.submitButton}>
          Envoyer
        </button>
      </form>

      <aside className={styles.fallback} aria-label="Informations complémentaires">
        <p className={styles.fallbackParagraph}>
          Vous pouvez également m&apos;écrire directement à{' '}
          <a href="mailto:mardon.vincent@gmail.com">mardon.vincent@gmail.com</a>.
        </p>

        <p className={styles.fallbackParagraph}>
          Vous pouvez aussi consulter les <a href="/tarifs">tarifs</a> avant de me préciser votre demande.
        </p>
      </aside>
    </section>
  );
}
