import { ConfigContext } from 'sanity'
import { StructureBuilder } from 'sanity/desk'
import { ListItemBuilder } from 'sanity/desk'
import { StackIcon, HomeIcon } from '@sanity/icons'

// prevent schema repetition
const hiddenDocTypes = (listItem: ListItemBuilder) => {
    const id = listItem.getId()
  
    if (!id) {
      return false
    }
  
    return ![
      'generalSchema',
      'homepageSchema'
    ].includes(id)
  }

export const structure = (S: StructureBuilder , context: ConfigContext) =>
    S.list()
    .title('Content')
    .items([
      // GENERAL
      S.listItem()
      .title('General')
      .icon(StackIcon)
      .child(
      S.document()
          .title('General Content')
          .schemaType('generalSchema')
          .documentId('general')
      ),
      // HOMEPAGE 
      S.listItem()
      .title('Homepage')
      .icon(HomeIcon)
      .child(
      S.document()
          .title('Homepage Content')
          .schemaType('homepageSchema')
          .documentId('homepage')
      ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])