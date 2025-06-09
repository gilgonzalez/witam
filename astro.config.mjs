// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel'; // Cambiado de node a vercel/serverless

// https://astro.build/config
export default defineConfig({
  output: 'server', // Habilitar Server-Side Rendering
  adapter: vercel(), // Cambiado de node a vercel
  vite: {
    plugins: [tailwindcss()]
  }
});