<script setup>

import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const usuario= ref('')
const password= ref('')
const correo= ref('')
const telefono= ref('')
const mostrarPassword= ref(false)

const handleRegister = () => {
    const nuevoUsuario = {
        
        usuario: usuario.value,
        password: password.value,
        correo: correo.value,
        telefono: telefono.value

    }

localStorage.setItem('usuario', JSON.stringify(nuevoUsuario))
router.push('/')
}

</script>

<template>
    <v-card class="mx-auto pa-4" max-width="400" elevation="6" rounded="lg">
        <div class="text-center my-3">
            <v-avatar color="primary" size="56">
                <v-icon icon="mdi-information" size="32"/>
            </v-avatar>
            <h2>Crear cuenta</h2>
            <p class="font-body-2 text-medium-emphasis">
                Ingresa tu información para poder registrarte
            </p>
        </div>

        <v-form @submit.prevent="handleRegister">
            <v-card-text>
                <!-- Campo de usuario -->
                <v-text-field
                v-model="usuario"
                label="Usuario"
                placeholder="Usuario"
                density="comfortable"
                variant="outlined"
                prepend-inner-icon="mdi-account"
                class="mb-2"
                />

                <v-text-field
                v-model="password"
                label="Contraseña"
                placeholder="Contraseña"
                density="comfortable"
                variant="outlined"
                prepend-inner-icon="mdi-lock"
                class="mb-2"
                :append-inner-icon="mostrarPassword ? 'mdi-eye-off' : 'mdi-eye-outline'"
                :type="mostrarPassword ? 'text' : 'password'"
                @click:append-inner="mostrarPassword = !mostrarPassword"
                />

                <v-text-field
                v-model="correo"
                label="Correo"
                placeholder="Usuario@hightek.com.mx"
                density="comfortable"
                variant="outlined"
                prepend-inner-icon="mdi-card-account-mail"
                class="mb-2"
                />

                <v-text-field
                v-model="telefono"
                label="Telefono"
                placeholder="XXXXXXXXXX"
                density="comfortable"
                variant="outlined"
                prepend-inner-icon="mdi-phone-dial"
                class="mb-2"
                />

            </v-card-text>
            
            <v-card-actions class="px-4 ">
                <v-btn 
                type="submit"
                color="primary"
                block
                >
                    Crear
                </v-btn>
            </v-card-actions>
            <div class="text-center px-4">
                <p class="font-body-2 text-medium-emphasis">
                Ya tienes una cuenta? <router-link to="/">Inicia sesión</router-link></p>
            </div>            
        </v-form>
    </v-card>
</template>