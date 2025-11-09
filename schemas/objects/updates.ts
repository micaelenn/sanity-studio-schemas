import { defineType } from "sanity"

export default defineType({
  name: "updates",
  title: "Updates",
  type: "object",
    fields: [
      {
        title: "Learning",
        name: "learning",
        type: "string",
      },
      {
        title: "Playing",
        name: "playing",
        type: "string",
      },
      {
        title: "Location",
        name: "location",
        type: "string",
      },
      {
        title: "Version",
        name: "version",
        type: "string",
      },
    ],
})
