/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App)

app.use(store)

if (process.env.NODE_ENV === 'development') {
  app.config.devtools = true;
}

app.mount('#app')