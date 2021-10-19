<script setup>
import { PlusIcon, MinusIcon } from "@heroicons/vue/outline";

import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  product: Object,
});

const addCart = () => {
  store.commit("shop/addItemCart", props.product);
};

const delCart = () => {
  store.commit("shop/delItemCart", props.product);
};
</script>

<template>
  <div class="flex shadow rounded-lg bg-white">
    <!--
        Imagen
    -->
    <img class="flex-none rounded-lg m-1 h-20 w-20" :src="product.img" />
    <div class="flex-grow space-y-2">
      <p class="font-medium text-center text-lg m-2">{{ product.nombre }}</p>
      <!--
          Nombre
      -->
      <div class="flex justify-evenly">
        <span class="font-medium">
          $ {{ product.cantidad * product.precio }}.00
        </span>
        <!--
            Cantidad
        -->
        <div class="flex">
          <button class="btn btn-outline btn-circle btn-sm" @click="delCart()">
            <MinusIcon class="h-5 w-5" />
          </button>
          <span class="font-semibold text-lg mx-2">{{ product.cantidad }}</span>
          <button class="btn btn-outline btn-circle btn-sm" @click="addCart()">
            <PlusIcon class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>