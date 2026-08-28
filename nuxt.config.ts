// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ["motion-v/nuxt", "@nuxtjs/i18n"],

  i18n: {
    defaultLocale: "en",
    strategy: "prefix_except_default",
    baseUrl: "https://nathan.lumaa.fr",
    locales: [
      { code: "en", language: "en-US", name: "English", file: "en.json" },
      { code: "fr", language: "fr-FR", name: "Français", file: "fr.json" }
    ],
    customRoutes: "config",
    pages: {
      vinyl: { en: "/vinyl", fr: "/vinyles" },
      insights: { en: "/insights", fr: "/reflexions" }
    },
    detectBrowserLanguage: false,
    // messages intentionally hold inline anchors, rendered through v-html
    compilation: { strictMessage: false }
  },

  vite: {
    build: {
      modulePreload: false
    },
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
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
