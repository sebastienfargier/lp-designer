# Studi — Brand OS (source de vérité design)

Référence : https://brand-os-orcin-two.vercel.app/design-tokens
En cas d'écart avec `brand/lames.md` ou les maquettes de `brand/lames/`, **Brand OS l'emporte**.
Les couleurs et les surfaces sont détaillées dans `brand/design.md` (export Brand OS).

## Typographie — Inter, cinq styles, aucun autre corps ni graisse

| Style | Utilitaire | Taille / interlignage | Graisse | Usage dans les LP |
| --- | --- | --- | --- | --- |
| Display | `text-display` | 48 / 56 | 600 | H1 de hero (≥ 640 px), chiffres clés |
| Heading 1 | `text-heading-1` | 30 / 38 | 600 | Titres de section, H1 de hero sur mobile |
| Heading 2 | `text-heading-2` | 20 / 28 | 600 | Titres de carte, d'onglet, d'accordéon, d'encadré |
| Body | `text-body` | 14 / 22 | 400 | Tout le texte courant (descriptions, listes, tableaux) |
| Caption | `text-caption` | 12 / 16 | 500 | Badges, libellés, mentions, métadonnées |

Libellé de bouton : 14 / 20, 500 (composant Brand OS).

## Espacements — échelle de 4 px

4 · 8 · 12 · 16 · 24 · 32 · 48 px (`1 2 3 4 6 8 12` en Tailwind). Toute autre valeur est une exception à justifier.
- 8 px : éléments d'un même bloc · 16 px : padding de carte · 24 px : entre deux cartes
- 32 px : entre deux groupes / padding de section sur mobile · 48 px : padding de section

## Rayons

| Token | Valeur | Usage |
| --- | --- | --- |
| `rounded-sm` | 6 px | Puces, éléments compacts |
| `rounded-md` | 8 px | Tags / badges, champs, menus |
| `rounded-lg` | 10 px | Cartes, images, vidéos, panneaux de LP, encadrés |
| `rounded-xl` | 14 px | Modales |
| `rounded-full` | 999 px | Boutons, avatars, pastilles |

## Boutons d'action — 36 px, padding 16 px, rayon plein

| Niveau | Défaut | Survol | Pressé | Focus |
| --- | --- | --- | --- | --- |
| Principal | `neutral.900` | `neutral.800` | `neutral.950` | anneau `brand.green` |
| Secondaire | `neutral.0` + bord `neutral.200` | `neutral.100` | `neutral.200` | anneau `brand.green` |
| Tertiaire | transparent | `neutral.100` | `neutral.200` | anneau `brand.green` |
| Destructif | danger 10 % | danger 15 % | danger 25 % | anneau danger |
| Accent (fond clair) | `accent.1` | `accent.1.hover` #DAE46E | `accent.1.active` #C7D065 | anneau `brand.green` |
| Accent (fond sombre) | `accent.1` | `accent.1.hover` | `accent.1.active` | anneau `neutral.0` |
| Inversé (fond sombre) | `neutral.0` | `neutral.200` | `neutral.300` | anneau `neutral.0` |

Désactivé : opacité 50 %. Pressé : enfoncé d'un pixel.

## Traitements homogènes des lames (appliqués dans `components/sections/`)

- Cartes : fond `neutral.0`, filet 1 px `neutral.200`, rayon 10 px, **aucune ombre** ; survol d'une carte cliquable : filet `neutral.300`.
- Texte principal à l'encre, texte secondaire en `muted-foreground` (`neutral.600` sur fond clair).
- Sections : 32 px (mobile) / 48 px de padding vertical, conteneur 1200 px.
