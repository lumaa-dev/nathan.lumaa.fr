// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ["motion-v/nuxt"],

  vite: {
    build: {
      modulePreload: false
    }
  },

  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/assets/hero_dark.png"
        }
      ]
    }
  }
})
