<template>
  <section class="bg-base-200">
    <div class="container px-6 py-8 mx-auto">
      <div class="items-center lg:flex">
        <div class="lg:w-1/2">
          <h2 class="text-3xl font-bold">Who am I ?</h2>
          <h3 class="mt-1 text-2xl font-bold">
            I'm a computer science student & open-source enthusiast...</h3>
          <p class="mt-4 lg:max-w-lg text-xl">
           Hi ! I'm Corentin, a 19 years old student from Nice. I'm a computer science student, and I'm passionate about open-source. I've been contributing to open-source projects since I was a kid, and I'm currently working on a project called <NuxtLink to="https://memnix.app" target="_blank">Memnix</NuxtLink>.
          </p>
        </div>

        <div class="mt-8 lg:mt-0 lg:w-1/2">
          <div class="mockup-code">
            <pre data-prefix="$"><code>xbps-install -S CorentinGS</code></pre>
            <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
            <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>