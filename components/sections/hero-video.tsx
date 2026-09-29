import Image from "next/image"

import { isDarkSurface, Section } from "@/components/lp/section"
import { VideoEmbed } from "@/components/lp/site"
import { HeroLogo, HeroText } from "@/components/sections/hero-parts"
import type {
  BadgeSpec,
  Cta,
  ImageSpec,
  SectionBase,
  VideoSpec,
} from "@/components/sections/types"

export type HeroVideoProps = SectionBase & {
  badges: BadgeSpec[]
  title: string
  lead: string
  ctas: Cta[]
  partner?: { label: string; logo: ImageSpec }
  video: VideoSpec
}

/**
 * Lame « hero/section-produit » adaptée à une vidéo : logo en tête, texte et vidéo
 * centrés l'un sur l'autre. Aucune carte sur ou contre la vidéo.
 */
export function HeroVideo({
  surface = "surface-brand",
  id,
  badges,
  title,
  lead,
  ctas,
  partner,
  video,
}: HeroVideoProps) {
  return (
    <Section surface={surface} id={id}>
      <div className="flex flex-col gap-12">
        <HeroLogo inverted={isDarkSurface(surface)} />
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_32rem]">
          <div className="flex flex-col gap-6">
            <HeroText badges={badges} title={title} lead={lead} ctas={ctas} />
            {partner && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-caption text-muted-foreground">{partner.label}</p>
                {/* Logo partenaire en couleur : cartouche blanc pour rester lisible sur fond sombre */}
                <span className="rounded-md bg-neutral-0 px-3 py-2">
                  <Image
                    src={partner.logo.src}
                    alt={partner.logo.alt}
                    width={partner.logo.width}
                    height={partner.logo.height}
                    unoptimized
                    className="h-8 w-auto"
                  />
                </span>
              </div>
            )}
          </div>
          <VideoEmbed id={video.id} title={video.title} />
        </div>
      </div>
    </Section>
  )
}
