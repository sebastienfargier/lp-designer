import { Section } from "@/components/lp/section"
import { HeroActions } from "@/components/sections/hero-parts"
import type { Cta, SectionBase } from "@/components/sections/types"

export type HeroCenteredProps = SectionBase & {
  title: string
  lead: string
  ctas?: Cta[]
  /** Contenu sous les CTA (ex. note Trustpilot). */
  children?: React.ReactNode
}

/** Lame « hero/section-lifestyle » : titre et texte centrés, CTA, élément de réassurance dessous. */
export function HeroCentered({ surface = "surface-page", id, title, lead, ctas = [], children }: HeroCenteredProps) {
  return (
    <Section surface={surface} id={id}>
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-heading-1 text-balance sm:text-display">{title}</h1>
          <p className="text-body text-balance text-muted-foreground">{lead}</p>
        </div>
        {ctas.length > 0 && <HeroActions ctas={ctas} className="justify-center" />}
        {children}
      </div>
    </Section>
  )
}
