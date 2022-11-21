import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/assets/styles/style.scss';

export const app = createApp(App);
export const pinia = createPinia();

app
.use(pinia)
.use(router)
.mount('#app');
