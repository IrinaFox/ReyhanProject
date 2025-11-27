import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import MyCustomButton from './components/buttons/MyCustomButton.vue'
import Ira from "@/components/icons/Ira.vue";


const app = createApp(App)
const pinia = createPinia()
app.component('MyCustomButton', MyCustomButton)
app.component('Ira', Ira)

app.use(pinia)
app.mount('#app')

