<template>
  <section id="contact" class="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto space-y-6">
      <div class="space-y-4">
        <h2 class="text-3xl font-bold tracking-tight">Contact</h2>
        <p class="text-lg text-gray-500 dark:text-gray-400">
          Get in touch with me for any inquiries or collaboration opportunities.
        </p>
      </div>
      <form class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Enter your name" />
          </div>
          <div class="space-y-2">
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" />
          </div>
        </div>
        <div class="space-y-2 mt-6">
          <label for="message">Message</label>
          <textarea id="message" rows="5" placeholder="Enter your message" />
        </div>
        <div class="mt-6">
          <button type="submit" class="w-full bg-default py-2 rounded-md">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>
