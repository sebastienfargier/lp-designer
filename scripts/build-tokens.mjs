#!/usr/bin/env node
/**
 * Génère les tokens de marque depuis les exports Brand OS — source unique de vérité.
 *
 *   brand/studi-colors.json  (export Brand OS : couleurs)
 *   brand/studi-tokens.json  (typographie, rayons, espacements, états des boutons, logotype)
 *        │
 *        ├─▶ app/globals.css (bloc « Tokens Studi ») (@theme Tailwind : sections React, shadcn)
 *        └─▶ brand/lames/**∕index.html           (bloc « Tokens Studi » des maquettes HTML)
 *
 * Puis vérifie que chaque couleur utilisée dans le code existe encore dans les tokens.
 *
 * Usage : npm run tokens            (génère + vérifie)
 *         npm run tokens -- --check (vérifie seulement ; code 1 si un fichier n'est pas à jour)
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs"
import path from "node:path"

const ROOT = path.resolve(import.meta.dirname, "..")
const CHECK = process.argv.includes("--check")
const read = (p) => readFileSync(path.join(ROOT, p), "utf8")
const json = (p) => JSON.parse(read(p))

// ── 1. Lecture des tokens (W3C DTCG) ─────────────────────────────────────────
/** Aplati un arbre DTCG : { "brand.green.default" → "brand-green" }, « default » est omis. */
function flatten(node, trail = [], out = []) {
  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith("$")) continue
    const next = key === "default" ? trail : [...trail, key]
    if (value && typeof value === "object" && "$value" in value) {
      out.push({ name: next.join("-"), type: value.$type, value: value.$value, description: value.$description })
    } else if (value && typeof value === "object") {
      flatten(value, next, out)
    }
  }
  return out
}

const palette = flatten(json("brand/studi-colors.json")).filter((t) => t.type === "color")
const extra = json("brand/studi-tokens.json")
const states = flatten(extra["color-state"]).filter((t) => t.type === "color")
const colors = [...palette, ...states]
const typography = flatten(extra.typography)
const radius = flatten(extra.radius)
const space = flatten(extra.space)
const container = flatten(extra.container)
const fontSans = extra.font.sans.$value.map((f) => (/\s/.test(f) ? `"${f}"` : f)).join(", ")

const HEADER = "Généré par scripts/build-tokens.mjs depuis brand/studi-colors.json et brand/studi-tokens.json — ne pas modifier à la main (npm run tokens)."
const pad = (s) => s.padEnd(34)

// ── 2. Bloc @theme de app/globals.css ────────────────────────────────────────
// (injecté entre marqueurs plutôt qu'importé : pas de résolution de fichier à la compilation)
const APP_START = "/* === Tokens Studi (générés) === */"
const appCss = `${APP_START}
/* ${HEADER} */
@theme {
  /* Couleurs — utilitaires bg-brand-green, text-neutral-600, border-accent-1… */
${colors.map((c) => `  ${pad(`--color-${c.name}:`)}${c.value};${c.description ? ` /* ${c.description} */` : ""}`).join("\n")}

  /* Typographie Brand OS — text-display, text-heading-1, text-heading-2, text-body, text-caption */
${typography
  .map(
    (t) =>
      `  --text-${t.name}: ${t.value.fontSize};\n  --text-${t.name}--line-height: ${t.value.lineHeight};\n  --text-${t.name}--font-weight: ${t.value.fontWeight};`
  )
  .join("\n")}

  /* Rayons Brand OS — rounded-sm, rounded-md, rounded-lg, rounded-xl, rounded-full */
${radius.map((r) => `  ${pad(`--radius-${r.name}:`)}${r.value};${r.description ? ` /* ${r.description} */` : ""}`).join("\n")}

  /* Conteneur — max-w-page */
${container.map((c) => `  ${pad(`--container-${c.name}:`)}${c.value};`).join("\n")}
}
${"/* === Fin des tokens Studi === */"}`

// ── 3. Bloc de tokens des maquettes HTML ─────────────────────────────────────
const START = "/* === Tokens Studi"
const END = "/* === Fin des tokens Studi === */"
const htmlBlock = `/* === Tokens Studi — ${HEADER} === */
    :root {
${colors.map((c) => `      ${pad(`--${c.name}:`)}${c.value};`).join("\n")}
      --logo-black: var(--logo); /* alias historique des maquettes */

      --font-sans: ${fontSans};

      /* Espacements (échelle 4px) */
${space.map((s) => `      ${pad(`--space-${s.name}:`)}${s.value};`).join("\n")}

      /* Rayons */
${radius.map((r) => `      ${pad(`--radius-${r.name}:`)}${r.value};`).join("\n")}
    }
    ${END}`

/** Remplace le bloc entre marqueurs ; retire l'ancien :root Brand OS écrit à la main (migration). */
function injectHtml(source) {
  const start = source.indexOf(START)
  const end = source.indexOf(END)
  if (start === -1 || end === -1) return null
  let rest = source.slice(end + END.length)
  rest = rest.replace(/^\s*:root \{\s*\/\* Brand OS — espacements[\s\S]*?\n    \}/, "")
  return source.slice(0, start) + htmlBlock + rest
}

const lameFiles = []
;(function walk(dir) {
  for (const entry of readdirSync(path.join(ROOT, dir))) {
    const rel = path.join(dir, entry)
    if (statSync(path.join(ROOT, rel)).isDirectory()) walk(rel)
    else if (entry === "index.html") lameFiles.push(rel)
  }
})("brand/lames")

// ── 4. Écriture (ou contrôle) ────────────────────────────────────────────────
const globals = read("app/globals.css")
const gStart = globals.indexOf(APP_START)
const gEnd = globals.indexOf(END, gStart)
if (gStart === -1 || gEnd === -1) {
  console.error("✗ app/globals.css : marqueurs « Tokens Studi (générés) » introuvables")
  process.exit(1)
}
const outputs = [["app/globals.css", globals.slice(0, gStart) + appCss + globals.slice(gEnd + END.length)]]
for (const file of lameFiles) {
  const next = injectHtml(read(file))
  if (next === null) console.warn(`⚠️  ${file} : marqueurs « Tokens Studi » introuvables, fichier ignoré`)
  else outputs.push([file, next])
}

let stale = 0
for (const [file, content] of outputs) {
  let current = ""
  try {
    current = read(file)
  } catch {}
  if (current === content) continue
  stale++
  if (CHECK) console.error(`✗ ${file} n'est pas à jour`)
  else writeFileSync(path.join(ROOT, file), content)
}

// ── 5. Vérification : couleurs utilisées ↔ tokens existants ──────────────────
const known = new Set(colors.map((c) => c.name))
const FAMILY = "(brand-[a-z0-9-]+|accent-\\d[a-z0-9-]*|neutral-\\d+|orange-\\d+|success|warning|danger|info|logo)"
const classRe = new RegExp(`(?:^|[\\s"'\`:])(?:bg|text|border(?:-[trblxy])?|ring|divide|outline|fill|stroke|decoration|marker|caret|from|via|to)-${FAMILY}(?=[\\s"'\`/\\]]|$)`, "g")
const varRe = new RegExp(`var\\(--(?:color-)?${FAMILY}\\)`, "g")
const unknown = []
const SKIP = new Set(["node_modules", ".next", ".git", "lames-originales", "public"])

;(function scan(dir) {
  for (const entry of readdirSync(path.join(ROOT, dir))) {
    if (SKIP.has(entry)) continue
    const rel = path.join(dir, entry)
    if (statSync(path.join(ROOT, rel)).isDirectory()) scan(rel)
    else if (/\.(tsx?|css|html)$/.test(entry)) {
      const text = read(rel)
      for (const re of [classRe, varRe]) {
        for (const m of text.matchAll(re)) if (!known.has(m[1])) unknown.push(`${rel} : ${m[1]}`)
      }
    }
  }
})(".")

const summary = `${colors.length} couleurs · ${typography.length} styles typo · ${radius.length} rayons → app/globals.css + ${lameFiles.length} maquettes`
if (unknown.length) {
  console.error(`✗ Couleurs utilisées mais absentes des tokens (renommées ou supprimées dans Brand OS ?) :\n  ${[...new Set(unknown)].join("\n  ")}`)
}
if (CHECK) {
  if (stale || unknown.length) process.exit(1)
  console.log(`✓ Tokens à jour (${summary})`)
} else {
  console.log(`✓ ${stale ? `${stale} fichier(s) régénéré(s)` : "Déjà à jour"} — ${summary}`)
  if (unknown.length) process.exit(1)
}
