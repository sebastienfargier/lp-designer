import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckList } from "@/components/lp/check-list"
import { isDarkSurface, Section } from "@/components/lp/section"
import { HeroActions, HeroHeading, HeroLogo } from "@/components/sections/hero-parts"
import type {
  BadgeSpec,
  Cta,
  ImageSpec,
  SectionBase,
} from "@/components/sections/types"

export type HeroProductProps = SectionBase & {
  badges: BadgeSpec[]
  title: string
  lead: string
  ctas: Cta[]
  /** Carte prix de la lame : prix d'appel, mensualité, financement. */
  pricing: {
    prefix?: string
    price: string
    monthly?: string
    funding?: { title: string; text: string }
  }
  partner?: { label: string; logo: ImageSpec }
  image: ImageSpec
  /** Carte posée sur la photo (ex. débouchés). */
  card: { title: string; items: string[] }
}

/**
 * Lame « hero/section-produit » : badges, H1, carte prix + financement, 2 CTA, partenaire,
 * photo et carte « Débouchés » posée dessus (jamais sur une vidéo).
 */
export function HeroProduct({
  surface = "surface-block",
  id,
  badges,
  title,
  lead,
  ctas,
  pricing,
  partner,
  image,
  card,
}: HeroProductProps) {
  return (
    <Section surface={surface} id={id}>
      <div className="grid gap-12 lg:grid-cols-[1fr_30rem]">
        <div className="flex flex-col gap-12">
          <HeroLogo inverted={isDarkSurface(surface)} />
          <div className="flex flex-1 flex-col justify-center gap-6">
            <HeroHeading badges={badges} title={title} lead={lead} />

            <Card size="sm" className="sm:flex-row sm:items-center">
              <CardContent className="flex flex-col gap-1 sm:shrink-0">
                {pricing.prefix && (
                  <span className="text-caption text-muted-foreground">{pricing.prefix}</span>
                )}
                <span className="text-heading-1">{pricing.price}</span>
                {pricing.monthly && (
                  <span className="text-caption text-muted-foreground">{pricing.monthly}</span>
                )}
              </CardContent>
              {pricing.funding && (
                <>
                  <Separator orientation="vertical" className="hidden sm:block" />
                  <Separator className="sm:hidden" />
                  <CardContent className="flex flex-col gap-1">
                    <span className="text-body">{pricing.funding.title}</span>
                    <span className="text-caption text-muted-foreground">{pricing.funding.text}</span>
                  </CardContent>
                </>
              )}
            </Card>

            <HeroActions ctas={ctas} />

            {partner && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-caption text-muted-foreground">{partner.label}</p>
                <Image
                  src={partner.logo.src}
                  alt={partner.logo.alt}
                  width={partner.logo.width}
                  height={partner.logo.height}
                  unoptimized
                  className="h-6 w-auto"
                />
              </div>
            )}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            sizes="(min-width: 1024px) 440px, 448px"
            className="aspect-[471/500] w-[92%] rounded-lg bg-neutral-100 object-cover"
          />
          <Card className="relative -mt-24 ml-auto w-[min(21rem,100%)] sm:-mt-32">
            <CardHeader>
              <CardTitle className="text-brand-green">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CheckList items={card.items} />
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}
