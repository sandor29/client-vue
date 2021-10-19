<script setup>
import { ChatIcon, XIcon } from "@heroicons/vue/outline";
import { onMounted, reactive, ref } from "vue";

import UsersItem from "./UsersItem.vue";

const users = reactive([]);
const open = ref(false);

const getUsers = async function () {
  try {
    const response = await fetch("data/usuarios.json");
    users.values = await response.json();
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getUsers();
});
</script>

<template>
  <!--
      Button
  -->
  <button
    class="fixed border rounded-full shadow p-3 right-5 bottom-16 bg-white"
    @click="open = true"
  >
    <ChatIcon class="h-6 w-6" />
  </button>
  <!--
      Slider
  -->
  <div
    class="s-transform top-0 right-0 h-screen w-80 bg-white"
    :class="open ? 'translate-x-0' : 'translate-x-full'"
  >
    <!--
        Cerrar
    -->
    <button class="absolute rounded-full left-0 m-2 p-2 hover:bg-gray-100" @click="open = false">
      <XIcon class="h-6 w-6" />
    </button>
    <!--
        Titulo
    -->
    <div class="shadow p-4">
      <p class="text-center uppercase">Usuarios</p>
    </div>
    <!--
        Usuarios
    -->
    <div class="">
      <div v-for="user in users.values" :key="user.id">
        <UsersItem :user="user" />
      </div>
    </div>
  </div>
  <!--
      Action
  -->
  <div v-if="open" class="s-opacity" @click="open = false"></div>
</template>

<style scoped>
</style>