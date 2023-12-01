import { defineType } from "sanity"
import {BlockContentIcon, RobotIcon, TerminalIcon } from '@sanity/icons'

export default defineType({
    name: 'tilSchema',
    title: 'Today I Learned',
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
            name: 'Content',
            type: 'object',
            icon: TerminalIcon,
            group: 'pageContent',
            fields: [
                {
                    title: "Title",
                    name: "title",
                    type: "string",
                },
                {
                    title: "Subject",
                    name: "subject",
                    type: "string",
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
            name: 'homepage',
            title: 'SEO',
            type: 'object',
            icon: BlockContentIcon,
            group: 'seo',
            fields: [
                {
                    name: 'title',
                    title: 'Meta Title',
                    type: 'string'
                },
                {
                    name: 'description',
                    title: 'Meta Description',
                    type: 'text'
                }
            ]
        },
    ]
})