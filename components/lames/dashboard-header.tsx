import Link from "next/link"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/lp/site"

const nav = [
  { href: "/", label: "Landing pages" },
  { href: "/lames", label: "Lames" },
] as const

/** En-tête de l'outil interne : navigation entre LP et bibliothèque de lames. */
export function DashboardHeader({ current }: { current: (typeof nav)[number]["href"] }) {
  return (
    <SiteHeader
      partner={
        <nav aria-label="LP Designer" className="flex items-center gap-1">
          {nav.map((item) => (
            <Button
              key={item.href}
              size="sm"
              variant={item.href === current ? "default" : "ghost"}
              nativeButton={false}
              render={<Link href={item.href} />}
              aria-current={item.href === current ? "page" : undefined}
            >
              {item.label}
            </Button>
          ))}
        </nav>
      }
    />
  )
}
