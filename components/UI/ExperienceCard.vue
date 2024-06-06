<template>
  <div class="w-full h-auto rounded-b bg-white dark:bg-gray-950">
    <div class="flex flex-col items-center justify-center gap-4 p-4 bg-gray-100 border border-b-0 dark:bg-gray-800 dark:border-0 rounded-t">
      <img :src="`/img/${imagePath}`" :alt="`${ companyName } Logo`" class="rounded-md w-[48px] h-[48px]" />
      <div class="flex flex-col items-center justify-center">
        <span class="text-xl font-bold">{{ position }}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{ companyName }} ({{ period }})</span>
      </div>
    </div>
    <div class="p-4">
      <p class="text-sm text-gray-700 leading-7 text-justify dark:text-gray-400">
        <slot name="text"></slot>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface IProps {
    imagePath: string,
    position: string,
    companyName: string,
    period: string,
  }

  withDefaults(defineProps<IProps>(),{})
</script>
