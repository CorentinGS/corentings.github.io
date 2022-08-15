<template>
  <div class="navbar bg-base-200">
    <div class="navbar-start">
      <div class="flex-none lg:hidden">
        <label class="btn btn-ghost btn-square" for="my-drawer-3">
          <svg
            class="inline-block h-6 w-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>
        </label>
      </div>
      <NuxtLink
        class="hoveranimation btn btn-ghost text-xl normal-case lg:text-3xl"
        to="/"
        ><h1 class="font-bold text-secondary">
          {{ profile.short_name }}
        </h1>
      </NuxtLink>
    </div>
    <div class="navbar-end hidden text-xl lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li>
          <NuxtLink class="hoveranimation hover:text-accent" to="/">
            Blog
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="hoveranimation hover:text-accent" to="/"
            >Projects
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="hoveranimation hover:text-accent"
            to="https://github.com/CorentinGS/CorentinGS/blob/main/CorentinGS%20CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Profile } from "~/utils/config";

const profile = Profile;
</script>

<style scoped></style>
