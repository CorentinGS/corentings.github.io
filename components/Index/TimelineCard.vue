<template>
  <TransitionChild
    class="hoveranimation order-1 w-10/12 transform-gpu rounded-lg border-l-[6px] bg-base-200 px-6 py-4 shadow-xl hover:skew-y-2 hover:skew-x-2 hover:shadow-2xl md:w-5/12"
    :class="
      type === TimelineCardType.School
        ? 'border-primary'
        : type === TimelineCardType.Work
        ? 'border-secondary'
        : 'border-accent'
    "
    enter="transition transform duration-[1500ms] ease-in-out transform-gpu"
    enter-from="opacity-0 scale-50 rotate-12 skew-y-12 skew-x-12"
    enter-to="opacity-100 scale-100 rotate-0 skew-y-0 skew-x-0"
  >
    <div class="justify-between sm:flex">
      <div>
        <h3 class="text-xl font-bold capitalize">
          {{ name }}
        </h3>
        <div class="mt-1 flex flex-row text-xs font-medium md:text-sm">
          <p v-if="end_date !== null">{{ start_date }} ・ {{ end_date }}</p>
          <p v-else>Since {{ start_date }}</p>
          <p v-if="location !== null">・{{ location }}</p>
        </div>
        <div class="mb-2 flex" v-if="tools != null">
          <p class="text-xs font-medium uppercase md:text-sm">Skills</p>
          <Icon-lucide-chevron-right />
          <p class="text-xs font-medium md:text-sm">{{ tools }}</p>
        </div>
      </div>

      <NuxtLink :to="link" class="ml-3 hidden flex-shrink-0 sm:block" v-if="image !== null">
        <nuxt-img
          :alt="name"
          :src="image"
          class="h-16 w-16 rounded-lg object-cover shadow-sm"
          format="webp"
          height="64"
          width="64"
          loading="lazy"
          quality="80"
        />
      </NuxtLink>
    </div>
    <p class="text-sm leading-snug tracking-wide">
      {{ description }}
    </p>
  </TransitionChild>
</template>

<script lang="ts" setup>
import { TimelineCardType } from "~/utils/types";
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
    required: false,
    default: null,
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
    default: TimelineCardType.School,
  },
  tools: {
    type: String,
    required: false,
    default: null,
  },
});
</script>

<style scoped></style>
