import Link from 'next/link';
import * as styles from './CallToAction.css';

type CallToActionLink = {
  href: string;
  label: string;
};

type CallToActionProps = {
  title: string;
  text: string;
  links: CallToActionLink[];
};

export default function CallToAction({ title, text, links }: CallToActionProps) {
  return (
    <section className={styles.container} aria-labelledby="call-to-action-title">
      <h2 id="call-to-action-title" className={styles.title}>
        {title}
      </h2>

      <p className={styles.text}>{text}</p>

      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
