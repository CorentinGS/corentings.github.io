<template>
  <div
    class="flex w-full scale-100 transform transition-all duration-300 hover:scale-95"
  >
    <nuxt-img
      class="block h-40 w-2/5 overflow-hidden rounded object-cover"
      :src="blogPost.image"
      format="webp"
      loading="lazy"
      quality="80"
    />

    <div class="w-3/5 pl-3">
      <p class="text-xs font-semibold uppercase">
        {{ blogPost.category }}
      </p>
      <h3 class="text-md mb-3 font-semibold leading-tight">
        {{ blogPost.title }}
      </h3>
      <p class="mb-3 text-sm font-semibold leading-tight">
        {{ blogPost.description }}
      </p>
      <div class="flex w-full items-center text-sm font-medium">
        <nuxt-img
          class="mr-3 h-10 w-10 rounded-full"
          :src="blogPost.author.avatar"
        />
        <div class="flex flex-col">
          <span>{{ blogPost.author.name }}</span>
          <span>{{ blogPost.date }} ・{{ blogPost.timeToRead }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlogPost } from "~/utils/types";
import { PropType } from "@vue/runtime-core";

const props = defineProps({
  blogPost: {
    type: Object as PropType<BlogPost>,
    required: true,
  },
});
</script>

<style scoped></style>
