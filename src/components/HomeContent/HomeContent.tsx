import Link from 'next/link';
import * as styles from './HomeContent.css';

export default function HomeContent() {
  return (
    <>
      <section>
        <h1>Vincent Mardon - Pianiste</h1>
        <p>
          J&apos;accompagne les musiciens dans leur pratique, leur progression et leurs projets : cours particuliers,
          préparation d&apos;examens, auditions, répétitions, concerts et travail d&apos;interprétation.
        </p>
        <p>
          Basé en Seine-et-Marne, j&apos;interviens principalement dans le secteur de Grand Paris Sud et en
          Île-de-France.
        </p>

        <Link href="/presentation" className={styles.ctaLink}>
          En savoir plus
        </Link>
      </section>

      <section>
        <h2>Prestations</h2>
        <ul>
          <li>Cours de piano et accompagnement pédagogique</li>
          <li>Préparation d&apos;examens, auditions et concours</li>
          <li>Accompagnement d&apos;élèves de conservatoire</li>
          <li>Accompagnements de chanteurs et d&apos;instrumentistes</li>
          <li>Répétitions de musique de chambre</li>
          <li>Concerts et projets ponctuels</li>
          <li>Méthode de travail, lecture, interprétation et reprise musicale</li>
        </ul>

        <Link href="/tarifs" className={styles.ctaLink}>
          Consulter les tarifs
        </Link>
      </section>

      <section>
        <h2>Une approche simple</h2>
        <p>
          Après un parcours de pianiste classique et plusieurs années passées dans d&apos;autres secteurs
          d&apos;activité, je reviens aujourd&apos;hui à ce qui m&apos;anime depuis toujours : la musique.
        </p>
        <p>
          Mon objectif est de proposer un accompagnement sérieux, attentif et adapté aux besoins de chaque musicien,
          qu&apos;il soit amateur, étudiant ou professionnel.
        </p>
        <p>
          Cette approche peut également s&apos;inscrire dans un cadre pédagogique, pour les personnes qui souhaitent
          progresser au piano, préparer une œuvre, reprendre une pratique musicale ou construire une méthode de travail
          plus solide.
        </p>

        <Link href="/pedagogie" className={styles.ctaLink}>
          En savoir plus sur ma méthode pédagogique
        </Link>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Pour toute demande d&apos;information ou de devis :</p>

        <Link href="/contact" className={styles.ctaLink}>
          Me contacter
        </Link>
      </section>
    </>
  );
}
