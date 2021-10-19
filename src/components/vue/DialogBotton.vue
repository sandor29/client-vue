<script setup>
import { HeartIcon, XIcon } from "@heroicons/vue/outline";

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
    <HeartIcon class="h-7 w-7" />
  </button>
  <!--
      Dialog
  -->
  <div
    class="
      s-transform
      rounded
      bottom-0
      left-1/2
      -translate-x-1/2
      h-80
      w-11/12
      sm:w-96
      bg-white
    "
    :class="open ? 'translate-y-0' : 'translate-y-full'"
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
    <div class="flex flex-col"></div>
  </div>
  <!--
      Action
  -->
  <div v-if="open" class="s-opacity" @click="open = false"></div>
</template>

<style scoped>
</style>