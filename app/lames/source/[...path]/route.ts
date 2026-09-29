import { readFile } from "node:fs/promises"
import path from "node:path"

/** Sert les maquettes HTML de brand/lames/ (et leurs assets) pour la prévisualisation. */
const ROOT = path.join(process.cwd(), "brand", "lames")

const TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".woff2": "font/woff2",
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const segments = (await params).path
  const file = path.resolve(ROOT, ...segments)
  const type = TYPES[path.extname(file).toLowerCase()]

  // Refuse tout chemin qui sortirait de brand/lames/ ou tout type non prévu
  if (!file.startsWith(ROOT + path.sep) || !type) {
    return new Response("Not found", { status: 404 })
  }

  try {
    const body = await readFile(file)
    return new Response(body, { headers: { "content-type": type } })
  } catch {
    return new Response("Not found", { status: 404 })
  }
}
