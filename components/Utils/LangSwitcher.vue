<template>
  <div class='flex items-center'>
    <Listbox
      v-if="currentStyle === 'dropdown-right-top'"
      v-model='localeSetting'
      as='div'
      class='relative flex items-center'
    >
      <ListboxLabel class='sr-only'>Lang</ListboxLabel>
      <ListboxButton
        class='transition-colors duration-300'
        title='Change Language'
        type='button'
      >
        <span class='flex items-center justify-center text-secondary hoveranimation hover:animate-pulse'>
          <Icon-lucide-languages style='font-size: 2em' />
        </span>
      </ListboxButton>
      <ListboxOptions
        class='absolute top-full right-0 z-50 w-36 overflow-hidden rounded-lg bg-base-200 p-1 py-1 text-sm font-semibold shadow-lg'
      >
        <ListboxOption
          v-for='lang in availableLocales'
          :key='lang.iso'
          :class="{
            'flex cursor-pointer items-center py-2 px-2 hover:scale-110': true,
            'bg-base-300 text-secondary ': localeSetting === lang.iso,
            'hover:bg-base-200 ': localeSetting !== lang.iso,
          }"
          :value='lang.iso'
        >
          <span class='mr-2 text-sm'>
            {{ lang.flag }}
          </span>
          <span class='flex-1 truncate'>
            {{ lang.name }}
            <span class='text-xs'>({{ lang.iso }})</span>
          </span>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
    <select
      v-if="currentStyle === 'select-box'"
      v-model='localeSetting'
      class='w-full rounded bg-transparent px-2 py-1 pr-3'
    >
      <option
        v-for='lang in availableLocales'
        :key='lang.iso'
        :value='lang.iso'
        class='flex items-center space-x-2'
      >
        {{ lang.flag }} {{ lang.name }} ({{ lang.iso }})
      </option>
    </select>
  </div>
</template>

<script lang='ts' setup>
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { availableLocales } from '~/utils/lang'
// micro compiler
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top'
  }
})
// state
const currentStyle = toRef(props, 'type')
const localeSetting = useState<string>('locale.setting')
</script>
