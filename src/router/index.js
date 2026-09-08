import { createRouter, createWebHistory } from 'vue-router'
import { useCookies } from 'vue3-cookies'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import AuthView from '../vistas/AuthView.vue'
import UserData from '../vistas/UserData.vue'
import Pulsaciones from '../vistas/Pulsaciones.vue'

const { cookies } = useCookies();

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/registro', component: Register },
    { path: '/home', component: AuthView},
    { path: '/data', component: UserData},
    { path: '/pulsaciones', component: Pulsaciones},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const tieneCookie = cookies.get('auth');
    if(to.meta.requieresAuth && !tieneCookie){
        next({ name: 'login' })
    } else{
        next();
    }
    

})

export default router
