import Image from "next/image"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Heading, Lead, Section } from "@/components/lp/section"
import type { ImageSpec, SectionBase } from "@/components/sections/types"

export type FaqSectionProps = SectionBase & {
  title: string
  lead?: string
  items: { value: string; question: string; answer: React.ReactNode }[]
  image?: ImageSpec
}

/** Lame « section-accordeon » : titre et accordéon shadcn standard à gauche, visuel à droite. */
export function FaqSection({ surface = "surface-page", id, title, lead, items, image }: FaqSectionProps) {
  return (
    <Section surface={surface} id={id}>
      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Heading>{title}</Heading>
            {lead && <Lead>{lead}</Lead>}
          </div>
          <Accordion defaultValue={items[0] ? [items[0].value] : []}>
            {items.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/3] w-full rounded-lg object-cover lg:sticky lg:top-6"
          />
        )}
      </div>
    </Section>
  )
}
