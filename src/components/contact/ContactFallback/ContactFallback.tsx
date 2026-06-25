import * as styles from './ContactFallback.css';

export default function ContactFallback() {
  return (
    <aside className={styles.fallback} aria-label="Informations complémentaires">
      <p className={styles.fallbackParagraph}>
        Vous pouvez également m&apos;écrire directement à{' '}
        <a href="mailto:mardon.vincent@gmail.com">mardon.vincent@gmail.com</a>.
      </p>

      <p className={styles.fallbackParagraph}>
        Vous pouvez aussi consulter les <a href="/tarifs">tarifs</a> avant de me préciser votre demande.
      </p>
    </aside>
  );
}
