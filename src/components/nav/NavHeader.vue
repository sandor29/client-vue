<script setup>
import { ShoppingCartIcon } from "@heroicons/vue/outline";

import NavDrawer from "./NavDrawer.vue";
import NavMenu from "./NavMenu.vue";
import NavDropdown from "./NavDropdown.vue";

import { useRoute } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
const title = ref("Portada");

watch(
  () => route.name,
  (newName) => {
    title.value = newName;
  }
);
</script>

<template>
  <header class="fixed border-b top-0 w-screen bg-white">
    <div class="flex p-1">
      <!--
        Drawer
      -->
      <div class="flex-none block lg:hidden">
        <NavDrawer />
      </div>
      <!--
        Titulo
      -->
      <div class="flex-grow p-2">
        <p class="text-center text-lg font-medium uppercase">{{ title }}</p>
      </div>
      <!--
        Menu
      -->
      <div class="flex-grow hidden lg:block">
        <NavMenu :title="title" />
      </div>
      <!--
        Cart
      -->
      <div class="flex-none">
        <router-link :to="{ name: 'Carrito' }">
          <button class="rounded p-2 hover:bg-gray-100">
            <ShoppingCartIcon class="h-7 w-7" />
          </button>
        </router-link>
      </div>
      <!--
        Dropdown
      -->
      <div class="flex-none lg:mr-10">
        <NavDropdown />
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>