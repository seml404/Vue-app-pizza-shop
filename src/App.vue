<script setup>
import { RouterLink, RouterView } from "vue-router";
import { mainStore } from "./stores/store.js";
import "./assets/css/main.scss";
import "./assets/css/tailwind.css";
const store = mainStore();
store.getInitializationData();
</script>

<template>
  <p>test</p>
  <RouterLink to="/">Home</RouterLink>

  <RouterView />
</template>
<style></style>
