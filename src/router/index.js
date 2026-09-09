import { createRouter, createWebHistory } from 'vue-router'
import { useCookies } from 'vue3-cookies'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import AuthView from '../view/AuthView.vue'
import UserData from '../view/UserData.vue'
import Pulsaciones from '../view/Pulsaciones.vue'

const { cookies } = useCookies();

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/registro', component: Register },
    { path: '/home', component: AuthView},
    { path: '/data', component: UserData, meta: { requiresAuth: true }},
    { path: '/pulsaciones', component: Pulsaciones},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const tieneCookie = cookies.get('auth');
    if(to.meta.requiresAuth && !tieneCookie){
        next({ name: 'login' })
    } else{
        next();
    }
    

})

export default router   
