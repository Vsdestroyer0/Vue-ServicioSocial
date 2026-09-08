<script setup>
/* Librerias externas del proyecto */
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies()
const cargando = ref(false)
const router = useRouter()

const userData = ref(cookies.get('auth'))

const handleLogout = () => {
    cookies.remove('auth')
    router.push('/login')
    cargando.value=true
}


</script>

<template>

    <v-card max-width="650" class="mx-auto pa-4" rounded="lg">
        <v-card-text v-if="userData">
            <div class="text-center">
                <h2 class="px-4 pa-4">Datos del usuario</h2>
                <p class="text-text-body-2 text-medium-emphasis">
                    Usuario: {{userData.usuario}} <br>
                    Correo: {{userData.correo}} <br>
                    Teléfono: {{userData.telefono}}
                </p>
            </div>
        </v-card-text>

        <v-card-text v-else>
         <div class="text-center">
            <h2 class="px-4 pa-4">No hay datos disponibles</h2>
            <p class="text-text-body-2 text-medium-emphasis">
                No se encontraron datos del usuario :c
            </p>
         </div>    
        </v-card-text>

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
            prepend-icon="mdi-page-first"
            size="large"
            :loading="cargando"
            @click="router.push('/home')"
            >
                Regresar al inicio
            </v-btn>
        </v-card-actions>
    </v-card>
</template>