import { Badge } from "@/components/ui/badge"
import { ButtonLink } from "@/components/lp/button-link"
import { Lead } from "@/components/lp/section"
import { StudiLogo } from "@/components/lp/site"
import type { BadgeSpec, Cta } from "@/components/sections/types"
import { cn } from "@/lib/utils"

/** Logo en tête de hero (remplace la barre de logo séparée). */
export function HeroLogo({ inverted = true }: { inverted?: boolean }) {
  return (
    <header className="flex items-center gap-4">
      <StudiLogo inverted={inverted} />
      <p className="hidden text-body text-muted-foreground md:block">
        La Grande École 100% en ligne
      </p>
    </header>
  )
}

/** Badges, H1 (Display, Heading 1 sur mobile) et description d'un hero. */
export function HeroHeading({
  badges,
  title,
  lead,
}: {
  badges: BadgeSpec[]
  title: string
  lead: string
}) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <Badge key={badge.label} variant={badge.variant}>
            {badge.label}
          </Badge>
        ))}
      </div>
      <h1 className="text-heading-1 text-balance sm:text-display">{title}</h1>
      <Lead>{lead}</Lead>
    </div>
  )
}

/** CTA d'un hero : le premier est principal, les suivants secondaires. */
export function HeroActions({ ctas, className }: { ctas: Cta[]; className?: string }) {
  const [primary, ...secondary] = ctas
  return (
    <div className={cn("flex w-full flex-wrap gap-3", className)}>
      {primary && <ButtonLink href={primary.href}>{primary.label}</ButtonLink>}
      {secondary.map((cta) => (
        <ButtonLink key={cta.href} href={cta.href} variant="outline">
          {cta.label}
        </ButtonLink>
      ))}
    </div>
  )
}

/** Titre + CTA d'un hero. */
export function HeroText({
  badges,
  title,
  lead,
  ctas,
}: {
  badges: BadgeSpec[]
  title: string
  lead: string
  ctas: Cta[]
}) {
  return (
    <div className="flex flex-col items-start gap-6">
      <HeroHeading badges={badges} title={title} lead={lead} />
      <HeroActions ctas={ctas} />
    </div>
  )
}
