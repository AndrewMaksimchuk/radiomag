<template>
    <section class="header-search container">

        <RouterLink to="/">
            <img src="@/assets/images/logo_ukrainian.gif" alt="logo rcscomponents" class="logo" />
        </RouterLink>

        <HeaderSearchField/>

        <RouterLink to="/">
            <img src="@/assets/images/radiomag_ukrainian.gif" alt="logo radiomag" class="logo" />
        </RouterLink>

    </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import HeaderSearchField from './HeaderSearchField.vue';
</script>
