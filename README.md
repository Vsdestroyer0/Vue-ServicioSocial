# vue-vuetify-basico

Mini proyecto demostrativo equivalente a `vue-login-basico` pero implementado con **Vue 3 + Vuetify 3 (Material Design)** y Vite.

## Componentes y aspectos básicos de Vuetify utilizados

- **Estructura base:** `<v-app>`, `<v-main>`, `<v-container>`, `<v-spacer>`.
- **Barra de aplicación:** `<v-app-bar>` con título, iconos e interacción con temas.
- **Tarjetas y layout:** `<v-card>`, `<v-card-text>`, `<v-card-actions>`, elevaciones y bordes redondeados.
- **Formularios y campos de texto:** `<v-form>`, `<v-text-field>` con variantes (`outlined`), iconos (`prepend-inner-icon`, `append-inner-icon`), botón de limpiar (`clearable`) y toggle para ver contraseña.
- **Botones y estados:** `<v-btn>` con variantes (`flat`, `tonal`), iconos y estado de carga reactivo (`:loading`).
- **Feedback visual:** `<v-alert>` para mensajes de error y `<v-chip>` para etiquetas.
- **Iconografía:** Sistema de iconos oficial `@mdi/font` (Material Design Icons).
- **Temas reactivos:** Soporte para alternar dinámicamente entre modo Claro y Oscuro mediante `useTheme()`.

---

## Cómo ejecutar el proyecto

1. Entra a la carpeta del proyecto:
   ```bash
   cd ~/Proyectos/vue-vuetify-basico
   ```

2. Instala las dependencias con pnpm (o npm):
   ```bash
   pnpm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

4. Abre la URL mostrada en la terminal (por defecto `http://localhost:5174`).

### Credenciales de prueba
- **Usuario:** `admin`
- **Contraseña:** `1234`
