import { defineType } from "sanity"
import { MobileDeviceIcon } from '@sanity/icons'

export default defineType({
    name: 'socialSchema',
    title: 'General',
    type: 'object',
    icon: MobileDeviceIcon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'url',
            title: 'URL',
            type: 'string'
        }
    ]
})