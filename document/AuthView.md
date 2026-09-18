Está vista es la primera que se le presenta al usuario cuando autentica su cuenta, haciendo lo siguiente

- Usa la importación core `watchEffect` para poder decidir la acción a realizar luego de leer `useAuthStore().autenticado`, que regresa un boleano de true o false

- Si la condición es verdadera, mostrará la pantalla de bienvenida al usuario y los botones de acción para redirigirse hacía `UserData` o `Pulsaciones`

``` vue
<v-card max-width="650" class="mx-auto pa-4" rounded="lg">
    <div class="text-center my-3">
        <v-avatar color="success" class="mb-4">
            <v-icon icon="mdi-check-outline" size="32" color="white"/>
        </v-avatar>
        <h2>
            Bienvenido, (aquí se leerá la cookie y aparecerá el nombre del usuario)
        </h2>
        <p>
            Has iniciado sesión correctamente :D
        </p>

    <v-card-actions class="px-4 pb-4 mx-auto"> 
        <v-btn
        prepend-icon="mdi-account-details"
        size="large"
        >
            Ver datos
        </v-btn>
        
        <v-btn  
        prepend-icon="mdi-mouse-left-click"
        >
            Clicks
        </v-btn>
    </v-card-actions>
    </div>
</v-card>
```

- En caso de no aparecer, se redirigirá directamente hacía `login` debido a que las credenciales serán falsas o nulas

## Componentes relacionados

`useAuthStorage()`
