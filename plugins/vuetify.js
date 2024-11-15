import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles' // Vuetify стильдерін қосу
import '@mdi/font/css/materialdesignicons.css' // MDI стильдерін қосу

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      iconfont: 'mdi', // 'mdi' немесе басқа кітапхана. Мысалы: 'fa' (FontAwesome), 'mdiSvg' (SVG иконкалар);
    },
  })

  nuxtApp.vueApp.use(vuetify)
  // nuxtApp.provide('api', api)
})
