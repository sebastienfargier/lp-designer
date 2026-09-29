import type { ConditionsSectionProps } from "@/components/sections/conditions-section"
import type { FaqSectionProps } from "@/components/sections/faq-section"
import type { FeatureColumnsProps } from "@/components/sections/feature-columns"
import type { HeroProductProps } from "@/components/sections/hero-product"
import type { ImageTextProps } from "@/components/sections/image-text"
import type { OfferCardsProps } from "@/components/sections/offer-cards"
import type { ReviewBandProps } from "@/components/sections/review-band"
import type { TabsSectionProps } from "@/components/sections/tabs-section"

/**
 * Contenu de la LP produit /mba-expert-controle-gestion-audit
 * (source : studi.com/fr/formation/finance-controle-de-gestion/mba-expert-en-controle-de-gestion-et-audit).
 */

const IMG = "/lp/mba-controle-gestion-audit"
const photo = (name: string, alt: string) => ({ src: `${IMG}/${name}.jpg`, alt, width: 1920, height: 1080 })

const links = {
  // Page formation : le formulaire « Recevoir la brochure » y est hébergé
  formation:
    "https://www.studi.com/fr/formation/finance-controle-de-gestion/mba-expert-en-controle-de-gestion-et-audit",
  alternance:
    "https://www.studi.com/fr/formation/finance-controle-de-gestion/alternance/mba-expert-en-controle-de-gestion-et-audit",
  cpf: "https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/91114836900018_uid_01646/91114836900018_uid_01646",
  contact: (offer: number) => `https://www.studi.com/fr/contact?offer=${offer}`,
}

export const copyright = "2026 ©Studi tous droits réservés."

export const hero: HeroProductProps = {
  badges: [
    { label: "Éligible CPF", variant: "accent" },
    { label: "100% en ligne · Titre RNCP niveau 7 (Bac+5)", variant: "brand" },
  ],
  title: "MBA Expert en contrôle de gestion et audit",
  lead: "Devenez l’expert qui pilote la performance et sécurise les comptes. Un MBA 100% en ligne pour évoluer vers le contrôle de gestion, l’audit ou la direction financière.",
  ctas: [
    { label: "Recevoir la brochure", href: links.formation },
    { label: "Voir le programme", href: "#programme" },
  ],
  pricing: {
    prefix: "À partir de",
    price: "6 190 €",
    monthly: "ou dès 120 €/mois, en plusieurs fois sans frais",
    funding: {
      title: "Éligible Mon Compte Formation",
      text: "Financez votre formation jusqu’à 100% avec votre CPF.",
    },
  },
  partner: {
    label: "En partenariat académique avec",
    logo: {
      src: "https://www.studi.com/sites/default/files/2024-07/ESG%20Finance.svg",
      alt: "ESG Finance",
      width: 1296,
      height: 200,
    },
  },
  image: photo("portrait", "Apprenante Studi assise sur un canapé"),
  card: {
    title: "Métiers visés",
    items: [
      "Contrôleur / Contrôleuse de gestion",
      "Auditeur / Auditrice interne ou externe",
      "Responsable administratif et financier",
      "Chargé de reporting",
    ],
  },
}

export const infos: FeatureColumnsProps = {
  title: "La formation en bref",
  titleHidden: true,
  items: [
    { title: "100% en ligne", text: "24h/24 et 7j/7, sur ordinateur, tablette et mobile." },
    { title: "450 h · 10 mois", text: "Durée moyenne estimée, adaptée à votre rythme*." },
    { title: "Démarrage", text: "À tout moment de l’année." },
    { title: "Titre RNCP niveau 7", text: "Bac+5 reconnu par l’État, et diplôme d’école Studi avec ESG Finance." },
  ],
}

export const competences: ConditionsSectionProps = {
  title: "Pilotez la performance et garantissez la fiabilité des comptes",
  columns: [
    {
      title: "Vous serez capable de",
      items: [
        "Bâtir une solution d’optimisation comptable et financière appuyée sur un diagnostic complet",
        "Construire et faire vivre un système de contrôle de gestion, du budget au reporting",
        "Conduire des missions d’audit interne et externe et maîtriser les risques",
        "Encadrer et faire progresser une équipe financière",
      ],
    },
    {
      title: "Inclus dans votre formation",
      items: [
        "Un accès gratuit à Pennylane, logiciel de comptabilité et de gestion plébiscité sur le marché",
        "Le Pack Compétences 360 : IA (Le Wagon), soft skills (Cours Florent), langues, logiciels, entrepreneuriat et coaching carrière",
        "Des classes virtuelles en direct et le soutien des formateurs",
        "Un accompagnement emploi personnalisé",
      ],
    },
  ],
  callout: {
    title: "Cette formation est aussi disponible en alternance",
    text: "Préparez le même MBA en alternance et financez votre formation tout en gagnant en expérience.",
    cta: { label: "Découvrir l’alternance", href: links.alternance },
  },
}

export const programme: TabsSectionProps = {
  id: "programme",
  title: "Un programme en 4 blocs de compétences",
  tabs: [
    {
      value: "bloc-1",
      label: "Bloc 1",
      title: "Élaborer une solution d’optimisation comptable et financière",
      items: [
        "Mettre en œuvre un système d’information",
        "Réaliser une veille globale de l’environnement de l’entreprise",
        "Réaliser un point de situation comptable et financier",
        "Mettre en œuvre une politique d’endettement",
        "Réaliser un diagnostic stratégique",
      ],
      image: photo("pilotage", "Professionnel souriant travaillant sur son ordinateur portable"),
    },
    {
      value: "bloc-2",
      label: "Bloc 2",
      title: "Concevoir et piloter le système de contrôle de gestion",
      items: [
        "Comprendre les grandes notions de rentabilité",
        "Utiliser les leviers de la performance",
        "Connaître et optimiser les coûts d’une organisation",
        "Piloter la performance via la démarche budgétaire",
        "Mettre en œuvre des tableaux de bord",
      ],
      image: photo("formation", "Apprenante suivant sa formation depuis un canapé"),
    },
    {
      value: "bloc-3",
      label: "Bloc 3",
      title: "Piloter les audits de performance comptables et financiers",
      items: [
        "Auditer les activités comptables et financières",
        "Piloter une mission d’audit interne",
        "Piloter une mission d’audit externe",
        "Connaître les obligations légales, sociales et RSE de l’entreprise",
        "Maîtriser la démarche de gestion des risques",
      ],
      image: photo("audit", "Professionnel travaillant chez lui sur son ordinateur"),
    },
    {
      value: "bloc-4",
      label: "Bloc 4",
      title: "Manager un service de contrôle de gestion",
      items: [
        "Utiliser les outils de management d’équipe",
        "Mettre en œuvre un management par objectifs",
        "Piloter un processus de recrutement",
        "Développer l’autonomie et faire grandir son équipe",
      ],
      image: photo("management", "Professionnelle souriante devant son ordinateur"),
    },
  ],
}

export const diplomes: ImageTextProps = {
  image: photo("diplome", "Apprenant Studi en formation"),
  badge: { label: "Certification", variant: "accent" },
  title: "Un titre RNCP de niveau 7 et un diplôme d’école",
  text: "Sous réserve de réussite aux épreuves finales, vous obtenez le titre RNCP « Expert en contrôle de gestion et audit » de ESGCV, niveau 7, reconnu par l’État (RNCP 37515), ainsi que le diplôme d’école « Auditeur Contrôleur de Gestion » délivré par Studi en partenariat avec ESG Finance**.",
  cta: { label: "Recevoir la brochure", href: links.formation },
}

export const methode: FeatureColumnsProps = {
  title: "La méthode Studi : votre chemin vers le succès",
  items: [
    {
      title: "Une formation qui s’adapte à votre vie",
      text: "Formez-vous quand vous voulez, où vous voulez, à votre rythme, avec un cadre clair pour concilier travail, vie perso et formation.",
    },
    {
      title: "Ancrée dans la réalité du métier",
      text: "Plus de 700 professionnels en activité partagent leur expertise : cas pratiques, projets concrets et mises en situation.",
    },
    {
      title: "Un accompagnement humain",
      text: "Référent pédagogique, formateurs experts et conseillers Relation Apprenant vous entourent du premier contact au diplôme.",
    },
    {
      title: "Une préparation solide aux examens",
      text: "Évaluations d’entraînement corrigées, révisions ciblées, entraînement aux oraux et classes dédiées.",
    },
    {
      title: "Une communauté qui vous tire vers le haut",
      text: "Plus de 59 000 apprenants pour échanger, s’entraider et partager leurs expériences.",
    },
    {
      title: "Une projection vers l’emploi",
      text: "CV, lettre de motivation, préparation aux entretiens et accès à des offres ciblées.",
    },
  ],
}

export const niveaux: OfferCardsProps = {
  id: "accompagnement",
  title: "Choisissez votre niveau d’accompagnement",
  lead: "Tous les niveaux incluent l’accès aux contenus 24h/24, le Pack Compétences 360, la certification reconnue par l’État et les garanties Diplômé ou Remboursé et Embauché ou Remboursé.",
  cards: [
    {
      title: "Essentiel",
      text: "La souplesse, sans rien sacrifier à la qualité.",
      highlight: { value: "6 190 €" },
      features: ["Accès prolongé à la formation : 3 ans", "Classes virtuelles en direct", "Accompagnement emploi personnalisé"],
      cta: { label: "Nous contacter", href: links.contact(1) },
    },
    {
      badge: { label: "Le plus populaire", variant: "accent" },
      title: "Plus",
      text: "Le cadre qui structure votre parcours, à chaque étape.",
      highlight: { value: "6 690 €" },
      features: ["Accès prolongé à la formation : 3 ans", "6 accélérateurs de carrière", "20 séances individuelles avec un expert"],
      cta: { label: "Nous contacter", href: links.contact(2) },
      featured: true,
    },
    {
      title: "Premium",
      text: "L’intensité pour maximiser votre réussite, jusqu’à l’emploi.",
      highlight: { value: "7 190 €" },
      features: [
        "Accès prolongé à la formation : 10 ans",
        "6 accélérateurs de carrière + 2 formations métiers",
        "40 séances individuelles avec un expert",
        "1 bilan pédagogique mensuel",
      ],
      cta: { label: "Nous contacter", href: links.contact(3) },
    },
  ],
}

export const financement: OfferCardsProps = {
  title: "Solutions de financement",
  surface: "surface-page",
  cards: [
    { title: "Mon compte CPF", text: "Financez votre formation avec vos droits CPF.", highlight: { prefix: "Jusqu’à", value: "100%" }, cta: { label: "Mon compte CPF", href: links.cpf } },
    { title: "France Travail", text: "Formation éligible à des aides de France Travail.", highlight: { prefix: "À partir de", value: "0 €" } },
    { title: "Entreprise", text: "Bénéficiez d’un financement par votre employeur.", highlight: { prefix: "Finançable jusqu’à", value: "100%" } },
    { title: "Financement personnel", text: "En plusieurs fois sans frais, jusqu’à 36 mois.", highlight: { prefix: "À partir de", value: "120 €", suffix: "par mois" } },
    { title: "Bourse d’études", text: "Selon votre profil et sous conditions d’éligibilité.", highlight: { prefix: "Jusqu’à", value: "-30%" } },
  ],
}

export const indicateurs: ReviewBandProps = {
  title: "Des résultats qui parlent pour la formation",
  stats: [
    { value: "86%", label: "taux d’emploi dans les 6 mois suivant la formation***" },
    { value: "87%", label: "taux de réussite aux examens***" },
    { value: "88%", label: "taux de satisfaction lié aux cours***" },
  ],
}

export const faq: FaqSectionProps = {
  title: "Questions fréquentes",
  lead: "Un conseiller peut aussi étudier votre profil et répondre à vos questions.",
  image: photo("pilotage", "Professionnel souriant travaillant sur son ordinateur portable"),
  items: [
    {
      value: "reconnu",
      question: "Le MBA est-il un diplôme reconnu ?",
      answer: "Oui : il prépare au titre RNCP « Expert en contrôle de gestion et audit », de niveau 7 (Bac+5), reconnu par l’État. Cette certification atteste de compétences managériales et stratégiques reconnues par les employeurs.",
    },
    {
      value: "prerequis",
      question: "Quels sont les prérequis ?",
      answer: "Un titre ou diplôme de niveau 6 (Licence, Bac+3) dans le domaine visé ; ou un niveau 6 toutes spécialités avec 2 ans d’expérience dans le domaine ; ou un niveau 5 (BTS, Bac+2) avec 3 ans d’expérience dans le domaine. Les candidatures sont étudiées individuellement.",
    },
    {
      value: "deroulement",
      question: "Comment se déroule la formation ?",
      answer: "100% en ligne, 24h/24 : vidéos, cours écrits, fiches de synthèse, quiz, cas pratiques et plus de 10 000 classes virtuelles par an, en direct ou en replay. Le stage n’est pas obligatoire, mais reste un atout.",
    },
    {
      value: "examens",
      question: "Comment sont organisés les examens ?",
      answer: "Les examens ont lieu en ligne, en mars, juin, septembre ou décembre. Chacun des 4 blocs est évalué par une étude de cas ou une mise en situation professionnelle, et peut être validé individuellement.",
    },
    {
      value: "financement",
      question: "Comment financer le MBA ?",
      answer: "La formation est éligible au CPF. Votre employeur peut la financer dans le cadre du plan de développement des compétences, et un paiement en plusieurs fois sans frais ou une bourse d’études sont possibles.",
    },
    {
      value: "difficulte",
      question: "Et si je rencontre une difficulté ?",
      answer: "Des chargés de relation apprenant, des formateurs experts (réponse sur le forum sous 48 h, correction des copies sous 7 jours) et une assistance technique vous accompagnent tout au long du parcours.",
    },
  ],
}

export const mentions = [
  "*La durée en heures et en mois est une durée moyenne estimée, donnée à titre indicatif et non contractuelle. Elle peut être inférieure ou supérieure selon chaque apprenant, sans incidence sur le tarif, et sera précisée lors de votre entretien avec votre conseiller en formation.",
  "**Titre RNCP « Expert en contrôle de gestion et audit » de ESGCV, niveau 7, enregistré au RNCP sous le numéro 37515 par décision de France compétences du 24-04-2023. Le diplôme Studi est un diplôme d’école, distinct de la certification RNCP et non reconnu par l’État.",
  "***Taux d’emploi : apprenants ayant trouvé un emploi dans les 6 mois suivant la fin de leur formation. Taux de réussite : apprenants présentés aux examens ayant validé totalement ou partiellement leur titre. Taux de satisfaction : notes sur 5 attribuées par les apprenants. Toutes promotions confondues.",
]
