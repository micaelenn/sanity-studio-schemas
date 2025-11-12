import { defineType } from "sanity";
import { ActivityIcon, StackIcon, RobotIcon } from '@sanity/icons'

export default defineType({
  name: 'socials',
  title: 'Socials',
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
        title: "Social Medias",
        name: "socialMedias",
        group: "content",
        type: 'array',
        of: [{ type: "menu" }]
      },
      {
        title: "SEO",
        name: "seo",
        group: "seo",
        type: "seo"
      }
    ]
})