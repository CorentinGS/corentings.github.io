<template>
  <TransitionChild
    :class="'border-' + TimelineCardColors[type]"
    class="hoveranimation order-1 w-10/12 rounded-lg border-l-[6px] bg-base-200 px-6 py-4 shadow-xl md:w-5/12 hover:skew-y-2 hover:skew-x-2 transform-gpu"
    enter="transition transform duration-[1500ms] ease-in-out transform-gpu"
    enter-from="opacity-0 scale-50 rotate-12 skew-y-12 skew-x-12"
    enter-to="opacity-100 scale-100 rotate-0 skew-y-0 skew-x-0"
  >
    <div class="justify-between sm:flex">
      <div>
        <h3 class="text-xl font-bold">
          {{ name }}
        </h3>
        <div class="mt-1 flex flex-row text-xs font-medium md:text-sm">
          <p v-if="end_date !== null">{{ start_date }} ・ {{ end_date }}</p>
          <p v-else>Since {{ start_date }}</p>
          <p v-if="location !== null">・{{ location }}</p>
        </div>
      </div>

      <NuxtLink :to="link" class="ml-3 hidden flex-shrink-0 sm:block">
        <img
          :alt="name"
          :src="image"
          class="h-16 w-16 rounded-lg object-cover shadow-sm"
        />
      </NuxtLink>
    </div>
    <p class="text-sm leading-snug tracking-wide">
      {{ description }}
    </p>
  </TransitionChild>
</template>

<script lang="ts" setup>
import { TimelineCardColors, TimelineCardType } from "~/utils/types";
import { PropType } from "@vue/runtime-core";
import { TransitionChild } from "@headlessui/vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
    default: null,
  },
  start_date: {
    type: String,
    required: true,
  },
  end_date: {
    type: String,
    required: false,
    default: null,
  },
  location: {
    type: String,
    required: false,
    default: null,
  },
  type: {
    type: Number as PropType<TimelineCardType>,
    required: false,
    default: TimelineCardType.Other,
  },
});
</script>

<style scoped></style>
