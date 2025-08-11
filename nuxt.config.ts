// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ["motion-v/nuxt", "nuxt-countdown"],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/hero_dark.png"
        }
      ]
    }
  }
})
