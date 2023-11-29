// external modules
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

// internal modules
import { projectID, dataset } from './utils/config/enviroment'
import { structure } from './structure/index'

export default defineConfig({
  name: 'default',
  title: 'website',

  projectId: projectID,
  dataset: dataset,

  plugins: [
    deskTool({structure}),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
