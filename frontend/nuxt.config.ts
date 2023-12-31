// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import vuetify from "vite-plugin-vuetify";



export default defineNuxtConfig({
  ssr:false,
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  css: [
    "@/assets/styles/main.scss",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins!.push(vuetify({}));
    },
  },
  modules:[ '@pinia/nuxt'],
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";',
        },
      },
    },
  },
});
