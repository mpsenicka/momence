import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// @ts-expect-error - its a nonsense
import path from 'path'

// @ts-expect-error - its a nonsense
const root = path.resolve(__dirname, './src')

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': root,
        },
    },
    plugins: [react()],
})
