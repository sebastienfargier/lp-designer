import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckList } from "@/components/lp/check-list"
import { isDarkSurface, Section } from "@/components/lp/section"
import { HeroLogo, HeroText } from "@/components/sections/hero-parts"
import type {
  BadgeSpec,
  Cta,
  ImageSpec,
  SectionBase,
} from "@/components/sections/types"

export type HeroPhotoProps = SectionBase & {
  badges: BadgeSpec[]
  title: string
  lead: string
  ctas: Cta[]
  note?: string
  image: ImageSpec
  card: { title: string; items: string[] }
}

/**
 * Lame « hero/section-produit » : logo aligné sur le haut de la photo,
 * carte posée sur la photo (jamais sur une vidéo).
 */
export function HeroPhoto({
  surface = "surface-brand",
  id,
  badges,
  title,
  lead,
  ctas,
  note,
  image,
  card,
}: HeroPhotoProps) {
  return (
    <Section surface={surface} id={id}>
      <div className="grid gap-12 lg:grid-cols-[1fr_30rem]">
        <div className="flex flex-col gap-12">
          <HeroLogo inverted={isDarkSurface(surface)} />
          <div className="flex flex-1 flex-col justify-center gap-6">
            <HeroText badges={badges} title={title} lead={lead} ctas={ctas} />
            {note && <p className="text-caption text-muted-foreground">{note}</p>}
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
            className="aspect-[471/500] w-[92%] rounded-lg bg-neutral-100 object-cover object-top"
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
