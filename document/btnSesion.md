Botón encargado de mostrar la acción de autenticación disponible para el usuario.

Su comportamiento depende de `useAuth.autenticado`:

- Si el usuario no está autenticado, muestra **Iniciar sesión** con el icono `mdi-login` y redirige a `/login`.
- Si el usuario está autenticado, muestra **Cerrar sesión** con el icono `mdi-logout`, ejecuta `logout()` y redirige a `/first`.
- El texto y el icono se actualizan automáticamente porque `autenticado` es una propiedad computada de Pinia.

El estado de autenticación se mantiene en `store/auth.js`. Las peticiones HTTP usan `withCredentials: true`, por lo que las cookies se envían al backend automáticamente.


## Estado no autenticado

```vue
  <v-btn
    type="button"
    color="primary"
    prepend-icon="mdi-login"
  >
    Iniciar sesión
  </v-btn>
```

## Estado autenticado

```vue
  <v-btn
    type="button"
    color="primary"
    prepend-icon="mdi-logout"
  >
    Cerrar sesión
  </v-btn>
```