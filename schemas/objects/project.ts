import { defineType } from "sanity"

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'object',
  fields: [
    {
      name: 'projectName',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'projectURL',
      title: 'URL',
      type: 'string'
    },
    {
      name: 'githubURL',
      title: 'GitHub URL',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: "text",
      rows: 5 
    },
    {
      name: 'stack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
})