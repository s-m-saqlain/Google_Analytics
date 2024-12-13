// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-gtag'],
  gtag: {
    id: 'G-N2TG8ZMFPZ'
  },
})