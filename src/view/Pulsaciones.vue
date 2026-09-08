<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const pulsaciones = ref(sessionStorage.getItem('pulsaciones') || 0)

const handleClick = () => {
    pulsaciones.value++
    sessionStorage.setItem('pulsaciones', pulsaciones.value)
}

</script>


<template>
    <v-card max-width="450" class="mx-auto pa-4" rounded="lg">
        <div class="text-center my-3">
             <v-avatar color="success" class="mb-4">
                <v-icon icon="mdi-mouse-left-click" size="32" color="white"/>
            </v-avatar>
            <h2>
                Pulsaciones
            </h2>
            <p>
                Aquí puedes ver tus pulsaciones
            </p>

        </div>

        <v-card-actions class="px-4 pb-4">
        
            <v-btn 
            type="submit"
            color="primary"
            prepend-icon="mdi-home"
            size="large"
            :loading="cargando"         
            block   
            @click="handleClick">
                llevas {{ pulsaciones }} pulsaciones
            </v-btn>    
            
        </v-card-actions>

        <v-card-actions class="px-4 pb-4">
        
            <v-btn 
            type="submit"
            color="primary"
            prepend-icon="mdi-home"
            size="large"
            :loading="cargando"         
            block   
            @click="router.push('/login')">
                Regresar al inicio
            </v-btn>    
            
        </v-card-actions>
        
    </v-card>
</template>