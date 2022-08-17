<template>
  <div
    class="relative block scale-100 transform rounded-lg bg-cover bg-center p-5 transition-all duration-300 hover:scale-95"
    :class="blogPost.dark_background === true ? 'text-white' : ''"
    :style="cssProps"
  >
    <div class="h-52"></div>
    <h2 class="mb-3 pr-5 text-2xl leading-tight md:text-4xl">
      {{ blogPost.title }}
    </h2>
    <div class="absolute top-0 right-0 -mt-3 mr-3">
      <div class="badge badge-accent py-1 pl-2 pr-3 text-xs leading-none">
        <span class="uppercase">{{ blogPost.category }}</span>
      </div>
    </div>
    <div class="text-md flex w-full items-center">
      <div class="flex flex-1 items-center">
        <nuxt-img
          class="mr-3 h-8 w-8 rounded-full object-cover"
          :src="blogPost.author.avatar"
          :alt="blogPost.author.name"
          format="webp"
          height="32"
          loading="lazy"
          quality="80"
          width="32"
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

const cssProps = {
  background: "url(" + props.blogPost.image + ") center",
  "background-size": "cover",
};
</script>

<style scoped></style>
