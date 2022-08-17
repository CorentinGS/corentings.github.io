<template>
  <section ref="target" class="bg-base-200">
    <TransitionRoot :show="showTransition" appear>
      <div class="mx-auto flex max-w-7xl flex-col space-y-12 px-8 xl:px-12">
        <div>
          <h2
            class="w-full text-center text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            My Projects
          </h2>
        </div>
        <TransitionChild
          enter="transition transform duration-[600ms] ease-in-out "
          enter-from="opacity-0 scale-50 -translate-x-full"
          enter-to="opacity-100 scale-100 translate-x-0"
        >
          <IndexProject
            description="Memnix is a project that aims to create tools to facilitate learning for students by working in an organized way. It's using its own spaced repetition system to allows students to create and share their learning materials.
       "
            image="https://github.com/memnix/memnix/blob/main/assets/images/moutmout.png?raw=true"
            link="https://memnix.app"
            name="Memnix"
            :reversed="true"
            stack="Vue.js・Golang・PostgreSQL・MongoDB"
          />
        </TransitionChild>
        <TransitionChild
          enter="transition transform duration-[1500ms] ease-in-out "
          enter-from="opacity-0 scale-50 translate-x-full"
          enter-to="opacity-100 scale-100 translate-x-0"
        >
          <IndexProject
            description="Kitsu is a multi-purpose discord bot that generates stats for your server to help you increase the activity and grow quicker."
            image="https://i.imgur.com/GXKtpOZ.png"
            link="https://github.com/CorentinGS/Kitsu"
            name="Kitsu"
            stack="PostgreSQL・Golang・Rust"
          />
        </TransitionChild>
        <TransitionChild
          enter="transition transform duration-[2000ms] ease-in-out "
          enter-from="opacity-0 scale-50 -translate-x-full"
          enter-to="opacity-100 scale-100 translate-x-0"
        >
          <IndexProject
            description="This is a website I made for Stouuf, a french chess coach. It's a simple single page website to help him promote his courses and find new students."
            link="https://stouuf.net"
            name="Stouuf Website"
            :reversed="true"
            stack="Tailwindcss"
            image="https://github.com/CorentinGS/corentings.github.io/blob/main/public/img/Stouuf.png?raw=true"
          />
        </TransitionChild>
      </div>
    </TransitionRoot>
  </section>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from "@vueuse/core";
import { TransitionChild, TransitionRoot } from "@headlessui/vue";

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
