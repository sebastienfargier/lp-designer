import Image from "next/image"
import { CircleCheck } from "lucide-react"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { isDarkSurface, type Surface } from "@/components/lp/section"

import { cn } from "@/lib/utils"

const ASSETS = "https://d9hhrg4mnvzow.cloudfront.net/info.studi.com"

/** Logotype monochrome : noir par défaut, `inverted` pour le blanc sur fond sombre. */
function StudiLogo({
  inverted = false,
  className,
}: {
  inverted?: boolean
  className?: string
}) {
  return (
    <Image
      src={`${ASSETS}/confirmation-automatise-alternance-btoc/6a276224-logo-studi-black.svg`}
      alt="Studi"
      width={541}
      height={188}
      unoptimized
      priority
      className={cn("h-8 w-auto", inverted && "brightness-0 invert", className)}
    />
  )
}

function SiteHeader({
  partner,
  surface = "surface-page",
}: {
  partner?: React.ReactNode
  surface?: Surface
}) {
  return (
    <header
      className={cn(surface, surface === "surface-page" && "border-b border-border")}
    >
      <div className="mx-auto flex h-16 w-full max-w-page items-center justify-between gap-4 px-4 sm:h-20">
        <div className="flex items-center gap-4">
          <StudiLogo inverted={isDarkSurface(surface)} />
          <p className="hidden text-body text-muted-foreground md:block">
            La Grande École 100% en ligne
          </p>
        </div>
        {partner}
      </div>
    </header>
  )
}

/** Bandeau pleine largeur au-dessus de la barre du logo : vert de marque sur vert doux (12,83:1). */
function ConfirmationBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-brand-green-soft">
      <div className="mx-auto w-full max-w-page">
        <Alert variant="brand" role="status">
          <CircleCheck aria-hidden />
          <AlertDescription>{children}</AlertDescription>
        </Alert>
      </div>
    </div>
  )
}

const legalLinks = [
  { label: "Mentions légales", href: "https://www.studi.com/fr/mentions-legales" },
  { label: "Respect de la vie privée", href: "https://www.studi.com/fr/rgpd" },
  { label: "CGV", href: "https://www.studi.com/fr/cgv" },
]

function SiteFooter({ copyright }: { copyright: string }) {
  return (
    <footer className="surface-brand">
      <div className="mx-auto flex w-full max-w-page flex-col items-center gap-6 px-4 py-8 sm:flex-row sm:justify-between">
        <StudiLogo inverted />
        <nav aria-label="Informations légales">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-body">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-caption">{copyright}</p>
      </div>
    </footer>
  )
}

function VideoEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="aspect-video overflow-hidden rounded-lg bg-neutral-900">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="size-full"
      />
    </div>
  )
}

function TrustpilotWidget({ theme = "light" }: { theme?: "light" | "dark" }) {
  return (
    <iframe
      src={`https://widget.trustpilot.com/trustboxes/53aa8912dec7e10d38f59f36/index.html?templateId=53aa8912dec7e10d38f59f36&businessunitId=61b77275057df728f50711b7#locale=fr-FR&styleHeight=140px&styleWidth=100%25&theme=${theme}&stars=4%2C5&reviewLanguages=fr`}
      title="Avis Trustpilot sur Studi"
      loading="lazy"
      className="h-[140px] w-full"
    />
  )
}

export {
  ASSETS,
  StudiLogo,
  SiteHeader,
  ConfirmationBanner,
  SiteFooter,
  VideoEmbed,
  TrustpilotWidget,
}
