// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/base.scss'],
  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData:"@import '~/assets/css/variable.scss';"
        }
      }
    }
  },
  modules:['@element-plus/nuxt'],
  runtimeConfig: {
    count: 1, // 只能在服务端访问
    public: { // 既能在客户端访问 也能在服务端访问
      baseURL: 'localhost:8080'
    }
  }
})
