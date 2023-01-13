import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'
import MegaMenu from 'primevue/megamenu'
import Button from 'primevue/button'
import router from './router'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css' 
import '/node_modules/primeflex/primeflex.css'


const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.component('Menubar', Menubar)
app.component('MegaMenu', MegaMenu)
app.component('Button', Button)

app.mount('#app')