import { ButtonLink } from "@/components/lp/button-link"
import { StudiLogo } from "@/components/lp/site"
import type { Cta } from "@/components/sections/types"

/**
 * Menu haut fixe (menu des lames « hero produit » et « hero lifestyle ») :
 * logo, liens Body, CTA principal. Les liens se replient sous 1024px, le CTA reste visible.
 */
export function SiteNav({ links, cta }: { links: (Cta & { current?: boolean })[]; cta: Cta }) {
  return (
    <header className="surface-page sticky top-0 z-40 border-b border-border">
      <div className="mx-auto flex h-16 w-full max-w-page items-center justify-between gap-6 px-4">
        <div className="flex items-center gap-12">
          <a href="https://www.studi.com/fr" aria-label="Studi, accueil">
            <StudiLogo />
          </a>
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
        </div>
        <ButtonLink href={cta.href} fullWidthOnMobile={false}>
          {cta.label}
        </ButtonLink>
      </div>
    </header>
  )
}
