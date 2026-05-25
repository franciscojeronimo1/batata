import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function seoPlugin(siteUrl: string): Plugin {
  const base = siteUrl.replace(/\/$/, '')

  return {
    name: 'kika-seo',
    transformIndexHtml(html) {
      return html.replaceAll('__SITE_URL__', base)
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.VITE_SITE_URL ?? ''

  return {
    plugins: [react(), tailwindcss(), seoPlugin(siteUrl)],
  }
})
