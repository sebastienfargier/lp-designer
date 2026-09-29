import Image from "next/image"

import { CheckList } from "@/components/lp/check-list"
import { ProfileTabs } from "@/components/lp/profile-tabs"
import { Heading, Section } from "@/components/lp/section"
import type { ImageSpec, SectionBase } from "@/components/sections/types"

export type TabsSectionProps = SectionBase & {
  title: string
  tabs: {
    value: string
    label: string
    title: string
    items: string[]
    image: ImageSpec
  }[]
}

/** Lame « section-profils » : onglets à trait indicateur, visuel + liste par onglet. */
export function TabsSection({ surface = "surface-page", id, title, tabs }: TabsSectionProps) {
  return (
    <Section surface={surface} id={id}>
      <div className="flex flex-col gap-8">
        <Heading className="text-center">{title}</Heading>
        <ProfileTabs
          tabs={tabs.map((tab) => ({
            value: tab.value,
            label: tab.label,
            title: tab.title,
            content: (
              <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr] md:gap-12">
                <Image
                  src={tab.image.src}
                  alt={tab.image.alt}
                  width={tab.image.width}
                  height={tab.image.height}
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="aspect-[16/10] w-full rounded-lg bg-neutral-100 object-cover"
                />
                <CheckList items={tab.items} />
              </div>
            ),
          }))}
        />
      </div>
    </Section>
  )
}
