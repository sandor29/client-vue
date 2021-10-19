<script setup>
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  product: Object,
});

const addCart = () => {
  store.commit("shop/addItemCart", props.product);
};
</script>

<template>
  <div class="rounded-lg shadow text-center space-y-3 p-2">
    <!-- Imagen -->
    <img class="rounded-lg" :src="product.img" />
    <p class="font-medium text-xl">{{ product.nombre }}</p>
    <p class="font-medium text-lg">$ {{ product.precio }}.00</p>
    <button class="btn btn-primary rounded-full" @click="addCart()">
      Comprar
    </button>
  </div>
</template>

<style scoped>
</style>