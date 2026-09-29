import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

/** Lien rendu par le Button shadcn (taille Brand OS, Base UI : render + nativeButton={false}). */
export function ButtonLink({
  href,
  children,
  variant,
  fullWidthOnMobile = true,
}: {
  href: string
  children: React.ReactNode
  variant?: "default" | "outline"
  /** Pleine largeur sous 640px (heros, sections) ; désactivé dans le menu. */
  fullWidthOnMobile?: boolean
}) {
  const external = href.startsWith("http")
  return (
    <Button
      variant={variant}
      nativeButton={false}
      render={
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener" } : {})}
        />
      }
      className={fullWidthOnMobile ? "max-sm:w-full max-sm:whitespace-normal" : undefined}
    >
      {children}
      <ArrowRight data-icon="inline-end" />
    </Button>
  )
}
