/** Types partagés (client et serveur) de la bibliothèque de lames. */

export const categories = [
  { value: "hero", label: "Hero" },
  { value: "reassurance", label: "Réassurance" },
  { value: "contenu", label: "Contenu" },
  { value: "conversion", label: "Conversion" },
  { value: "preuve-sociale", label: "Preuve sociale" },
  { value: "structure", label: "Structure" },
] as const

export type LameCategory = (typeof categories)[number]["value"]

export const statuses = [
  { value: "a-valider", label: "À valider" },
  { value: "validee", label: "Validée" },
  { value: "a-revoir", label: "À revoir" },
] as const

export type LameStatus = (typeof statuses)[number]["value"]

export const categoryLabel = (value: LameCategory) =>
  categories.find((c) => c.value === value)?.label ?? value

export const statusLabel = (value: LameStatus) =>
  statuses.find((s) => s.value === value)?.label ?? value

export const isCategory = (value: unknown): value is LameCategory =>
  categories.some((c) => c.value === value)

export const isStatus = (value: unknown): value is LameStatus =>
  statuses.some((s) => s.value === value)
