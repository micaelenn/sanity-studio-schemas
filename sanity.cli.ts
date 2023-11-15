import { defineCliConfig } from 'sanity/cli'
import { projectID, dataset } from './utils/config/enviroment'

export default defineCliConfig({
  api: {
    projectId: projectID,
    dataset: dataset
  }
})
