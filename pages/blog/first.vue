<template>
  <div>
  <BlogPost :blogPost="blogPost">
    <h3 class="pb-6 text-2xl">
      Here is a simple first post to showcase my blog !
    </h3>
    <p class="pb-6">Stay tuned to the next posts...</p>
  </BlogPost>
  </div>
</template>

<script setup lang="ts">
import { BlogPosts } from "~/utils/blog";

const blogPost = BlogPosts.blogPosts[0];

useHead({
  title: "CorentinGS - First Post",
  meta: [
    {
      name: "description",
      content: "Here is a simple first post to showcase my blog !",
    },
  ],
});
</script>

<style scoped></style>
