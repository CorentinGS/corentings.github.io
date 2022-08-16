<template>
  <section ref="target" class="bg-base-200">
    <TransitionRoot
      :show="showTransition"
      appear
      enter="transition transform duration-[650ms] ease-in-out "
      enter-from="opacity-0 scale-50 -translate-x-full"
      enter-to="opacity-100 scale-100 translate-x-0"
    >
      <div class="container mx-auto px-6 py-8">
        <div class="items-center lg:flex">
          <div class="lg:w-1/2">
            <h2 class="text-2xl font-bold md:text-3xl lg:text-5xl">
              Who am I ?
            </h2>
            <h3 class="mt-1 text-xl font-bold md:text-2xl lg:text-3xl">
              I'm a computer science student & open-source enthusiast...
            </h3>
            <p class="mt-4 text-xl lg:max-w-lg">
              Hi ! I'm Corentin, a 19 years old student from Nice. I'm studying
              computer science at the university of Nice Côte d'Azur, France.
              I'm a passionate open-source enthusiast and have been contributing
              to several projects for the past few years including Linux
              distributions, discord bots, and more. I've also been working on
              my own project called
              <NuxtLink
                target="_blank"
                to="https://memnix.app"
                class="underline decoration-secondary decoration-2 hover:decoration-primary"
                >Memnix.
              </NuxtLink>
            </p>
          </div>

          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <div class="mockup-code">
              <pre data-prefix="$"><code>xbps-install -S CorentinGS</code></pre>
              <pre
                class="text-warning"
                data-prefix=">"
              ><code>installing...</code></pre>
              <pre class="text-success" data-prefix=">"><code>Done!</code></pre>
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
