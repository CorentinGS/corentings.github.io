<template>
  <div class="relative w-full bg-base-100 p-5">
    <div class="hoveranimation absolute left-1 top-[0.5rem]">
      <NuxtLink
        :to="{ name: 'blog' }"
        class="btn btn-ghost text-xl md:text-2xl lg:text-3xl"
      >
        <Icon-lucide-arrow-left />
      </NuxtLink>
    </div>
    <div
      class="relative mx-auto mb-4 w-full max-w-screen-lg md:mb-0"
      :class="blogPost.dark_background===true? 'text-white': ''"
      style="height: 24em"
    >
      <nuxt-img
        :src="blogPost.image"
        class="absolute left-0 top-0 z-0 h-full w-full object-cover"
        width="100%"
        height="100%"
        format="webp"
        loading="lazy"
        quality="80"
      />
      <div class="absolute bottom-0 left-0 z-20 p-4">
        <span
          class="badge badge-secondary mb-2 inline-flex items-center justify-center px-4 py-1 uppercase"
          >{{ blogPost.category }}</span
        >
        <h1 class="text-4xl leading-tight">
          {{ blogPost.title }}
        </h1>
        <div class="mt-3 flex">
          <nuxt-img
            :src="blogPost.author.avatar"
            class="mr-2 h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p class="text-sm">
              {{ blogPost.author.name }}
            </p>
            <p class="text-xs">
              {{ blogPost.date }} ・{{ blogPost.timeToRead }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mx-auto mt-12 max-w-screen-lg px-4 text-lg leading-relaxed lg:px-0"
    >
      <slot></slot>
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
