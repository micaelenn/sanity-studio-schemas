import { defineType } from "sanity";
import { ActivityIcon, StackIcon, RobotIcon } from '@sanity/icons'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: StackIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
      icon: ActivityIcon
    },
    {
      name: 'seo',
      title: 'SEO',
      icon: RobotIcon
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: "content",
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      group: 'content',
      of: [{ type: 'block' }]
    },
    {
      name: 'stack',
      title: 'Tech Stack',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }]
    },
    {
      title: "SEO",
      name: "seo",
      group: "seo",
      type: "seo"
    }
  ]
})