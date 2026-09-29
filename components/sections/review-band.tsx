import { Card, CardContent } from "@/components/ui/card"
import { Heading, Lead, Section } from "@/components/lp/section"
import { TrustpilotWidget } from "@/components/lp/site"
import type { SectionBase } from "@/components/sections/types"

export type ReviewBandProps = SectionBase & {
  title: string
  description?: string
  stats?: { value: string; label: string }[]
}

/**
 * Lame « section-trustpilot » : bandeau vert de marque, chiffres clés en accent 1,
 * widget Trustpilot sur carte blanche (sa version sombre manque de contraste).
 */
export function ReviewBand({
  surface = "surface-brand",
  id,
  title,
  description,
  stats,
}: ReviewBandProps) {
  return (
    <Section surface={surface} id={id}>
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-4">
          <Heading>{title}</Heading>
          {description && (
            <Lead>{description}</Lead>
          )}
        </div>
        {stats && (
          <dl className="grid w-full gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col gap-2">
                <dt className="order-last text-body text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="text-display text-accent-1">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
        <Card className="w-full max-w-3xl">
          <CardContent>
            <TrustpilotWidget />
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
