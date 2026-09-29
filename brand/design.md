# Studi — Système de couleurs

Document de référence pour produire un support aux couleurs Studi.
Tout ce qui suit est normatif : appliquez-le tel quel.

Exporté depuis Brand OS. Les ratios de contraste sont calculés, pas estimés.

## La seule décision à prendre

**Choisissez d'abord une surface.** Le texte et le bouton en découlent —
vous n'avez pas à arbitrer couleur par couleur.

| Surface | Fond | Texte | CTA par défaut | Contraste du texte |
| --- | --- | --- | --- | --- |
| Page | `neutral.0` #FFFFFF | `neutral.900` | `neutral.900` | 17,46:1 |
| Bloc | `neutral.50` #FAFAF9 | `neutral.900` | `neutral.900` | 16,72:1 |
| Accent 1 | `accent.1` #EDF878 | `neutral.900` | `neutral.900` | 15,21:1 |
| Accent 2 doux | `accent.2.soft` #FFCCD1 | `neutral.900` | `neutral.900` | 12,31:1 |
| Accent 2 | `accent.2` #F87363 | `neutral.900` | `neutral.900` | 6,34:1 |
| Marque | `brand.green` #0D302D | `neutral.0` | `accent.1` | 14,21:1 |
| Encre | `neutral.900` #1D1916 | `neutral.0` | `accent.1` | 17,46:1 |

Le texte n'a que deux valeurs possibles : l'encre ou le blanc.
Le CTA bascule sur l'accent 1 dès que le fond est sombre.

## La palette

### Brand

La couleur qui identifie Studi. Elle sert de surface — aplats, bandeaux, pictogrammes — jamais de bouton.

| Token | Valeur | Usage |
| --- | --- | --- |
| `brand.green` | #0D302D | Aplats de marque, pictogramme |
| `brand.green.soft` | #E9F6F5 | Fonds d'accent discrets, survol de menu |

### Accent

Deux couleurs d'appel, à employer en aplat sur une zone à la fois. L'accent ne porte jamais le texte principal.

| Token | Valeur | Usage |
| --- | --- | --- |
| `accent.1` | #EDF878 | Bandeaux d'offre, et CTA sur fond sombre |
| `accent.2` | #F87363 | Bandeaux d'énergie, illustrations — orange.400 |
| `accent.2.soft` | #FFCCD1 | En-têtes, fonds doux — orange.200 |

### Neutres

L'ossature de l'interface : fonds, bordures et hiérarchie de texte.

| Token | Valeur | Usage |
| --- | --- | --- |
| `neutral.0` | #FFFFFF | Fond des surfaces |
| `neutral.50` | #FAFAF9 | Fond de la navigation |
| `neutral.100` | #F5F5F4 | Fond de page, zones inactives |
| `neutral.200` | #E7E5E4 | Bordures fines, séparateurs |
| `neutral.300` | #D7D3D0 | Bordures appuyées, états désactivés |
| `neutral.400` | #A9A39D | Icônes secondaires, texte désactivé |
| `neutral.500` | #79726B | Texte tertiaire, métadonnées |
| `neutral.600` | #58544D | Texte secondaire |
| `neutral.700` | #45413B | Texte d'appui sur fond clair |
| `neutral.800` | #2F2A28 | Aplats sombres |
| `neutral.900` | #1D1916 | Texte principal |
| `neutral.950` | #0C0A09 | Aplats les plus sombres |

### Teinte orange

L'échelle complète de l'accent orange. Toute valeur porte un texte : l'encre jusqu'à 500, le blanc à partir de 600. Aucune marche n'est à éviter.

| Token | Valeur | Usage |
| --- | --- | --- |
| `orange.50` | #FEF2F3 | Fond très clair |
| `orange.100` | #FFE3E6 | Fond clair |
| `orange.200` | #FFCCD1 | En-tête, fond doux |
| `orange.300` | #FFA8A7 | Bordures, illustrations |
| `orange.400` | #F87363 | Aplat d'accent clair |
| `orange.500` | #F04A33 | Aplat d'accent soutenu |
| `orange.600` | #DC2D0D | Survol de l'aplat |
| `orange.700` | #B82307 | Appui, texte blanc |
| `orange.800` | #981F0F | Aplat sombre |
| `orange.900` | #7E2016 | Aplat très sombre |
| `orange.950` | #450C06 | Aplat le plus sombre |

### Sémantiques

Réservées aux retours d'état. Jamais utilisées à des fins décoratives.

| Token | Valeur | Usage |
| --- | --- | --- |
| `success.default` | #16A34A | Validation, ressource approuvée |
| `warning.default` | #F59E0B | Révision à prévoir |
| `danger.default` | #DC2626 | Erreur, ressource dépréciée |
| `info.default` | #2563EB | Information neutre |

## Règles des boutons

1. **Un seul CTA principal par écran ou par bloc.**
   Deux actions de même poids annulent la hiérarchie.
2. **L'encre reste le CTA par défaut ; l'accent 1 se réserve aux moments forts.**
   Offre, campagne, fin de parcours. Si tout est accentué, plus rien ne l'est.
3. **Sur fond clair, donnez-lui de l'air : c'est son libellé qui le porte, pas son bord.**
   Le jaune ne se détache pas du blanc (1,2:1). Isolez-le au lieu de le noyer dans une rangée de boutons, et ne comptez jamais sur sa seule couleur pour signaler qu'il est cliquable.
4. **Son libellé est à l'encre, jamais blanc.**
   Blanc sur jaune donne 1,2:1 — illisible. L'encre donne 15,2:1.
5. **Pas de CTA accent 1 sur une surface accent 1.**
   Le bouton et son fond se confondent. Sur un bandeau jaune, le CTA repasse à l'encre.

## Interdits

- **Blanc sur accent 1** — 1,15:1, illisible. Le libellé d'un CTA jaune est toujours à l'encre (15,21:1).
- **CTA accent 1 sur une surface accent 1** — le bouton et son fond se confondent.
- **Mélanger l'encre et le blanc sur la même échelle orange** — l'encre tient jusqu'à `orange.500`, le blanc prend le relais à partir de `orange.600`. Ne choisissez pas au jugé : suivez la bascule.
- **Recolorer le logotype** — il est monochrome : noir `#070A0D` ou blanc, rien d'autre.
- **Le triangle du logotype en motif** — ni filigrane, ni trame, ni fond. C'est un élément du logotype, pas un ornement.
- **Inventer une valeur intermédiaire** — si la couleur vous manque, demandez-la.

## Combinaisons validées

**N'employez aucune paire absente de ce tableau.** Ce sont les seules
combinaisons de tokens contrôlées ; toute autre est à faire valider.
Les ratios sont recalculés à chaque export depuis les valeurs des tokens.

### Surface marque

Sur le vert de marque, quatre textes possibles. C'est la surface des bandeaux et des pieds de page.

| Texte | Fond | Ratio | Verdict |
| --- | --- | --- | --- |
| `accent.1` #EDF878 | `brand.green` #0D302D | 12,38:1 | AA ✓ |
| `neutral.0` #FFFFFF | `brand.green` #0D302D | 14,21:1 | AA ✓ |
| `brand.green.soft` #E9F6F5 | `brand.green` #0D302D | 12,83:1 | AA ✓ |
| `accent.2.soft` #FFCCD1 | `brand.green` #0D302D | 10,02:1 | AA ✓ |

### Surfaces encre

Les aplats sombres neutres. Ils acceptent le blanc et les deux accents clairs.

| Texte | Fond | Ratio | Verdict |
| --- | --- | --- | --- |
| `neutral.0` #FFFFFF | `neutral.900` #1D1916 | 17,46:1 | AA ✓ |
| `accent.1` #EDF878 | `neutral.900` #1D1916 | 15,21:1 | AA ✓ |
| `accent.2.soft` #FFCCD1 | `neutral.900` #1D1916 | 12,31:1 | AA ✓ |
| `accent.1` #EDF878 | `neutral.950` #0C0A09 | 17,21:1 | AA ✓ |

### Surfaces claires

Le cas courant : du texte foncé sur un fond clair. Le vert de marque y devient une couleur de texte.

| Texte | Fond | Ratio | Verdict |
| --- | --- | --- | --- |
| `neutral.900` #1D1916 | `neutral.0` #FFFFFF | 17,46:1 | AA ✓ |
| `brand.green` #0D302D | `neutral.0` #FFFFFF | 14,21:1 | AA ✓ |
| `brand.green` #0D302D | `neutral.100` #F5F5F4 | 13,03:1 | AA ✓ |
| `brand.green` #0D302D | `brand.green.soft` #E9F6F5 | 12,83:1 | AA ✓ |

### Accent 1 et accent 2 doux

Les aplats d'appel clairs. Ils ne portent que de l'encre ou du vert de marque.

| Texte | Fond | Ratio | Verdict |
| --- | --- | --- | --- |
| `neutral.900` #1D1916 | `accent.1` #EDF878 | 15,21:1 | AA ✓ |
| `brand.green` #0D302D | `accent.1` #EDF878 | 12,38:1 | AA ✓ |
| `neutral.900` #1D1916 | `accent.2.soft` #FFCCD1 | 12,31:1 | AA ✓ |
| `brand.green` #0D302D | `accent.2.soft` #FFCCD1 | 10,02:1 | AA ✓ |

### Accent 2 et orange profond

L'orange saturé reste lisible, mais de justesse : réservez-le aux titres courts et aux aplats.

| Texte | Fond | Ratio | Verdict |
| --- | --- | --- | --- |
| `neutral.900` #1D1916 | `accent.2` #F87363 | 6,34:1 | AA ✓ |
| `brand.green` #0D302D | `accent.2` #F87363 | 5,16:1 | AA ✓ |
| `accent.1` #EDF878 | `orange.950` #450C06 | 13,99:1 | AA ✓ |
| `neutral.0` #FFFFFF | `orange.950` #450C06 | 16,05:1 | AA ✓ |

### Ton sur ton

La seule combinaison de la planche qui n'atteint pas AA. Elle est admise, mais jamais pour du texte à lire.

| Texte | Fond | Ratio | Verdict |
| --- | --- | --- | --- |
| `accent.2` #F87363 | `accent.2.soft` #FFCCD1 | 1,94:1 | Décoratif uniquement — jamais de texte à lire |

## Si vous êtes un agent

- Employez les **noms de tokens**, jamais une valeur approchée.
- Ne dérivez pas de nuance intermédiaire : la palette est fermée.
- Le vert de marque est une **surface**, jamais un bouton.
- Devant un cas non couvert ici, signalez-le plutôt que de trancher seul.
