<template>
  <TransitionChild
      class="hoveranimation mx-auto hover:skew-x-2 hover:skew-y-2 transform-gpu"
      enter="transition transform duration-[1500ms] ease-in-out"
      enter-from="opacity-0 scale-50 rotate-12 skew-y-12 skew-x-12"
      enter-to="opacity-100 scale-100 rotate-0 skew-y-0 skew-x-0"
  >
    <NuxtLink target="_blank" :to="link">
      <slot></slot>
      <p class="mt-2 hover:underline">{{ name }}</p>
    </NuxtLink>
  </TransitionChild>
</template>

<script setup lang="ts">
import {TransitionChild} from "@headlessui/vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
    required: true,
  },
  link: {
    type: String,
    default: "",
    required: true,
  },

})

</script>

<style scoped>

</style>