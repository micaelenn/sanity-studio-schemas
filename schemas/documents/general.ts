import { defineType } from "sanity";
import { StackIcon } from '@sanity/icons'
import { ActivityIcon } from '@sanity/icons'
import { TextIcon } from '@sanity/icons'
import { MobileDeviceIcon } from '@sanity/icons'

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
      }
    ],
    fields: [
      {
        title: "Learning",
        name: "learning",
        type: "string",
        group: "updates"
      },
      {
        title: "Playing",
        name: "playing",
        type: "string",
        group: "updates"
      },
      {
        title: "Location",
        name: "location",
        type: "string",
        group: "updates"
      },
      {
        title: "Social Medias",
        name: "socialMedias",
        group: "social",
        type: 'array',
        of: [{ type: "socialSchema" }]
      }
    ]
})