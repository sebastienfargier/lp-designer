import { Separator } from "@/components/ui/separator"
import { LogoGrid, type Logo } from "@/components/lp/logo-grid"
import { Heading, Lead, Section } from "@/components/lp/section"
import type { SectionBase } from "@/components/sections/types"
import { cn } from "@/lib/utils"

export type FeatureColumnsProps = SectionBase & {
  title: string
  /** Titre lu par les lecteurs d'écran seulement (bande de réassurance sous un hero). */
  titleHidden?: boolean
  items: { title: string; text: string }[]
  logos?: { intro: string; logos: Logo[] }
}

/**
 * Lame « section-avantages » : 3 ou 4 colonnes séparées par un filet vertical neutral-200.
 * Au-delà de 4 éléments : grille de 3 colonnes, filet au-dessus de chaque élément.
 */
export function FeatureColumns({
  surface = "surface-block",
  id,
  title,
  titleHidden = false,
  items,
  logos,
}: FeatureColumnsProps) {
  const four = items.length === 4
  const grid = items.length > 4
  return (
    <Section surface={surface} id={id}>
      <div className={cn("flex flex-col", !titleHidden && "gap-8")}>
        <Heading className={titleHidden ? "sr-only" : "text-center"}>{title}</Heading>
        <ul
          className={cn(
            "grid gap-8",
            grid
              ? "sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12"
              : four
                ? "sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border"
                : "md:grid-cols-3 md:gap-0 md:divide-x md:divide-border"
          )}
        >
          {items.map((item) => (
            <li
              key={item.title}
              className={cn(
                "flex flex-col gap-2",
                grid
                  ? "border-t border-border pt-6"
                  : four
                    ? "lg:px-8 lg:first:pl-0 lg:last:pr-0"
                    : "md:px-8 md:first:pl-0 md:last:pr-0"
              )}
            >
              <h3 className="text-heading-2">{item.title}</h3>
              <Lead>{item.text}</Lead>
            </li>
          ))}
        </ul>
        {logos && (
          <>
            <Separator />
            <div className="flex flex-col gap-8">
              <p className="mx-auto max-w-3xl text-center text-body text-balance">{logos.intro}</p>
              <LogoGrid
                logos={logos.logos}
                className="mx-auto w-full max-w-3xl grid-cols-2 sm:grid-cols-4 lg:grid-cols-4"
              />
            </div>
          </>
        )}
      </div>
    </Section>
  )
}
