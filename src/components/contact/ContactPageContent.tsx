import ContactFallback from './ContactFallback';
import ContactForm from './ContactForm';
import * as styles from './contact.css';

type ContactPageContentProps = {
  isSent: boolean;
  hasError: boolean;
};

export default function ContactPageContent({ isSent, hasError }: ContactPageContentProps) {
  return (
    <section className={styles.contactSection}>
      <header className={styles.header}>
        <h1>Contact</h1>

        <p className={styles.introduction}>
          Pour toute demande d&apos;accompagnement, de répétition, de concert, de cours ou de devis personnalisé, vous
          pouvez me tranmettre votre message à l&apos;aide du formulaire ci-dessous.
        </p>

        <p className={styles.responseTime}>Réponse généralement sous 24 à 48 heures.</p>
      </header>

      {isSent && (
        <p className={styles.successMessage}> Votre message a bien été envoyé. Je vous répondrai dès que possible.</p>
      )}

      {hasError && (
        <p className={styles.errorMessage}>
          Le message n&apos;a pas pu être envoyé. Vous pouvez réessayer ou m&apos;écrire directement par mail.
        </p>
      )}

      <ContactForm />

      <ContactFallback />
    </section>
  );
}
