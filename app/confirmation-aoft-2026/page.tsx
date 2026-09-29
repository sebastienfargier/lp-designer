import type { Metadata } from "next"

import { ConfirmationBanner, SiteFooter } from "@/components/lp/site"
import { AccordionSection } from "@/components/sections/accordion-section"
import { ConditionsSection } from "@/components/sections/conditions-section"
import { FeatureColumns } from "@/components/sections/feature-columns"
import { Footnotes } from "@/components/sections/footnotes"
import { HeroVideo } from "@/components/sections/hero-video"
import { ImageText } from "@/components/sections/image-text"
import { LogoWall } from "@/components/sections/logo-wall"
import { ReviewBand } from "@/components/sections/review-band"
import * as content from "@/content/aoft-2026"

export const metadata: Metadata = {
  title: "Formez-vous à un métier d'avenir",
  robots: { index: false },
}

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <ConfirmationBanner>{content.confirmation}</ConfirmationBanner>
      <main className="flex-1">
        <HeroVideo {...content.hero} />
        <ConditionsSection {...content.conditions} />
        <AccordionSection {...content.offres} />
        <LogoWall {...content.logos} />
        <ImageText {...content.webinars} />
        <FeatureColumns {...content.pourquoi} />
        <ReviewBand {...content.chiffres} />
        <Footnotes notes={content.mentions} />
      </main>
      <SiteFooter copyright={content.copyright} />
    </div>
  )
}
