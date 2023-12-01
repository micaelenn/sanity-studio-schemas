import { defineType } from "sanity"
import { HomeIcon, BlockContentIcon, RobotIcon } from '@sanity/icons'

export default defineType({
    name: 'homepageSchema',
    title: 'Homepage',
    type: 'document',
    icon: HomeIcon,
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
            name: 'introduction',
            title: 'Introduction',
            type: 'object',
            icon: BlockContentIcon,
            group: 'pageContent',
            fields: [
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image'
                },
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