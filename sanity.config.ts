// external modules
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"

// internal modules
import { schema } from "./schemas/schema"
import { projectID, dataset } from "./utils/config/enviroment"

export default defineConfig({
  name: "default",
  title: "Micaelen's website",
  projectId: projectID,
  dataset: dataset,
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
       S.list()
      .title("Content")
      .items([
        S.listItem()
          .title("Homepage")
          .icon(() => "🏠")
          .child(
            S.document()
              .schemaType("homepage")
              .documentId("homepage")
          ),
        S.listItem()
          .title("General")
          .icon(() => "👾")
          .child(
            S.document()
              .schemaType("generalSchema")
              .documentId("generalSchema")
          ),
        S.listItem()
          .title("About")
          .icon(() => "👾")
          .child(
            S.document()
              .schemaType("about")
              .documentId("about")
          ),
        S.listItem()
          .title("Socials")
          .icon(() => "👾")
          .child(
            S.document()
              .schemaType("socials")
              .documentId("socials")
          ),
        ...S.documentTypeListItems().filter(
          (item) => ![
            "homepage", 
            "generalSchema", 
            "about", 
            "socials",
          ].includes(item.getId() ?? "")
        ),
      ]),
    }),
    visionTool(),
  ],
})
