<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
    <v-app-bar>
        <v-app-bar-title>
            <v-icon icon="mdi-vuetify"/>
            Página de pruebas
        </v-app-bar-title>
        <v-spacer/>
        <v-btn class="text-capitalize text-subtitle-1" 
        color="black"
        @click="router.push('/pulsaciones')" 
        >
            Pulsaciones
        </v-btn>
    </v-app-bar>
</template>