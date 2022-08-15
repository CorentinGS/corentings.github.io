<template>
  <section ref="target" class="bg-base-100">
    <TransitionRoot
      :show="showTransition"
      appear
      enter="transition transform duration-[650ms] ease-in-out"
      enter-from="opacity-0 scale-50 -translate-x-full"
      enter-to="opacity-100 scale-100 translate-x-0"
    >
      <div class="container mx-auto px-6 py-8">
        <div class="items-center lg:flex">
          <div class="lg:w-1/4">
            <h2 class="text-2xl font-bold md:text-3xl lg:text-5xl">
              My Skills
            </h2>
          </div>
          <div class="mt-8 lg:mt-0 lg:w-3/4">
            <div class="grid grid-cols-4 items-center gap-4 text-center">
              <IndexSkill link="https://go.dev/" name="Golang">
                <Icon-logos-gopher class="h-16 w-16 md:h-20 md:w-20" />
              </IndexSkill>
              <IndexSkill link="https://rust-lang.org/" name="Rust">
                <Icon-logos-rust class="h-16 w-16 md:h-20 md:w-20" />
              </IndexSkill>
              <IndexSkill link="https://www.java.com/" name="java">
                <Icon-logos-java class="h-16 w-16 md:h-20 md:w-20" />
              </IndexSkill>
              <IndexSkill link="https://www.python.org/" name="python">
                <Icon-logos-python class="h-16 w-16 md:h-20 md:w-20" />
              </IndexSkill>
              <IndexSkill
                link="https://en.wikipedia.org/wiki/C_(programming_language)"
                name="C"
              >
                <Icon-logos-c class="h-16 w-16 md:h-20 md:w-20" />
              </IndexSkill>
              <IndexSkill link="https://www.docker.com/" name="Docker">
                <Icon-logos-docker-icon class="h-16 w-16 md:h-20 md:w-20" />
              </IndexSkill>
              <IndexSkill link="https://git-scm.com/" name="Git">
                <Icon-logos-git-icon class="h-16 w-16 md:h-20 md:w-20" />
              </IndexSkill>
              <IndexSkill link="https://v3.nuxtjs.org/" name="Nuxt">
                <Icon-logos-nuxt-icon class="h-16 w-16 md:h-20 md:w-20" />
              </IndexSkill>
              <IndexSkill link="https://tailwindcss.com/" name="Tailwind">
                <Icon-logos-tailwindcss-icon
                  class="h-16 w-16 md:h-20 md:w-20"
                />
              </IndexSkill>
              <IndexSkill link="https://www.rabbitmq.com/" name="RabbitMQ">
                <Icon-logos-rabbitmq-icon class="h-16 w-16 md:h-20 md:w-20" />
              </IndexSkill>
              <IndexSkill link="https://voidlinux.org/" name="Void">
                <Icon-logos-void class="h-16 w-16 md:h-20 md:w-20" />
              </IndexSkill>
              <IndexSkill link="https://www.postgresql.org/" name="PostgreSQL">
                <Icon-logos-postgresql class="h-16 w-16 md:h-20 md:w-20" />
              </IndexSkill>
            </div>
          </div>
        </div>
      </div>
    </TransitionRoot>
  </section>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from "@vueuse/core";
import { TransitionRoot } from "@headlessui/vue";

let showTransition = ref(false);

const target = ref(null);

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    if (showTransition.value) {
      return;
    }
    showTransition.value = isIntersecting;
  }
);
</script>

<style scoped></style>
