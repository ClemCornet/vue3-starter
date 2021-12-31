<script setup lang="ts">
import TheTitle from '@/components/TheTitle.vue'
</script>

<template>
  <div class="container mx-auto flex flex-col">
    <div class="mt-6 self-end inline-flex rounded-md shadow">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-700 border border-transparent rounded-md hover:bg-gray-600 focus:outline-none"
      >
        Home >
      </router-link>
    </div>
    <the-title class="mt-16 self-center" msg="Starter Vue + Vite + Tailwind" />
  </div>
</template>
