<script setup>
import {
  MenuIcon,
  ArrowLeftIcon,
  XIcon,
  HomeIcon,
  ShoppingBagIcon,
  CogIcon,
  InformationCircleIcon,
} from "@heroicons/vue/outline";

import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <!--
      Button
  -->
  <button
    class="rounded p-2 hover:bg-gray-100"
    @click="open = true"
    v-if="!open"
  >
    <MenuIcon class="h-7 w-7" />
  </button>
  <button class="rounded p-2 hover:bg-gray-100" @click="open = false" v-else>
    <ArrowLeftIcon class="h-7 w-7" />
  </button>
  <!--
      Slider
  -->
  <div
    class="s-transform top-0 left-0 h-screen w-80 bg-white"
    :class="open ? 'translate-x-0' : '-translate-x-full'"
  >
    <!--
        Cerrar
    -->
    <button
      class="absolute rounded-full right-0 m-2 p-2 hover:bg-gray-100"
      @click="open = false"
    >
      <XIcon class="h-6 w-6" />
    </button>
    <!--
        Body
    -->
    <ul class="py-2">
      <li>
        <!--
            Usuario
          -->
        <div class="flex flex-col items-center p-4">
          <img
            class="rounded-full m-2 h-24 w-24"
            src="../../../public/images/1.jpg"
            alt="avatar"
          />
          <div v-if="true">
            <p class="font-semibold">Sandor Escobar Ruiz</p>
            <p class="text-sm">sandor@example.com</p>
          </div>
          <div v-else>
            <button class="border rounded-full m-2 px-2 py-1 uppercase text-sm">
              Autenticarse
            </button>
            <button class="border rounded-full m-2 px-2 py-1 uppercase text-sm">
              Registrarse
            </button>
          </div>
        </div>
      </li>
      <li class="border-t mx-5 my-2"></li>
      <li>
        <!--
            Action
          -->
        <router-link :to="{ name: 'Portada' }">
          <a
            class="flex font-medium px-1 py-3 hover:bg-gray-100"
            href="#"
            @click="open = false"
          >
            <HomeIcon class="mx-4 h-6 w-6" />Portada
          </a>
        </router-link>
      </li>
      <li>
        <!--
            Action
          -->
        <router-link :to="{ name: 'Tienda' }">
          <a
            class="flex font-medium px-1 py-3 hover:bg-gray-100"
            href="#"
            @click="open = false"
          >
            <ShoppingBagIcon class="mx-4 h-6 w-6" />Tienda
          </a>
        </router-link>
      </li>
      <li>
        <!--
            Action
          -->
        <router-link :to="{ name: 'Ajustes' }">
          <a
            class="flex font-medium px-1 py-3 hover:bg-gray-100"
            href="#"
            @click="open = false"
          >
            <CogIcon class="mx-4 h-6 w-6" />Ajustes
          </a>
        </router-link>
      </li>
      <li>
        <!--
            Action
          -->
        <router-link :to="{ name: 'Ayuda' }">
          <a
            class="flex font-medium px-1 py-3 hover:bg-gray-100"
            href="#"
            @click="open = false"
          >
            <InformationCircleIcon class="mx-4 h-6 w-6" />Ayuda
          </a>
        </router-link>
      </li>
    </ul>
  </div>
  <!--
      Action
  -->
  <div v-if="open" class="s-opacity" @click="open = false"></div>
</template>

<style scoped>
</style>