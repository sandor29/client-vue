<script setup>
import {
  MailIcon,
  KeyIcon,
  LoginIcon,
  UserAddIcon,
  XIcon,
  EyeOffIcon,
} from "@heroicons/vue/outline";

import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { reactive, ref } from "vue";

let user = reactive({ correo: "", clave: "" });

let errorStatus = ref(false);
let errorMessage = ref("");

const store = useStore();
const router = useRouter();

const onSubmit = (event) => {
  console.log("User", user);

  router.push({ name: "Portada" });
};
</script>

<template>
  <div class="s-page">
    <div class="s-center flex-col">
      <!-- Login -->
      <form class="text-center w-11/12 sm:w-96" @submit.prevent="onSubmit">
        <!-- Title -->
        <p class="font-medium text-xl my-4 uppercase">Inicie Sesión</p>
        <!-- Input -->
        <div class="flex m-2">
          <MailIcon class="my-3 h-6 w-6 text-gray-500" />
          <input
            class="s-input"
            type="email"
            placeholder="Correo : sandor@example.com"
            v-model="user.correo"
          />
          <a href="#" @click="user.correo = ''">
            <XIcon class="my-4 h-5 w-5 text-gray-500" />
          </a>
        </div>
        <!-- Input -->
        <div class="flex m-2">
          <KeyIcon class="my-3 h-6 w-6 text-gray-500" />
          <input
            class="s-input"
            type="password"
            placeholder="Clave : S@ndor+21"
            v-model="user.clave"
          />
          <a href="#" @click="user.clave = ''">
            <EyeOffIcon class="my-4 h-5 w-5 text-gray-500" />
          </a>
        </div>
        <!-- Button -->
        <div class="flex justify-center">
          <button class="s-btn" type="submit">
            <LoginIcon class="h-6 w-6" /><span class="mx-2">Inicie Sesión</span>
          </button>
        </div>
      </form>
      <!-- Link -->
      <p class="m-4">No tienes cuenta !</p>
      <router-link class="flex" :to="{ name: 'Registrarse' }">
        <UserAddIcon class="h-6 w-6" />
        <span class="ml-2 uppercase">Registrarse</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
</style>