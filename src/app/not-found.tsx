import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <h1>404 - Fausse note</h1>
      <p>Vous avez quitté la partition.</p>
      <p>Cette page n&apos;existe pas ou plus.</p>
      <p>
        Pendant que vous êtes ici, souvenez-vous qu&apos;il est généralement conseillé de ne pas publier toute sa vie
        privée sur Internet.
      </p>

      <Link href="/">Retour à l&apos;accueil</Link>
    </>
  );
}
