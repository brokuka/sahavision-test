// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', 'template-copyright', '@nuxt/icon'],

  components: [
    {
      path: '~/components/ui',
      pathPrefix: false,
      prefix: '',
    },
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2024-11-23',

  shadcn: {
    prefix: '',
    componentDir: '~/components/',
  },
})