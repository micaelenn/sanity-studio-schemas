// external modules
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"

// internal modules
import { schema } from "./schemas/schema"
import { projectID, dataset } from "./utils/config/enviroment"

export default defineConfig({
  name: "default",
  title: "cms",
  projectId: projectID,
  dataset: dataset,
  schema,
  plugins: [structureTool(), visionTool()]
})