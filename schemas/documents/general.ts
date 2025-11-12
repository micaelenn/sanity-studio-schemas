import { defineType } from "sanity";
import { ActivityIcon, StackIcon, MenuIcon } from '@sanity/icons'

export default defineType({
  name: 'generalSchema',
  title: 'General',
  type: 'document',
  icon: StackIcon,
    groups: [
      {
        name: 'menu',
        title: 'Menu',
        icon: MenuIcon
      },
      {
        name: 'header',
        title: 'Header',
        default: true,
        icon:  ActivityIcon
      },
    ],
    fields: [
      {
        title: "Menu",
        name: "menu",
        group: "menu",
        type: 'array',
        of: [{ type: "menu" }]
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        group: "header",
      },
      {
        name: 'updates',
        title: 'Updates',
        group: "header",
        type: 'array',
        of: [{ type: "updates" }]
      },
    ]
})