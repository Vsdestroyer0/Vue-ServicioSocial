import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import AuthView from '../vistas/AuthView.vue'

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/registro', component: Register },
    { path: '/home', component: AuthView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
