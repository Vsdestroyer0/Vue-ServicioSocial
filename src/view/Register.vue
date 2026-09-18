<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/auth.js';
import router from '../router/index.js';

const useAuth = useAuthStore()

const usuario = ref('')
const password = ref('')
const correo = ref('')
const telefono = ref('')
const error = ref('')
const success = ref('')
const mostrarPassword = ref(false)

const handleRegister = async() => {
    error.value = ''
    success.value = ''

    try{
        const response = await useAuth.register({
            usuario: usuario.value,
            password: password.value,
            correo: correo.value,
            telefono: telefono.value
        })

        success.value = response.message

        setTimeout(() => {
            router.push('/login')
        }, 1500)
    }
    catch(e){
        error.value = e.response?.data?.message || 'No se pudo crear la cuenta.'
    }
}

</script>

<template>
    <v-card class="mx-auto pa-4" max-width="400" elevation="6" rounded="lg">
        <div class="text-center my-3">
            <v-avatar color="primary" size="56">
                <v-icon icon="mdi-account-edit-outline" />
            </v-avatar>
            <h2>Crear cuenta</h2>
            <p class="font-body-2 text-medium-emphasis">
                Ingresa tu información para poder registrarte
            </p>
        </div>

        <v-form @submit.prevent="handleRegister">
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

                <v-alert
                v-if="success"
                type="success"
                variant="tonal"
                density="compact"
                class="mb-4"
                closable
                >
                {{ success }}
                </v-alert>

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