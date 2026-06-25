import Link from 'next/link';
import * as styles from './SiteFooter.css';

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav} aria-label="Navigation secondaire">
        <Link href="/mentions-legales" className={styles.link}>
          Mentions légales
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
      </nav>

      <p className={styles.copyright}>© 2026 Vincent Mardon</p>
    </footer>
  );
}
