import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        port: 3006,
    },
    plugins: [
        tailwindcss(),
    ],
})