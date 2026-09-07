<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'

const usuarioLogueado = ref(null)

const onLogin = (nombreUsuario) => {
  usuarioLogueado.value = nombreUsuario
}

const onLogout = () => {
  usuarioLogueado.value = null
}

</script>

<template>
  <v-app>
    <!-- Barra de navegación principal -->
    <Navbar/>

    <!-- Contenido principal centrado -->
    <v-main class="bg-grey-lighten-4">
      <v-container class="fill-height d-flex align-center justify-center">
        
        <!-- Manejo de ruta -->
        <RouterView/>
        

      </v-container>
    </v-main>
  </v-app>
</template>
