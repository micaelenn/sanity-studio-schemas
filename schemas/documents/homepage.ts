import { defineType } from "sanity"
import { HomeIcon, BlockContentIcon, RobotIcon } from '@sanity/icons'

export default defineType({
  title: 'Homepage',
  name: 'homepage',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      name: 'pageContent',
      title: 'Content',
      default: true,
      icon: BlockContentIcon
    },
    {
      name: 'seo',
      title: 'SEO',
      icon: RobotIcon
    }
  ],
  fields: [
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'object',
      icon: BlockContentIcon,
      group: 'pageContent',
      fields: [
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }]
        },
        {
         name: 'stack',
         title: 'Tech Stack',
         type: 'array',
         of: [{ type: 'string' }]
        }
      ]
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      icon: RobotIcon,
      group: 'seo',
      fields: [
        {
          name: 'title',
          title: 'Meta Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Meta Description',
          type: 'text',
        }
      ]
    },
  ]
})
