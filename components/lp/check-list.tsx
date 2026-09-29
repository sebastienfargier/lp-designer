import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

/** Liste cochée : texte Body, pastille ronde. `iconClassName` règle la pastille selon la surface. */
function CheckList({
  items,
  className,
  iconClassName = "bg-brand-green-soft text-brand-green",
}: {
  items: React.ReactNode[]
  className?: string
  iconClassName?: string
}) {
  return (
    <ul className={cn("flex flex-col gap-3 text-body", className)}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            aria-hidden
            className={cn(
              "flex size-6 shrink-0 items-center justify-center rounded-full",
              iconClassName
            )}
          >
            <Check className="size-3.5" strokeWidth={3} />
          </span>
          <span className="pt-px">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export { CheckList }
