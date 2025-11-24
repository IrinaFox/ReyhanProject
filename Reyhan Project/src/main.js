import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import MyCustomButton from './components/buttons/MyCustomButton.vue'


const app = createApp(App)
const pinia = createPinia()
app.component('MyCustomButton', MyCustomButton)

app.use(pinia)
app.mount('#app')

