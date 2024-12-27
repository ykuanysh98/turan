import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Server-Side Rendering режимін қосу
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components: true,
  app: {
    head: {
      title: 'Менің Nuxt 3 жобам',
      meta: [{ name: 'description', content: 'Nuxt 3 жобасы үшін мысал конфигурация' }],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'vue3-carousel-nuxt'],
  css: [
    '@/assets/styles/main.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL,
    },
  },
  googleFonts: {
    families: {
      // Roboto: true,
      // 'Open+Sans': [300, 400, 600],
      // 'Rubik+Wet+Paint': [300, 400, 600, 900],
      'Inter': [300, 400, 600, 900],
    },
    display: 'swap',
  },
  vite: {
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: 'http://turan-back.neppe.kz:8080', // Сервер URL-і
    //       changeOrigin: true, // Бастапқы доменді ауыстыру
    //       rewrite: (path) => path.replace(/^\/api/, ''), // '/api' бөлімін алып тастау
    //     },
    //   },
    // },
  },
  typescript: {
    strict: true
  },
})