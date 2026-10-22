import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
export default defineConfig({
  plugins: [vue({ template: { transformAssetUrls } }), quasar()],
  resolve: {
    alias: Object.fromEntries(['components', 'layouts', 'pages'].map(name =>
      [name, fileURLToPath(new URL('./src/' + name, import.meta.url))])),
    extensions: ['.mjs', '.js', '.json', '.vue']
  },
  build: { outDir: 'dist/spa' }
})
