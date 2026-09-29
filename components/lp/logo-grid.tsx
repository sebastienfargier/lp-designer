import Image from "next/image"

import { cn } from "@/lib/utils"

type Logo = { name: string; src: string; width: number; height: number }

function LogoGrid({
  logos,
  className,
  monochrome = false,
}: {
  logos: Logo[]
  className?: string
  monochrome?: boolean
}) {
  return (
    <ul
      className={cn(
        "grid grid-cols-3 items-center gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-6",
        className
      )}
    >
      {logos.map((logo) => (
        <li key={logo.name} className="flex h-12 items-center justify-center">
          <Image
            src={logo.src}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            unoptimized
            className={cn(
              "max-h-10 w-auto max-w-full object-contain",
              monochrome && "grayscale"
            )}
          />
        </li>
      ))}
    </ul>
  )
}

export { LogoGrid, type Logo }
