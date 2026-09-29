import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type ProfileTab = {
  value: string
  label: string
  title: string
  content: React.ReactNode
}

/**
 * Lame « section-profils » : onglets à trait indicateur (piste neutral-200, actif brand-green),
 * inactif neutral-500, survol neutral-600, actif encre — sans opacité.
 * Libellé en Caption, titre en Heading 2.
 */
function ProfileTabs({ tabs }: { tabs: ProfileTab[] }) {
  return (
    <Tabs defaultValue={tabs[0].value} className="gap-8 sm:gap-12">
      <TabsList
        variant="line"
        className={cn(
          "grid w-full grid-cols-1 items-stretch gap-2 p-0 group-data-horizontal/tabs:h-auto sm:gap-8",
          tabs.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"
        )}
      >
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="h-auto flex-col items-start justify-start gap-1 rounded-none border-0 px-0 pt-4 pb-2 text-left whitespace-normal text-neutral-500 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:rounded-full before:bg-neutral-200 after:rounded-full after:bg-brand-green hover:text-neutral-600 data-active:text-neutral-900 group-data-horizontal/tabs:after:top-0 group-data-horizontal/tabs:after:bottom-auto group-data-horizontal/tabs:after:h-[3px]"
          >
            <span className="text-caption">{tab.label}</span>
            <span className="text-heading-2">{tab.title}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="text-body">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export { ProfileTabs, type ProfileTab }
