import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/REPO_NAME/',
  plugins: [react(), eslint()],
})
