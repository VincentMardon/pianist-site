# Changelog

## [Unreleased]

### Notes

- Aucune modification non publiée pour le moment.

## [1.1.0] - 2026-06-26

### Added

- Ajout de la page `Pédagogie`.
- Ajout d’un lien vers la méthode pédagogique depuis la page d’accueil.
- Ajout de la page pédagogie dans la navigation principale.
- Ajout d’une page `Mentions légales`.
- Ajout d’un pied de page commun au site.
- Ajout de métadonnées SEO spécifiques par page.
- Ajout des routes metadata `sitemap.xml` et `robots.txt` pour améliorer l’exploration du site par les moteurs de recherche.
- Ajout d’une configuration centralisée de l’URL du site.
- Ajout d’un formulaire de contact avec validation côté client, champ honeypot anti-spam et envoi via l’API de contact.
- Ajout de tests pour le composant `SiteFooter`.
- Ajout de tests pour le formulaire de contact, ses règles de validation, son champ honeypot et ses hooks d’état/autofill.

### Changed

- Révision de la page tarifs avec une présentation plus structurée.
- Mise à jour des tarifs d’accompagnement à 60 €/h.
- Ajout des formats pédagogiques : cours débutant de 30 minutes et cours particuliers de 40 à 60 €/h selon le niveau.
- Ajout de précisions sur les forfaits à la demi-journée et à la journée.
- Harmonisation des titres et descriptions SEO par page.
- Refactorisation du formulaire de contact en composants, hooks, modèle de données et utilitaires dédiés.
- Isolation des styles du champ honeypot dans sa propre feuille Vanilla Extract.
- Amélioration de la synchronisation des champs autofill et du comportement de validation du formulaire.
- Renforcement du typage des noms de champs du formulaire de contact.
- Ajustement et extension des tests liés aux nouveaux liens, aux tableaux Markdown et au formulaire de contact.

### Fixed

- Correction de l’URL canonique utilisée dans `sitemap.xml` et `robots.txt` afin d’éviter les doubles slashs.
- Correction du statut de validation des champs du formulaire pour utiliser les valeurs courantes plutôt que les valeurs initiales.
- Correction du motif de validation des adresses email.
- Correction de coquilles dans les métadonnées SEO des pages d’accueil et tarifs.
- Suppression d’un test redondant sur la transition d’un champ invalide vers valide.

### Notes

- Le site dispose maintenant d’une structure complète : navigation principale, contenu métier, page pédagogie, tarifs détaillés, contact, pied de page et mentions légales.
- Le SEO technique est en place avec les métadonnées par page, `sitemap.xml`, `robots.txt` et une configuration centralisée de l’URL du site.
- Le formulaire de contact est désormais suffisamment structuré et testé pour servir de base stable aux prochaines évolutions UX.
- Les prochaines évolutions pourront se concentrer sur la navigation mobile, la hiérarchie visuelle, l’identité graphique et les futures pages de contenu.

## [1.0.0] - 2026-06-05

### Added

- Initialisation du projet Next.js avec TypeScript.
- Configuration de Vanilla Extract.
- Configuration d’ESLint et Prettier.
- Ajout de Vitest et React Testing Library.
- Mise en place d’un pipeline GitHub Actions exécutant automatiquement l’installation, le lint, les tests, le type-check et le build à chaque push.
- Mise en place d’une documentation de base.
- Nettoyage des fichiers générés automatiquement par Next.js.
- Page d’accueil du site vitrine.
- Page de présentation professionnelle.
- Page tarifs.
- Palette de couleurs basée sur les tokens primitifs et sémantiques.
- Styles globaux pour le fond, le texte, les titres et les liens.
- Navigation principale entre les pages.

### Changed

- Réécriture de la présentation pour renforcer la clarté, la confiance et le positionnement professionnel.
- Refactorisation de la page d’accueil avec extraction du composant `HomeContent`.
- Création du composant `MarkdownPage` pour centraliser le rendu des contenus Markdown.

### Notes

- Ce premier socle technique marque la fin du chantier de configuration initiale.
- Le projet peut désormais entrer dans sa phase visible : contenu, design system et mise en page.
