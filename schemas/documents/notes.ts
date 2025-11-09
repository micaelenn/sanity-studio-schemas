import { defineType } from "sanity"
import { HomeIcon, ComposeIcon, BlockContentIcon, RobotIcon } from '@sanity/icons'

export default defineType({
  title: 'Notes',
  name: 'notes',
  type: 'document',
  icon: ComposeIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      }
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: "text",
      rows: 5 
    },
    {
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
})