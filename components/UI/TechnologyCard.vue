<template>
  <div class="flex flex-col items-center gap-2 border border-gray-700 rounded-lg bg-white p-4 shadow-sm transition-colors dark:bg-gray-800">
    <slot></slot>
    <span class="text-sm font-medium">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    label: {
      type: String,
      required: true,
    },
  })
</script>
