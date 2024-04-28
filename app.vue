<template>
  <div class="w-full h-full bg-default">
    <header class="max-w-7xl mx-auto h-40 flex items-center justify-between">
      <img src="~/assets/img/logo-white.svg" alt="logo">

      <nav class="font-spacegrotesk text-2xl text-white">
        <ul class="group flex items-center">
          <li class="px-4 hover:!text-white group-hover:text-neutral-500"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="px-4 hover:!text-white group-hover:text-neutral-500"><NuxtLink to="portfolio">Portfolio</NuxtLink></li>
          <li class="px-4 hover:!text-white group-hover:text-neutral-500"><NuxtLink to="about">About</NuxtLink></li>
          <li class="px-4 hover:!text-white group-hover:text-neutral-500"><NuxtLink to="contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main class="max-w-7xl mx-auto">
      <NuxtPage></NuxtPage>
    </main>

    <footer class="w-full h-full border-t border-neutral-400">
      <div class="max-w-7xl mx-auto flex items-center justify-between border-b border-neutral-400 py-32">
        <div class="flex flex-col">
          <div class="flex items-center mb-10">
            <img class="w-32 h-32 rounded-full" src="~/assets/img/antonio-yves.jpg" alt="Antonio Yves">
            <div class="flex flex-col px-8">
              <span class="text-white text-4xl font-bold font-spacegrotesk mb-1">Antonio Yves</span>
              <span class="text-xl font-spacegrotesk text-neutral-500 font-medium">Full Stack Developer</span>
            </div>
          </div>
          <div>
            <a href="https://github.com/antonio-yves" class="text-white text-3xl px-2" target="_blank">
              <FontAwesomeIcon :icon="faInstagram" />
            </a>
            <a href="https://github.com/antonio-yves" class="text-white text-3xl px-2" target="_blank">
              <FontAwesomeIcon :icon="faLinkedinIn" />
            </a>
            <a href="https://github.com/antonio-yves" class="text-white text-3xl px-2" target="_blank">
              <FontAwesomeIcon :icon="faGithub" />
            </a>
          </div>
        </div>
        <div class="flex items-center font-spacegrotesk">
          <div class="flex flex-col px-8">
            <span class="text-xl text-neutral-500 font-medium tracking-wide uppercase mb-2">E-mail me:</span>
            <a href="mailto:contact@antonioyves.dev" class="text-2xl text-white font-bold">contact@antonioyves.dev</a>
          </div>
          <div class="flex flex-col">
            <span class="text-xl text-neutral-500 font-medium tracking-wide uppercase mb-2">Call me:</span>
            <a href="tel:+5583994082241" class="text-white text-2xl font-bold">+55 (83) 99408-2241</a>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto flex justify-center py-4">
        <span class="font-spacegrotesk text-white text-md">Copyright &copy; {{ year }} Antonio Yves</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
  import { faGithub, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

  const year = new Date().getFullYear();
</script>