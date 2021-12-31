<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <the-header />
    <main class="w-screen flex grow">
      <router-view />
    </main>
    <the-footer />
  </div>
</template>
