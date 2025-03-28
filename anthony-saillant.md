---
outline: deep
---

# Revue de code tp1 Anthony

## Composant AddAlbumForm.vue

1. La _fonction_ `validateForm()` n'utilise pas Bootstrap pour la validation mais celle de base de html
2. L'utilisation de constante pour les messages d'erreur est une bonne pratique. [lien vers les principes de base ts](https://appweb.progwmj.ca/cours/cours-04)
3. La validation n'est pas utiliser pour afficher pour afficher les messages d'erreurs, on aurait pu utiliser `const errors`

## Composant AlbumItem.vue

1. Le `const stockColor` n'est pas super clair dans son utilisation.
2. Le `{ deep: true }` n'est pas super clair dans son utilisation aussi et il aurait été pertinent de faire autrement pour regarder à l'intérieur de l'objet.

## Points à faire attention...

- Il y a un _bogue_ lors de l'ajout d'un album.
- Un erreur d'affichage lorsque l'on fait le bouton `voir les details`, si la description est trop grande, le texte depasse.
- _Types.ts_ n'est pas dans les scripts tandis qu'il aurait dû être là.

## Points positif

- Code bien lisible et utilisation de constante juste et pertinente dans tout les _composants_.
- La plupart des fonctionnalités fonctionnent et l`utilisation des différentes couleurs sont respecté (Ajouter, Supprimer, Modifier)
  [lien vers doc couleurs](https://appweb.progwmj.ca/documentations/bonnes-pratiques/couleurs-ui)
