import type { HeroCenteredProps } from "@/components/sections/hero-centered"
import type { ReviewWallProps } from "@/components/sections/review-wall"
import type { Cta } from "@/components/sections/types"

/**
 * Contenu de la LP /avis-apprenants (mosaïque d'avis et de témoignages vidéo).
 * Verbatims : témoignages d'apprenants en alternance fournis par l'équipe (source interne),
 * cités mot pour mot. Vidéos : témoignages de Manon, Maxime, Clara et Océane (JW Player) et chaîne YouTube Studi. Chiffres : enquête Audirep.
 */

const links = {
  formations: "https://www.studi.com/fr/formations",
  lives: "https://www.studi.com/fr/lives",
  contact: "https://www.studi.com/fr/contact",
}
const youtubePoster = (id: string, alt: string) => ({
  src: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  alt,
  width: 480,
  height: 360,
})

export const copyright = "2026 ©Studi tous droits réservés."

export const nav: { links: (Cta & { current?: boolean })[]; cta?: Cta } = {
  links: [
    { label: "Formations", href: links.formations },
    { label: "Webinars", href: links.lives },
    { label: "Avis", href: "#temoignages", current: true },
    { label: "Contact", href: links.contact },
  ],
  cta: { label: "Trouver ma formation", href: links.formations },
}

/** Note moyenne des avis Studi (donnée fournie par l'équipe). */
export const rating = { rating: 4.5, count: 9468 }

export const hero: HeroCenteredProps = {
  title: "Ils se sont formés avec Studi",
  lead: "Accompagnement, alternance, réussite : découvrez ce que nos apprenants disent de leur parcours avec Studi et de leurs conseillers.",
}

export const wall: ReviewWallProps = {
  id: "temoignages",
  filters: [
    { value: "tous", label: "Tous" },
    { value: "avis", label: "Avis" },
    { value: "video", label: "Vidéos" },
    { value: "accompagnement", label: "Accompagnement" },
    { value: "chiffres", label: "Chiffres clés" },
  ],
  items: [
    { kind: "review", id: "avis-mathieu", tags: ["avis", "accompagnement"], author: "Mathieu", role: "MBA Marketing digital et développement commercial", quote: "Les conseillers Studi possèdent une méthode carrée, avec des rdv toutes les semaines. Ils sont en plus à l’écoute et les fiches de postes qu’ils m’envoyaient correspondaient à mes envies. Je recommande vivement." },
    { kind: "video", id: "video-manon", tags: ["video", "avis"], vertical: true, title: "Le témoignage de Manon", subtitle: "Bachelor Communication en alternance · 1 min 41", jwplayer: { mediaId: "k0UIvpNG", playerId: "yoGxNDi6" } },
    { kind: "video", id: "video-aoft", tags: ["video"], title: "Demandeurs d’emploi, formez-vous avec Studi", subtitle: "Vidéo Studi", youtubeId: "CeC_MCcUx9c", poster: youtubePoster("CeC_MCcUx9c", "Demandeurs d’emploi, formez-vous avec Studi") },
    { kind: "highlight", id: "citation-manon", tags: ["avis"], quote: "J’ai trouvé mon alternance en un mois et demi.", author: "Manon, Bachelor Communication en alternance" },
    { kind: "video", id: "video-clara", tags: ["video", "avis"], vertical: true, title: "Le témoignage de Clara", subtitle: "Apprenante Studi · 1 min 32", jwplayer: { mediaId: "kHDyqM2b", playerId: "yoGxNDi6" } },
    { kind: "stat", id: "stat-confiance", tags: ["chiffres"], value: "9/10", label: "apprenants ont gagné en confiance et ont une meilleure vision de leur avenir*" },
    { kind: "review", id: "avis-manon", tags: ["avis", "accompagnement"], author: "Manon", role: "Bachelor Communication en alternance · rentrée septembre 2026", quote: "J’ai été accompagnée par une conseillère adorable qui m’appelait une fois par semaine, qui m’a donné des tips, m’a encouragé à faire le suivi de mes candidatures. Résultat : j’ai trouvé mon alternance en un mois et demi." },
    { kind: "feature", id: "coaching", tags: ["accompagnement"], title: "Votre programme coaching alternance", items: [
      "Un bilan d’orientation offert pour choisir la formation qui correspond à votre projet professionnel",
      "Un accès à Studi Connect pour accélérer votre recherche d’emploi en alternance",
      "Des rendez-vous de suivi avec votre conseiller",
    ] },
    { kind: "video", id: "video-maxime", tags: ["video", "avis"], vertical: true, title: "Le témoignage de Maxime", subtitle: "Graduate Graphisme et communication visuelle · 1 min 58", jwplayer: { mediaId: "Fpjw9poE", playerId: "yoGxNDi6" } },
    { kind: "review", id: "avis-maxime", tags: ["avis", "accompagnement"], author: "Maxime", role: "Graduate Graphisme et communication visuelle", quote: "Les coachings avec ma conseillère Studi m’ont beaucoup aidé dans des périodes où j’étais démotivé. Elle m’a motivé, poussé, m’a conseillé concrètement sur des sujets que je ne maîtrisais pas comme la préparation d’entretien. Et puis, je sentais qu’il y avait un suivi derrière, notamment grâce aux appels hebdomadaires." },
    { kind: "review", id: "avis-anthony", tags: ["avis", "accompagnement"], author: "Anthony", role: "Graduate Chargé d’affaires banque / assurance", quote: "Si on est bien accompagné comme moi je l’ai été par mon conseiller, il n’y a aucun problème. Personnellement, je vous recommande Studi." },
    { kind: "stat", id: "stat-progression", tags: ["chiffres"], value: "96%", label: "des diplômés ont constaté une progression professionnelle*" },
    { kind: "video", id: "video-oceane", tags: ["video", "avis"], vertical: true, title: "Le témoignage d’Océane", subtitle: "Apprenante Studi · 1 min 27", jwplayer: { mediaId: "QkKragqo", playerId: "yoGxNDi6" } },
    { kind: "video", id: "video-alternance", tags: ["video"], title: "Comment trouver votre alternance en moins de 30 jours ?", subtitle: "Vidéo Studi", youtubeId: "AVVzfdw_I24", poster: youtubePoster("AVVzfdw_I24", "Comment trouver votre alternance en moins de 30 jours ?") },
    { kind: "feature", id: "studi-connect", tags: ["accompagnement"], title: "Studi Connect, pour trouver votre entreprise", items: [
      "Des milliers d’offres d’alternance, dont des exclusivités de nos partenaires",
      "Un tableau de bord pour suivre vos candidatures en un clin d’œil",
      "Une recherche d’emploi simplifiée pour décrocher le poste idéal",
    ] },
    { kind: "highlight", id: "citation-mathieu", tags: ["avis"], quote: "Les conseillers Studi possèdent une méthode carrée, avec des rdv toutes les semaines.", author: "Mathieu, MBA Marketing digital et développement commercial" },
    { kind: "stat", id: "stat-formes", tags: ["chiffres"], value: "+10 000", label: "demandeurs d’emploi formés depuis 2022" },
  ],
}

export const mentions = [
  "*Source : résultat de l’enquête Audirep réalisée en janvier 2025 sur un échantillon de 2309 répondants ayant terminé leur formation entre janvier 2021 et juin 2023.",
]
