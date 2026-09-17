<template>
    <v-card class="mx-auto pa-14" max-width="1200" elevation="6" rounded="lg">
        <div class="text-center" my-3>
            <v-card-title class="text-h5">
                <slot name="Titulo"></slot>
            </v-card-title>
            <slot name="avatar"></slot>
            <v-card-text class="text-justify">
                <slot name="Texto"></slot>
            </v-card-text>
        </div>
    </v-card>
</template>
