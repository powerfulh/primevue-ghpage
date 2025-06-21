import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CommonModal from './components/CommonModal.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import 'primeicons/primeicons.css' // custom

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { // custom
	theme: {
		preset: Aura,
		options: {
			darkModeSelector: 'system'
		}
	}
})
app.component('CM', CommonModal) // custom

app.mount('#app')
