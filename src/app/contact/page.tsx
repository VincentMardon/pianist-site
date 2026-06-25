import type { Metadata } from 'next';
import * as styles from './contact.css';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contacter Vincent Mardon pour un accompagnement musical, une répétition, un concert, un cours ou une demande de devis en Île-de-France.',
};

type ContactPageProps = {
  searchParams: Promise<{
    sent?: string;
    error?: string;
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const isSent = params.sent === '1';
  const hasError = params.error === '1';

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

      {isSent && (
        <p className={styles.successMessage}>Votre message a bien été envoyé. Je vous répondrais dés que possible.</p>
      )}

      {hasError && (
        <p className={styles.errorMessage}>
          Le message n&apos;a pas pu être envoyé. Vous pouvez réessayer ou m&apos;écrire directement par mail.
        </p>
      )}

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
          <label htmlFor="website">Site Web</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
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
