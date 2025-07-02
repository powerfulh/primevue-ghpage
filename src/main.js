import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CommonModal from './components/CommonModal.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { createPinia } from 'pinia'
import Tooltip from 'primevue/tooltip'
import ToastService from 'primevue/toastservice'

import 'primeicons/primeicons.css' // custom

const app = createApp(App)

app.use(createPinia()) // custom
app.use(router)
// custom
app.use(PrimeVue, {
	theme: {
		preset: Aura,
		options: {
			darkModeSelector: 'system',
		},
	},
})
app.use(ToastService) // custom
app.component('CM', CommonModal) // custom
app.directive('tooltip', Tooltip) // custom

app.mount('#app')
