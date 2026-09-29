import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"

import type { LameCategory, LameStatus } from "@/lib/lames/types"

/**
 * Statut de validation des lames, versionné dans le dépôt : brand/lames-status.json.
 * C'est la source de vérité lue lors de la génération d'une LP (seules les lames « validee » sont utilisables).
 */
export type LameReview = {
  status: LameStatus
  category?: LameCategory
  note?: string
  updatedAt?: string
}

const FILE = path.join(process.cwd(), "brand", "lames-status.json")

export async function readReviews(): Promise<Record<string, LameReview>> {
  try {
    return JSON.parse(await readFile(FILE, "utf8"))
  } catch {
    return {}
  }
}

export async function writeReview(id: string, review: LameReview) {
  const reviews = await readReviews()
  reviews[id] = review
  const sorted = Object.fromEntries(Object.entries(reviews).sort(([a], [b]) => a.localeCompare(b)))
  await writeFile(FILE, JSON.stringify(sorted, null, 2) + "\n", "utf8")
}
