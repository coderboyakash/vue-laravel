import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Chat from './components/Chat.vue'
const routes = [
    { path: '/', component: App },
    { path: '/chat', component: Chat },
]
const router = createRouter({
    mode: 'history',
    history: createWebHashHistory(),
    routes,
})
const app = createApp({});
app.use(router)
app.mount('#app');
