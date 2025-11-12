import { defineType } from "sanity"

export default defineType({
    name: 'menu',
    title: 'Menu',
    type: 'object',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'icon',
        title: 'SVG Raw',
        type: "text",
        rows: 5 
      },
      {
        name: 'url',
        title: 'URL/path',
        type: 'string'
      }
    ]
})