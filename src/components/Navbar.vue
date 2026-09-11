<script setup>
import { useRouter } from 'vue-router'
import btnSesion from './btnSesion.vue'
import { useAuthStore } from '../store/auth.js'

const router = useRouter()
const useAuth = useAuthStore()

const handleClick = () => {
    if(useAuth.autenticado){
        router.push('/home')
    } else{
        router.push('/first')
    }
}
</script>

<template>
    <v-app-bar>
        <v-app-bar-title>
            <v-btn
            type="submit"
            @click="handleClick"
            >
                <v-icon icon="mdi-vuetify"/>
                Página de pruebas
            </v-btn>
        </v-app-bar-title>
        <v-spacer/>
        <btnSesion/>
    </v-app-bar>
</template>