import { defineType } from "sanity"
import { HomeIcon } from "@sanity/icons"
import { BlockContentIcon } from '@sanity/icons'

export default defineType({
    name: 'homepageSchema',
    title: 'Homepage',
    type: 'document',
    icon: HomeIcon, 
    fields: [
        {
            name: 'introduction',
            title: 'Introduction',
            type: 'object',
            icon: BlockContentIcon,
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
        }
    ]
})