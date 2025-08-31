import { defineType, defineField } from "sanity"

export default defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", title: "SEO Title" }),
    defineField({ name: "description", type: "text", title: "Meta Description" }),
    defineField({ name: "image", type: "image", title: "Open Graph Image" }),
  ],
})
