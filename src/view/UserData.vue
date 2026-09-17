<script setup>
/* Librerias externas del proyecto */
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/axios';

const cargando = ref(true)
const router = useRouter()
const error = ref('')
const userInfo = ref(null)

onMounted(async () => {
    try {
        const response = await api.get('/usuario')
        userInfo.value = response.data.usuario
    } catch (e) {
        error.value = 'No se pudieron cargar los datos'
    } finally{
        cargando.value = false
    }
})

</script>

<template>

    <v-card max-width="650" class="mx-auto pa-4" rounded="lg">
        <v-card-text v-if="cargando">
            Cargando
        </v-card-text>
        
        <v-card-text v-else-if="userInfo">
            <div class="text-center">
                <h2 class="px-4 pa-4">Datos del usuario</h2>
                <p class="text-text-body-2 text-medium-emphasis">
                    Usuario: {{userInfo.usuario}} <br>
                    Correo: {{ userInfo.correo}} <br>
                    Telefono: {{ userInfo.telefono }}
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