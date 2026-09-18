import { createPinia } from 'pinia'
import router from '../src/router/index.js'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives
})

export default (app) => {
  app.use(vuetify)
  app.use(router)
  app.use(createPinia())
}
