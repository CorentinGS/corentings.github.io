<template>
  <div id='app-layout'>
    <main>
      <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <!-- Navbar -->
          <UtilsNavbar/>
          <!-- Page Slot -->
          <slot />
        </div>

        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu w-80 overflow-y-auto bg-base-100 p-4">
            <!-- Sidebar content here -->
            <li><NuxtLink to="/">Blog</NuxtLink></li>
            <li><NuxtLink to="/">Projects</NuxtLink></li>
            <li><NuxtLink to="/">Resume</NuxtLink></li>
          </ul>
        </div>
      </div>
    </main>
    <footer>
      <UtilsFooter />
    </footer>
  </div>
</template>

<script lang='ts' setup>


useHead({
  bodyAttrs: {
    class: 'no-scrollbar'
  }
})
</script>

<style scoped></style>
