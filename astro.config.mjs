import {defineConfig} from 'astro/config'
import critters from 'astro-critters'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), critters(), image()],
  experimental: {
    integrations: true,
  },
  output: 'server',
  adapter: vercel(),
})
