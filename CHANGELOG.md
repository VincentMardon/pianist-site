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

### Notes

- Le fichier `global.css.ts` remplit actuellement son rôle mais contient plusieurs responsabilités (layout, typographie, navigation). Une séparation future en modules plus spécialisés pourra être envisagée si le projet continue de grandir.
- Les futures évolutions devraient se concentrer davantage sur l'expérience utilisateur, le contenu et la navigation que sur l'infrastructure technique.
