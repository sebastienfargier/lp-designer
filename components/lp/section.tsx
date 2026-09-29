import { cn } from "@/lib/utils"

export type Surface =
  | "surface-page"
  | "surface-block"
  | "surface-accent-1"
  | "surface-accent-2-soft"
  | "surface-accent-2"
  | "surface-brand"
  | "surface-ink"

/** Surfaces sombres : logo blanc, texte blanc, CTA accent 1. */
export const isDarkSurface = (surface: Surface) =>
  surface === "surface-brand" || surface === "surface-ink"

/**
 * Bloc de landing page : choisir une surface Studi fixe fond, texte et CTA.
 * Rythme unique (Brand OS, échelle 4px) : 32px sur mobile, 48px au-delà.
 */
function Section({
  surface = "surface-page",
  className,
  children,
  ...props
}: React.ComponentProps<"section"> & { surface?: Surface }) {
  return (
    <section className={cn(surface, "py-8 sm:py-12", className)} {...props}>
      <div className="mx-auto w-full max-w-page px-4">{children}</div>
    </section>
  )
}

/** Titre de section : Brand OS « Heading 1 » (30/38, 600). */
function Heading({ className, ...props }: React.ComponentProps<"h2">) {
  return <h2 className={cn("text-heading-1 text-balance", className)} {...props} />
}

/** Description : Brand OS « Body » (14/22) en texte secondaire. */
function Lead({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-body text-muted-foreground", className)} {...props} />
}

export { Section, Heading, Lead }
