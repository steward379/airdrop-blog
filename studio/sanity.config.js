import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './schemas/schema'
import { visionTool } from '@sanity/vision'


export default defineConfig({
  name: 'default',
  title: 'My Cool Project',
  projectId: '4ubmrevl',
  dataset: 'production',
  // basePath: '/studio',
  plugins: [
    deskTool(),visionTool()
  ],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },
  schema: {
    types: schemas,
  },
})