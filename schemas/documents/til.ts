import { defineType } from "sanity"
import {BlockContentIcon, RobotIcon, TerminalIcon } from '@sanity/icons'
import formatSlug from "../../utils/helpers/string"

export default defineType({
    name: 'tilSchema',
    title: 'Today I Learned (posts)',
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
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            description: 'Click in "Generate" to add a slug based on the post title',
            options: {
                source: 'title',
                slugify: formatSlug
            }
        },
        {
            title: "Subject",
            name: "subject",
            type: "string",
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            title: 'SEO',
            name: 'seo',
            type: 'object',
            icon: BlockContentIcon,
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