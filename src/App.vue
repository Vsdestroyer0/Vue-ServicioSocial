<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import Login from './components/Login.vue'
import Navbar from './components/Navbar.vue'
import AuthView from './vistas/AuthView.vue'
import Register from './components/Register.vue'

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
        
        <!-- Pantalla de Login -->
        <Login v-if="!usuarioLogueado" @login="onLogin" />

        <!-- Pantalla Usuario logeado -->
        <AuthView v-else :usuarioLogueado @logout="onLogout"/>

        <!-- Pantalla de Regitro usuario -->
        <Register/>

      </v-container>
    </v-main>
  </v-app>
</template>
