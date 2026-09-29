"use server"

import { revalidatePath } from "next/cache"

import { findLame } from "@/lib/lames/registry"
import { writeReview } from "@/lib/lames/status"
import { isCategory, isStatus, statusLabel } from "@/lib/lames/types"

export type ReviewState = { ok: boolean; message: string } | null

/** Enregistre le statut, la catégorie et la note d'une lame dans brand/lames-status.json. */
export async function saveReview(_prev: ReviewState, formData: FormData): Promise<ReviewState> {
  const id = String(formData.get("id") ?? "")
  const status = formData.get("status")
  const category = formData.get("category")
  const note = String(formData.get("note") ?? "").trim()

  if (!findLame(id) || !isStatus(status) || !isCategory(category)) {
    return { ok: false, message: "Données invalides." }
  }

  try {
    await writeReview(id, {
      status,
      category,
      ...(note ? { note } : {}),
      updatedAt: new Date().toISOString(),
    })
  } catch {
    return {
      ok: false,
      message: "Enregistrement impossible ici (fichiers en lecture seule). Validez les lames en local.",
    }
  }

  revalidatePath("/lames")
  revalidatePath(`/lames/${id}`)
  return { ok: true, message: `Lame enregistrée : ${statusLabel(status)}.` }
}
