<template>
  <div
    class="right-timeline mb-8 flex w-full items-center justify-between"
    :class="right ? '' : 'md:flex-row-reverse'"
  >
    <div class="order-1 hidden w-5/12 md:flex"></div>
    <div
      class="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-neutral shadow-xl"
    >
      <h1 class="mx-auto text-lg font-semibold"></h1>
    </div>
    <slot/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  right: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped></style>
