<template>
  <div class="grid min-h-screen w-full lg:grid-cols-[256px_1fr] bg-gray-100 dark:bg-gray-900 dark:text-white">
  <Sidebar />
  <div class="flex min-h-screen">
    <main class="flex-1">
      <Home />
      <section id="technologies" class="bg-gray-200 py-12 px-4 md:px-8 lg:py-16 dark:bg-gray-800">
        <div class="mx-auto max-w-3xl">
          <h2 class="text-2xl font-bold md:text-3xl">Technologies</h2>
          <div class="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            <div class="rounded-md bg-white p-4 shadow-md dark:bg-gray-700">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-8 w-8"
              >
                <circle cx="12" cy="17" r="1"></circle>
                <path d="M21 7v6h-6"></path>
                <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"></path>
              </svg>
              <h3 class="mt-2 text-lg font-medium">React</h3>
              <p class="mt-1 text-gray-600 dark:text-gray-400">JavaScript library for building user interfaces</p>
            </div>
            <div class="rounded-md bg-white p-4 shadow-md dark:bg-gray-700">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-8 w-8"
              >
                <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
                <path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
                <path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
              </svg>
              <h3 class="mt-2 text-lg font-medium">Tailwind CSS</h3>
              <p class="mt-1 text-gray-600 dark:text-gray-400">
                Utility-first CSS framework for rapid UI development
              </p>
            </div>
            <div class="rounded-md bg-white p-4 shadow-md dark:bg-gray-700">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-8 w-8"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"></path>
                <path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"></path>
              </svg>
              <h3 class="mt-2 text-lg font-medium">Node.js</h3>
              <p class="mt-1 text-gray-600 dark:text-gray-400">JavaScript runtime for server-side development</p>
            </div>
            <div class="rounded-md bg-white p-4 shadow-md dark:bg-gray-700">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-8 w-8"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                <path d="M3 12A9 3 0 0 0 21 12"></path>
              </svg>
              <h3 class="mt-2 text-lg font-medium">MongoDB</h3>
              <p class="mt-1 text-gray-600 dark:text-gray-400">NoSQL database for storing and managing data</p>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" class="py-12 px-4 md:px-8 lg:py-16">
        <div class="mx-auto max-w-3xl">
          <h2 class="text-2xl font-bold md:text-3xl">Experience</h2>
          <div class="mt-8 space-y-8">
            <div>
              <h3 class="text-lg font-medium">Front-End Developer, Acme Inc.</h3>
              <p class="mt-1 text-gray-600 dark:text-gray-400">June 2020 - Present</p>
              <ul class="mt-4 list-disc space-y-2 pl-4 text-gray-600 dark:text-gray-400">
                <li>
                  Developed and maintained responsive web applications using React, Tailwind CSS, and other modern
                  front-end technologies.
                </li>
                <li>Collaborated with cross-functional teams to design and implement user-friendly interfaces.</li>
                <li>Optimized web applications for performance and accessibility.</li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-medium">Intern, Web Development Agency</h3>
              <p class="mt-1 text-gray-600 dark:text-gray-400">May 2019 - August 2019</p>
              <ul class="mt-4 list-disc space-y-2 pl-4 text-gray-600 dark:text-gray-400">
                <li>
                  Assisted in the development and maintenance of client websites using HTML, CSS, and JavaScript.
                </li>
                <li>Participated in daily stand-ups and team meetings to discuss project progress and challenges.</li>
                <li>Gained experience in version control, project management, and client communication.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" class="bg-gray-200 py-12 px-4 md:px-8 lg:py-16 dark:bg-gray-800">
        <div class="mx-auto max-w-3xl">
          <h2 class="text-2xl font-bold md:text-3xl">Projects</h2>
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
      <section id="contact" class="py-12 px-4 md:px-8 lg:py-16">
        <div class="mx-auto max-w-3xl">
          <h2 class="text-2xl font-bold md:text-3xl">Contact</h2>
          <form class="mt-8 space-y-6">
            <div>
              <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="name"
              >
                Name
              </label>
              <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="name"
                  required=""
                  type="text"
              />
            </div>
            <div>
              <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
              >
                Email
              </label>
              <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  required=""
                  type="email"
              />
            </div>
            <div>
              <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="message"
              >
                Message
              </label>
              <textarea class="flex w-full h-auto rounded-md dark:text-black px-3 py-2"></textarea>
            </div>
          </form>
        </div>
      </section>
    </main>
  </div>
  </div>
</template>

<script setup lang="ts">
  import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
  import { faGithub, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

  const year = new Date().getFullYear();
</script>