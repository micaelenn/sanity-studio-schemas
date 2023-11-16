import { ConfigContext } from 'sanity'
import { StructureBuilder } from 'sanity/desk'
import { ListItemBuilder } from 'sanity/desk'

import general from './desk/general'

// prevent schema repetition
const hiddenDocTypes = (listItem: ListItemBuilder) => {
    const id = listItem.getId()
  
    if (!id) {
      return false
    }
  
    return ![
      'generalSchema',
      'socialSchema'
    ].includes(id)
  }

export const structure = (S: StructureBuilder , context: ConfigContext) =>
    S.list()
    .title('Content')
    .items([
        general(S, context),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])