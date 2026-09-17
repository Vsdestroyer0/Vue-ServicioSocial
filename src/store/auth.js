import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '../services/axios'

const useAuthStore = defineStore('auth', () => {
    const usuario = ref('')
    const autenticado = computed(() => !!usuario.value)
    const valor = computed(() => usuario.value)

    async function login(datosUsuario){
        try{
            const response = await api.post('/login', datosUsuario)

            usuario.value = response.data.usuario
            return response.data.usuario
        }
        catch(e){
            throw(e)
        }
    }

    async function register(datos){
        try{
            const response = await api.post('/registro', datos)
            return response.data
        }
        catch(e){
            throw(e)
        }
    }

    async function logout(){
        await api.post('/logout')
        usuario.value = null
    }

return { usuario, autenticado, valor, login, register, logout }
})
export { useAuthStore }