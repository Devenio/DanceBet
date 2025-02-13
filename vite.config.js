import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        port: 1010,
    },
    plugins: [
        tailwindcss(),
    ],
})