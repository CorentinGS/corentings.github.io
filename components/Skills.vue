<template>
  <section class="bg-base-100">
    <div class="container mx-auto px-6 py-8">
      <div class="items-center lg:flex">
        <div class="lg:w-1/4">
          <h2 class="text-3xl font-bold">My Skills</h2>
        </div>
        <div class="mt-8 lg:mt-0 lg:w-3/4">
          <div class="grid grid-cols-4 items-center gap-4 text-center">
            <NuxtLink
              class="hoveranimation mx-auto"
              target="_blank"
              to="https://go.dev/"
            >
              <Icon-logos-gopher class="h-16 w-16 md:h-20 md:w-20" />
              <p class="mt-2 hover:underline">Golang</p>
            </NuxtLink>
            <NuxtLink
              class="hoveranimation mx-auto"
              target="_blank"
              to="https://www.java.com/"
            >
              <Icon-logos-java class="h-16 w-16 md:h-20 md:w-20" />
              <p class="mt-2 hover:underline">Java</p>
            </NuxtLink>
            <NuxtLink
              class="hoveranimation mx-auto"
              target="_blank"
              to="https://www.python.org/"
            >
              <Icon-logos-python class="h-16 w-16 md:h-20 md:w-20" />
              <p class="mt-2 hover:underline">Python</p>
            </NuxtLink>
            <NuxtLink
              class="hoveranimation mx-auto"
              target="_blank"
              to="https://en.wikipedia.org/wiki/C_(programming_language)"
            >
              <Icon-logos-c class="h-16 w-16 md:h-20 md:w-20" />
              <p class="mt-2 hover:underline">C</p>
            </NuxtLink>
            <NuxtLink
              class="hoveranimation mx-auto"
              target="_blank"
              to="https://www.docker.com/"
            >
              <Icon-logos-docker-icon class="h-16 w-16 md:h-20 md:w-20" />
              <p class="mt-2 hover:underline">Docker</p>
            </NuxtLink>
            <NuxtLink
              class="hoveranimation mx-auto"
              target="_blank"
              to="https://www.rust-lang.org/"
            >
              <Icon-logos-rust class="h-16 w-16 md:h-20 md:w-20" />
              <p class="mt-2 hover:underline">Rust</p>
            </NuxtLink>
            <NuxtLink
              class="hoveranimation mx-auto"
              target="_blank"
              to="https://v3.nuxtjs.org/"
            >
              <Icon-logos-nuxt-icon class="h-16 w-16 md:h-20 md:w-20" />
              <p class="mt-2 hover:underline">Nuxt</p>
            </NuxtLink>
            <NuxtLink
              class="hoveranimation mx-auto"
              target="_blank"
              to="https://tailwindcss.com/"
            >
              <Icon-logos-tailwindcss-icon class="h-16 w-16 md:h-20 md:w-20" />
              <p class="mt-2 hover:underline">Tailwind</p>
            </NuxtLink>
            <NuxtLink
              class="hoveranimation mx-auto"
              target="_blank"
              to="https://www.rabbitmq.com/"
            >
              <Icon-logos-rabbitmq-icon class="h-16 w-16 md:h-20 md:w-20" />
              <p class="mt-2 hover:underline">RabbitMQ</p>
            </NuxtLink>
            <NuxtLink
              class="hoveranimation mx-auto"
              target="_blank"
              to="https://git-scm.com/"
            >
              <Icon-logos-git-icon class="h-16 w-16 md:h-20 md:w-20" />
              <p class="mt-2 hover:underline">Git</p>
            </NuxtLink>
            <NuxtLink
              class="hoveranimation mx-auto"
              target="_blank"
              to="https://voidlinux.org/"
            >
              <Icon-logos-void class="h-16 w-16 md:h-20 md:w-20" />
              <p class="mt-2 hover:underline">Void</p>
            </NuxtLink>
            <NuxtLink
              class="hoveranimation mx-auto"
              target="_blank"
              to="https://www.postgresql.org/"
            >
              <Icon-logos-postgresql class="h-16 w-16 md:h-20 md:w-20" />
              <p class="mt-2 hover:underline">PostgreSQL</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped></style>
