import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

createApp(App).mount('#app')