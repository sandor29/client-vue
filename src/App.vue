<script setup>
import NavHeader from "./components/nav/NavHeader.vue";
import NavFooter from "./components/nav/NavFooter.vue";
import UsersList from "./components/chat/UsersList.vue";
</script>

<template>
  <!--
    Header
  -->
  <nav-header />
  <!--
    Router
  -->
  <router-view />
  <!--
    Footer
  -->
  <nav-footer />
  <!--
    Chat
  -->
  <users-list />
</template>

<style>
</style>
