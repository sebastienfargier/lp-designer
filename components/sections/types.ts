import type { Surface } from "@/components/lp/section"

/** Types partagés par les sections (lames) : le contenu est passé en props, jamais codé en dur. */
export type Cta = { label: string; href: string }

export type BadgeSpec = { label: string; variant: "accent" | "brand" | "ink" }

export type ImageSpec = { src: string; alt: string; width: number; height: number }

export type VideoSpec = { id: string; title: string }

export type SectionBase = { surface?: Surface; id?: string }
