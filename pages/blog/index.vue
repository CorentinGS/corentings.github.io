<template>
  <div class="mx-auto mb-4 w-full w-full max-w-screen-lg bg-base-100 p-6 md:mb-0">
    <div class="header mb-6 flex items-end justify-between">
      <div class="title">
        <p class="mb-3 text-4xl font-bold">My articles</p>
        <p class="text-2xl font-light">
          Here you can find the latest articles from the blog
        </p>
      </div>
    </div>
    <div v-for="blogPost in latest">
      <NuxtLink :to="blogPost.link">
        <BlogCardLatest :blogPost="blogPost" class="mb-5" />
      </NuxtLink>
    </div>
    <div v-if="blogPosts.length >= 1">
      <div class="title">
        <p class="mb-4 text-4xl font-bold">Previous</p>
      </div>
      <div v-for="blogPost in blogPosts">
        <NuxtLink :to="blogPost.link">
          <BlogCardPrevious :blogPost="blogPost" class="mb-3" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlogPosts } from "~/utils/blog";

const latest = BlogPosts.blogPosts.slice(0, 1);
const blogPosts = BlogPosts.blogPosts.slice(1);

useHead({
  title: "CorentinGS - Blog",
  meta: [
    {
      name: "description",
      content: "Here you can find the latest articles from CorentinGS",
    },
  ],
});
</script>

<style scoped></style>
