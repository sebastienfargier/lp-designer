import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DashboardHeader } from "@/components/lames/dashboard-header"
import { PreviewFrame } from "@/components/lames/preview-frame"
import { StatusBadge } from "@/components/lames/status-badge"
import { Heading, Lead, Section } from "@/components/lp/section"
import { getResolvedLames } from "@/lib/lames/registry"
import { categories, statuses, type LameStatus } from "@/lib/lames/types"

export const metadata: Metadata = {
  title: "Lames — LP Designer",
  robots: { index: false },
}

function FilterLink({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <Button
      size="sm"
      variant={active ? "default" : "outline"}
      nativeButton={false}
      render={<Link href={href} scroll={false} />}
      aria-current={active ? "true" : undefined}
    >
      {children}
    </Button>
  )
}

export default async function LamesPage({ searchParams }: PageProps<"/lames">) {
  const params = await searchParams
  const statut = typeof params.statut === "string" ? params.statut : undefined

  const all = await getResolvedLames()
  const lames = all.filter(
    (lame) => !statut || lame.status === statut
  )
  const count = (status: LameStatus) => all.filter((lame) => lame.status === status).length

  const href = (next?: string) => (next ? `/lames?statut=${next}` : "/lames")

  return (
    <div className="flex flex-1 flex-col">
      <DashboardHeader current="/lames" />
      <main className="flex-1">
        <Section surface="surface-block" className="min-h-full">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Heading>Lames</Heading>
              <Lead>
                {all.length} lames modèles · {count("validee")} validées · {count("a-valider")} à
                valider · {count("a-revoir")} à revoir. Seules les lames validées servent de modèle
                pour générer les landing pages.
              </Lead>
            </div>

            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrer par statut">
              <FilterLink href={href()} active={!statut}>
                Tous les statuts
              </FilterLink>
              {statuses.map((s) => (
                <FilterLink key={s.value} href={href(s.value)} active={statut === s.value}>
                  {s.label} ({count(s.value)})
                </FilterLink>
              ))}
            </div>

            {lames.length === 0 && <Lead>Aucune lame ne correspond à ces filtres.</Lead>}

            {categories.map((category) => {
              const group = lames.filter((lame) => lame.category === category.value)
              if (group.length === 0) return null
              return (
                <section key={category.value} className="flex flex-col gap-6" aria-labelledby={`cat-${category.value}`}>
                  <h2 id={`cat-${category.value}`} className="text-heading-2">
                    {category.label} <span className="text-muted-foreground">({group.length})</span>
                  </h2>
                  <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {group.map((lame) => (
                      <li key={lame.id} className="flex">
                        <Card className="relative w-full pt-0 transition-colors hover:ring-neutral-300 has-[a:focus-visible]:ring-3 has-[a:focus-visible]:ring-ring/50">
                          <PreviewFrame src={lame.preview} title={lame.name} />
                          <CardHeader>
                            <StatusBadge status={lame.status} />
                            <CardTitle>
                              <Link href={`/lames/${lame.id}`} className="outline-none after:absolute after:inset-0">
                                {lame.name}
                              </Link>
                            </CardTitle>
                            <CardDescription>{lame.description}</CardDescription>
                          </CardHeader>
                          <CardFooter className="mt-auto border-t pt-(--card-spacing) text-caption text-muted-foreground">
                            {lame.implementations.length
                              ? `${lame.implementations.length} section${lame.implementations.length > 1 ? "s" : ""} React · ${new Set(lame.implementations.flatMap((i) => i.usedIn)).size} LP`
                              : "Pas encore implémentée"}
                          </CardFooter>
                        </Card>
                      </li>
                    ))}
                  </ul>
                </section>
              )
            })}
          </div>
        </Section>
      </main>
    </div>
  )
}
