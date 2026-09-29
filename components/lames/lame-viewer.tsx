"use client"

import { useState } from "react"
import { Monitor, Smartphone } from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { PreviewFrame } from "@/components/lames/preview-frame"

const viewports = { desktop: 1280, mobile: 390 } as const

/** Prévisualisation interactive d'une lame, en largeur desktop (1280) ou mobile (390). */
export function LameViewer({ src, title }: { src: string; title: string }) {
  const [viewport, setViewport] = useState<keyof typeof viewports>("desktop")

  return (
    <div className="flex flex-col gap-4">
      <ToggleGroup
        value={[viewport]}
        onValueChange={(value) => value[0] && setViewport(value[0] as keyof typeof viewports)}
        variant="outline"
        aria-label="Largeur de prévisualisation"
      >
        <ToggleGroupItem value="desktop">
          <Monitor data-icon="inline-start" />
          Desktop
        </ToggleGroupItem>
        <ToggleGroupItem value="mobile">
          <Smartphone data-icon="inline-start" />
          Mobile
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="overflow-hidden rounded-lg ring-1 ring-border">
        <PreviewFrame
          key={viewport}
          src={src}
          title={`Prévisualisation : ${title}`}
          viewport={viewports[viewport]}
          mode="full"
        />
      </div>
    </div>
  )
}
