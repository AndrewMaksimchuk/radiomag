<template>
    <nav class="container">
        <ul class="header-nav">
            <HeaderNavItem v-for="(item, index) in nav" :key="index" :link="item.link" :text="item.text"/>
        </ul>
    </nav>
</template>

<script setup>
import HeaderNavItem from './HeaderNavItem.vue';

const nav = [
    { link: "/products", text: "Продукція" },
    { link: "/", text: "новини" },
    { link: "/#shops-info", text: "магазини" },
    { link: "/contacts", text: "контакти" },
    { link: "/", text: "відгуки та пропозиції" },
    { link: "/", text: "як купити?" },
    { link: "/", text: "доставка" },
];
</script>