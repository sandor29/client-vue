<script setup>
const props = defineProps({
  user: Object,
});

const chat = (xId) => {
  console.log("Iniciar Chat: ", xId);
};
</script>

<template>
  <a class="flex px-4 py-2 hover:bg-gray-100" href="#" @click="chat(user.id)">
    <img class="rounded-full h-12 w-12" :src="user.img" />
    <div class="mx-3">
      <p class="font-medium">{{ user.nombre }}</p>
      <p class="text-sm truncate overflow-hidden w-44">{{ user.frase }}</p>
    </div>
  </a>
</template>

<style scoped>
</style>