import { Accessibility, ExternalLink, Lightbulb } from "lucide-react"

import type { Logo } from "@/components/lp/logo-grid"
import { employeurs } from "@/components/lp/logos"
import type { DataTableSectionProps } from "@/components/sections/data-table-section"
import type { FeatureColumnsProps } from "@/components/sections/feature-columns"
import type { HeroPhotoProps } from "@/components/sections/hero-photo"
import type { ImageTextProps } from "@/components/sections/image-text"
import type { LogoWallProps } from "@/components/sections/logo-wall"
import type { MediaCardProps } from "@/components/sections/media-card"
import type { ReviewBandProps } from "@/components/sections/review-band"
import type { TabsSectionProps } from "@/components/sections/tabs-section"

/** Contenu de la LP /confirmation-automatise-alternance-btoc (source : info.studi.com). */

const CDN =
  "https://d9hhrg4mnvzow.cloudfront.net/info.studi.com/confirmation-automatise-alternance-btoc"

const links = {
  brochure:
    "https://docs.studi.fr/ressources/catalogues/alternance/Ecole_Studi_Brochure_Candidat_Alternance.pdf",
  conseils:
    "https://docs.studi.fr/ressources/Marketing/pdf/ALTERNANCE/Studi-alternance-les-11-conseils-de-Lucas.pdf",
  aides:
    "https://travail-emploi.gouv.fr/laide-aux-employeurs-qui-recrutent-en-apprentissage",
  decret: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053634597",
  trajectoire: "https://www.trajectoirestudi.com/",
  lives:
    "https://www.studi.com/fr/lives?utm_source=site-studi&utm_medium=referral",
}

export const confirmation =
  "Merci pour votre intérêt. Vous allez être recontacté prochainement par l’un de nos conseillers."

export const copyright = "2025©Studi tous droits réservés."

export const hero: HeroPhotoProps = {
  badges: [
    { label: "Coaching alternance gratuit", variant: "accent" },
    { label: "100% en ligne · Diplômes reconnus par l’État", variant: "brand" },
  ],
  title: "Trouvez votre alternance grâce à votre école Studi",
  lead: "Votre Programme Coaching Alternance Gratuit vous accompagne de l’orientation jusqu’à la signature de votre contrat.",
  ctas: [
    { label: "Télécharger la documentation", href: links.brochure },
    { label: "Voir les webinars", href: "#webinars" },
  ],
  note: "Rejoignez plus de 70 000 apprenants et 800 formateurs experts.",
  image: {
    src: `${CDN}/b71e9f3f-studi-alternance_10000000kc0ol03800r028.png`,
    alt: "Étudiante Studi souriante, bras croisés",
    width: 732,
    height: 885,
  },
  card: {
    title: "Votre programme coaching alternance",
    items: [
      "Un bilan d’orientation offert pour choisir la formation qui correspond à votre projet professionnel",
      "Un accès à Studi Connect, la plateforme qui vous permet d’accélérer votre recherche d’emploi en alternance",
      "Des rendez-vous de suivi avec votre conseiller",
    ],
  },
}

export const atouts: FeatureColumnsProps = {
  title: "Pourquoi choisir l’école Studi ?",
  titleHidden: true,
  items: [
    {
      title: "Démarrez quand vous voulez",
      text: "Vous décidez où et quand vous voulez étudier en avançant à votre rythme, sans contrainte.",
    },
    {
      title: "Diplômes reconnus par l’État",
      text: "Un atout précieux pour booster votre employabilité et votre évolution de carrière.",
    },
    {
      title: "Accompagnement et suivi",
      text: "Apprenez avec les meilleurs et partagez vos connaissances avec plus de 70 000 apprenants et 800 formateurs experts.",
    },
  ],
}

export const admission: TabsSectionProps = {
  title: "Dès votre admission, vous accédez à",
  tabs: [
    {
      value: "orientation",
      label: "Orientation",
      title: "Choisissez le bon parcours de formation",
      items: [
        "Bénéficiez d’un bilan d’orientation",
        "Choisissez votre formation parmi nos 130 parcours dans 13 filières",
        "Préparez votre dossier d’admission avec notre équipe",
      ],
      image: { src: `${CDN}/ac1f0d72-img-brochure-alternance_10000000p00hg00000001o.jpg`, width: 450, height: 314, alt: "Brochure « Choisissez l’alternance 100 % en ligne »" },
    },
    {
      value: "emploi",
      label: "Emploi",
      title: "Trouvez votre entreprise avec Studi",
      items: [
        "Accédez à des milliers d’offres d’alternance, dont des exclusivités provenant de nos partenaires Studi",
        "Suivez l’évolution de vos candidatures en un clin d’œil grâce à un tableau de bord personnalisé",
        "Gérez votre recherche d’emploi en toute simplicité et optimisez vos chances de décrocher le poste idéal",
      ],
      image: { src: `${CDN}/dd806cb1-live-studi-13_10000000kf0ge01t00001o.jpg`, width: 735, height: 590, alt: "Tableau de bord de suivi des candidatures Studi Connect" },
    },
    {
      value: "formation",
      label: "Formation",
      title: "Découvrez votre future plateforme de formation",
      items: [
        "Parcours 1 : Réussir votre recherche d’entreprise",
        "Parcours 2 : Explorer les bases de votre futur métier",
        "Parcours 3 : Se démarquer dans le monde professionnel",
      ],
      image: { src: `${CDN}/196ef611-live-studi-9_10000000kg0ge01t00001o.jpg`, width: 736, height: 590, alt: "Plateforme de formation Studi sur ordinateur et mobile" },
    },
  ],
}

export const conseils: MediaCardProps = {
  media: {
    kind: "video",
    video: { id: "AVVzfdw_I24", title: "Comment trouver votre alternance en moins de 30 jours ?" },
  },
  badge: { label: "Guide gratuit", variant: "brand" },
  title: "Les 11 conseils de Lucas",
  titleAccent: "pour en finir avec les idées reçues et passer à l’action !",
  lead: "Comment trouver votre alternance en moins de 30 jours ?",
  cta: { label: "Téléchargez la liste des 11 conseils", href: links.conseils },
}

export const aides: DataTableSectionProps = {
  title: "Alternance : les aides de l’État pour 2026*",
  intro: (
    <>
      Pour les contrats d’apprentissage conclus à compter{" "}
      <strong className="font-normal text-foreground">du 8 mars 2026</strong>, les aides aux
      employeurs s’appliquent{" "}
      <strong className="font-normal text-foreground">dans le cadre défini par le Code du Travail</strong>,
      sous réserve d’évolutions règlementaires :
    </>
  ),
  items: [
    "Versement la 1ère année du contrat",
    "Paiement mensuel par l’Agence de services et paiements (ASP)",
    "Non cumulable avec l’aide unique à l’apprentissage",
  ],
  footnote: { label: "*Décret n° 2026-168 du 6 mars 2026", href: links.decret },
  table: {
    title: "Montant de l’aide selon le diplôme préparé",
    description: "Versée la 1ère année du contrat",
    caption: "Montant de l’aide selon le niveau de diplôme et la taille de l’entreprise",
    columns: ["Niveau de diplôme", "Moins de 250 salariés", "Plus de 250 salariés"],
    rows: [
      { label: "Niveaux 3 et 4", detail: "Infrabac et bac", values: ["5 000 €", "2 000 €"] },
      { label: "Niveau 5", detail: "BTS", values: ["4 500 €", "1 500 €"] },
      { label: "Niveaux 6 et 7", detail: "Licence et Master", values: ["2 000 €", "750 €"] },
    ],
  },
  alerts: [
    {
      icon: Accessibility,
      title: "Aide maintenue à 6 000 € en cas de handicap",
      text: (
        <>
          Quelle que soit la taille de l’entreprise et quel que soit le niveau de
          diplôme préparé.{" "}
          <a href={links.aides} target="_blank" rel="noopener" className="inline-flex items-center gap-1">
            En savoir plus sur travail-emploi.gouv.fr
            <ExternalLink aria-hidden className="size-3.5" />
          </a>
        </>
      ),
    },
    {
      variant: "accent",
      icon: Lightbulb,
      title: "Mentionnez ces aides lors de vos entretiens !",
      text: "Cela démontre votre implication et votre connaissance des actualités liées à l’alternance, tout en mettant en avant les avantages de votre recrutement.",
    },
  ],
}

export const webinars: ImageTextProps = {
  id: "webinars",
  image: {
    src: `${CDN}/fd5e7759-img-webinar_10000000im0jm00y00001o.jpg`,
    alt: "Étudiante suivant un live Studi sur son ordinateur",
    width: 670,
    height: 706,
  },
  badge: { label: "Rencontrons-nous", variant: "accent" },
  title: "Webinars gratuits : Spécial Alternance",
  text: "Inscrivez-vous à nos lives gratuits pour tout savoir sur l’alternance en ligne avec Studi. Nos conseillers répondent en direct à vos questions : choix de la formation, rémunération, conseils pour trouver votre entreprise. Participez également à nos démonstrations de la plateforme de formation et de Connect !",
  cta: { label: "Je m’inscris", href: links.lives },
}

const partenaires: Logo[] = [
  { name: "ESG École de commerce", src: `${CDN}/3fa96853-esg-ecole-de-commerce-black.svg`, width: 146, height: 52 },
  { name: "ESG Finance", src: `${CDN}/8fa79e0a-esg-finance-black.svg`, width: 182, height: 53 },
  { name: "ESG Tourisme", src: `${CDN}/cb0fdae0-esg-tourisme-black.svg`, width: 182, height: 53 },
  { name: "ESG Sport", src: `${CDN}/716bdd03-esg-sport-black.svg`, width: 182, height: 53 },
  { name: "ESG RH", src: `${CDN}/9260fcd0-esg-rh-black.svg`, width: 130, height: 52 },
  { name: "ESG Immobilier", src: `${CDN}/d2fd022f-esg-immobilier_1000000000000000000028.png`, width: 164, height: 28 },
  { name: "Digital Campus", src: `${CDN}/ca0ccd93-digital-campus-black.svg`, width: 124, height: 52 },
  { name: "HETIC", src: `${CDN}/bb252b1e-hetic-black.svg`, width: 149, height: 52 },
  { name: "LISAA", src: `${CDN}/853447ab-lisaa-black.svg`, width: 143, height: 52 },
  { name: "Comptalia", src: `${CDN}/4bcdb40d-comptalia-black.svg`, width: 182, height: 53 },
  { name: "Narratiiv", src: `${CDN}/341ae6b9-logo-narratiiv_107m02w000000000000028.png`, width: 137, height: 52 },
  { name: "Bellecour", src: `${CDN}/9a7aa47e-logo-bellecour_103m046000000000000028.png`, width: 65, height: 75 },
]

export const logos: LogoWallProps = {
  groups: [
    { title: "Les diplômés Studi travaillent chez", logos: employeurs },
    { title: "Nos partenaires académiques", logos: partenaires },
  ],
}

export const trajectoire: MediaCardProps = {
  media: {
    kind: "image",
    image: {
      src: `${CDN}/664e5465-unnamed.webp`,
      alt: "Couverture du magazine Trajectoire, numéro de janvier 2026",
      width: 1092,
      height: 910,
    },
  },
  reverse: true,
  badge: { label: "Nouveau", variant: "ink" },
  title: "Le dernier numéro de TRAJECTOIRE est disponible !",
  lead: "Découvrez Trajectoire, le magazine digital Studi pour comprendre, anticiper et construire son avenir professionnel.",
  cta: { label: "Lire le magazine", href: links.trajectoire },
}

export const avis: ReviewBandProps = {
  title: "Nos apprenants en parlent",
  description: "Découvrez les avis laissés par nos apprenants sur Trustpilot.",
}
