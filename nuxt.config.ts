// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-12',
  devtools: { enabled: true },
  srcDir: 'src/',
  experimental: { typedPages: true },
  app: { head: { htmlAttrs: { lang: 'en' } } },

  postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
  icon: {
    provider: 'server',
    mode: 'svg',
    customCollections: [{ prefix: 'local', dir: './src/public/assets/svg' }],
  },

  site: { url: 'https://furniture-worlds.vercel.app', name: 'auroraes' },
  seo: {
    meta: {
      description: 'aurorae',
      themeColor: [
        { content: '#18181b', media: '(prefers-color-scheme: dark)' },
        { content: 'white', media: '(prefers-color-scheme: light)' },
      ],
      twitterCreator: '@yeasin2002_dev',
      twitterSite: '@yeasin2002_dev',
      author: 'Md Kawsar Islam Yeasin',
      colorScheme: 'dark light',
      applicationName: 'aurorae',

      ogSiteName: 'aurorae',
      ogLocale: 'en_US',
      ogType: 'website',
      ogUrl: 'https://furniture-worlds.vercel.app/',
      ogTitle: 'aurorae',

      ogImage: '/cover.png',
      robots: 'index, follow',
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-og-image',
    '@nuxtjs/seo',
    '@nuxtjs/robots',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
  ],
})
