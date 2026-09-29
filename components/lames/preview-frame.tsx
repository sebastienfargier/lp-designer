"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

/**
 * Prévisualise une lame dans une iframe rendue à la largeur réelle (1280 ou 390 px)
 * puis réduite pour tenir dans son conteneur.
 * - `thumbnail` : cadrage 16:10 du haut de la lame, non interactif.
 * - `full` : hauteur réelle de la lame, interactive.
 */
export function PreviewFrame({
  src,
  title,
  viewport = 1280,
  mode = "thumbnail",
  className,
}: {
  src: string
  title: string
  viewport?: number
  mode?: "thumbnail" | "full"
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [width, setWidth] = useState(0)
  const [contentHeight, setContentHeight] = useState(800)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    // Mesure immédiate (ResizeObserver ne notifie qu'au prochain rendu de la page)
    setWidth(el.getBoundingClientRect().width)
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width))
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // En mode complet, suit la hauteur du contenu (même origine : lecture directe du document)
  function handleLoad() {
    if (mode !== "full") return
    const doc = frameRef.current?.contentDocument
    if (!doc) return
    const root = doc.querySelector<HTMLElement>("[data-lame-root]") ?? doc.body
    const update = () => setContentHeight(Math.max(root.scrollHeight, 200))
    update()
    new ResizeObserver(update).observe(root)
  }

  const scale = width ? Math.min(1, width / viewport) : 0
  const frameHeight = mode === "thumbnail" ? Math.round(viewport * 0.625) : contentHeight

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-hidden bg-neutral-100", className)}
      style={{ height: scale ? frameHeight * scale : mode === "thumbnail" ? undefined : 400 }}
    >
      {scale > 0 && (
        <iframe
          ref={frameRef}
          src={src}
          title={title}
          onLoad={handleLoad}
          loading={mode === "thumbnail" ? "lazy" : "eager"}
          tabIndex={mode === "thumbnail" ? -1 : undefined}
          aria-hidden={mode === "thumbnail" ? true : undefined}
          className={cn(
            "absolute top-0 left-1/2 origin-top border-0 bg-neutral-0",
            mode === "thumbnail" && "pointer-events-none"
          )}
          style={{
            width: viewport,
            height: frameHeight,
            transform: `translateX(-50%) scale(${scale})`,
          }}
        />
      )}
    </div>
  )
}
