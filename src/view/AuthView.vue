<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth.js';
import gato from '/dist/assets/gato.png'

const useAuth = useAuthStore()
const cargando = ref(false)
const router = useRouter()

watchEffect(() => {
    if(!useAuth.autenticado){
        router.push('/login')
    }
})

</script>

<template>
    <v-card max-width="650" class="mx-auto pa-4" rounded="lg">
        <div class="text-center my-3" v-if="useAuth.autenticado">
             <v-avatar color="success" class="mb-4">
                <v-icon icon="mdi-check-outline" size="32" color="white"/>
            </v-avatar>
            <h2>
                Bienvenido, {{ useAuth.valor.usuario }}!
            </h2>
            <p>
                Has iniciado sesión correctamente :D
            </p>

            <v-img :src="gato" alt="Gato" width="200" height="200" class="mx-auto"/>


        <v-card-actions class="px-4 pb-4">
  
            
            <v-btn
            type="submit"
            color="secondary"
            prepend-icon="mdi-account-details"
            size="large"
            :loading="cargando"
            @click="router.push('/data')"
            >
                Ver datos
            </v-btn>
            
            <v-btn  
            color="black"
            prepend-icon="mdi-mouse-left-click"
            @click="router.push('/pulsaciones')" 
            >
                Clicks
            </v-btn>
        </v-card-actions>
        </div>
    </v-card>
</template>