# Pulsaciones

Vista de práctica para aprender a utilizar `sessionStorage` en Vue. Muestra un contador de clics que se conserva mientras la sesión del navegador permanezca activa

## Funcionamiento

- Al crear la vista, se recupera el valor guardado con la clave `pulsaciones`
- Si todavía no existe un valor guardado, el contador comienza en `0`
- Cada clic ejecuta `handleClick`, incrementa el contador y guarda el nuevo valor en `sessionStorage`
- El texto del botón se actualiza de forma reactiva con el valor actual de `pulsaciones`

`sessionStorage` conserva los datos mientras la pestaña del navegador permanezca abierta. Al cerrar la pestaña, el valor se elimina

## Uso

La vista se muestra mediante la ruta `/pulsaciones`:

```vue { "static": true }

		<v-card max-width="450" class="mx-auto pa-4" rounded="lg">
			<v-btn
				color="primary"
				prepend-icon="mdi-cursor-default-click"
				size="large"
				block
				@click="handleClick"
			>
				Llevas {{ pulsaciones }} pulsaciones
			</v-btn>
		</v-card>

```

