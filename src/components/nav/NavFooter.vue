<script setup>
import {
  HomeIcon,
  ShoppingBagIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/vue/outline";
</script>

<template>
  <footer class="fixed border-t bottom-0 w-screen bg-white">
    <div class="flex justify-evenly p-1">
      <!--
        Icon
      -->
      <router-link :to="{ name: 'Portada' }">
        <div class="rounded p-2 hover:bg-gray-100">
          <HomeIcon class="h-7 w-7" />
        </div>
      </router-link>
      <!--
        Icon
      -->
      <router-link :to="{ name: 'Tienda' }">
        <div class="rounded p-2 hover:bg-gray-100">
          <ShoppingBagIcon class="h-7 w-7" />
        </div>
      </router-link>
      <!--
        Icon
      -->
      <router-link :to="{ name: 'Action' }">
        <div class="rounded p-2 hover:bg-gray-100">
          <HeartIcon class="h-7 w-7" />
        </div>
      </router-link>
      <!--
        Icon
      -->
      <router-link :to="{ name: 'Autenticarse' }">
        <div class="rounded p-2 hover:bg-gray-100">
          <UserIcon class="h-7 w-7" />
        </div>
      </router-link>
    </div>
  </footer>
</template>

<style scoped>
</style>