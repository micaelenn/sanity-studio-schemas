import { defineType } from "sanity"
import { TerminalIcon, BlockContentIcon, RobotIcon } from '@sanity/icons'

export default defineType({
    name: 'tilListingSchema',
    title: 'Today I Learned (page)',
    type: 'document',
    icon: TerminalIcon,
    groups: [
        {
          name: 'pageContent',
          title: 'Content',
          default: true,
          icon:  BlockContentIcon
        },
        {
          name: 'seo',
          title: 'SEO',
          icon: RobotIcon
        }
    ],
    fields: [
        {
            name: 'content',
            title: 'Content',
            type: 'object',
            icon: BlockContentIcon,
            group: 'pageContent',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string'
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'array', 
                    of: [{type: 'block'}]
                }
            ]
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'object',
            icon: BlockContentIcon,
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