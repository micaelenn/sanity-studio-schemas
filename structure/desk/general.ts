import { ListItemBuilder } from 'sanity/desk'
import { StackIcon } from '@sanity/icons'
import defineStructure from '../../utils/helpers/structure'

export default defineStructure<ListItemBuilder>((S) =>  
    S.listItem()
    .title('GENERAL')
    .icon(StackIcon)
    .child(
    S.document()
        .schemaType('generalSchema')
        .documentId('general')
    )
)