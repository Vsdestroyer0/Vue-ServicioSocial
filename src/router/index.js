import { createRouter, createWebHistory } from 'vue-router'
import Login from '../view/Login.vue'
import Register from '../view/Register.vue'
import AuthView from '../view/AuthView.vue'
import UserData from '../view/UserData.vue'
import Pulsaciones from '../view/Pulsaciones.vue'
import FirstPage from '../view/LandingPage.vue'
import { useAuthStore } from '../store/auth.js'

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/registro', component: Register },
    { path: '/home', component: AuthView, meta: {roles:[1,2]}},
    { path: '/data', component: UserData},
    { path: '/pulsaciones', component: Pulsaciones, meta: {roles: [2]} },
    { path: '/first', component: FirstPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  const rolesPermitidos = to.meta.roles

  if (!rolesPermitidos) {
    return true
  }

  if (!auth.usuario || !rolesPermitidos.includes(auth.usuario.id_rol)) {
    return '/home'
  }

  return true
})

export default router   
