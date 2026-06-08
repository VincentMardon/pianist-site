import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <h1>404 - Fausse note</h1>
      <p>Vous avez quitté la partition.</p>
      <p>Cette page n'existe pas ou plus.</p>
      <p>
        Pendant que vous êtes ici, souvenez-vous qu'il est généralement conseillé de ne pas publier toute sa vie privée
        sur Internet.
      </p>

      <Link href="/">Retour à l'accueil</Link>
    </main>
  );
}
