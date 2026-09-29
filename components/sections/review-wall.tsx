"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { CheckList } from "@/components/lp/check-list"
import { Section } from "@/components/lp/section"
import type { ImageSpec, SectionBase } from "@/components/sections/types"

type ItemBase = {
  id: string
  /** Catégories pour les filtres (ex. « video », « alternance »). */
  tags: string[]
  /** Contenu d'exemple : affiché avec un badge « Exemple » tant qu'il n'est pas remplacé par un vrai témoignage. */
  example?: boolean
}

export type WallItem =
  | (ItemBase & { kind: "review"; quote: string; author: string; role: string; source?: string })
  | (ItemBase & {
      kind: "video"
      title: string
      subtitle?: string
      /** Vidéo YouTube : miniature puis lecteur chargé au clic. */
      youtubeId?: string
      /** Vidéo JW Player (lecteur hébergé) : iframe chargée à l'approche, avec son propre poster. */
      jwplayer?: { mediaId: string; playerId: string }
      poster?: ImageSpec
      /** Format de la vidéo : 16:9 par défaut, 9:16 pour les témoignages verticaux. */
      vertical?: boolean
    })
  | (ItemBase & { kind: "stat"; value: string; label: string })
  /** Citation courte mise en avant (extrait d'un avis réel). */
  | (ItemBase & { kind: "highlight"; quote: string; author: string })
  /** Carte d'information (accompagnement, services) : titre + liste cochée. */
  | (ItemBase & { kind: "feature"; title: string; items: string[] })

export type ReviewWallProps = SectionBase & {
  filters: { value: string; label: string }[]
  items: WallItem[]
}

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

function ExampleBadge() {
  return <Badge variant="review">Exemple</Badge>
}

/** Carte d'avis — lame « section-avis » : guillemet vert de marque, texte Body, avatar, auteur, source. */
function ReviewCard({ item }: { item: Extract<WallItem, { kind: "review" }> }) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <span aria-hidden className="text-display leading-none text-brand-green">“</span>
          {item.example && <ExampleBadge />}
        </div>
        <blockquote className="text-body">{item.quote}</blockquote>
      </CardContent>
      <CardFooter className="gap-3 border-t pt-(--card-spacing)">
        <Avatar>
          <AvatarFallback>{initials(item.author)}</AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-col">
          <span className="text-body">{item.author}</span>
          <span className="truncate text-caption text-muted-foreground">
            {item.role}
            {item.source && ` · ${item.source}`}
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}

/** Tuile vidéo : la vidéo seule, légende dessous (jamais de carte sur la vidéo). Chargée au clic. */
function VideoTile({ item }: { item: Extract<WallItem, { kind: "video" }> }) {
  const [playing, setPlaying] = useState(false)
  const ratio = item.vertical ? "aspect-[9/16]" : "aspect-video"

  return (
    <figure className="flex flex-col gap-3">
      <div className={`relative overflow-hidden rounded-lg bg-neutral-900 ${ratio}`}>
        {item.jwplayer ? (
          <iframe
            src={`https://cdn.jwplayer.com/players/${item.jwplayer.mediaId}-${item.jwplayer.playerId}.html`}
            title={item.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="size-full"
          />
        ) : playing && item.youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="size-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            disabled={!item.youtubeId}
            aria-label={item.youtubeId ? `Lire la vidéo : ${item.title}` : `${item.title} (vidéo à venir)`}
            className="group/video relative size-full outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-default"
          >
            {item.poster && (
              <Image
                src={item.poster.src}
                alt=""
              fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            )}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-neutral-0 text-neutral-900 transition-colors group-hover/video:bg-neutral-200 group-disabled/video:opacity-50">
                <Play aria-hidden className="size-5 fill-current" />
              </span>
            </span>
          </button>
        )}
        {item.example && (
          <span className="absolute top-3 left-3">
            <ExampleBadge />
          </span>
        )}
      </div>
      <figcaption className="flex flex-col">
        <span className="text-body">{item.title}</span>
        {item.subtitle && <span className="text-caption text-muted-foreground">{item.subtitle}</span>}
      </figcaption>
    </figure>
  )
}

/** Tuile chiffre clé : panneau vert de marque, valeur en accent 1 (Display). */
function StatTile({ item }: { item: Extract<WallItem, { kind: "stat" }> }) {
  return (
    <div className="surface-brand flex flex-col gap-2 rounded-lg p-6">
      <span className="text-display text-accent-1">{item.value}</span>
      <span className="text-body text-muted-foreground">{item.label}</span>
    </div>
  )
}

/** Citation mise en avant : panneau accent 1 (encre), citation en Heading 2. */
function HighlightTile({ item }: { item: Extract<WallItem, { kind: "highlight" }> }) {
  return (
    <figure className="surface-accent-1 flex flex-col gap-4 rounded-lg p-6">
      <blockquote className="text-heading-2 text-balance">« {item.quote} »</blockquote>
      <figcaption className="text-caption">{item.author}</figcaption>
    </figure>
  )
}

/** Carte d'information : titre + liste cochée, sur carte blanche. */
function FeatureCard({ item }: { item: Extract<WallItem, { kind: "feature" }> }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CheckList items={item.items} />
      </CardContent>
    </Card>
  )
}

/**
 * Mosaïque d'avis, vidéos et chiffres clés (pas de lame modèle : cartes de la lame « section-avis »
 * disposées en maçonnerie), avec filtres en puces.
 */
export function ReviewWall({ surface = "surface-page", id, filters, items }: ReviewWallProps) {
  const [filter, setFilter] = useState(filters[0]?.value ?? "tous")
  const visible = filter === filters[0]?.value ? items : items.filter((item) => item.tags.includes(filter))

  return (
    <Section surface={surface} id={id} className="scroll-mt-16">
      <div className="flex flex-col gap-8">
        <ToggleGroup
          value={[filter]}
          onValueChange={(value) => value[0] && setFilter(value[0])}
          variant="chip"
          aria-label="Filtrer les témoignages"
          className="mx-auto flex-wrap justify-center"
        >
          {filters.map((f) => (
            <ToggleGroupItem key={f.value} value={f.value}>
              {f.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        <ul className="columns-1 gap-6 sm:columns-2 lg:columns-3" aria-live="polite">
          {visible.map((item) => (
            <li key={item.id} className="mb-6 break-inside-avoid">
              {item.kind === "review" && <ReviewCard item={item} />}
              {item.kind === "video" && <VideoTile item={item} />}
              {item.kind === "stat" && <StatTile item={item} />}
              {item.kind === "highlight" && <HighlightTile item={item} />}
              {item.kind === "feature" && <FeatureCard item={item} />}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
