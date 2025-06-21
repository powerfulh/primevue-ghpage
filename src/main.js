import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CommonModal from './components/CommonModal.vue'

const app = createApp(App)

app.use(router)
app.component('CM', CommonModal) // custom

app.mount('#app')
