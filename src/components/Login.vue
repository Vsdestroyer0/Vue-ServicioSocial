<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'

const router = useRouter()
const usuario = ref('')
const password = ref('')
const error = ref('')
const mostrarPassword = ref(false)
const cargabtn = ref(false)
const useAuth = useAuthStore()

const handleLogin = () => {
  error.value = ''
  cargabtn.value = true

  setTimeout(() => {
    cargabtn.value = false
    const datos = localStorage.getItem("usuario")

    if(!datos) {
      error.value = "No hay usuarios en localStorage"
      return
    }

    const usuariosGuardados = JSON.parse(datos)

    if(usuario.value !== usuariosGuardados.usuario || password.value !== usuariosGuardados.password){
      error.value = "El usuario o contraseña es incorrecto"
    } else{
      useAuth.login(usuariosGuardados)
      router.push('/home')

    }

  })
}

</script>

<template>
  <v-card class="mx-auto pa-14" max-width="400" elevation="6" rounded="lg">
    <div class="text-center my-3">
      <v-avatar color="primary" size="56">
        <v-icon icon="mdi-account" size="32" color="white" />
      </v-avatar>
      <h2>Iniciar Sesión</h2>
      <p class="text-body-2 text-medium-emphasis">
        Ingresa tus credenciales para continuar
      </p>
    </div>

    <v-form @submit.prevent="handleLogin">
      <v-card-text>
        <v-alert
          v-if="error"
          type="error"
          variant="tonal"
          density="compact"
          class="mb-4"
          closable
        >
          {{ error }}
        </v-alert>

        <v-text-field
          v-model="usuario"
          label="Usuario"
          placeholder="Usuario"
          prepend-inner-icon="mdi-account"
          variant="outlined"
          density="comfortable"
          color="primary"
          class="mb-2"
          required
        />

        <v-text-field
          v-model="password"
          label="Contraseña"
          placeholder="contraseña"
          prepend-inner-icon="mdi-lock"
          :append-inner-icon="mostrarPassword ? 'mdi-eye-off' : 'mdi-eye-outline'"
          :type="mostrarPassword ? 'text' : 'password'"
          variant="outlined"
          density="comfortable"
          color="primary"
          @click:append-inner="mostrarPassword = !mostrarPassword"
          required
        />


      </v-card-text>

      <v-card-actions class="px-4 pb-4">
        <v-btn
          type="submit"
          color="primary"
          variant="flat"
          block
          size="large"
          :loading="cargabtn"
          prepend-icon="mdi-login"
        >
          Entrar
        </v-btn>
      </v-card-actions>   
      
      <div class="text-center px-4 pb-4">
          <p class="">
          No tiene cuenta? 
          <router-link to="/registro">Crear ahora</router-link> 
        </p>
        </div>
    </v-form>

  </v-card>
</template>
