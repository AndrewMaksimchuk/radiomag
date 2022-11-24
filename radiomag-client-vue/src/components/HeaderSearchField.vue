<template>
    <form action="/" class="search__form">
        <input type="text" :placeholder="searchPlaceholder" class="search__form-input" v-model="productName" />
        <button type="submit" class="search__form-submit" @click.prevent="searchProduct">
            <img src="@/assets/images/magnifying-glass.svg" alt="search button" class="search__form-button" />
        </button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const productName = ref('');
const searchPlaceholder = ref('Введіть текст');

const searchProduct = () => productName.value 
    ? router.push({name: 'search', params: { name: productName.value }})
    : searchPlaceholder.value = 'Поле пусте, потрібно ввести текст';
</script>
