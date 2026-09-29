import { Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { statusLabel, type LameStatus } from "@/lib/lames/types"

/** Label de statut : « Validée » (vert), « À revoir » (orange doux), « À valider » (contour). */
export function StatusBadge({ status }: { status: LameStatus }) {
  if (status === "validee") {
    return (
      <Badge variant="brand">
        <Check data-icon="inline-start" />
        {statusLabel(status)}
      </Badge>
    )
  }
  return <Badge variant={status === "a-revoir" ? "review" : "outline"}>{statusLabel(status)}</Badge>
}
