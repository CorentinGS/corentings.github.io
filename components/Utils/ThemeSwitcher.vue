<template>
  <select
    data-choose-theme
    class="select select-bordered select-secondary select-md w-full max-w-xs bg-base-200 text-base-content"
  >
    <option disabled selected>Pick your theme</option>
    <option v-for="theme in themes" :value="theme">{{ theme }}</option>
  </select>
</template>

<script lang="ts" setup>
import { themeChange } from "theme-change";

const themes = [
  "corporate",
  "dark",
  "night",
  "fantasy",
  "cupcake",
  "forest",
  "coffee",
  "business",
  "dracula",
  "pastel",
  "memnix",
];

onMounted(() => {
  themeChange(false);
});
</script>

<style scoped></style>
