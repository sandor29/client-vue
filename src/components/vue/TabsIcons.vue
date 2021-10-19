<script setup>
import { ref } from "vue";

const tab = ref(1);
</script>

<template>
  <div class="s-tab">
    <ul class="flex justify-evenly">
      <li
        class="s-tab-page"
        :class="tab == 1 ? 'border-red-600' : 'border-gray-100'"
      >
        <a href="#" @click="tab = 1">Uno</a>
      </li>
      <li
        class="s-tab-page"
        :class="tab == 2 ? 'border-red-600' : 'border-gray-100'"
      >
        <a href="#" @click="tab = 2">Dos</a>
      </li>
      <li
        class="s-tab-page"
        :class="tab == 3 ? 'border-red-600' : 'border-gray-100'"
      >
        <a href="#" @click="tab = 3">Tres</a>
      </li>
    </ul>
    <div class="s-tab-content" :class="tab == 1 ? 'block' : 'hidden'">Uno</div>
    <div class="s-tab-content" :class="tab == 2 ? 'block' : 'hidden'">Dos</div>
    <div class="s-tab-content" :class="tab == 3 ? 'block' : 'hidden'">Tres</div>
  </div>
</template>

<style scoped>
.s-tab {
  @apply p-1;
}
.s-tab-page {
  @apply p-1 border-b-2;
}
.s-tab-content {
  @apply p-1;
}
</style>