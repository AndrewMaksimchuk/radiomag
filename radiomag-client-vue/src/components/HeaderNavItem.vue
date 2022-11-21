<template>
    <li class="header-nav__item">
        <RouterLink :to="link" class="link">{{ text }}</RouterLink>
    </li>
</template>

<script setup>
defineProps({
    link: {
        type: String,
        default: '/',
    },
    text: {
        type: String,
        default: '',
    },
});
</script>
