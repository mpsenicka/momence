import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'

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
    test: {
        globals: true,
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, '**/e2e/**'],
    },
})
