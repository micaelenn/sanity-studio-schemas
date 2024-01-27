import { defineType } from "sanity"

export default defineType({
    name: 'menu',
    title: 'Menu',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image'
        },
        {
            name: 'url',
            title: 'URL/path',
            type: 'string'
        }
    ]
})