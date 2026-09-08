<script setup>
/* Librerias externas del proyecto */
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies()
const cargando = ref(false)
const router = useRouter()

const handleLogout = () => {
    cookies.remove('auth')
    router.push('/login')
    cargando.value=true
}

const handleData = () => {
    router.push('/data')
}

</script>

<template>
    <v-card max-width="450" class="mx-auto pa-4" rounded="lg">
        <div class="text-center my-3">
             <v-avatar color="success" class="mb-4">
                <v-icon icon="mdi-check-outline" size="32" color="white"/>
            </v-avatar>
            <h2>
                Bienvenido, {{ cookies.get('auth').usuario }}
            </h2>
            <p>
                Has iniciado sesión correctamente :D
            </p>
        </div>

        <v-card-actions class="px-4 pb-4">
            <v-btn 
            type="submit"
            color="primary"
            prepend-icon="mdi-logout"
            size="large"
            :loading="cargando"            
            @click="handleLogout">
                Cerrar sesión
            </v-btn>    
            
            <v-btn
            type="submit"
            color="secondary"
            prepend-icon="mdi-account-details"
            size="large"
            :loading="cargando"
            @click="handleData"
            >
                Ver datos
            </v-btn>
            
        </v-card-actions>
        
    </v-card>
</template>