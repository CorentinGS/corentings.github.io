<template>
  <div class="mb-8 flex flex-col sm:flex-row">
    <div
      :class="reversed ? 'sm:order-last' : ''"
      class="mb-8 flex items-center sm:w-1/2 md:w-5/12"
    >
      <nuxt-img
        :alt="name"
        :src="image"
        class="rounded-lg shadow-xl hover:skew-y-3 hover:scale-110 hover:shadow-2xl"
        fit="cover"
        format="webp"
        height="400"
        loading="lazy"
        quality="80"
        width="400"
      />
    </div>
    <div
      class="mt-5 mb-8 flex flex-col justify-center sm:w-1/2 sm:pr-16 md:mt-0 md:w-7/12"
    >
      <div class="mb-2 flex">
        <p class="text-sm font-semibold uppercase text-secondary">Made using</p>
        <Icon-lucide-chevron-right />
        <p class="text-sm font-semibold uppercase">{{ stack }}</p>
      </div>
      <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">{{ name }}</h3>
      <p class="text mt-5 text-lg md:text-left">{{ description }}</p>
      <div class="flex">
        <NuxtLink :to="link" class="flex text-secondary hover:text-primary">
          <span>Learn more</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  stack: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  reversed: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style scoped></style>
