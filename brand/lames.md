# Studi — Lames de référence

Maquettes HTML de référence dans `brand/lames/` : elles donnent les **patterns de sections** (structure,
contenu, comportements). **Leurs valeurs de style (tailles de texte, graisses, espacements, rayons, boutons,
ombres) sont remplacées par Brand OS** (`brand/brand-os.md`), source de vérité. Les maquettes HTML
et les sections React de `components/sections/` sont alignées sur Brand OS ; les maquettes d'origine
(avant alignement) sont conservées dans `brand/lames-originales/` pour mémoire.
Avant de construire une section d'un de ces types, **lisez le `index.html` correspondant** et
reproduisez sa structure, ses tailles et ses états.

## Catalogue

| Lame | Fichier | Contenu | Fond |
| --- | --- | --- | --- |
| Hero produit | `hero/section-produit` | Menu, badges, H1, carte prix (remise, CPF), 2 CTA, partenaire, portrait + carte « Débouchés » superposée | `neutral.50` |
| Hero campagne | `hero/section-campagne` | Photo plein cadre + voile `neutral.950`, logo blanc, badge, titre en lignes surlignées `brand.green`, CTA accent 1 | photo |
| Hero lifestyle | `hero/section-lifestyle` | Nav, titre centré, grande image, CTA encre + légende | `neutral.50` |
| Avantages | `section-avantages` | 4 colonnes titre + texte, séparateurs verticaux `neutral.200` | `neutral.0` |
| Image + texte | `section-image-texte` | Carte blanche : image à gauche, titre (2ᵉ partie en `brand.green`), texte, CTA | `neutral.50` |
| Cartes formation | `section-cards` | Grille 3 cartes : photo + badge, titre, partenaire, prix, flèche | `neutral.100` |
| Profils (onglets) | `section-profils` | 3 onglets à trait indicateur + visuel en fondu | `neutral.50` |
| Accordéon | `section-accordeon` | Titre, accordéon (un seul ouvert) qui pilote le visuel de droite | `neutral.50` |
| Carrousel | `section-carousel` | Cartes 2 par vue, catégorie + titre + photo, points + flèches | `neutral.100` |
| Avis | `section-avis` | Carrousel 3 par vue de témoignages (guillemet, avatar, lien) | `neutral.100` |
| Trustpilot | `section-trustpilot` | Badge « Excellent » 5 étoiles, titre blanc, texte `brand.green.soft` | `brand.green` |

## Fondations

- **Police** : Inter, graisses 400 à 800.
- **Conteneur** : 1200px max, gouttière 16px.
- **Rythme vertical** : sections à 56px de padding (80px pour onglets et accordéon), 40px sur mobile.
- **Échelle d'espacement** : 4, 6, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72, 80, 96px.
- **Rayons** : 4px labels et surlignages · 8px carte prix et témoignage · 12px élément d'accordéon ouvert ·
  16px images et cartes · 24px grand visuel d'accordéon · plein (9999px) CTA, flèches et points de carrousel.
- **Ombres** (rares) : carte flottante `0 20px 20px rgba(12,10,9,.12)`, survol de carte `0 12px 24px rgba(29,25,22,.08)`.
- **États sans opacité** : survol et inactif changent de token, jamais d'opacité (onglet inactif `neutral.500`,
  survol `neutral.600`, actif `neutral.900`). Seule exception : bouton de carrousel désactivé.

## Typographie

| Rôle | Desktop | Mobile | Couleur |
| --- | --- | --- | --- |
| H1 hero | 48/60, 700, -1px | 32–34/40–42, -0.5px | `neutral.900` ou blanc |
| Titre centré lifestyle | 44/60, 700, -1px | 28/36 | `neutral.900` |
| H2 section | 36/44, 700, -1px | 28/36, -0.5px | `neutral.900` |
| Titre court (accordéon, carte carrousel) | 24/32, 700 | 20/28 | `neutral.900` |
| Titre de carte | 20/28, 700 | — | `neutral.900` |
| Titre d'avantage | 18, 700, 1.3 | — | `neutral.900` |
| Sous-titre hero campagne | 20/30, 500 | 18/28 | blanc |
| Description | 16/24, 400 | — | `neutral.600` |
| Texte d'avantage / avis | 15, 400, 1.5 | — | `neutral.700` / `neutral.900` |
| Métadonnées | 13–14 | — | `neutral.500` |

## Composants

- **CTA** : padding 16px 32px, 16/24 semibold, rayon plein, flèche → après le libellé (écart 6px).
  - Primaire encre : survol `neutral.800`.
  - Secondaire : fond `neutral.0`, bord `neutral.200`, survol `neutral.100`.
  - Accent 1 (fond sombre) : survol = soulignement.
  - Mobile : pleine largeur dans les heros.
- **Focus** : outline 2px, offset 3px, en `brand.green` (ou `neutral.900`) sur fond clair, `accent.1` sur fond sombre.
- **Badge** : 12/16, 700, padding 3px 10px, rayon 4px, **pas de capitales**. Jaune (`accent.1` + encre)
  ou vert (`brand.green.soft` + `brand.green`).
- **Carte** : `neutral.0` sur fond `neutral.100`, rayon 16px, séparateurs `neutral.200`. Survol : ombre et -2px.
- **Prix** : remise en `brand.green` 700, ancien prix barré `neutral.500`/`neutral.600`, prix 20–28px 700–800.
- **Témoignage** : bord `neutral.200`, rayon 8px, guillemet 64px `brand.green`, avatar rond 44px,
  lien `brand.green` 14px 700 avec chevron.
- **Carrousel** : défilement natif avec aimantation. Points 8px `neutral.300`, actif 24px de large `neutral.900`.
  Flèches rondes 48px, fond `neutral.0`, bord `neutral.200`.
- **Onglets** : trait 3px au-dessus (à gauche sur mobile), piste `neutral.200`, actif `brand.green`.
- **Accordéon** : composant shadcn standard (`components/ui/accordion.tsx`) — un filet `neutral.200` entre les éléments,
  aucune carte, bordure ni fond sur l'élément ouvert (le style « carte ouverte » de la maquette HTML est abandonné).
- **Menu** : logo 84–100px de large, liens 15px 500 (actif `brand.green` 600), téléphone `neutral.500` 14px.
- **Accessibilité** : rôles ARIA onglets/carrousel/accordéon, navigation clavier,
  `prefers-reduced-motion` respecté, images décoratives en `alt=""`.

## Écarts avec `design.md` à faire valider

- **Fond `neutral.100`** (cartes, carrousel, avis) : absent du tableau des surfaces. La paire
  `neutral.900` / `neutral.100` n'est pas dans les combinaisons validées ; le texte y est porté par des cartes blanches.
- **Voile dégradé `neutral.950` en transparence** (hero campagne) : valeurs intermédiaires hors palette.
- **CTA du menu du hero produit** : contour avec un rayon de 8px, alors que les CTA sont totalement arrondis.
