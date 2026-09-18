Esta vista es la encargada de registrar a los usuarios, usando la importación `useAuthStore()`, aquí se ingresan los datos de entrada mediante el método `register`, este recibe el valor de 4 parámetros que son: usuario, password, correo y telefono
Estos valores se cargan gracias a que adentro de los campos se asigna el parámetro v-model, cuando a este se le asigna un nombre, se asigna el nuevo valor dentro de la constante, y posteriormente se puee hacer un Valor.value para extraer esa información, como aquí
Y ya se muestra y carga dentro de los campos, ahora, de igual forma tenemos varios códigos de error, estos se presentan por medio de un v-alert y le responden al usuario el porque no pudo registrarse

``` vue
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
      
        </v-form>
    </v-card>
```

## Usuario ya registrado
Si el usuario ya posee una cuenta, este puede regresar mediante el hipervínculo en la parte inferior 

```vue
<v-card class="mx-auto pa-4" max-width="400" elevation="6" rounded="lg">
        <div class="text-center px-4">
            <p class="font-body-2 text-medium-emphasis">
            Ya tienes una cuenta? <router-link to="/">Inicia sesión</router-link></p>
        </div>
</v-card>
```