import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useCookies } from 'vue3-cookies'

const useAuthStore = defineStore('auth', () => {
    const { cookies } = useCookies();
    const usuario = ref(!!cookies.get('auth'));
    const valores = ref(cookies.get('auth'));

    const autenticado = computed(() => !!usuario.value)

    function login(datosUsuario){
        usuario.value = datosUsuario
        cookies.set('auth', JSON.stringify(datosUsuario))
    }

    function logout(){
        usuario.value = null
        cookies.remove('auth')
    }
return { usuario, autenticado, valores, login, logout }
})
export { useAuthStore }