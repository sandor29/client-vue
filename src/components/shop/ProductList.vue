<script setup>
import { useStore } from "vuex";

import { computed, onMounted } from "vue";

import ProdutItem from "./ProductItem.vue";

const store = useStore();

const products = computed(() => store.state.shop.products);

onMounted(async () => store.dispatch("shop/showProducts"));
</script>

<template>
  <div class="s-page">
    <div class="s-grid m-4">
      <div v-for="product in products" :key="product.id">
        <ProdutItem :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>