'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as styles from './SiteHeader.css';

const contentLinks = [
  { href: '/presentation', label: 'Présentation' },
  { href: '/pedagogie', label: 'Pédagogie', mobileAlign: 'right' },
  { href: '/accompagnement', label: 'Accompagnement' },
];

const actionLinks = [
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/contact', label: 'Contact', variant: 'contact', mobileAlign: 'right' },
];

export default function SiteHeader() {
  const pathname = usePathname();

  const getLinkClassName = (href: string, variant?: string, mobileAlign?: string) => {
    const isActive = pathname === href;

    return [
      styles.link,
      isActive ? styles.activeLink : '',
      variant === 'contact' ? styles.contactLink : '',
      mobileAlign === 'right' ? styles.rightColumnLink : '',
    ]
      .filter(Boolean)
      .join(' ');
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navigation principale">
        <Link
          href="/"
          className={`${styles.homeLink} ${pathname === '/' ? styles.activeHomeLink : ''}`}
          aria-label="Retour à l'accueil"
          aria-current={pathname === '/' ? 'page' : undefined}
        >
          VM
        </Link>

        <div className={styles.navigationLinks}>
          <div className={styles.linkGroup}>
            {contentLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={getLinkClassName(link.href, undefined, link.mobileAlign)}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.actionGroup}>
            {actionLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={getLinkClassName(link.href, link.variant, link.mobileAlign)}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
