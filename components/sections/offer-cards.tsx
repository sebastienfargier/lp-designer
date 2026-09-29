import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ButtonLink } from "@/components/lp/button-link"
import { CheckList } from "@/components/lp/check-list"
import { Heading, Lead, Section } from "@/components/lp/section"
import type { BadgeSpec, Cta, SectionBase } from "@/components/sections/types"
import { cn } from "@/lib/utils"

export type OfferCardsProps = SectionBase & {
  title: string
  lead?: string
  cards: {
    badge?: BadgeSpec
    title: string
    text: string
    /** Valeur mise en avant (prix, taux…) avec libellé d'accroche. */
    highlight?: { prefix?: string; value: string; suffix?: string }
    features?: string[]
    cta?: Cta
    /** Carte recommandée : CTA principal, les autres en secondaire. */
    featured?: boolean
  }[]
}

/** Lame « section-cards » : grille de cartes (offres, niveaux, financements), filet, rayon 10, sans ombre. */
export function OfferCards({ surface = "surface-block", id, title, lead, cards }: OfferCardsProps) {
  const columns =
    cards.length >= 5 ? "sm:grid-cols-2 lg:grid-cols-5" : cards.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"
  return (
    <Section surface={surface} id={id}>
      <div className="flex flex-col gap-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
          <Heading>{title}</Heading>
          {lead && <Lead>{lead}</Lead>}
        </div>
        <ul className={cn("grid gap-6", columns)}>
          {cards.map((card) => (
            <li key={card.title} className="flex">
              <Card className={cn("w-full", card.featured && "ring-2 ring-brand-green")}>
                <CardHeader>
                  {card.badge && <Badge variant={card.badge.variant}>{card.badge.label}</Badge>}
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.text}</CardDescription>
                </CardHeader>
                {card.highlight && (
                  <CardContent className="flex flex-col gap-1">
                    {card.highlight.prefix && (
                      <span className="text-caption text-muted-foreground">{card.highlight.prefix}</span>
                    )}
                    <span className="text-heading-1">{card.highlight.value}</span>
                    {card.highlight.suffix && (
                      <span className="text-caption text-muted-foreground">{card.highlight.suffix}</span>
                    )}
                  </CardContent>
                )}
                {card.features && (
                  <CardContent>
                    <CheckList items={card.features} />
                  </CardContent>
                )}
                {card.cta && (
                  <CardFooter className="mt-auto">
                    <ButtonLink href={card.cta.href} variant={card.featured ? "default" : "outline"}>
                      {card.cta.label}
                    </ButtonLink>
                  </CardFooter>
                )}
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
