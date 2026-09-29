import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { ButtonLink } from "@/components/lp/button-link"
import { Heading, Section } from "@/components/lp/section"
import type {
  BadgeSpec,
  Cta,
  ImageSpec,
  SectionBase,
} from "@/components/sections/types"

export type ImageTextProps = SectionBase & {
  image: ImageSpec
  badge?: BadgeSpec
  title: string
  text: string
  cta: Cta
}

/** Lame « section-image-texte » en pleine surface (ex. webinars sur encre, CTA accent 1). */
export function ImageText({
  surface = "surface-ink",
  id,
  image,
  badge,
  title,
  text,
  cta,
}: ImageTextProps) {
  return (
    <Section surface={surface} id={id} className="scroll-mt-4">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-[16/10] w-full rounded-lg object-cover"
        />
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-4">
            {badge && <Badge variant={badge.variant}>{badge.label}</Badge>}
            <Heading>{title}</Heading>
            <p className="text-body">{text}</p>
          </div>
          <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
        </div>
      </div>
    </Section>
  )
}
