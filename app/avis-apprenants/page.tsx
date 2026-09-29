import type { Metadata } from "next"

import { SiteFooter } from "@/components/lp/site"
import { SiteNav } from "@/components/lp/site-nav"
import { Card, CardContent } from "@/components/ui/card"
import { TrustpilotWidget } from "@/components/lp/site"
import { Footnotes } from "@/components/sections/footnotes"
import { HeroCentered } from "@/components/sections/hero-centered"
import { ImageText } from "@/components/sections/image-text"
import { ReviewWall } from "@/components/sections/review-wall"
import * as content from "@/content/avis-apprenants"

export const metadata: Metadata = {
  title: "Avis et témoignages des apprenants Studi",
  robots: { index: false },
}

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteNav {...content.nav} />
      <main className="flex-1">
        <HeroCentered {...content.hero}>
          <Card className="w-full max-w-xl">
            <CardContent>
              <TrustpilotWidget />
            </CardContent>
          </Card>
        </HeroCentered>
        <ReviewWall {...content.wall} />
        <ImageText {...content.cta} />
        <Footnotes notes={content.mentions} />
      </main>
      <SiteFooter copyright={content.copyright} />
    </div>
  )
}
