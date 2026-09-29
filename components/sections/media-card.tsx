import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ButtonLink } from "@/components/lp/button-link"
import { Heading, Lead, Section } from "@/components/lp/section"
import { VideoEmbed } from "@/components/lp/site"
import type {
  BadgeSpec,
  Cta,
  ImageSpec,
  SectionBase,
  VideoSpec,
} from "@/components/sections/types"
import { cn } from "@/lib/utils"

export type MediaCardProps = SectionBase & {
  media: { kind: "video"; video: VideoSpec } | { kind: "image"; image: ImageSpec }
  badge?: BadgeSpec
  title: string
  /** Seconde partie du titre, en vert de marque (lame image-texte). */
  titleAccent?: string
  lead?: string
  cta: Cta
  /** Média à droite au lieu de gauche. */
  reverse?: boolean
}

/** Lame « section-image-texte » : carte, média sur une moitié, texte + CTA sur l'autre. */
export function MediaCard({
  surface = "surface-block",
  id,
  media,
  badge,
  title,
  titleAccent,
  lead,
  cta,
  reverse = false,
}: MediaCardProps) {
  return (
    <Section surface={surface} id={id}>
      <Card className={cn("gap-0 p-0 md:items-stretch", reverse ? "md:flex-row-reverse" : "md:flex-row")}>
        <div className="relative flex items-center bg-neutral-900 md:w-1/2">
          {media.kind === "video" ? (
            <div className="w-full">
              <VideoEmbed id={media.video.id} title={media.video.title} />
            </div>
          ) : (
            <div className="relative aspect-[16/10] w-full bg-neutral-0 md:aspect-auto md:h-full">
              <Image
                src={media.image.src}
                alt={media.image.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain p-8"
              />
            </div>
          )}
        </div>
        {/* Panneau de texte : même padding (32 puis 48px) quel que soit le média */}
        <div className="flex flex-col items-start justify-center gap-6 p-8 md:w-1/2 md:p-12">
          <div className="flex flex-col items-start gap-4">
            {badge && <Badge variant={badge.variant}>{badge.label}</Badge>}
            <Heading>
              {title}
              {titleAccent && (
                <>
                  {" "}
                  <span className="block text-brand-green">{titleAccent}</span>
                </>
              )}
            </Heading>
            {lead && <Lead>{lead}</Lead>}
          </div>
          <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
        </div>
      </Card>
    </Section>
  )
}
