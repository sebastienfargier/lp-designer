"use client"

import { useActionState } from "react"
import { Check, RotateCcw, TriangleAlert } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { saveReview, type ReviewState } from "@/app/lames/actions"
import { categories, type LameCategory, type LameStatus } from "@/lib/lames/types"

const categoryItems = categories.map((c) => ({ label: c.label, value: c.value }))

/** Validation d'une lame : catégorie, note, puis statut (un bouton par statut). */
export function ReviewForm({
  id,
  status,
  category,
  note,
}: {
  id: string
  status: LameStatus
  category: LameCategory
  note?: string
}) {
  const [state, action, pending] = useActionState<ReviewState, FormData>(saveReview, null)

  return (
    <form action={action}>
      <input type="hidden" name="id" value={id} />
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="category">Catégorie</FieldLabel>
          <Select name="category" defaultValue={category} items={categoryItems}>
            <SelectTrigger id="category" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {categoryItems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="note">Note</FieldLabel>
          <Textarea
            id="note"
            name="note"
            defaultValue={note}
            placeholder="Retours, conditions d’usage, variantes à prévoir…"
            rows={4}
          />
          <FieldDescription>Visible dans la bibliothèque et lue lors de la génération des LP.</FieldDescription>
        </Field>
        <div className="flex flex-col gap-2">
          <Button type="submit" name="status" value="validee" disabled={pending}>
            <Check data-icon="inline-start" />
            {status === "validee" ? "Mettre à jour (validée)" : "Valider la lame"}
          </Button>
          <Button type="submit" name="status" value="a-revoir" variant="outline" disabled={pending}>
            <TriangleAlert data-icon="inline-start" />
            À revoir
          </Button>
          <Button type="submit" name="status" value="a-valider" variant="ghost" disabled={pending}>
            <RotateCcw data-icon="inline-start" />
            Remettre à valider
          </Button>
        </div>
        {state && (
          <p role="status" className={state.ok ? "text-body text-brand-green" : "text-body text-danger"}>
            {state.message}
          </p>
        )}
      </FieldGroup>
    </form>
  )
}
