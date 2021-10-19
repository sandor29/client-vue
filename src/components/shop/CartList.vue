<script setup>
import { useStore } from "vuex";

import { computed } from "vue";

import CartItem from "./CartItem.vue";

const store = useStore();

const cart = computed(() => store.state.shop.cart);

const cartProduct = computed(() => store.getters["shop/cartProduct"]);

const cartImporte = computed(() => store.getters["shop/cartImporte"]);

const clearCart = () => {
  store.commit("shop/clearCart");
};
</script>

<template>
  <div class="s-page">
    <div class="s-grid m-4">
      <!--
        Productos
      -->
      <div v-for="product in cart" :key="product.id">
        <CartItem :product="product" />
      </div>
      <!--
        Carrito Vacio
      -->
      <div class="shadow rounded-lg m-1 p-3" v-if="cartProduct === 0">
        <p class="text-center font-semibold text-xl m-2">
          Su carrito esta Vacio.
        </p>
        <p class="text-center font-semibold text-xl m-2">Empiece a Comprar.</p>
      </div>
      <!--
        Carrito Pagar
      -->
      <div class="shadow rounded-lg p-3 space-y-5" v-else>
        <!--
          Nombre
        -->
        <div class="flex justify-evenly">
          <span class="font-semibold">Productos : {{ cartProduct }}</span>
          <span class="font-semibold">Importe : $ {{ cartImporte }}</span>
        </div>
        <!--
          Cantidad
        -->
        <div class="flex justify-evenly">
          <button class="btn btn-outline rounded-full" @click="clearCart()">
            Vaciar
          </button>
          <button class="btn btn-primary rounded-full">Pagar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>