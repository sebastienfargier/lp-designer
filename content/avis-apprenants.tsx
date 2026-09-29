import type { HeroCenteredProps } from "@/components/sections/hero-centered"
import type { ImageTextProps } from "@/components/sections/image-text"
import type { ReviewWallProps } from "@/components/sections/review-wall"
import type { Cta } from "@/components/sections/types"

/**
 * Contenu de la LP /avis-apprenants (mosaïque d'avis et de témoignages vidéo).
 *
 * ⚠️ Les éléments `example: true` sont des **contenus d'exemple** (auteur « Prénom N. », badge « Exemple ») :
 * remplacez-les par de vrais avis / vidéos d'apprenants, recueillis avec leur accord, puis retirez `example`.
 * Réels : les 2 vidéos YouTube Studi et les chiffres Audirep.
 */

const IMG = "/lp/avis-apprenants"
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
const photo = (name: string) => ({ src: `${IMG}/${name}.jpg`, alt: "", width: 1920, height: 1080 })

export const copyright = "2026 ©Studi tous droits réservés."

export const nav: { links: (Cta & { current?: boolean })[]; cta: Cta } = {
  links: [
    { label: "Formations", href: links.formations },
    { label: "Webinars", href: links.lives },
    { label: "Avis", href: "#temoignages", current: true },
    { label: "Contact", href: links.contact },
  ],
  cta: { label: "Trouver ma formation", href: links.formations },
}

export const hero: HeroCenteredProps = {
  title: "Ils se sont formés avec Studi",
  lead: "Avis, témoignages vidéo et parcours : découvrez ce que nos apprenants disent de leur formation 100% en ligne, à leur rythme.",
  ctas: [
    { label: "Trouver ma formation", href: links.formations },
    { label: "Voir les témoignages", href: "#temoignages" },
  ],
}

export const wall: ReviewWallProps = {
  id: "temoignages",
  filters: [
    { value: "tous", label: "Tous" },
    { value: "video", label: "Vidéos" },
    { value: "alternance", label: "Alternance" },
    { value: "reconversion", label: "Reconversion" },
    { value: "en-poste", label: "En poste" },
  ],
  items: [
    { kind: "review", id: "avis-1", example: true, tags: ["alternance"], author: "Prénom N.", role: "BTS Comptabilité Gestion en alternance", quote: "Pouvoir suivre les cours le soir après ma journée en entreprise a tout changé. Les classes virtuelles m’ont beaucoup aidée avant les examens." },
    { kind: "video", id: "video-aoft", tags: ["video", "reconversion"], title: "Demandeurs d’emploi, formez-vous avec Studi", subtitle: "Vidéo Studi", youtubeId: "CeC_MCcUx9c", poster: youtubePoster("CeC_MCcUx9c", "Demandeurs d’emploi, formez-vous avec Studi") },
    { kind: "review", id: "avis-2", example: true, tags: ["reconversion"], author: "Prénom N.", role: "Graduate Comptable · reconversion", quote: "Après dix ans dans le commerce, je voulais changer de métier sans arrêter de travailler. Le format 100% en ligne m’a permis d’avancer à mon rythme." },
    { kind: "stat", id: "stat-confiance", tags: ["reconversion", "en-poste"], value: "9/10", label: "apprenants ont gagné en confiance et ont une meilleure vision de leur avenir*" },
    { kind: "review", id: "avis-3", example: true, tags: ["en-poste"], author: "Prénom N.", role: "MBA Expert en contrôle de gestion et audit", quote: "J’ai préparé mon MBA en restant en poste. Les cas pratiques étaient directement applicables à mon travail de contrôleur de gestion." },
    { kind: "video", id: "video-exemple-1", example: true, tall: true, tags: ["video", "alternance"], title: "Témoignage vidéo · Prénom N.", subtitle: "Formation en alternance", poster: photo("temoignage-1") },
    { kind: "review", id: "avis-4", example: true, tags: ["alternance"], author: "Prénom N.", role: "Bachelor en alternance", quote: "Studi Connect m’a aidé à trouver mon entreprise d’accueil. Mon conseiller m’a suivi à chaque étape de mes candidatures." },
    { kind: "review", id: "avis-5", example: true, tags: ["reconversion"], author: "Prénom N.", role: "Bootcamp financé par France Travail", quote: "Une formation intensive, mais très encadrée. Les ateliers de recherche d’emploi m’ont redonné confiance pour mes entretiens." },
    { kind: "stat", id: "stat-progression", tags: ["en-poste"], value: "96%", label: "des diplômés ont constaté une progression professionnelle*" },
    { kind: "video", id: "video-alternance", tags: ["video", "alternance"], title: "Comment trouver votre alternance en moins de 30 jours ?", subtitle: "Vidéo Studi", youtubeId: "AVVzfdw_I24", poster: youtubePoster("AVVzfdw_I24", "Comment trouver votre alternance en moins de 30 jours ?") },
    { kind: "review", id: "avis-6", example: true, tags: ["en-poste"], author: "Prénom N.", role: "Formation courte en management", quote: "Des contenus clairs, des formateurs disponibles et un vrai suivi. J’ai pu valider un bloc de compétences en quelques mois." },
    { kind: "video", id: "video-exemple-2", example: true, tall: true, tags: ["video", "en-poste"], title: "Témoignage vidéo · Prénom N.", subtitle: "Formation suivie en poste", poster: photo("temoignage-2") },
    { kind: "review", id: "avis-7", example: true, tags: ["reconversion"], author: "Prénom N.", role: "Titre professionnel · reconversion", quote: "Je n’avais pas repris d’études depuis longtemps. L’accompagnement humain a fait toute la différence pour ne pas lâcher." },
    { kind: "stat", id: "stat-formes", tags: ["reconversion"], value: "+10 000", label: "demandeurs d’emploi formés depuis 2022" },
    { kind: "review", id: "avis-8", example: true, tags: ["alternance"], author: "Prénom N.", role: "Graduate en alternance", quote: "Le rythme en alternance est exigeant, mais la plateforme est très bien faite : je révisais même dans les transports." },
    { kind: "video", id: "video-exemple-3", example: true, tall: true, tags: ["video", "reconversion"], title: "Témoignage vidéo · Prénom N.", subtitle: "Reconversion professionnelle", poster: photo("temoignage-3") },
  ],
}

export const cta: ImageTextProps = {
  surface: "surface-brand",
  image: { src: `${IMG}/cta.png`, alt: "Une famille joue aux cubes dans le salon", width: 1344, height: 768 },
  badge: { label: "À votre tour", variant: "accent" },
  title: "Et si c’était votre tour ?",
  text: "Studi propose plus de 300 formations dans 18 filières, du Bac au Bac+5, 100% en ligne et à votre rythme. Un conseiller vous aide à choisir la vôtre.",
  cta: { label: "Trouver ma formation", href: links.formations },
}

export const mentions = [
  "*Source : résultat de l’enquête Audirep réalisée en janvier 2025 sur un échantillon de 2309 répondants ayant terminé leur formation entre janvier 2021 et juin 2023.",
]
