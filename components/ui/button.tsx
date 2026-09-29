import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Brand OS · Principal : encre (accent 1 sur fond sombre, via la surface)
        default:
          "bg-primary text-primary-foreground hover:bg-(--primary-hover) active:bg-(--primary-active)",
        // Brand OS · Accent sur fond clair : moments forts uniquement, jamais sur surface-accent-1
        offer:
          "bg-accent-1 text-neutral-900 hover:bg-accent-1-hover active:bg-accent-1-active",
        // Brand OS · Secondaire (blanc bordé) — devient « Inversé » sur fond sombre
        outline:
          "border-(--secondary-border) bg-(--secondary-bg) text-(--secondary-fg) hover:bg-(--secondary-hover) active:bg-(--secondary-active) aria-expanded:bg-(--secondary-hover)",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-neutral-200 active:bg-neutral-300 aria-expanded:bg-secondary",
        // Brand OS · Tertiaire
        ghost:
          "hover:bg-muted hover:text-foreground active:bg-neutral-200 aria-expanded:bg-muted aria-expanded:text-foreground",
        // Brand OS · Destructif : danger 10 / 15 / 25 %
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/15 active:bg-destructive/25 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        // Brand OS : 36px, 14/500, padding 16px — taille unique des CTA de LP
        default:
          "h-9 gap-1.5 px-4 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-6 gap-1 px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-9",
        "icon-xs":
          "size-6 in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 in-data-[slot=button-group]:rounded-md",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
