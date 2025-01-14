// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },

  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-swiper"],

  vite: {
    assetsInclude: ["**/*.JPG"],
  },
});
