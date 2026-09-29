import Image from "next/image"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckList } from "@/components/lp/check-list"
import { Heading, Lead, Section } from "@/components/lp/section"
import type { BadgeSpec, ImageSpec, SectionBase } from "@/components/sections/types"

export type AccordionSectionProps = SectionBase & {
  title: string
  lead: string
  items: {
    value: string
    title: string
    text: string
    list?: string[]
    note?: string
    partner?: ImageSpec
  }[]
  /** Panneau de mise en avant à droite (vert de marque). */
  aside: { badge: BadgeSpec; title: string; text: string; items: string[] }
}

/** Lame « section-accordeon » : un seul élément ouvert, panneau de mise en avant à droite. */
export function AccordionSection({
  surface = "surface-block",
  id,
  title,
  lead,
  items,
  aside,
}: AccordionSectionProps) {
  return (
    <Section surface={surface} id={id}>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Heading>{title}</Heading>
            <Lead>{lead}</Lead>
          </div>
          <Accordion defaultValue={items[0] ? [items[0].value] : []}>
            {items.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3">
                  <p>{item.text}</p>
                  {item.list && (
                    <ul className="flex list-disc flex-col gap-1 pl-4 marker:text-brand-green">
                      {item.list.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                  )}
                  {item.note && <p className="text-caption">{item.note}</p>}
                  {item.partner && (
                    <Image
                      src={item.partner.src}
                      alt={item.partner.alt}
                      width={item.partner.width}
                      height={item.partner.height}
                      unoptimized
                      className="h-8 w-auto self-start"
                    />
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Panneau : même rayon que les cartes (lg), padding 32 puis 48px */}
        <div className="surface-brand flex flex-col items-start gap-4 rounded-lg p-8 md:p-12">
          <Badge variant={aside.badge.variant}>{aside.badge.label}</Badge>
          <p className="text-heading-2 text-balance">{aside.title}</p>
          <Lead>{aside.text}</Lead>
          <Separator className="my-2 bg-brand-green-soft" />
          <CheckList iconClassName="bg-accent-1 text-neutral-900" items={aside.items} />
        </div>
      </div>
    </Section>
  )
}
