import { Fragment } from "react"

import { Separator } from "@/components/ui/separator"
import { LogoGrid, type Logo } from "@/components/lp/logo-grid"
import { Section } from "@/components/lp/section"
import type { SectionBase } from "@/components/sections/types"

export type LogoWallProps = SectionBase & {
  groups: { title: string; logos: Logo[] }[]
}

/** Murs de logos (employeurs, partenaires), séparés par un filet. */
export function LogoWall({ surface = "surface-page", id, groups }: LogoWallProps) {
  return (
    <Section surface={surface} id={id}>
      <div className="flex flex-col gap-8">
        {groups.map((group, i) => (
          <Fragment key={group.title}>
            {i > 0 && <Separator />}
            <h2 className="text-center text-heading-2">{group.title}</h2>
            <LogoGrid logos={group.logos} />
          </Fragment>
        ))}
      </div>
    </Section>
  )
}
