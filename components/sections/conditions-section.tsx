import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ButtonLink } from "@/components/lp/button-link"
import { CheckList } from "@/components/lp/check-list"
import { Heading, Section } from "@/components/lp/section"
import type { Cta, SectionBase } from "@/components/sections/types"

export type ConditionsSectionProps = SectionBase & {
  title: string
  columns: { title: string; items: string[] }[]
  callout?: { title: string; text: string; cta: Cta }
}

/** Colonnes de cartes à puces (conditions / avantages) + encart d'orientation avec CTA. */
export function ConditionsSection({
  surface = "surface-page",
  id,
  title,
  columns,
  callout,
}: ConditionsSectionProps) {
  return (
    <Section surface={surface} id={id}>
      <div className="flex flex-col gap-8">
        <Heading className="mx-auto max-w-3xl text-center">{title}</Heading>
        <div className="grid gap-6 md:grid-cols-2">
          {columns.map((column) => (
            <Card key={column.title}>
              <CardHeader>
                <CardTitle>{column.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CheckList items={column.items} />
              </CardContent>
            </Card>
          ))}
        </div>
        {callout && (
          <Card className="md:flex-row md:items-center md:justify-between">
            {/* flex-1 : sans lui, l'en-tête (une grille) se réduit à sa largeur minimale en ligne */}
            <CardHeader className="min-w-0 flex-1">
              <CardTitle>{callout.title}</CardTitle>
              <CardDescription className="max-w-2xl">{callout.text}</CardDescription>
            </CardHeader>
            <CardFooter className="shrink-0">
              <ButtonLink href={callout.cta.href}>{callout.cta.label}</ButtonLink>
            </CardFooter>
          </Card>
        )}
      </div>
    </Section>
  )
}
