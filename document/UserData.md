En este apartado se visualiza toda la información del usuario, como su nombre de usuario, correo y teléfono, estos datos se extraen de una petición del backend que es `api.get('usuarios')`, con esto se manda la petición y se extrae el Json, y con una nueva constante llamamos al valor de la data del usuario y la cargamos para despues mostrarla, se hace tambien con el método onMounted ya que se ejecuta cuando el componente ya está preparado, además de que queremos que se carguen y queden en pantalla.

Después de eso se hace una condición para verificar que la variable cargando pasa a falsa, ya que esto ocurre cuando onMounted termina su ciclo de carga y puede pasar a mostrar o no los datos, si no se hace esto, onMounted al ser una petición asíncrona, tarda unos milisegundos en traer la información, pero al momento que ya la trajo, la página supuso que no hay información

Ahora, despues de esa validación, hay otra validación de acuerdo a si se extrajo o no información
- Si hubo éxito, se mostrarán los datos del usuario en la pantalla
- Si no hubo éxito, se mostrará una pestaña con un texto de que no se encontraron los datos

```vue
    <v-card max-width="650" class="mx-auto pa-4" rounded="lg">
        <v-card-text v-if="cargando">
            Cargando
        </v-card-text>
        
        <v-card-text v-else-if="userInfo">
            <div class="text-center">
                <h2 class="px-4 pa-4">Datos del usuario</h2>
                <p class="text-text-body-2 text-medium-emphasis">
                    Usuario: {{userInfo.usuario}} <br>
                    Correo: {{ userInfo.correo}} <br>
                    Telefono: {{ userInfo.telefono }}
                </p>
            </div>
        </v-card-text>

        <v-card-text v-else>
         <div class="text-center">
            <h2 class="px-4 pa-4">No hay datos disponibles</h2>
            <p class="text-text-body-2 text-medium-emphasis">
                No se encontraron datos del usuario :c
            </p>
         </div>    
        </v-card-text>

        <v-card-actions class="px-4 pb-4">

            <v-btn 
            type="submit"
            color="secondary"
            prepend-icon="mdi-page-first"
            size="large"
            :loading="cargando"
            >
                Regresar al inicio
            </v-btn>
        </v-card-actions>
    </v-card>
```

