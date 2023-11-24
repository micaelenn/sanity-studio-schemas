import { defineType } from "sanity"
import { TerminalIcon } from '@sanity/icons'

export default defineType({
    name: 'tilSchema',
    title: 'Today I Learned',
    type: 'document',
    icon: TerminalIcon, 
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
})