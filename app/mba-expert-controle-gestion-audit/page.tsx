import type { Metadata } from "next"

import { SiteFooter } from "@/components/lp/site"
import { ConditionsSection } from "@/components/sections/conditions-section"
import { FaqSection } from "@/components/sections/faq-section"
import { FeatureColumns } from "@/components/sections/feature-columns"
import { Footnotes } from "@/components/sections/footnotes"
import { HeroProduct } from "@/components/sections/hero-product"
import { ImageText } from "@/components/sections/image-text"
import { OfferCards } from "@/components/sections/offer-cards"
import { ReviewBand } from "@/components/sections/review-band"
import { TabsSection } from "@/components/sections/tabs-section"
import * as content from "@/content/mba-expert-controle-gestion-audit"

export const metadata: Metadata = {
  title: "MBA Expert en contrôle de gestion et audit",
  robots: { index: false },
}

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="flex-1">
        <HeroProduct {...content.hero} />
        <FeatureColumns {...content.infos} surface="surface-page" />
        <ConditionsSection {...content.competences} surface="surface-block" />
        <TabsSection {...content.programme} />
        <ImageText {...content.diplomes} />
        <FeatureColumns {...content.methode} surface="surface-page" />
        <OfferCards {...content.niveaux} />
        <OfferCards {...content.financement} />
        <ReviewBand {...content.indicateurs} />
        <FaqSection {...content.faq} />
        <Footnotes notes={content.mentions} />
      </main>
      <SiteFooter copyright={content.copyright} />
    </div>
  )
}
