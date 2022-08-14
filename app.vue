<template>
  <Html :lang="locale" >
    <Body
      class="transition-colors duration-300"
    >
      <NuxtLayout name="default" >
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script lang="ts" setup>

useHead({
  title: 'Corentin GS',
})
</script>
