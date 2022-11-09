<template>
  <section ref="target" class="bg-base-100">
    <TransitionRoot
        :show="showTransition"
        appear
        enter="transition transform duration-[650ms] ease-in-out"
        enter-from="opacity-0 scale-50 -translate-x-full"
        enter-to="opacity-100 scale-100 translate-x-0"
    >
      <div class="mx-auto flex max-w-7xl flex-col space-y-12 px-8 xl:px-12">
        <div>
          <h2
              class="w-full text-center text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            My Skills & Learnings
          </h2>
        </div>
        <div class="items-center">
          <div class="mt-8 lg:mt-0">
            <div class="grid grid-cols-4 items-center gap-4 text-center">
              <IndexSkill link="https://go.dev/" name="Golang">
                <div class="indicator">
                  <span class="indicator-item indicator-bottom indicator-start">
                    <Icon-Lucide-Heart class="h-7 w-7 text-accent motion-safe:animate-bounce "/>
                  </span>
                  <Icon-logos-gopher class="h-16 w-16 md:h-20 md:w-20"/>
                </div>
              </IndexSkill>
              <IndexSkill link="https://rust-lang.org/" name="Rust">
                <div class="indicator">
                  <span class="indicator-item indicator-bottom indicator-start">
                     <Icon-logos-go class="h-8 w-8 text-secondary motion-safe:animate-pulse"/>
                  </span>
                  <Icon-logos-rust class="h-16 w-16 md:h-20 md:w-20"/>
                </div>

              </IndexSkill>
              <IndexSkill link="https://www.java.com/" name="java">
                <Icon-logos-java class="h-16 w-16 md:h-20 md:w-20"/>
              </IndexSkill>
              <IndexSkill link="https://www.python.org/" name="python">
                <Icon-logos-python class="h-16 w-16 md:h-20 md:w-20"/>
              </IndexSkill>
              <IndexSkill
                  link="https://en.wikipedia.org/wiki/C_(programming_language)"
                  name="C"
              >
                <div class="indicator">
                  <span class="indicator-item indicator-bottom indicator-start">
                    <Icon-Lucide-Heart class="h-7 w-7 text-secondary motion-safe:animate-bounce "/>
                  </span>
                  <Icon-logos-c class="h-16 w-16 md:h-20 md:w-20"/>
                </div>
              </IndexSkill>
              <IndexSkill link="https://www.docker.com/" name="Docker">
                <Icon-logos-docker-icon class="h-16 w-16 md:h-20 md:w-20"/>
              </IndexSkill>
              <IndexSkill link="https://git-scm.com/" name="Git">
                <Icon-logos-git-icon class="h-16 w-16 md:h-20 md:w-20"/>
              </IndexSkill>
              <IndexSkill link="https://v3.nuxtjs.org/" name="Nuxt">
                <Icon-logos-nuxt-icon class="h-16 w-16 md:h-20 md:w-20"/>
              </IndexSkill>
              <IndexSkill link="https://tailwindcss.com/" name="Tailwind">
                <Icon-logos-tailwindcss-icon
                    class="h-16 w-16 md:h-20 md:w-20"
                />
              </IndexSkill>
              <IndexSkill link="https://www.rabbitmq.com/" name="RabbitMQ">
                <Icon-logos-rabbitmq-icon class="h-16 w-16 md:h-20 md:w-20"/>
              </IndexSkill>
              <IndexSkill link="https://voidlinux.org/" name="Void">
                <div class="indicator">
                  <span class="indicator-item indicator-bottom indicator-start">
                    <Icon-Emojione-Penguin class="h-9 w-9 motion-safe:animate-pulse "/>
                  </span>
                  <Icon-logos-void class="h-16 w-16 md:h-20 md:w-20"/>
                </div>
              </IndexSkill>
              <IndexSkill link="https://www.postgresql.org/" name="PostgreSQL">
                <div class="indicator">
                  <span class="indicator-item indicator-bottom indicator-start">
                    <Icon-Lucide-Star class="h-8 w-8 text-secondary motion-safe:animate-pulse"/>
                  </span>
                  <Icon-logos-postgresql class="h-16 w-16 md:h-20 md:w-20"/>
                </div>
              </IndexSkill>
              <IndexSkill link="https://kotlinlang.org/" name="Kotlin">
                <div class="indicator">
                  <span class="indicator-item indicator-bottom indicator-start">
                    <Icon-Ic-Baseline-School class="h-7 w-7 text-secondary motion-safe:animate-pulse"/>
                  </span>
                <Icon-logos-kotlin-icon class="h-15 w-15 md:h-20 md:w-20"/>
                  </div>
              </IndexSkill>
              <IndexSkill link="https://www.haskell.org/" name="Haskell">
                <div class="indicator">
                  <span class="indicator-item indicator-bottom indicator-start">
                    <Icon-Ic-Baseline-School class="h-7 w-7 text-accent motion-safe:animate-pulse"/>
                  </span>
                  <Icon-logos-haskell-icon class="h-16 w-16 md:h-20 md:w-20"/>
                </div>
              </IndexSkill>
              <IndexSkill link="https://www.youtube.com/watch?v=oHNKTlz1lps" name="Suse Musics">
                  <Icon-simple-icons-opensuse class="h-16 w-16 md:h-20 md:w-20"/>
              </IndexSkill>
              <IndexSkill link="https://www.vim.org/" name=":q">
                <div class="indicator">
                  <span class="indicator-item indicator-bottom indicator-start">
                    <Icon-Emojione-Penguin class="h-9 w-9 motion-safe:animate-pulse "/>
                  </span>
                  <Icon-logos-vim class="h-16 w-16 md:h-20 md:w-20"/>
                </div>
              </IndexSkill>
            </div>
          </div>
        </div>
      </div>
    </TransitionRoot>
  </section>
</template>

<script lang="ts" setup>
import {useIntersectionObserver} from "@vueuse/core";
import {TransitionRoot} from "@headlessui/vue";

let showTransition = ref(false);

const target = ref(null);

const {stop} = useIntersectionObserver(
    target,
    ([{isIntersecting}], observerElement) => {
      if (showTransition.value) {
        return;
      }
      showTransition.value = isIntersecting;
    }
);
</script>

<style scoped></style>
