<template>
  <section id="home" class="flex items-center justify-center py-12 lg:py-32">
    <div class="px-4 md:px-6 lg:container">
      <div class="flex flex-col space-y-8 gap-x-16 lg:flex-row">
        <div class="flex items-center justify-center">
          <img src="~/assets/img/antonio-yves.jpg" alt="Antonio Yves"
               class="rounded-full" width="300" height="300" />
        </div>
        <div class="space-y-4">
          <h1 class="text-4xl font-bold text-center tracking-tight sm:text-5xl md:text-6xl lg:text-left">
            Hi, I'm Antonio Yves
          </h1>
          <p class="text-lg text-center text-balance text-gray-500 dark:text-gray-400 lg:text-left lg:text-wrap">
            I'm a passionate full-stack developer with a strong background in web technologies. I love building innovative and user-friendly applications that solve real-world problems.
          </p>
          <div class="flex gap-4 items-center justify-center lg:items-start lg:justify-normal">
            <a href="pdf/Resume_Antonio_Yves.pdf" target="_blank" class="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
              View Resume
            </a>
            <a href="mailto:me@antonioyves.dev" class="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-6 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>