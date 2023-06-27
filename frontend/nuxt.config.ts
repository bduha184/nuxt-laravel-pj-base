// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    "@nuxtjs/tailwindcss",
    'nuxt-graphql-client',
  ],
  runtimeConfig: {
    public: {
      GQL_HOST: 'http://localhost:8000/graphql'
    }
  },
  css: [
    '@/assets/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },


})
