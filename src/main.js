import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index';
import VueLazyload from 'vue-lazyload'
import ScrollReveal from "scrollreveal";
import { i18n } from './i18/index'
import 'animate.css';
import './style.css'

i18n.global.locale = localStorage.getItem('lang') || 'EN'
const app = createApp(App)
app.use(VueLazyload)
app.use(store)
app.use(router)
app.use(i18n)

app.directive('scroll-reveal', { mounted(el, binding) { ScrollReveal().reveal(el, binding.value || {}) } })
app.mount('#app')