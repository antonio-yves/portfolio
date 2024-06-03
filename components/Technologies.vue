<template>
  <section id="technologies" class="py-12 px-4 bg-gray-200 md:py-16 lg:py-32 md:px-6 lg:px-20 dark:bg-gray-800">
    <div class="container mx-auto">
      <div class="space-y-4">
        <h2 class="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl">Technologies</h2>
        <p class="text-gray-500 text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          I'm proficient in a wide range of technologies and tools to build robust and scalable web
          applications.
        </p>
      </div>
      <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <UITechnologyCard label="Python">
          <SimpleIconsPython class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="Django">
          <SimpleIconsDjango class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="FastAPI">
          <SimpleIconsFastAPI class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="Flask">
          <SimpleIconsFlask class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="Celery">
          <SimpleIconsCelery class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="PostgreSQL">
          <SimpleIconsPostgreSQL class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="Oracle Database">
          <SimpleIconsOracleDatabase class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="MongoDB">
          <SimpleIconsMongoDB class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="Redis">
          <SimpleIconsRedis class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="Spring">
          <SimpleIconsSpring class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="JavaScript">
          <SimpleIconsJavaScript class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="Vue.js">
          <SimpleIconsVueJS class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="Node.js">
          <SimpleIconsNodeJS class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="Nuxt.js">
          <SimpleIconsNuxtJS class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="jQuery">
          <SimpleIconsJQuery class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="Bootstrap">
          <SimpleIconsBootstrap class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="Tailwind CSS">
          <SimpleIconsTailwindCSS class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="Docker">
          <SimpleIconsDocker class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="AWS">
          <SimpleIconsAWS class="w-8 h-8 fill-white" />
        </UITechnologyCard>
        <UITechnologyCard label="Google Cloud">
          <SimpleIconsGoogleCloud class="w-8 h-8 fill-white" />
        </UITechnologyCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>
