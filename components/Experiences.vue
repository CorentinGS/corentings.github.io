<template>
  <section ref="target" class="container mx-auto w-full bg-base-100">
    <TransitionRoot
      :show="showTransition"
      appear
      enter="transition transform duration-[500ms] ease-in-out "
      enter-from="opacity-0 scale-50 "
      enter-to="opacity-100 scale-100 "
    >
      <div class="items-center lg:flex">
        <h2 class="mx-auto text-2xl font-bold md:text-3xl lg:text-5xl">
          My Experiences
        </h2>
      </div>
      <div class="wrap relative h-full overflow-hidden p-10">
        <div
          class="border-2-2 absolute left-[3.5rem] h-full border border-dashed border-gray-700 border-opacity-20 md:left-[50%]"
        ></div>
        <div v-for="(card, index) in experiences">
          <IndexTimeline :right="index % 2 !== 0">
            <IndexTimelineCard
              :description="card.description"
              :end_date="card.end_date"
              :image="card.image"
              :link="card.link"
              :location="card.location"
              :name="card.name"
              :start_date="card.start_date"
              :type="card.type"
            />
          </IndexTimeline>
        </div>
      </div>
    </TransitionRoot>
  </section>
</template>

<script lang="ts" setup>
import { TimelineCardList } from "~/utils/types";
import { Experiences } from "~/utils/config";
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

const experiences: TimelineCardList = Experiences.experiences;
</script>

<style scoped></style>
