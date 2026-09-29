import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/lames/dashboard-header"
import { LameViewer } from "@/components/lames/lame-viewer"
import { ReviewForm } from "@/components/lames/review-form"
import { StatusBadge } from "@/components/lames/status-badge"
import { Lead, Section } from "@/components/lp/section"
import { findLame, getResolvedLames } from "@/lib/lames/registry"
import { categoryLabel } from "@/lib/lames/types"

export async function generateMetadata({ params }: PageProps<"/lames/[id]">): Promise<Metadata> {
  const { id } = await params
  return { title: `${findLame(id)?.name ?? "Lame"} — Lames`, robots: { index: false } }
}

const dateFormat = new Intl.DateTimeFormat("fr-FR", { dateStyle: "long", timeStyle: "short" })

function Info({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-caption text-muted-foreground">{label}</dt>
      <dd className="text-body break-words">{children}</dd>
    </div>
  )
}

export default async function LamePage({ params }: PageProps<"/lames/[id]">) {
  const { id } = await params
  const lame = (await getResolvedLames()).find((l) => l.id === id)
  if (!lame) notFound()

  return (
    <div className="flex flex-1 flex-col">
      <DashboardHeader current="/lames" />
      <main className="flex-1">
        <Section surface="surface-block" className="min-h-full">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start gap-4">
              <Button variant="ghost" size="sm" nativeButton={false} render={<Link href="/lames" />}>
                <ArrowLeft data-icon="inline-start" />
                Toutes les lames
              </Button>
              <StatusBadge status={lame.status} />
              <h1 className="text-heading-1">{lame.name}</h1>
              <Lead>{lame.description}</Lead>
            </div>

            <div className="grid items-start gap-6 lg:grid-cols-[1fr_22rem]">
              <div className="min-w-0">
                <LameViewer src={lame.preview} title={lame.name} />
              </div>

              <div className="flex flex-col gap-6 lg:sticky lg:top-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Validation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ReviewForm
                      id={lame.id}
                      status={lame.status}
                      category={lame.category}
                      note={lame.note}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Informations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="flex flex-col gap-4">
                      <Info label="Catégorie">{categoryLabel(lame.category)}</Info>
                      <Info label="Maquette">
                        <code className="font-mono text-caption">brand/lames/{lame.file}</code>
                      </Info>
                      <Info label="Implémentée par">
                        {lame.implementations.length ? (
                          <ul className="flex flex-col gap-3">
                            {lame.implementations.map((impl) => (
                              <li key={impl.component} className="flex flex-col gap-1">
                                <code className="font-mono text-caption">{impl.component}</code>
                                <span className="flex flex-wrap gap-x-3 gap-y-1">
                                  {impl.usedIn.map((slug) => (
                                    <Link key={slug} href={`/${slug}`} className="text-caption text-brand-green underline underline-offset-4">
                                      /{slug}
                                    </Link>
                                  ))}
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          "Aucune section pour l’instant"
                        )}
                      </Info>
                      {lame.updatedAt && (
                        <Info label="Dernière validation">{dateFormat.format(new Date(lame.updatedAt))}</Info>
                      )}
                      <Info label="Aperçu seul">
                        <a
                          href={lame.preview}
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-1 text-brand-green underline underline-offset-4"
                        >
                          Ouvrir dans un onglet
                          <ExternalLink aria-hidden className="size-3" />
                        </a>
                      </Info>
                    </dl>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}
