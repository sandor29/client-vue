<script setup>
import DialogTop from "./DialogTop.vue";
import DialogCenter from "./DialogCenter.vue";
import DialogBotton from "./DialogBotton.vue";
import TabsIcons from "./TabsIcons.vue";
</script>

<template>
  <div class="s-page flex justify-center">
    <div class="flex flex-col">
      <div class="flex">
        <dialog-top />
        <dialog-center />
        <dialog-botton />
      </div>
      <tabs-icons />
    </div>
  </div>
</template>

<style scoped>
</style>