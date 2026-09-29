@AGENTS.md

# Marque Studi — obligatoire pour tout design

Tout écran, composant ou landing page produit dans ce projet suit le brand kit Studi.
Les règles ci-dessous sont normatives :

@brand/design.md

Tokens source (format W3C DTCG) : `brand/studi-colors.json`.

**Brand OS est la source de vérité design** (typographie, espacements, rayons, boutons). Il prime sur les lames :

@brand/brand-os.md

Patterns de sections de référence (maquettes HTML dans `brand/lames/`, leurs valeurs de style sont remplacées par Brand OS) :

@brand/lames.md

## Changer le design (source unique)

Les valeurs de marque ne s'écrivent **jamais** à la main dans le code. Elles viennent de deux fichiers :
- `brand/studi-colors.json` : export couleurs de Brand OS (à remplacer tel quel par un nouvel export) ;
- `brand/studi-tokens.json` : typographie, rayons, espacements, états des boutons, logotype (format W3C DTCG).

`npm run tokens` régénère le bloc « Tokens Studi » de `app/globals.css` et celui des 11 maquettes `brand/lames/`,
puis vérifie que chaque couleur utilisée dans le code existe encore (erreur si Brand OS renomme un token).
Il tourne aussi avant `npm run dev` ; `npm run build` refuse de construire si les tokens ne sont pas à jour.
Pour un changement de marque : remplacer les JSON (et `brand/design.md`, export Brand OS), lancer `npm run tokens`.

## Implémentation dans le code

- Les tokens sont générés dans `app/globals.css` (`@theme`, entre marqueurs) et exposés en utilitaires Tailwind :
  `bg-brand-green`, `bg-brand-green-soft`, `bg-accent-1`, `bg-accent-2`, `bg-accent-2-soft`,
  `neutral-0` → `neutral-950`, `orange-50` → `orange-950`, `success`, `warning`, `danger`, `info`, `logo`.
  Utilisez uniquement ces couleurs — jamais de hex en dur, jamais `zinc-*`, `slate-*`, `gray-*`, etc.
- Chaque bloc commence par le choix d'une surface, via une classe utilitaire qui fixe fond, texte et CTA :
  `surface-page`, `surface-block`, `surface-accent-1`, `surface-accent-2-soft`, `surface-accent-2`,
  `surface-brand`, `surface-ink`. Le `<Button>` par défaut bascule automatiquement (encre sur fond clair,
  accent-1 à libellé encre sur fond sombre).
- Les CTA suivent les boutons Brand OS : 36px, padding 16px, rayon plein, taille unique (`<Button>` / `<ButtonLink>`
  par défaut). Ne surchargez ni leur taille ni leur radius.
- Les badges / tags ont un radius de 8px (`rounded-md`, Brand OS) : utilisez le `<Badge>` shadcn
  (variantes Studi `accent`, `brand`, `ink`, `review`).
- Typographie : uniquement `text-display`, `text-heading-1`, `text-heading-2`, `text-body`, `text-caption`
  (jamais `text-sm`, `text-lg`, `font-bold`…). Espacements : `1 2 3 4 6 8 12` uniquement. Pas d'ombre sur les cartes.
- Accordéons : le composant shadcn standard, sans surcharge de style (filets entre éléments, pas de carte ouverte).
- `cn` vient de `@/lib/utils` (il connaît les styles Brand OS). Après un `shadcn add`, remplacez `from "cn"`
  par `from "@/lib/utils"` dans le composant ajouté, sinon les tailles de texte sont supprimées à la fusion.
- Composez avec les composants shadcn de `components/ui` (Button, Badge, Card, Alert, Tabs, Table, Separator…),
  personnalisés aux couleurs Studi dans leurs variantes. Les CTA-liens passent par `<ButtonLink>` (`components/lp/button-link.tsx`,
  taille `cta` des lames). Blocs de page dans `components/lp` : `Section` (surface + rythme), `Heading`, `Lead`,
  `ProfileTabs` (lame profils), `CheckList`, `LogoGrid`, `SiteHeader`, `ConfirmationBanner`, `SiteFooter`.
- Chaque LP vit dans `app/<slug>/page.tsx` avec un `export const metadata = { title: "…" }` : elle compose des sections
  de `components/sections/`, et son texte vit dans `content/<slug>.tsx` (props typées). Pas de mise en page inline.
  La page d'accueil (`app/page.tsx`) la liste automatiquement. Ajoutez son public et l'URL d'origine dans `extras` de `lib/landing-pages.ts`.
- **Jamais de carte superposée ni accolée à une vidéo.** La carte flottante de la lame hero produit ne s'utilise
  qu'avec une photo. Avec une vidéo, la vidéo reste seule dans sa colonne, centrée sur le texte.
- `<Button variant="offer">` = CTA accent-1 pour les moments forts, sur fond clair uniquement, jamais sur `surface-accent-1`.
- Les tokens shadcn (`primary`, `muted`, `border`…) sont mappés sur la palette Studi : préférez-les dans les composants UI.
- Le mode sombre n'est défini nulle part : ne l'inventez pas, signalez le besoin.

## Bibliothèque de lames (`/lames`)

- La bibliothèque ne contient que les **lames modèles** : les maquettes HTML de `brand/lames/`, déclarées dans
  `lib/lames/registry.tsx` (`lames`). **N'y ajoutez jamais les sections créées pour une LP.**
- Statut de validation des modèles : `brand/lames-status.json` (`a-valider` par défaut, `validee`, `a-revoir`,
  catégorie, note). Il se modifie depuis `/lames/<id>` — ne le changez jamais vous-même sans demande explicite.
- **Génération d'une LP : ne partez que de lames modèles au statut `validee`** (lisez aussi leurs notes).
  Réutilisez la section React qui implémente déjà le modèle (`implementations` du registre, `components/sections/`),
  ou créez-en une nouvelle d'après la maquette ; dans les deux cas, déclarez-la dans `implementations`
  (`basedOn` + LP qui l'utilisent) pour qu'elle apparaisse sur la page du modèle. Si le modèle nécessaire
  n'est pas validé ou n'existe pas, signalez-le avant de l'utiliser.
- Composants de structure hors modèles (pas de lame) : bandeau de confirmation, pied de page, mentions
  (`components/lp/site.tsx`, `components/sections/footnotes.tsx`), ainsi que `conditions-section`,
  `data-table-section` et `logo-wall`, déjà utilisés dans des LP.
