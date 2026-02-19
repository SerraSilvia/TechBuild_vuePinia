import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router' // Importamos el archivo que acabamos de crear

const app = createApp(App)

app.use(createPinia())
app.use(router) // <--- ESTO ES VITAL

app.mount('#app')