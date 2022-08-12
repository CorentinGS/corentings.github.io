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
import { LanguageManager } from '~/utils/lang'

onMounted(() => {
})

const languageManager = LanguageManager()

useHead({
  title: 'Corentin GS',
})
</script>
