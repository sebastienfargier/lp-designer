import { ButtonLink } from "@/components/lp/button-link"
import { StudiLogo } from "@/components/lp/site"
import type { Cta } from "@/components/sections/types"

/**
 * Menu haut fixe : liens à gauche, logo centré, CTA facultatif à droite (≥ 1024px).
 * Grille à 3 colonnes (1fr · auto · 1fr) pour que le logo reste au centre exact, avec ou sans CTA.
 * Sous 1024px : liens repliés, logo à gauche et CTA à droite.
 */
export function SiteNav({ links, cta }: { links: (Cta & { current?: boolean })[]; cta?: Cta }) {
  return (
    <header className="surface-page sticky top-0 z-40 border-b border-border">
      <div className="mx-auto flex h-16 w-full max-w-page items-center justify-between gap-6 px-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-body">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={link.current ? "page" : undefined}
                  className="text-foreground underline-offset-4 hover:text-brand-green hover:underline aria-[current=page]:text-brand-green"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="https://www.studi.com/fr" aria-label="Studi, accueil">
          <StudiLogo />
        </a>
        <div className="flex justify-end">
          {cta && (
            <ButtonLink href={cta.href} fullWidthOnMobile={false}>
              {cta.label}
            </ButtonLink>
          )}
        </div>
      </div>
    </header>
  )
}
