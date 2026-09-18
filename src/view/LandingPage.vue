<script setup>
import PageLayout from '../layouts/pageLayout.vue';
import image from '../../dist/assets/images.jpg'
</script>

<template>
    <page-layout>
        <template #Titulo>Bienvenido a la página principal</template>
        <template #Texto>
            <h3>:D</h3>
            Esta es la primera pagina de la app     <br>
            Lorem ipsum dolor sit amet consectetur adipiscing elit nisl etiam tellus aliquam, felis tincidunt ullamcorper eleifend erat libero bibendum torquent himenaeos mi pretium, velit curae commodo dictum risus vivamus molestie aliquet facilisi tempus. Aptent blandit natoque faucibus euismod enim pulvinar molestie mauris tempor eros, nisi nec porttitor bibendum libero nibh fringilla platea posuere lacus at, scelerisque lectus vitae tempus consequat tristique justo ligula risus. Nunc feugiat pretium mi bibendum luctus dictum aliquam mollis, integer litora curabitur eleifend senectus aenean quis rhoncus duis, malesuada commodo id ridiculus nam dapibus interdum.
            Dis velit maecenas nisl habitasse fusce suspendisse netus feugiat vivamus tellus, magnis erat varius id pellentesque nam condimentum felis rutrum, aenean pharetra tristique sagittis aliquam non accumsan lacus duis. Sapien odio donec potenti egestas mus erat, sollicitudin suspendisse felis lobortis phasellus dignissim sociosqu, curabitur tristique tempor at quisque. Suscipit tempor neque bibendum sociosqu curabitur scelerisque integer eros nibh tellus lobortis sollicitudin, mus montes semper magnis sagittis pellentesque lectus egestas nec sociis dictum cursus, odio eget ultrices nisl magna penatibus in purus enim dui molestie. 

            <v-img :src="image" alt="gato naranja" width="200" class="mx-auto pa-15"></v-img>

        </template>
    </page-layout>
</template>
