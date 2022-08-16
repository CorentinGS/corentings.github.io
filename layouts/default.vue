<template>
  <div id="app-layout">
    <main>
      <div class="drawer">
        <input id="my-drawer-3" class="drawer-toggle" type="checkbox"/>
        <div class="drawer-content flex flex-col">
          <!-- Navbar -->
          <UtilsNavbar/>
          <!-- Page Slot -->
          <slot/>
        </div>

        <div class="drawer-side">
          <label class="drawer-overlay" for="my-drawer-3"></label>
          <ul class="menu w-80 overflow-y-auto bg-base-100 p-4">
            <!-- Sidebar content here -->
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <NuxtLink
                  rel="noopener noreferrer"
                  target="_blank"
                  to="https://github.com/CorentinGS/CorentinGS/blob/main/CorentinGS%20CV.pdf"
              >Resume
              </NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </main>
    <footer>
      <UtilsFooter/>
    </footer>
  </div>
</template>

<script lang="ts" setup>
useHead({
  bodyAttrs: {
    class: "no-scrollbar",
  },
});
</script>

<style scoped></style>
