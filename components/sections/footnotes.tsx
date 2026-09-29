import { Section } from "@/components/lp/section"
import type { SectionBase } from "@/components/sections/types"

/** Mentions de bas de page (*, **). */
export function Footnotes({ surface = "surface-page", id, notes }: SectionBase & { notes: string[] }) {
  return (
    <Section surface={surface} id={id} className="sm:py-8">
      <div className="flex flex-col gap-2 text-caption text-muted-foreground">
        {notes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
    </Section>
  )
}
