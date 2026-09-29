import type { Logo } from "@/components/lp/logo-grid"
import { employeurs } from "@/components/lp/logos"
import type { AccordionSectionProps } from "@/components/sections/accordion-section"
import type { ConditionsSectionProps } from "@/components/sections/conditions-section"
import type { FeatureColumnsProps } from "@/components/sections/feature-columns"
import type { HeroVideoProps } from "@/components/sections/hero-video"
import type { ImageTextProps } from "@/components/sections/image-text"
import type { LogoWallProps } from "@/components/sections/logo-wall"
import type { ReviewBandProps } from "@/components/sections/review-band"

/** Contenu de la LP /confirmation-aoft-2026 (source : info.studi.com). */

const CDN =
  "https://d9hhrg4mnvzow.cloudfront.net/info.studi.com/confirmation-aoft-2026"

const links = {
  brochure:
    "https://docs.studi.fr/ressources/catalogues/demandeurs-emploi/brochure-demandeurs-emploi-version-complete.pdf",
  catalogue: "https://www.studi.com/fr/formations",
  lives:
    "https://www.studi.com/fr/lives?utm_source=site-studi&utm_medium=cta-sticky",
}

export const confirmation =
  "Merci pour votre intérêt. Vous allez être recontacté.e prochainement par l’un de nos conseillers."

export const copyright = "2026 ©Studi tous droits réservés."

export const hero: HeroVideoProps = {
  badges: [
    { label: "Votre formation 100% financée", variant: "accent" },
    { label: "Bootcamp 6 mois · Places limitées", variant: "brand" },
  ],
  title: "Formez-vous à un métier d’avenir",
  lead: "Une formation intensive 100% en ligne, entièrement financée par France Travail, pour rebondir vers les métiers les plus porteurs du moment.",
  ctas: [
    { label: "Télécharger la documentation", href: links.brochure },
    { label: "Voir les webinars", href: "#webinars" },
  ],
  partner: {
    label: "En partenariat avec",
    logo: {
      src: `${CDN}/7325a89c-logo-france-travail_105w02o000000000000028.png`,
      alt: "France Travail",
      width: 106,
      height: 48,
    },
  },
  video: { id: "CeC_MCcUx9c", title: "Demandeurs d’emploi, formez-vous avec Studi" },
}

export const conditions: ConditionsSectionProps = {
  title: "Les conditions pour bénéficier du financement à 100% de votre formation",
  columns: [
    {
      title: "Conditions",
      items: [
        "Être inscrit à France Travail",
        "Être âgé de 16 ans minimum",
        "Remplir les prérequis d’admission",
      ],
    },
    {
      title: "Avantages",
      items: [
        "Vous restez indemnisé toute la durée de votre formation*",
        "Des diplômes et métiers reconnus par les entreprises",
      ],
    },
  ],
  callout: {
    title: "Vous n’avez pas trouvé la formation qui vous correspond ?",
    text: "Studi propose plus de 300 formations dans 18 filières du Bac au Bac+5. RH, Management, Marketing, Communication, Design, Immobilier, choisissez la formation qui correspond à votre projet professionnel !",
    cta: { label: "Voir le catalogue de formations", href: links.catalogue },
  },
}

export const offres: AccordionSectionProps = {
  title: "Des offres dédiées et adaptées à vos besoins",
  lead: "Quelle que soit votre situation personnelle ou votre expérience professionnelle passée, Studi vous propose une sélection de programmes sur les métiers les plus porteurs du moment afin de vous garantir la plus belle des réussites professionnelles !",
  items: [
    {
      value: "soft-skills",
      title: "Compétences comportementales ou “soft skills”",
      text: "Classe virtuelle animée par un professeur du Cours Florent pour vous guider sur les principales compétences attendues en entreprise : prendre la parole en public, animer une réunion, communiquer efficacement.",
      partner: { src: `${CDN}/92b629cc-logo-coursflorent_106402k00000000000001o.jpg`, alt: "Cours Florent", width: 110, height: 46 },
    },
    {
      value: "ia",
      title: "Compétences en intelligence artificielle",
      text: "Un module sur la maîtrise de l’IA générative en situation professionnelle, pour s’initier à l’IA, son utilisation pratique au quotidien, les défis et les opportunités qu’elle propose selon les secteurs d’activité.",
    },
    {
      value: "numerique",
      title: "Compétences numériques",
      text: "Des modules de formation sur les principaux logiciels utilisés en entreprise, fléchés par secteur d’activité (Sage, suite Adobe etc…)",
    },
    {
      value: "tre",
      title: "Techniques de Recherche d’Emploi et appui à la recherche de stage",
      text: "Un parcours totalement individualisé, tout au long de votre formation, qui intègre :",
      list: [
        "4 entretiens individuels",
        "15 heures d’ateliers collectifs",
        "Des contenus pédagogiques depuis votre plateforme",
      ],
      note: "Dispensé par notre partenaire AKSIS, le réseau national spécialiste de l’évolution et de la transition professionnelle.",
    },
  ],
  aside: {
    badge: { label: "Spécial Bootcamp", variant: "accent" },
    title: "Des formations proposées 100% en ligne sous un format bootcamp",
    text: "Une formation intensive et accélérée et une pédagogie centrée sur la pratique.",
    items: [
      "Un format intensif",
      "Des épreuves à distance",
      "Des classes virtuelles indispensables avec mon équipe pédagogique",
    ],
  },
}

export const logos: LogoWallProps = {
  groups: [{ title: "Les diplômés Studi travaillent chez", logos: employeurs }],
}

export const webinars: ImageTextProps = {
  id: "webinars",
  image: {
    src: `${CDN}/fd5e7759-img-webinar_10000000gk0jm02200001o.jpg`,
    alt: "Étudiante suivant un live Studi sur son ordinateur",
    width: 298,
    height: 353,
  },
  badge: { label: "Rencontrons-nous", variant: "accent" },
  title: "Webinars gratuits : Spécial Demandeurs d’emploi",
  text: "Vous êtes demandeur d’emploi ? Venez nombreux découvrir quelles formations vous pouvez suivre avec France Travail ou la Région Île-de-France. Posez vos questions, notre équipe vous répond en direct.",
  cta: { label: "Je m’inscris", href: links.lives },
}

const ecoles: Logo[] = [
  { name: "Narratiiv", src: `${CDN}/ed0aeb40-color-narrativ-grey_107202k000000000000028.png`, width: 127, height: 46 },
  { name: "ESG Finance", src: `${CDN}/82546df9-esg-finance-grey_10ac01k000000000000028.png`, width: 186, height: 28 },
  { name: "Comptalia", src: `${CDN}/4bcdb40d-comptalia-black.svg`, width: 182, height: 53 },
  { name: "Digital Campus", src: `${CDN}/ca0ccd93-digital-campus-black.svg`, width: 124, height: 52 },
]

export const pourquoi: FeatureColumnsProps = {
  title: "Pourquoi se former avec Studi ?",
  items: [
    {
      title: "Accessibilité",
      text: "Des formations accessibles quels que soient votre niveau d’études ou votre expérience professionnelle passée.",
    },
    {
      title: "Financement",
      text: "L’intégralité de votre formation financée à 100% par France Travail en communication, assurance, infrastructures, réseaux et cybersécurité, immobilier.",
    },
    {
      title: "Employabilité",
      text: "Une parfaite adéquation entre réalité et attractivité du marché de l’emploi.",
    },
    { title: "Expertise", text: "Des diplômes reconnus par l’État et les entreprises." },
  ],
  logos: {
    intro: "Nos programmes de formation, conçus en collaboration avec les écoles les plus prestigieuses, vous garantissent qualité pédagogique et adéquation métier",
    logos: ecoles,
  },
}

export const chiffres: ReviewBandProps = {
  title: "Studi, partenaire des programmes publics pour l’emploi",
  stats: [
    { value: "+10 000", label: "demandeurs d’emploi formés depuis 2022" },
    { value: "9/10", label: "apprenants ont gagné en confiance et ont une meilleure vision de leur avenir" },
    { value: "96%", label: "des diplômés ont constaté une progression professionnelle**" },
  ],
}

export const mentions = [
  "*Sous condition d’être indemnisé au titre de l’ARE (Allocation d’aide au retour à l’emploi) pendant toute la durée de la formation.",
  "**Source : résultat de l’enquête Audirep réalisée en janvier 2025 sur un échantillon de 2309 répondants ayant terminé leur formation entre janvier 2021 et juin 2023.",
]
