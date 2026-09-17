<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'

const router = useRouter()
const useAuth = useAuthStore()


const handleView = async () => {
    try{
        if(useAuth.autenticado){
            useAuth.logout()
            router.push('/first')

        } else{
            router.push('/login')
        }
    }
    catch (e){
        throw (e)
    }
}
 
</script>

<template>

    <v-btn
    type="submit"
    color ="primary"
    @click="handleView"
    :prepend-icon="useAuth.autenticado ? 'mdi-logout' : 'mdi-login'"
    >
    {{useAuth.autenticado ? 'Cerrar sesión' : 'Iniciar sesión'}}
    </v-btn>


</template>