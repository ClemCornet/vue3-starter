<template>
  <header class="h-16 flex items-center bg-gray-200">
    <span v-if="$route.meta.title" class="pl-4 text-2xl text-gray-700 font-bold">
      {{ $route.meta.title }}
    </span>
  </header>
</template>
