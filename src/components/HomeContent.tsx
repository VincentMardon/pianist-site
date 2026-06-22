import Link from 'next/link';

export default function HomeContent() {
  return (
    <>
      <section>
        <h1>Vincent Mardon - Pianiste accompagnateur</h1>
        <p>
          J&apos;accompagne chanteurs, instrumentistes et ensembles pour leurs répétitions, auditions, examens, concerts
          et projets musicaux.
        </p>
        <p>
          Basé en Seine-et-Marne, j&apos;interviens principalement dans le secteur de Grand Paris Sud et en
          Île-de-France.
        </p>

        <Link href="/presentation">En savoir plus</Link>
      </section>

      <section>
        <h2>Prestations</h2>
        <ul>
          <li>Accompagnement d&apos;élèves de conservatoire</li>
          <li>Préparation d&apos;examens et d&apos;auditions</li>
          <li>Accompagnements de chanteurs</li>
          <li>Répétitions de musique de chambre</li>
          <li>Concerts et projets ponctuels</li>
          <li>Coaching musical et travail de partition</li>
        </ul>

        <Link href="/tarifs">Consulter les tarifs</Link>
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
      </section>

      <section>
        <h2>Contact</h2>
        <p>Pour toute demande d&apos;information ou de devis :</p>

        <Link href="/contact">Me contacter</Link>
      </section>
    </>
  );
}
