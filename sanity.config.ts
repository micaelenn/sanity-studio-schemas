// external modules
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

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
    vercelDeployTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
