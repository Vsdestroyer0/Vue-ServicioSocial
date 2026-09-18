Vista de autenticación del usuario, utiliza `useAuthStore().login` para leer la información y enviarla al backend para validarla, y tiene 2 casos

- El usuario ingresa los campos correspondientes y redirige al usuario al apartado `AuthView`
- El usuario ingresa mal los parámetros y salta un v-alert para avisarle del problema mediante `authController.js`, y sus códigos de estado (esto mediante res.status(#estado).json({message: "Mensaje personalizado"})), si no se encuentra ningún código de estado devuelve que no se completaron los parámetros

``` vue
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
          label="Correo"
          placeholder="xxxx@xxxx.com"
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
    </v-form>
</v-card>
```

## No posee una cuenta

Si el usuario no posee una cuenta, puede dirigirse a la parte de abajo en donde está un hipervínculo hacía `Register`

``` vue
<v-card class="mx-auto pa-14" max-width="400" elevation="6" rounded="lg">
  <div class="text-center px-4 pb-4">
          <p class="">
          No tiene cuenta? 
          <router-link to="/registro">Crear ahora</router-link> 
        </p>
    </div>
</v-card>
```