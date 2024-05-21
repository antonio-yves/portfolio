<template>
  <div class="flex h-screen bg-default">
    <div class="flex flex-col m-auto justify-center items-center p-8">
      <img src="~/assets/img/logo-white.svg" alt="logo" class="h-12 mb-8"/>
      <p class="font-spacegrotesk text-xl font-medium text-gray-300 text-center">I'm working hard to bring you something
        awesome. Stay tuned!</p>
      <div class="mt-8">
        <a href="https://www.instagram.com/yvessousa"
           class="text-white text-3xl px-4 transition duration-700 hover:text-neutral-500" target="_blank">
          <FontAwesomeIcon :icon="faInstagram"/>
        </a>
        <a href="https://linkedin.com/in/antonio-yves"
           class="text-white text-3xl px-4 transition duration-700 hover:text-neutral-500" target="_blank">
          <FontAwesomeIcon :icon="faLinkedinIn"/>
        </a>
        <a href="https://github.com/antonio-yves"
           class="text-white text-3xl px-4 transition duration-700 hover:text-neutral-500" target="_blank">
          <FontAwesomeIcon :icon="faGithub"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {faGithub, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

definePageMeta({
  name: "coming-soon",
});
</script>