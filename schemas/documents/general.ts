import { defineType } from "sanity";
import { ActivityIcon, StackIcon, MobileDeviceIcon, MenuIcon } from '@sanity/icons'

export default defineType({
  name: 'generalSchema',
  title: 'General',
  type: 'document',
  icon: StackIcon,
    groups: [
      {
        name: 'updates',
        title: 'Updates',
        default: true,
        icon:  ActivityIcon
      },
      {
        name: 'social',
        title: 'Social Medias',
        icon: MobileDeviceIcon
      },
      {
        name: 'menu',
        title: 'Menu',
        icon: MenuIcon
      },
    ],
    fields: [
      {
        name: 'updates',
        title: 'Updates',
        type: 'object',
        group: "updates",
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
        ],
      },
      {
        title: "Social Medias",
        name: "socialMedias",
        group: "social",
        type: 'array',
        of: [{ type: "menu" }]
      },
      {
        title: "Menu",
        name: "menu",
        group: "menu",
        type: 'array',
        of: [{ type: "menu" }]
      },
    ]
})