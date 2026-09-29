import { readReviews } from "@/lib/lames/status"
import type { LameCategory, LameStatus } from "@/lib/lames/types"

/**
 * Bibliothèque de lames : uniquement les lames **modèles** (maquettes HTML de brand/lames/).
 * Les sections React créées pour les LP n'y figurent pas : elles sont rattachées à leur modèle
 * via `implementations`, pour savoir quel code réutiliser à la génération.
 */

const ALTERNANCE = "confirmation-automatise-alternance-btoc"
const AOFT = "confirmation-aoft-2026"
const MBA = "mba-expert-controle-gestion-audit"
const AVIS = "avis-apprenants"

export type Lame = {
  id: string
  name: string
  description: string
  category: LameCategory
  /** Maquette de référence, relative à brand/lames/. */
  file: string
}

export const lames: Lame[] = [
  { id: "ref-hero-produit", category: "hero", file: "hero/section-produit/index.html", name: "Hero produit", description: "Menu, badges, H1, carte prix (remise, CPF), 2 CTA, partenaire, portrait et carte « Débouchés » superposée." },
  { id: "ref-hero-campagne", category: "hero", file: "hero/section-campagne/index.html", name: "Hero campagne", description: "Photo plein cadre avec voile, logo blanc, badge, titre en lignes surlignées vert de marque, CTA accent 1." },
  { id: "ref-hero-lifestyle", category: "hero", file: "hero/section-lifestyle/index.html", name: "Hero lifestyle", description: "Navigation, titre centré, grande image, CTA encre et légende." },
  { id: "ref-avantages", category: "reassurance", file: "section-avantages/index.html", name: "Avantages", description: "4 colonnes titre + texte séparées par un filet vertical." },
  { id: "ref-image-texte", category: "contenu", file: "section-image-texte/index.html", name: "Image + texte", description: "Carte blanche : image à gauche, titre bicolore, texte et CTA." },
  { id: "ref-cards", category: "conversion", file: "section-cards/index.html", name: "Cartes formation", description: "Grille de 3 cartes : photo + badge, titre, partenaire, prix, flèche." },
  { id: "ref-profils", category: "contenu", file: "section-profils/index.html", name: "Profils (onglets)", description: "3 onglets à trait indicateur et visuel en fondu." },
  { id: "ref-accordeon", category: "contenu", file: "section-accordeon/index.html", name: "Accordéon", description: "Accordéon (un seul élément ouvert) qui pilote le visuel de droite." },
  { id: "ref-carousel", category: "contenu", file: "section-carousel/index.html", name: "Carrousel", description: "Cartes 2 par vue : catégorie, titre et photo, points et flèches." },
  { id: "ref-avis", category: "preuve-sociale", file: "section-avis/index.html", name: "Avis", description: "Carrousel de témoignages 3 par vue : guillemet, avatar, lien." },
  { id: "ref-trustpilot", category: "preuve-sociale", file: "section-trustpilot/index.html", name: "Trustpilot", description: "Badge « Excellent » 5 étoiles, titre blanc sur vert de marque." },
]

/** Sections React qui implémentent une lame modèle (hors bibliothèque). */
export type Implementation = { component: string; basedOn: string; usedIn: string[] }

export const implementations: Implementation[] = [
  { component: "components/sections/hero-photo.tsx", basedOn: "ref-hero-produit", usedIn: [ALTERNANCE] },
  { component: "components/sections/hero-video.tsx", basedOn: "ref-hero-produit", usedIn: [AOFT] },
  { component: "components/sections/hero-product.tsx", basedOn: "ref-hero-produit", usedIn: [MBA] },
  { component: "components/sections/hero-centered.tsx", basedOn: "ref-hero-lifestyle", usedIn: [AVIS] },
  { component: "components/sections/feature-columns.tsx", basedOn: "ref-avantages", usedIn: [ALTERNANCE, AOFT, MBA] },
  { component: "components/sections/media-card.tsx", basedOn: "ref-image-texte", usedIn: [ALTERNANCE] },
  { component: "components/sections/image-text.tsx", basedOn: "ref-image-texte", usedIn: [ALTERNANCE, AOFT, MBA, AVIS] },
  { component: "components/sections/offer-cards.tsx", basedOn: "ref-cards", usedIn: [MBA] },
  { component: "components/sections/tabs-section.tsx", basedOn: "ref-profils", usedIn: [ALTERNANCE, MBA] },
  { component: "components/sections/accordion-section.tsx", basedOn: "ref-accordeon", usedIn: [AOFT] },
  { component: "components/sections/faq-section.tsx", basedOn: "ref-accordeon", usedIn: [MBA] },
  { component: "components/sections/review-band.tsx", basedOn: "ref-trustpilot", usedIn: [ALTERNANCE, AOFT, MBA] },
  { component: "components/sections/review-wall.tsx", basedOn: "ref-avis", usedIn: [AVIS] },
]

export const findLame = (id: string) => lames.find((lame) => lame.id === id)

export const previewUrl = (lame: Lame) => `/lames/source/${lame.file}`

export type ResolvedLame = Lame & {
  status: LameStatus
  note?: string
  updatedAt?: string
  preview: string
  implementations: Implementation[]
}

/** Lames modèles + statut de validation (brand/lames-status.json) + sections qui les implémentent. */
export async function getResolvedLames(): Promise<ResolvedLame[]> {
  const reviews = await readReviews()
  return lames.map((lame) => {
    const review = reviews[lame.id]
    return {
      ...lame,
      category: review?.category ?? lame.category,
      status: review?.status ?? "a-valider",
      note: review?.note,
      updatedAt: review?.updatedAt,
      preview: previewUrl(lame),
      implementations: implementations.filter((i) => i.basedOn === lame.id),
    }
  })
}
