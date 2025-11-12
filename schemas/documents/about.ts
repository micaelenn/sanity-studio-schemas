import { defineType } from "sanity";
import { ActivityIcon, StackIcon, RobotIcon } from '@sanity/icons'

export default defineType({
  name: 'about',
  title: 'About',
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
        group: 'content',
        type: 'array',
        of: [{ type: 'block' }]
      },
      {
        title: "Personal Projects",
        name: "projects",
        group: "content",
        type: 'array',
        of: [{ type: "project" }]
      },
      {
        title: "SEO",
        name: "seo",
        group: "seo",
        type: "seo"
      },
    ]
})