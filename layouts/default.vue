<template>
  <div class="grid min-h-screen w-full lg:grid-cols-[256px_1fr] bg-gray-100 dark:bg-gray-900 dark:text-white">
  <Sidebar />
  <div class="flex min-h-screen">
    <main class="flex-1">
      <Home />
      <Technologies />
      <Experience />
      <section id="projects" class="bg-gray-200 py-12 px-4 md:px-8 lg:py-16 dark:bg-gray-800">
        <div class="mx-auto max-w-3xl">
          <h2 class="text-2xl font-bold md:text-3xl">Projects</h2>
          <p>Here are some of the projects I've worked on:</p>
          <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="rounded-md bg-white p-4 shadow-md dark:bg-gray-700">
              <img src="" alt="Project 1" class="h-40 w-full rounded-md object-cover" />
              <h3 class="mt-4 text-lg font-medium">Project 1</h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                A responsive web application built with React and Tailwind CSS.
              </p>
              <div class="mt-4 flex justify-end">
                <a
                    href="#"
                    class="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500"
                >
                  View Project
                </a>
              </div>
            </div>
            <div class="rounded-md bg-white p-4 shadow-md dark:bg-gray-700">
              <img src="" alt="Project 2" class="h-40 w-full rounded-md object-cover" />
              <h3 class="mt-4 text-lg font-medium">Project 2</h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                A full-stack web application built with Node.js, Express, and MongoDB.
              </p>
              <div class="mt-4 flex justify-end">
                <a
                    href="#"
                    class="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  </div>
  </div>
</template>

<script setup lang="ts">
  import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
  import { faGithub, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

  const year = new Date().getFullYear();
</script>