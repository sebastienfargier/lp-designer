import { Star } from "lucide-react"

/**
 * Note moyenne mise en avant : valeur en Display, étoiles (demi-étoiles comprises), nombre d'avis.
 * Étoiles à l'encre, partie vide en neutral-300.
 */
export function RatingSummary({
  rating,
  count,
  max = 5,
}: {
  rating: number
  count: number
  max?: number
}) {
  const formattedCount = new Intl.NumberFormat("fr-FR").format(count)
  return (
    <div
      role="img"
      aria-label={`Note moyenne de ${rating.toLocaleString("fr-FR")} sur ${max}, basée sur ${formattedCount} avis`}
      className="flex items-center gap-4"
    >
      <span aria-hidden className="text-display">
        {rating}
      </span>
      <span aria-hidden className="flex flex-col items-start gap-1">
        <span className="flex gap-1">
          {Array.from({ length: max }, (_, i) => {
            const fill = Math.min(Math.max(rating - i, 0), 1)
            return (
              <span key={i} className="relative size-6">
                <Star className="absolute inset-0 size-6 fill-current text-neutral-300" strokeWidth={0} />
                <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                  <Star className="size-6 fill-current text-neutral-900" strokeWidth={0} />
                </span>
              </span>
            )
          })}
        </span>
        <span className="text-body">Basé sur {formattedCount} avis</span>
      </span>
    </div>
  )
}
