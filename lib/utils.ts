import { createCn } from "cn/config"

/**
 * `cn` avec les styles typographiques Brand OS déclarés comme tailles de police :
 * sans cela, `text-body` + `text-muted-foreground` seraient pris pour deux couleurs
 * et la taille serait supprimée à la fusion des classes.
 */
export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display", "heading-1", "heading-2", "body", "caption"] }],
    },
  },
})
