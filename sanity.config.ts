import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { projectID, dataset } from './utils/config/enviroment'

export default defineConfig({
  name: 'default',
  title: 'website',

  projectId: projectID,
  dataset: dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
