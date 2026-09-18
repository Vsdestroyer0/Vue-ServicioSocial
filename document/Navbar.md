Es uno de los componentes principales de la aplicación, siendo esta una pequeña barra de navegación

Utiliza la librería `vue-router` para poder redirigir al usuario según su estado de autenticación:

- Si el usuario está autenticado, el botón principal redirige a `/home`.
- Si no está autenticado, redirige a `/first`.
- Incluye el componente `btnSesion`, que permite iniciar o cerrar sesión.

El estado de autenticación se obtiene desde el store de Pinia `auth`.

## Componentes relacionados

- `btnSesion`: controla el inicio y cierre de sesión.
- `auth`: store que contiene el estado de autenticación.