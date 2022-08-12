<template>
  <div class="navbar bg-base-200">
    <div class="navbar-start">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-ghost btn-square">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-6 w-6 stroke-current"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <NuxtLink
          class="hoveranimation btn btn-ghost text-xl lg:text-3xl normal-case"
          to="/"
      ><h1
          class="font-bold text-secondary"
      >
        CorentinGS
      </h1></NuxtLink
      >
    </div>
    <div class="navbar-center hidden text-xl lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li>
          <NuxtLink class="hoveranimation hover:text-accent" to="/discover">
            Blog
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="hoveranimation hover:text-accent" to="/team"
          >Projects
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="hoveranimation hover:text-accent" to="/faq"
          >Resume
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <UtilsLangSwitcher />
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped>

</style>