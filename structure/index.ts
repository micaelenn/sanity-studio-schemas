import { ConfigContext } from 'sanity'
import { StructureBuilder } from 'sanity/desk'
import { ListItemBuilder } from 'sanity/desk'
import { StackIcon, HomeIcon, TiersIcon } from '@sanity/icons'

// prevent schema repetition
const hiddenDocTypes = (listItem: ListItemBuilder) => {
    const id = listItem.getId()
  
    if (!id) {
      return false
    }
  
    return ![
      'generalSchema',
      'homepageSchema',
      'tilListingSchema'
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
          .title('General')
          .schemaType('generalSchema')
          .documentId('general')
      ),
      // HOMEPAGE 
      S.listItem()
      .title('Homepage')
      .icon(HomeIcon)
      .child(
      S.document()
          .title('Homepage')
          .schemaType('homepageSchema')
          .documentId('homepage')
      ),
      // TODAY I LEARNED (PAGE)
      S.listItem()
      .title('Today I Learned (page)')
      .icon(TiersIcon)
      .child(
      S.document()
          .title('Today I Learned (page)')
          .schemaType('tilListingSchema')
          .documentId('tilListingPage')
      ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])