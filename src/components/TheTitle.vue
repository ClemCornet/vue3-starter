<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <h1 class="text-4xl font-bold text-gray-800">{{ msg }}</h1>
</template>
