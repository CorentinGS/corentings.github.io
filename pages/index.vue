<template>
  <section class='bg-base-100 hero h-screen'>
      <div class="hero-content">
          <div class="flex flex-col">
            <img src="https://dummyimage.com/500x500" class="rounded-full w-52 mx-auto"/>
            <h1 class="text-3xl my-6 text-center">
              Hi, I&#x27;m Corentin 🤘
            </h1>
            <h2 class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto text-center py-2">
              Building digital products, brands, and experiences.
            </h2>
            <div class="flex items-center justify-center mt-4">
              <a href="#" class="btn btn-primary py-2 my-2 hoveranimation">
                CONNECT WITH ME
              </a>
          </div>
        <div
            class='flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left'
        >
          <img
              src="https://dummyimage.com/500x500"
              alt='team'
              class='mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0'
          />
          <div class='flex-grow sm:pl-8'>
            <h2 class='text-2xl font-medium'>{{ name }}</h2>
            <h3 class='mb-3'>{{ job }}</h3>

            <span class='inline-flex space-x-4'>
        <NuxtLink v-show='twitter !== null' :to="'https://twitter.com/' + twitter" target='_blank'>
          <Icon-lucide-twitter
              class='h-6 w-6 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110' />
        </NuxtLink>
        <NuxtLink v-show='discord !== null' :to="'https://discordapp.com/users/' + discord" target='_blank'>
          <Icon-ic-round-discord
              class='h-6 w-6 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110' />
        </NuxtLink>
        <NuxtLink v-show='github !== null' :to="'https://github.com/' + github" target='_blank'>
          <Icon-lucide-github
              class='h-6 w-6 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110' />
        </NuxtLink>
      </span>
          </div>
        </div>
      </div>
      </div>
  </section>
</template>

<script lang='ts' setup>

definePageMeta({ layout: 'static' })

</script>
