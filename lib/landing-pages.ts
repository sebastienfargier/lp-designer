import { readdir, readFile, stat } from "node:fs/promises"
import path from "node:path"

/**
 * Informations facultatives par LP (clé = dossier dans `app/`).
 * Une LP absente d'ici apparaît quand même dans le tableau de bord.
 */
const extras: Record<string, { audience?: string; source?: string }> = {
  "confirmation-automatise-alternance-btoc": {
    audience: "Alternance",
    source: "https://info.studi.com/confirmation-automatise-alternance-btoc/",
  },
  "avis-apprenants": {
    audience: "Preuve sociale",
  },
  "mba-expert-controle-gestion-audit": {
    audience: "MBA · Finance",
    source: "https://www.studi.com/fr/formation/finance-controle-de-gestion/mba-expert-en-controle-de-gestion-et-audit",
  },
  "confirmation-aoft-2026": {
    audience: "Demandeurs d’emploi",
    source: "https://info.studi.com/confirmation-aoft-2026/",
  },
}

export type LandingPage = {
  slug: string
  title: string
  audience?: string
  source?: string
  updatedAt: Date
}

const APP_DIR = path.join(process.cwd(), "app")

/** Dossiers de `app/` qui ne sont pas des LP (outils internes). */
const INTERNAL = new Set(["api", "lames"])

/** Découvre les LP : chaque dossier de `app/` qui contient un `page.tsx` (hors `_privé` et `(groupe)`). */
export async function getLandingPages(): Promise<LandingPage[]> {
  const entries = await readdir(APP_DIR, { withFileTypes: true })
  const pages = await Promise.all(
    entries
      .filter((e) => e.isDirectory() && !/^[_(.[]/.test(e.name) && !INTERNAL.has(e.name))
      .map(async (dir) => {
        const file = path.join(APP_DIR, dir.name, "page.tsx")
        try {
          const [source, info] = await Promise.all([readFile(file, "utf8"), stat(file)])
          const title =
            source.match(/export const metadata[^{]*\{\s*title:\s*(["'`])([^\n]+?)\1/)?.[2] ??
            dir.name
          return { slug: dir.name, title, updatedAt: info.mtime, ...extras[dir.name] }
        } catch {
          return null
        }
      })
  )
  return pages
    .filter((page): page is LandingPage => page !== null)
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
}
