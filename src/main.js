import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index';
import VueLazyload from 'vue-lazyload'
import ScrollReveal from "scrollreveal";
import './style.css'
import 'animate.css'

const app = createApp(App)
app.use(VueLazyload)
app.use(store)
app.use(router)

app.directive('scroll-reveal', { mounted(el, binding) { ScrollReveal().reveal(el, binding.value || {}) } })
app.mount('#app')