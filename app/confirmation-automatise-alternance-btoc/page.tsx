import type { Metadata } from "next"

import { ConfirmationBanner, SiteFooter } from "@/components/lp/site"
import { DataTableSection } from "@/components/sections/data-table-section"
import { FeatureColumns } from "@/components/sections/feature-columns"
import { HeroPhoto } from "@/components/sections/hero-photo"
import { ImageText } from "@/components/sections/image-text"
import { LogoWall } from "@/components/sections/logo-wall"
import { MediaCard } from "@/components/sections/media-card"
import { ReviewBand } from "@/components/sections/review-band"
import { TabsSection } from "@/components/sections/tabs-section"
import * as content from "@/content/alternance-btoc"

export const metadata: Metadata = {
  title: "Trouvez votre alternance grâce à votre école Studi",
  robots: { index: false },
}

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <ConfirmationBanner>{content.confirmation}</ConfirmationBanner>
      <main className="flex-1">
        <HeroPhoto {...content.hero} />
        <FeatureColumns {...content.atouts} />
        <TabsSection {...content.admission} />
        <MediaCard {...content.conseils} />
        <DataTableSection {...content.aides} />
        <ImageText {...content.webinars} />
        <LogoWall {...content.logos} />
        <MediaCard {...content.trajectoire} />
        <ReviewBand {...content.avis} />
      </main>
      <SiteFooter copyright={content.copyright} />
    </div>
  )
}
