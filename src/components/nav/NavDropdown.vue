<script setup>
import {
  DotsVerticalIcon,
  SearchIcon,
  ShareIcon,
  InformationCircleIcon,
  LogoutIcon,
} from "@heroicons/vue/outline";

import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <div class="relative">
    <!--
      Button
    -->
    <button class="rounded p-2 hover:bg-gray-100" @click="open = !open">
      <DotsVerticalIcon class="h-7 w-7" />
    </button>
    <!--
      Menu
    -->
    <div
      class="
        s-transform
        origin-top
        rounded-md
        absolute
        top-0
        right-0
        w-56
        m-2
        bg-white
      "
      :class="open ? 'scale-y-100' : 'scale-y-0'"
    >
      <ul class="py-2">
        <li>
          <!--
            Action
          -->
          <router-link :to="{ name: 'Portada' }">
            <a class="flex font-medium px-1 py-3 hover:bg-gray-100" href="#" @click="open = false">
              <SearchIcon class="mx-4 h-6 w-6" />Buscar
            </a>
          </router-link>
        </li>
        <li>
          <!--
            Action
          -->
          <router-link :to="{ name: 'Portada' }">
            <a class="flex font-medium px-1 py-3 hover:bg-gray-100" href="#" @click="open = false">
              <ShareIcon class="mx-4 h-6 w-6" />Compartir
            </a>
          </router-link>
        </li>
        <li>
          <!--
            Action
          -->
          <router-link :to="{ name: 'Portada' }">
            <a class="flex font-medium px-1 py-3 hover:bg-gray-100" href="#" @click="open = false">
              <InformationCircleIcon class="mx-4 h-6 w-6" />Reportar
            </a>
          </router-link>
        </li>
        <li>
          <!--
            Action
          -->
          <router-link :to="{ name: 'Portada' }">
            <a class="flex font-medium px-1 py-3 hover:bg-gray-100" href="#" @click="open = false">
              <LogoutIcon class="mx-4 h-6 w-6" />Salir
            </a>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <!--
    Action
  -->
  <div v-if="open" class="s-opacity" @click="open = false"></div>
</template>

<style scoped>
</style>