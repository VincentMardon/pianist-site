# Changelog

## [Unreleased]

### Added

- Initialisation du projet Next.js avec TypeScript.
- Configuration de Vanilla Extract.
- Mise en place d'un pipeline GitHub Actions exécutant automatiquement l'installation, le type-check et le build à chaque push.
- Configuration d’ESLint et Prettier.
- Ajout de Vitest et React Testing Library.
- Mise en place d’une documentation de base.
- Nettoyage des fichiers générés automatiquement par Next.js.
- Configuration du pipeline GitHub Actions pour vérifier le type-check et le build.

### Notes

Ce premier socle technique marque la fin du chantier de configuration initiale.
Le projet peut désormais entrer dans sa phase visible : contenu, design system et mise en page.

## [1.0.0] - 2026-06-05

### Added

- Page d'accueil du site vitrine.
- Page de présentation professionnelle.
- Page tarifs.
- Palette de couleurs basée sur les tokens primitifs et sémantiques.
- Styles globaux pour le fond, le texte, les titres et les liens.
- Navigation principale entre les pages.

### Changed

- Réécriture de la présentation pour renforcer la clarté, la confiance et le positionnement professionnel.
- Refactorisation de la page d'accueil avec extraction du composant HomeContent.
- Création du composant MarkdownPage pour centraliser le rendu des contenus Markdown.

## [Unreleased]

### Added

- Ajout de la page `Pédagogie`.
- Ajout d’un lien vers la méthode pédagogique depuis la page d’accueil.
- Ajout de la page pédagogie dans la navigation principale.
- Ajout de métadonnées SEO spécifiques par page.
- Ajout d’un pied de page commun au site.
- Ajout d’une page `Mentions légales`.
- Ajout de tests pour le composant `SiteFooter`.

### Changed

- Révision de la page tarifs avec une présentation plus structurée.
- Mise à jour des tarifs d’accompagnement à 60 €/h.
- Ajout des formats pédagogiques : cours débutant de 30 minutes et cours particuliers de 40 à 60 €/h selon le niveau.
- Ajout de précisions sur les forfaits à la demi-journée et à la journée.
- Harmonisation des titres et descriptions SEO par page.
- Ajustement des tests liés aux nouveaux liens et aux nouveaux tableaux Markdown.
- Préparation de la structure globale du site avant le chantier design et UX.

### Notes

- Le site dispose maintenant d’une structure complète : navigation principale, contenu métier, page pédagogie, tarifs détaillés, contact, pied de page et mentions légales.
- Le contenu principal et les métadonnées SEO sont suffisamment stabilisés pour passer à une phase de design, d’amélioration UX et de hiérarchie visuelle.
- Les prochaines évolutions devraient se concentrer sur la mise en page, le confort de lecture, les composants d’interface, la navigation mobile et l’identité visuelle.
