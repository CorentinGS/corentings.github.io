<template>
  <Html lang="en">
    <Body class="transition-colors duration-300">
      <NuxtLayout name="default">
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
useHead({
  title: "Corentin GS",
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    { name: "title", content: "CorentinGS - Computer Science Student" },
    {
      name: "description",
      content:
        "Corentin Giaufer Saubert - Personal blog & Portfolio - Computer science student & open-source enthusiast",
    },
    { name: "og:type", content: "website" },
    { name: "og:title", content: "CorentinGS - Computer Science Student" },
    {
      name: "og:description",
      content:
        "Corentin Giaufer Saubert - Personal blog & Portfolio - Computer science student & open-source enthusiast",
    },
    {
      name: "og:image",
      content:
        "https://github.com/CorentinGS/CorentinGS/blob/main/Banner-metatags.png?raw=true",
    },
    { name: "og:url", content: "https://corentings.github.io" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "CorentinGS - Computer Science Student" },
    {
      name: "twitter:description",
      content:
        "Corentin Giaufer Saubert - Personal blog & Portfolio - Computer science student & open-source enthusiast",
    },
    {
      name: "twitter:image",
      content:
        "https://github.com/CorentinGS/CorentinGS/blob/main/Banner-metatags.png?raw=true",
    },
    { name: "twitter:url", content: "https://corentings.github.io" },
  ],
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: true,
    },
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "theme-color",
      content: "#ffffff",
    },
  ],
});
</script>
