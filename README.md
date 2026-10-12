# Kasa

Application React d'un site de location de logements entre particuliers. C'est
un projet de la formation Développeur Web d'OpenClassrooms.

## Fonctionnalités

- **Le routage** avec React Router :
  - `/` : l'accueil, avec la liste des logements ;
  - `/housing/:id` : la fiche d'un logement ;
  - `/about` : la page À propos ;
  - `*` : une page 404, aussi affichée quand l'identifiant du logement n'existe
    pas.
- **Un carrousel** d'images : navigation précédent / suivant en boucle, et
  indicateur de position (`1/4`).
- **Des accordéons** animés, utilisés pour la description, les équipements et
  les valeurs de la page À propos.
- **La notation** en étoiles, ainsi que les tags et le profil de l'hôte.
- **Des composants réutilisables** : Header, Footer, Accordion, Slider, Star…
- **Des données locales** au format JSON (`src/Data`), qui simulent une API.

## Stack

React 18 · React Router 6 · SCSS · Font Awesome · Create React App

## Organisation

```
src/
├── components/   Accordion, Error, Footer, Header, Slider, SplitName, Star
├── pages/        Home, HousingDetails, About
├── Data/         données des logements (JSON)
└── utils/style/  styles globaux
```

## Lancer le projet

```bash
git clone https://github.com/Gaby-code42/kasa.git
cd kasa
npm install
npm start      # http://localhost:3000
```

## Auteur

Raphaël Bonacina, [portfolio](https://gaby-code42.github.io/portfolio/)
