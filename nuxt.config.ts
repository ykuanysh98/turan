import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // Server-Side Rendering режимін қосу
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: 'https://jsonplaceholder.typicode.com',
    },
  },
  modules: [
    // '@nuxtjs/tailwindcss',
  ],
  app: {
    head: {
      title: 'Менің Nuxt 3 жобам',
      meta: [{ name: 'description', content: 'Nuxt 3 жобасы үшін мысал конфигурация' }],
    },
  },
})
