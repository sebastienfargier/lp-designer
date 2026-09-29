import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Heading, Lead, Section } from "@/components/lp/section"
import { DashboardHeader } from "@/components/lames/dashboard-header"
import { getLandingPages } from "@/lib/landing-pages"

export const metadata: Metadata = {
  title: "LP Designer — Studi",
  robots: { index: false },
}

const dateFormat = new Intl.DateTimeFormat("fr-FR", { dateStyle: "long" })

export default async function Home() {
  const pages = await getLandingPages()

  return (
    <div className="flex flex-1 flex-col">
      <DashboardHeader current="/" />

      <main className="flex-1">
        <Section surface="surface-block" className="min-h-full">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Heading>Landing pages</Heading>
              <Lead>
                {pages.length > 1
                  ? `${pages.length} pages créées, de la plus récente à la plus ancienne.`
                  : pages.length === 1
                    ? "1 page créée."
                    : "Aucune page pour le moment."}
              </Lead>
            </div>

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pages.map((page) => (
                <li key={page.slug} className="flex">
                  {/* Lame « section-cards » : toute la carte ouvre la LP, survol ombre et -2px */}
                  <Card className="relative w-full transition-colors hover:ring-neutral-300 has-[a:focus-visible]:ring-3 has-[a:focus-visible]:ring-ring/50">
                    <CardHeader>
                      {page.audience && (
                        <Badge variant="brand">{page.audience}</Badge>
                      )}
                      <CardTitle>
                        <Link
                          href={`/${page.slug}`}
                          className="outline-none after:absolute after:inset-0"
                        >
                          {page.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="font-mono text-caption break-all">
                        /{page.slug}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto justify-between gap-4 border-t pt-(--card-spacing)">
                      <div className="flex flex-col gap-1 text-caption">
                        <span className="text-muted-foreground">
                          Modifiée le {dateFormat.format(page.updatedAt)}
                        </span>
                        {page.source && (
                          <a
                            href={page.source}
                            target="_blank"
                            rel="noopener"
                            className="relative z-10 inline-flex items-center gap-1 text-brand-green underline-offset-4 hover:underline"
                          >
                            Page d’origine
                            <ExternalLink aria-hidden className="size-3" />
                          </a>
                        )}
                      </div>
                      <ArrowRight aria-hidden className="size-5 shrink-0" />
                    </CardFooter>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </main>
    </div>
  )
}
