import type { LucideIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CheckList } from "@/components/lp/check-list"
import { Heading, Lead, Section } from "@/components/lp/section"
import type { SectionBase } from "@/components/sections/types"

export type DataTableSectionProps = SectionBase & {
  title: string
  intro: React.ReactNode
  items?: string[]
  footnote?: { label: string; href: string }
  table: {
    title: string
    description?: string
    caption: string
    columns: string[]
    rows: { label: string; detail?: string; values: string[] }[]
  }
  alerts?: {
    variant?: "default" | "accent" | "brand"
    icon: LucideIcon
    title: string
    text: React.ReactNode
  }[]
}

/** Texte explicatif à gauche, tableau chiffré et encadrés à droite (ex. aides de l'État). */
export function DataTableSection({
  surface = "surface-page",
  id,
  title,
  intro,
  items,
  footnote,
  table,
  alerts = [],
}: DataTableSectionProps) {
  return (
    <Section surface={surface} id={id}>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
        <div className="flex flex-col gap-4">
          <Heading>{title}</Heading>
          <Lead>{intro}</Lead>
          {items && <CheckList items={items} />}
          {footnote && (
            <a
              href={footnote.href}
              target="_blank"
              rel="noopener"
              className="text-caption text-muted-foreground underline underline-offset-4"
            >
              {footnote.label}
            </a>
          )}
        </div>

        <div className="flex min-w-0 flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>{table.title}</CardTitle>
              {table.description && <CardDescription>{table.description}</CardDescription>}
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption className="sr-only">{table.caption}</TableCaption>
                <TableHeader>
                  <TableRow>
                    {table.columns.map((column) => (
                      <TableHead key={column} className="whitespace-normal">
                        {column}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {table.rows.map((row) => (
                    <TableRow key={row.label}>
                      <TableCell className="whitespace-normal">
                        <span className="block">{row.label}</span>
                        {row.detail && (
                          <span className="text-caption text-muted-foreground">{row.detail}</span>
                        )}
                      </TableCell>
                      {row.values.map((value, i) => (
                        <TableCell key={i} className="text-heading-2">
                          {value}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {alerts.map(({ variant, icon: Icon, title: alertTitle, text }) => (
            <Alert key={alertTitle} variant={variant}>
              <Icon aria-hidden />
              <AlertTitle>{alertTitle}</AlertTitle>
              <AlertDescription>{text}</AlertDescription>
            </Alert>
          ))}
        </div>
      </div>
    </Section>
  )
}
