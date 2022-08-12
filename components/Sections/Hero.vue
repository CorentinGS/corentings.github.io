<template>
  <section class="hero h-screen bg-base-100">
    <div class="hero-content">
      <div
          class="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left"
      >
        <img
            :src="profile.avatar"
            alt="avatar"
            class="mb-4 h-48 w-48 flex-shrink-0 rounded-full object-cover object-center sm:mb-0"
        />
        <div class="flex-grow sm:pl-8">
          <h1 class="text-2xl font-bold md:text-3xl">
            Hi, I'm {{ profile.full_name }}🤘
          </h1>
          <h2 class="max-w-3xl py-2 text-xl md:text-2xl">
            {{ profile.title }}
          </h2>

          <span class="inline-flex space-x-4">
            <h3>LET'S CONNECT</h3>
            <Icon-lucide-chevron-right class="mx-auto"/>
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
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {Profile, Social} from "~/utils/social";

const social = Social;
const profile = Profile;
</script>

<style scoped></style>
