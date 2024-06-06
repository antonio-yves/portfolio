<template>
  <SpeedInsights/>
  <div class="grid min-h-screen w-full lg:grid-cols-[256px_1fr] bg-gray-100 dark:bg-gray-900 dark:text-white">
  <Sidebar />
  <div class="flex min-h-screen">
    <main class="flex-1">
      <Home />
      <Technologies />
      <Experience />
<!--      <Projects />-->
<!--      <Contact />-->
    </main>
  </div>
  </div>
</template>

<script setup lang="ts">
  import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>