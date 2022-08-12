<template>
  <footer class='footer items-center bg-base-200 p-4'>
    <div class='grid-flow-col items-center'>
      <p>Copyright © 2022 - All right reserved - {{ profile.full_name }}</p>
    </div>
    <div
      class='grid-flow-col gap-4 md:place-self-center md:justify-self-end'
    >
      <NuxtLink
          v-if="profile.email !== ''"
          :to="`mailto:${profile.email}`"
          target="_blank"
      >
        <Icon-lucide-mail class="hoveranimation h-6 w-6"/>
      </NuxtLink>
      <NuxtLink
          v-if="social.twitter !== ''"
          :to="'https://twitter.com/' + social.twitter"
          target="_blank"
      >
        <Icon-lucide-twitter class="hoveranimation h-6 w-6"/>
      </NuxtLink>
      <NuxtLink
          v-if="social.discord !== ''"
          :to="'https://discordapp.com/users/' + social.discord"
          target="_blank"
      >
        <Icon-la-discord class="hoveranimation h-6 w-6"/>
      </NuxtLink>
      <NuxtLink
          v-if="social.github !== ''"
          :to="'https://github.com/' + social.github"
          target="_blank"
      >
        <Icon-lucide-github class="hoveranimation h-6 w-6"/>
      </NuxtLink>
      <NuxtLink
          v-if="social.linkedin !== ''"
          :to="'https://www.linkedin.com/in/' + social.linkedin"
          target="_blank"
      >
        <Icon-lucide-linkedin class="hoveranimation h-6 w-6"/>
      </NuxtLink>
    </div>
  </footer>
</template>

<script lang='ts' setup>

import {Profile, Social} from "~/utils/social";

const social = Social
const profile = Profile

</script>

<style scoped>

</style>