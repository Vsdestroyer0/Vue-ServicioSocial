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
    <Navbar/>
    <v-main class="bg-grey-lighten-4">
      <v-container class="fill-height d-flex align-center justify-center">
        
        <RouterView/>
        
      </v-container>
    </v-main>
  </v-app>
</template>
