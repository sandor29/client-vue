<script setup>
import { HomeIcon, ShoppingBagIcon } from "@heroicons/vue/outline";
</script>

<template>
  <div class="flex">
    <div>
      <!--
          Link
      -->
      <router-link
        class="flex rounded p-2 hover:bg-gray-100"
        :to="{ name: 'Portada' }"
      >
        <HomeIcon class="h-6 w-6" />
        <span class="ml-2 uppercase">Portada</span>
      </router-link>
    </div>
    <div>
      <!--
          Link
      -->
      <router-link
        class="flex rounded p-2 hover:bg-gray-100"
        :to="{ name: 'Tienda' }"
      >
        <ShoppingBagIcon class="h-6 w-6" />
        <span class="ml-2 uppercase">Tienda</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
</style>